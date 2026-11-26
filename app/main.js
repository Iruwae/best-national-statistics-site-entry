// Router and controls. Hash routes: #/ , #/population, #/economy, #/employment,
// #/poverty, #/health, #/education, #/regions, #/sources. The economy page keeps its
// chart choice in a query-style suffix: #/economy?metric=inflation.

import { ROUTES } from './views.js';
import { PROVINCES } from './data.js';

const view = document.getElementById('view');
const navLinks = Array.from(document.querySelectorAll('nav.mainnav a'));

function parseHash() {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [path, query] = raw.split('?');
  const params = new URLSearchParams(query || '');
  return { route: path || '', metric: params.get('metric') || 'growth' };
}

function render() {
  const { route, metric } = parseHash();
  const fn = ROUTES[route] || ROUTES[''];
  view.innerHTML = fn(metric);
  for (const link of navLinks) {
    link.classList.toggle('active', (link.dataset.route || '') === route);
  }
  window.scrollTo(0, 0);
  if (route === 'regions') initRegions();
  if (route === 'economy') initEconomyTabs(metric);
}

function fmtInt(n) {
  return n.toLocaleString('en-US');
}

function regionRows(rows) {
  return rows.map((p) =>
    `<tr><td>${p.name}</td><td>${p.capital}</td><td>${p.island}</td>`
    + `<td class="num">${fmtInt(p.pop)}</td><td class="num">${fmtInt(p.density)}</td></tr>`).join('');
}

function initRegions() {
  const body = document.getElementById('region-body');
  const search = document.getElementById('region-search');
  const count = document.getElementById('region-count');
  const table = document.getElementById('region-table');
  let rows = [...PROVINCES];
  let sortKey = 'pop';
  let sortDir = -1;
  let query = '';

  function apply() {
    let out = rows.filter((p) => p.name.toLowerCase().includes(query)
      || p.capital.toLowerCase().includes(query)
      || p.island.toLowerCase().includes(query));
    out.sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey];
      const cmp = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv));
      return cmp * sortDir;
    });
    body.innerHTML = regionRows(out);
    count.textContent = out.length === PROVINCES.length
      ? `${out.length} provinces`
      : `${out.length} of ${PROVINCES.length} provinces`;
  }

  table.querySelectorAll('th.sortable').forEach((th) => {
    th.addEventListener('click', () => {
      const key = th.dataset.key;
      if (sortKey === key) sortDir = -sortDir;
      else { sortKey = key; sortDir = key === 'name' || key === 'capital' || key === 'island' ? 1 : -1; }
      apply();
    });
  });
  search.addEventListener('input', () => { query = search.value.trim().toLowerCase(); apply(); });
  apply();
}

function initEconomyTabs(metric) {
  const buttons = Array.from(document.querySelectorAll('.tabs button[data-metric]'));
  for (const btn of buttons) {
    btn.addEventListener('click', () => {
      const next = btn.dataset.metric;
      if (next !== metric) window.location.hash = `#/economy?metric=${next}`;
    });
  }
}

window.addEventListener('hashchange', render);
render();
