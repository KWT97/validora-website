// Validora static landing page JavaScript
// Keep this file lightweight so the site works on GitHub Pages, Vercel, Netlify, or any static host.

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('[data-current-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
