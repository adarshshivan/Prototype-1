# Personal Finance Hub

A single-page, responsive web app for tracking your personal finances locally in the browser. Data is stored in `localStorage` only on your machine.

## Features

- **Overview**: See total net worth, this months income, and this months expenses at a glance.
- **Net Worth**: Add assets and liabilities; net worth is calculated automatically.
- **Portfolio**: Track holdings (stocks, mutual funds, ETFs, crypto, etc.) with allocation by type and total value.
- **Monthly Statements**: Log income and expenses as transactions, filter by month, and see summary (income, expenses, savings, savings rate).
- **Weekly Statements**: Aggregated weekly income, expenses, and net amount derived from your transactions.
- **Settings**:
  - Change display currency for formatting.
  - Export all data to a JSON backup file.
  - Import data from a previous backup.
  - Optional goals for net worth and monthly savings, with a simple progress summary.

## Running the app

This is a static site: open `index.html` in a browser.

On Windows (PowerShell), you can also serve it locally with a simple HTTP server if you prefer:

```powershell
cd "c:\Users\adars\Adi personal\Projects\Prototype 1"
python -m http.server 8000
```

Then open: http://localhost:8000/

## Data and privacy

All information is stored only in your browser `localStorage` under keys starting with `pfh_`. To reset everything, clear site data for this origin in your browser or open DevTools and clear `localStorage` entries.
