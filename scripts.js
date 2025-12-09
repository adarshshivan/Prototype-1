// scripts.js — Personal Finance Hub logic

document.addEventListener('DOMContentLoaded', () => {
  const currencySelect = document.getElementById('currencySelect');
  const todayDateEl = document.getElementById('todayDate');

  const state = {
    currency: localStorage.getItem('pfh_currency') || 'INR',
    assets: readJSON('pfh_assets', []),
    liabilities: readJSON('pfh_liabilities', []),
    holdings: readJSON('pfh_holdings', []),
    transactions: readJSON('pfh_transactions', []),
    goals: readJSON('pfh_goals', { netWorth: null, monthlySavings: null }),
  };

  function readJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return Array.isArray(fallback) && !Array.isArray(parsed) ? fallback : parsed;
    } catch (e) {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function fmt(amount) {
    if (amount === null || amount === undefined || isNaN(amount)) return '--';
    const opts = { style: 'currency', currency: state.currency, maximumFractionDigits: 2 };
    try {
      return new Intl.NumberFormat(undefined, opts).format(amount);
    } catch {
      return amount.toFixed(2);
    }
  }

  function setToday() {
    if (!todayDateEl) return;
    const now = new Date();
    todayDateEl.textContent = now.toLocaleDateString(undefined, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  function initCurrency() {
    if (!currencySelect) return;
    currencySelect.value = state.currency;
    currencySelect.addEventListener('change', () => {
      state.currency = currencySelect.value;
      localStorage.setItem('pfh_currency', state.currency);
      refreshAll();
    });
  }

  // Tab navigation
  function initTabs() {
    const tabs = Array.from(document.querySelectorAll('.nav-tab'));
    const panels = Array.from(document.querySelectorAll('.tab-panel'));
    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        if (!target) return;

        tabs.forEach((t) => t.classList.remove('active'));
        panels.forEach((p) => p.classList.remove('active'));

        tab.classList.add('active');
        const panel = document.getElementById(`tab-${target}`);
        if (panel) panel.classList.add('active');
      });
    });
  }

  // Helpers for IDs
  function createId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  // Net worth render
  function renderNetWorth() {
    const nwAssetsEl = document.getElementById('nwAssets');
    const nwLiabilitiesEl = document.getElementById('nwLiabilities');
    const nwNetWorthEl = document.getElementById('nwNetWorth');
    const assetTBody = document.getElementById('assetTableBody');
    const liabilityTBody = document.getElementById('liabilityTableBody');

    const totalAssets = state.assets.reduce((sum, a) => sum + (Number(a.value) || 0), 0);
    const totalLiabilities = state.liabilities.reduce((sum, l) => sum + (Number(l.value) || 0), 0);
    const netWorth = totalAssets - totalLiabilities;

    if (nwAssetsEl) nwAssetsEl.textContent = fmt(totalAssets);
    if (nwLiabilitiesEl) nwLiabilitiesEl.textContent = fmt(totalLiabilities);
    if (nwNetWorthEl) nwNetWorthEl.textContent = fmt(netWorth);

    if (assetTBody) {
      assetTBody.innerHTML = '';
      state.assets.forEach((asset) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${asset.name}</td>
          <td>${asset.category}</td>
          <td class="num">${fmt(Number(asset.value) || 0)}</td>
          <td><button class="btn-ghost" data-remove-asset="${asset.id}">Remove</button></td>
        `;
        assetTBody.appendChild(tr);
      });
    }

    if (liabilityTBody) {
      liabilityTBody.innerHTML = '';
      state.liabilities.forEach((liab) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${liab.name}</td>
          <td>${liab.category}</td>
          <td class="num">${fmt(Number(liab.value) || 0)}</td>
          <td><button class="btn-ghost" data-remove-liability="${liab.id}">Remove</button></td>
        `;
        liabilityTBody.appendChild(tr);
      });
    }
  }

  // Portfolio render
  function renderPortfolio() {
    const totalEl = document.getElementById('portfolioTotal');
    const tbody = document.getElementById('holdingTableBody');
    const allocationList = document.getElementById('allocationList');

    let total = 0;
    const byType = {};
    state.holdings.forEach((h) => {
      const units = Number(h.units) || 0;
      const price = Number(h.price) || 0;
      const value = units * price;
      total += value;
      const k = h.type || 'other';
      byType[k] = (byType[k] || 0) + value;
    });

    if (totalEl) totalEl.textContent = fmt(total);

    if (tbody) {
      tbody.innerHTML = '';
      state.holdings.forEach((h) => {
        const units = Number(h.units) || 0;
        const price = Number(h.price) || 0;
        const value = units * price;
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${h.name}</td>
          <td>${h.type}</td>
          <td class="num">${units}</td>
          <td class="num">${fmt(price)}</td>
          <td class="num">${fmt(value)}</td>
          <td><button class="btn-ghost" data-remove-holding="${h.id}">Remove</button></td>
        `;
        tbody.appendChild(tr);
      });
    }

    if (allocationList) {
      allocationList.innerHTML = '';
      const entries = Object.entries(byType);
      entries.sort((a, b) => b[1] - a[1]);
      entries.forEach(([type, value]) => {
        const li = document.createElement('li');
        const pct = total ? Math.round((value / total) * 100) : 0;
        li.innerHTML = `
          <span class="no-wrap">${type}</span>
          <div class="allocation-bar"><span style="width:${pct}%"></span></div>
          <span class="no-wrap">${pct}%</span>
        `;
        allocationList.appendChild(li);
      });
    }
  }

  // Transactions helpers
  function parseDate(value) {
    const d = value ? new Date(value) : null;
    return isNaN(d) ? null : d;
  }

  function getYearMonthKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  }

  function getYearWeekKey(date) {
    const tmp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = tmp.getUTCDay() || 7;
    tmp.setUTCDate(tmp.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(tmp.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((tmp - yearStart) / 86400000 + 1) / 7);
    return `${tmp.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
  }

  function currentMonthKey() {
    const now = new Date();
    return getYearMonthKey(now);
  }

  function renderOverviewAndMonthly() {
    const overviewNetWorthEl = document.getElementById('overviewNetWorth');
    const overviewIncomeEl = document.getElementById('overviewIncome');
    const overviewExpensesEl = document.getElementById('overviewExpenses');

    const monthIncomeEl = document.getElementById('monthIncome');
    const monthExpensesEl = document.getElementById('monthExpenses');
    const monthSavingsEl = document.getElementById('monthSavings');
    const monthSavingsRateEl = document.getElementById('monthSavingsRate');
    const monthlyTableBody = document.getElementById('monthlyTableBody');
    const monthlyFilter = document.getElementById('monthlyFilter');

    const totalAssets = state.assets.reduce((s, a) => s + (Number(a.value) || 0), 0);
    const totalLiabilities = state.liabilities.reduce((s, l) => s + (Number(l.value) || 0), 0);
    const netWorth = totalAssets - totalLiabilities;
    if (overviewNetWorthEl) overviewNetWorthEl.textContent = fmt(netWorth);

    const filterVal = monthlyFilter && monthlyFilter.value ? monthlyFilter.value : currentMonthKey();
    if (monthlyFilter && !monthlyFilter.value) {
      monthlyFilter.value = filterVal;
    }

    let income = 0;
    let expenses = 0;
    const rows = [];

    state.transactions.forEach((tr) => {
      const d = parseDate(tr.date);
      if (!d) return;
      if (getYearMonthKey(d) !== filterVal) return;
      const amount = Number(tr.amount) || 0;
      if (tr.type === 'income') income += amount;
      else expenses += amount;
      rows.push({ ...tr, dateObj: d });
    });

    if (overviewIncomeEl) overviewIncomeEl.textContent = fmt(income);
    if (overviewExpensesEl) overviewExpensesEl.textContent = fmt(expenses);

    if (monthIncomeEl) monthIncomeEl.textContent = fmt(income);
    if (monthExpensesEl) monthExpensesEl.textContent = fmt(expenses);
    const savings = income - expenses;
    if (monthSavingsEl) monthSavingsEl.textContent = fmt(savings);
    const rate = income > 0 ? Math.round((savings / income) * 100) : 0;
    if (monthSavingsRateEl) monthSavingsRateEl.textContent = `${rate}%`;

    if (monthlyTableBody) {
      rows.sort((a, b) => a.dateObj - b.dateObj);
      monthlyTableBody.innerHTML = '';
      rows.forEach((tr) => {
        const trEl = document.createElement('tr');
        trEl.innerHTML = `
          <td>${new Date(tr.date).toLocaleDateString()}</td>
          <td>${tr.type}</td>
          <td>${tr.category || ''}</td>
          <td>${tr.description || ''}</td>
          <td class="num">${fmt(Number(tr.amount) || 0)}</td>
          <td><button class="btn-ghost" data-remove-transaction="${tr.id}">Remove</button></td>
        `;
        monthlyTableBody.appendChild(trEl);
      });
    }
  }

  function renderWeekly() {
    const tbody = document.getElementById('weeklyTableBody');
    if (!tbody) return;
    const byWeek = {};
    state.transactions.forEach((tr) => {
      const d = parseDate(tr.date);
      if (!d) return;
      const key = getYearWeekKey(d);
      if (!byWeek[key]) byWeek[key] = { income: 0, expenses: 0 };
      const amount = Number(tr.amount) || 0;
      if (tr.type === 'income') byWeek[key].income += amount;
      else byWeek[key].expenses += amount;
    });

    const entries = Object.entries(byWeek).sort((a, b) => (a[0] > b[0] ? 1 : -1));
    tbody.innerHTML = '';
    entries.forEach(([week, { income, expenses }]) => {
      const net = income - expenses;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${week}</td>
        <td class="num">${fmt(income)}</td>
        <td class="num">${fmt(expenses)}</td>
        <td class="num">${fmt(net)}</td>
      `;
      tbody.appendChild(tr);
    });
  }

  function renderGoals() {
    const goalNetWorthInput = document.getElementById('goalNetWorth');
    const goalMonthlySavingsInput = document.getElementById('goalMonthlySavings');
    const progressEl = document.getElementById('goalProgress');

    if (goalNetWorthInput) goalNetWorthInput.value = state.goals.netWorth ?? '';
    if (goalMonthlySavingsInput) goalMonthlySavingsInput.value = state.goals.monthlySavings ?? '';

    if (!progressEl) return;
    const totalAssets = state.assets.reduce((s, a) => s + (Number(a.value) || 0), 0);
    const totalLiabilities = state.liabilities.reduce((s, l) => s + (Number(l.value) || 0), 0);
    const netWorth = totalAssets - totalLiabilities;

    const monthIncomeEl = document.getElementById('monthIncome');
    const monthSavingsEl = document.getElementById('monthSavings');
    const parsedIncome = monthIncomeEl ? monthIncomeEl.textContent : '';
    const parsedSavings = monthSavingsEl ? monthSavingsEl.textContent : '';

    const nwGoal = Number(state.goals.netWorth) || null;
    const msGoal = Number(state.goals.monthlySavings) || null;

    const pieces = [];
    if (nwGoal && nwGoal > 0) {
      const pct = Math.max(0, Math.min(100, Math.round((netWorth / nwGoal) * 100)));
      pieces.push(`Net worth: ${fmt(netWorth)} of ${fmt(nwGoal)} (${pct}%)`);
    }
    if (msGoal && msGoal > 0 && parsedSavings) {
      pieces.push(`Monthly savings target: ${fmt(msGoal)} (current ${parsedSavings || 'N/A'})`);
    }

    progressEl.textContent = pieces.length ? pieces.join(' · ') : 'Set goals to see your progress summary here.';
  }

  function refreshAll() {
    renderNetWorth();
    renderPortfolio();
    renderOverviewAndMonthly();
    renderWeekly();
    renderGoals();
  }

  // Forms & events
  function initNetWorthForms() {
    const assetForm = document.getElementById('assetForm');
    const liabilityForm = document.getElementById('liabilityForm');
    const assetTBody = document.getElementById('assetTableBody');
    const liabilityTBody = document.getElementById('liabilityTableBody');

    if (assetForm) {
      assetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('assetName').value.trim();
        const category = document.getElementById('assetCategory').value;
        const value = Number(document.getElementById('assetValue').value);
        if (!name || isNaN(value)) return;
        state.assets.push({ id: createId(), name, category, value });
        saveJSON('pfh_assets', state.assets);
        assetForm.reset();
        refreshAll();
      });
    }

    if (liabilityForm) {
      liabilityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('liabilityName').value.trim();
        const category = document.getElementById('liabilityCategory').value;
        const value = Number(document.getElementById('liabilityValue').value);
        if (!name || isNaN(value)) return;
        state.liabilities.push({ id: createId(), name, category, value });
        saveJSON('pfh_liabilities', state.liabilities);
        liabilityForm.reset();
        refreshAll();
      });
    }

    if (assetTBody) {
      assetTBody.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-remove-asset]');
        if (!btn) return;
        const id = btn.getAttribute('data-remove-asset');
        state.assets = state.assets.filter((a) => a.id !== id);
        saveJSON('pfh_assets', state.assets);
        refreshAll();
      });
    }

    if (liabilityTBody) {
      liabilityTBody.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-remove-liability]');
        if (!btn) return;
        const id = btn.getAttribute('data-remove-liability');
        state.liabilities = state.liabilities.filter((l) => l.id !== id);
        saveJSON('pfh_liabilities', state.liabilities);
        refreshAll();
      });
    }
  }

  function initPortfolioForm() {
    const holdingForm = document.getElementById('holdingForm');
    const holdingTBody = document.getElementById('holdingTableBody');
    if (holdingForm) {
      holdingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('holdingName').value.trim();
        const type = document.getElementById('holdingType').value;
        const units = Number(document.getElementById('holdingUnits').value);
        const price = Number(document.getElementById('holdingPrice').value);
        if (!name || isNaN(units) || isNaN(price)) return;
        state.holdings.push({ id: createId(), name, type, units, price });
        saveJSON('pfh_holdings', state.holdings);
        holdingForm.reset();
        refreshAll();
      });
    }

    if (holdingTBody) {
      holdingTBody.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-remove-holding]');
        if (!btn) return;
        const id = btn.getAttribute('data-remove-holding');
        state.holdings = state.holdings.filter((h) => h.id !== id);
        saveJSON('pfh_holdings', state.holdings);
        refreshAll();
      });
    }
  }

  function initTransactionForms() {
    const quickForm = document.getElementById('quickTransactionForm');
    const fullForm = document.getElementById('transactionForm');
    const monthlyFilter = document.getElementById('monthlyFilter');
    const monthlyTableBody = document.getElementById('monthlyTableBody');

    function addTransaction(from) {
      const date = from.querySelector('input[type="date"]').value;
      const type = from.querySelector('select').value;
      const category = from.querySelector('input[id$="Category"]').value.trim();
      const description = from.querySelector('input[id$="Description"]').value.trim();
      const amountInput = from.querySelector('input[id$="Amount"]');
      const amount = Number(amountInput.value);
      if (!date || !type || isNaN(amount)) return;
      state.transactions.push({ id: createId(), date, type, category, description, amount });
      saveJSON('pfh_transactions', state.transactions);
      from.reset();
      refreshAll();
    }

    if (quickForm) {
      quickForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTransaction(quickForm);
      });
    }

    if (fullForm) {
      fullForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTransaction(fullForm);
      });
    }

    if (monthlyFilter) {
      monthlyFilter.addEventListener('change', () => {
        renderOverviewAndMonthly();
        renderWeekly();
      });
    }

    if (monthlyTableBody) {
      monthlyTableBody.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-remove-transaction]');
        if (!btn) return;
        const id = btn.getAttribute('data-remove-transaction');
        state.transactions = state.transactions.filter((t) => t.id !== id);
        saveJSON('pfh_transactions', state.transactions);
        refreshAll();
      });
    }
  }

  function initBackupAndGoals() {
    const exportBtn = document.getElementById('exportBtn');
    const importInput = document.getElementById('importInput');
    const backupStatus = document.getElementById('backupStatus');
    const goalsForm = document.getElementById('goalsForm');

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const payload = {
          currency: state.currency,
          assets: state.assets,
          liabilities: state.liabilities,
          holdings: state.holdings,
          transactions: state.transactions,
          goals: state.goals,
          exportedAt: new Date().toISOString(),
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'personal-finance-hub-backup.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
        if (backupStatus) backupStatus.textContent = 'Data exported successfully.';
      });
    }

    if (importInput) {
      importInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const data = JSON.parse(ev.target.result);
            state.currency = data.currency || state.currency;
            state.assets = data.assets || [];
            state.liabilities = data.liabilities || [];
            state.holdings = data.holdings || [];
            state.transactions = data.transactions || [];
            state.goals = data.goals || state.goals;
            localStorage.setItem('pfh_currency', state.currency);
            saveJSON('pfh_assets', state.assets);
            saveJSON('pfh_liabilities', state.liabilities);
            saveJSON('pfh_holdings', state.holdings);
            saveJSON('pfh_transactions', state.transactions);
            saveJSON('pfh_goals', state.goals);
            if (currencySelect) currencySelect.value = state.currency;
            refreshAll();
            if (backupStatus) backupStatus.textContent = 'Data imported successfully.';
          } catch (err) {
            if (backupStatus) backupStatus.textContent = 'Import failed: invalid file.';
          }
        };
        reader.readAsText(file);
      });
    }

    if (goalsForm) {
      goalsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const netWorth = Number(document.getElementById('goalNetWorth').value) || null;
        const monthlySavings = Number(document.getElementById('goalMonthlySavings').value) || null;
        state.goals = { netWorth, monthlySavings };
        saveJSON('pfh_goals', state.goals);
        renderGoals();
      });
    }
  }

  // Initialise
  setToday();
  initCurrency();
  initTabs();
  initNetWorthForms();
  initPortfolioForm();
  initTransactionForms();
  initBackupAndGoals();
  refreshAll();
});
