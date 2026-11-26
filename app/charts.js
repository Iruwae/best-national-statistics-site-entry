// Hand-drawn SVG charts. No libraries, no network: every chart is built from the data
// in data.js and rendered as inline SVG, so the first load stays small.

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function niceTicks(min, max, count) {
  const span = max - min || 1;
  const step0 = span / count;
  const mag = Math.pow(10, Math.floor(Math.log10(step0)));
  const norm = step0 / mag;
  const step = (norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10) * mag;
  const start = Math.ceil(min / step) * step;
  const ticks = [];
  for (let v = start; v <= max + step * 0.001; v += step) ticks.push(Math.round(v * 100) / 100);
  return ticks;
}

function chartFrame(width, height, pad) {
  return { w: width, h: height, left: pad.l, right: width - pad.r, top: pad.t, bottom: height - pad.b };
}

export function lineChart(series, opts) {
  const width = 560, height = 300;
  const pad = { l: 52, r: 14, t: 16, b: 34 };
  const f = chartFrame(width, height, pad);
  const xs = series.map((p) => p.year);
  const ys = series.map((p) => p.value);
  let min = Math.min(...ys), max = Math.max(...ys);
  const padY = (max - min) * 0.18 || 1;
  min -= padY; max += padY;
  const xAt = (i) => f.left + (i / (series.length - 1)) * (f.right - f.left);
  const yAt = (v) => f.bottom - ((v - min) / (max - min)) * (f.bottom - f.top);
  const ticks = niceTicks(min, max, 4);
  const color = opts.color || '#0c4a44';
  const fmt = opts.format || ((v) => String(v));
  let out = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(opts.label || 'line chart')}">`;
  for (const t of ticks) {
    const y = yAt(t);
    out += `<line x1="${f.left}" y1="${y.toFixed(1)}" x2="${f.right}" y2="${y.toFixed(1)}" stroke="#e3ddcf" stroke-width="1"/>`;
    out += `<text x="${f.left - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="11" fill="#5a6b66">${esc(fmt(t))}</text>`;
  }
  const points = series.map((p, i) => `${xAt(i).toFixed(1)},${yAt(p.value).toFixed(1)}`).join(' ');
  out += `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
  series.forEach((p, i) => {
    out += `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(p.value).toFixed(1)}" r="3.5" fill="${color}"/>`;
    out += `<text x="${xAt(i).toFixed(1)}" y="${(f.bottom + 18).toFixed(1)}" text-anchor="middle" font-size="11" fill="#5a6b66">${p.year}</text>`;
    if (opts.showValues) {
      out += `<text x="${xAt(i).toFixed(1)}" y="${(yAt(p.value) - 9).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="${color}">${esc(fmt(p.value))}</text>`;
    }
  });
  out += '</svg>';
  return out;
}

export function barChart(series, opts) {
  const width = 560, height = 300;
  const pad = { l: 52, r: 14, t: 16, b: 34 };
  const f = chartFrame(width, height, pad);
  const ys = series.map((p) => p.value);
  let min = Math.min(0, ...ys), max = Math.max(...ys);
  const padY = (max - min) * 0.12 || 1;
  max += padY;
  const yAt = (v) => f.bottom - ((v - min) / (max - min)) * (f.bottom - f.top);
  const ticks = niceTicks(min, max, 4);
  const color = opts.color || '#0c4a44';
  const negColor = opts.negColor || '#b3402e';
  const fmt = opts.format || ((v) => String(v));
  const slot = (f.right - f.left) / series.length;
  const barW = Math.min(34, slot * 0.58);
  let out = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(opts.label || 'bar chart')}">`;
  for (const t of ticks) {
    const y = yAt(t);
    out += `<line x1="${f.left}" y1="${y.toFixed(1)}" x2="${f.right}" y2="${y.toFixed(1)}" stroke="#e3ddcf" stroke-width="1"/>`;
    out += `<text x="${f.left - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="11" fill="#5a6b66">${esc(fmt(t))}</text>`;
  }
  out += `<line x1="${f.left}" y1="${yAt(0).toFixed(1)}" x2="${f.right}" y2="${yAt(0).toFixed(1)}" stroke="#8fa39c" stroke-width="1.5"/>`;
  series.forEach((p, i) => {
    const cx = f.left + slot * (i + 0.5);
    const y0 = yAt(0), y1 = yAt(p.value);
    const top = Math.min(y0, y1), h = Math.abs(y0 - y1);
    const fill = p.value < 0 ? negColor : color;
    out += `<rect x="${(cx - barW / 2).toFixed(1)}" y="${top.toFixed(1)}" width="${barW.toFixed(1)}" height="${Math.max(h, 1.5).toFixed(1)}" rx="2" fill="${fill}"/>`;
    out += `<text x="${cx.toFixed(1)}" y="${(f.bottom + 18).toFixed(1)}" text-anchor="middle" font-size="11" fill="#5a6b66">${p.year}</text>`;
    if (opts.showValues) {
      // Positive labels sit above the bar; negative labels sit above the zero line,
      // clear of the year labels underneath.
      const ly = p.value < 0 ? y0 - 7 : y1 - 7;
      out += `<text x="${cx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="${fill}">${esc(fmt(p.value))}</text>`;
    }
  });
  out += '</svg>';
  return out;
}

export function statList(items) {
  return '<ul class="stat-list">' + items.map((it) => {
    const note = it.note ? `<small>${esc(it.note)}</small>` : '';
    return `<li><span class="stat-name">${esc(it.label)}${note}</span>`
      + `<span class="stat-value">${esc(it.value)}</span></li>`;
  }).join('') + '</ul>';
}

export function citeLine(text) {
  return `<p class="cite">Source: ${esc(text)}</p>`;
}
