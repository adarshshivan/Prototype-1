// scripts.js — minimal behavior to demonstrate connection
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleBtn');
  const msg = document.getElementById('message');

  if (!btn || !msg) return;

  btn.addEventListener('click', () => {
    document.body.classList.toggle('highlight');
    msg.classList.toggle('active');
    console.log('Toggled highlight:', document.body.classList.contains('highlight'));
  });
});
