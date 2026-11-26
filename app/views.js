// One renderer per section. Every renderer returns HTML; main.js drops it into #view.
// Each figure is shown with its value, its source and its year — nothing is uncited.

import {
  SITE, KPIS, POPULATION_SERIES, POPULATION, GDP_GROWTH, INFLATION, ECONOMY,
  UNEMPLOYMENT_SERIES, EMPLOYMENT, POVERTY_SERIES, POVERTY, LIFE_EXPECTANCY,
  STUNTING_SERIES, HEALTH, HDI_SERIES, EDUCATION, PROVINCES, SOURCES,
} from './data.js';
import { lineChart, barChart, statList, citeLine } from './charts.js';

function kpiCards() {
  return '<div class="kpi-grid">' + KPIS.map((k) =>
    `<a class="kpi" href="${k.href}"><span class="kpi-label">${k.label}</span>`
    + `<span class="kpi-value">${k.value}</span>`
    + `<span class="kpi-detail">${k.detail}</span></a>`).join('') + '</div>';
}

function hero() {
  return `<section class="hero-strip"><h1>Indonesia in numbers</h1>`
    + `<p class="lede">The fourth most populous country on earth, the 16th largest economy, and an
      archipelago of 38 provinces — measured, sourced and kept in one place.</p>`
    + `<div class="hero-facts"><div><b>281.6 million</b>people · BPS, 2024</div>`
    + `<div><b>US$1.40 trillion</b>GDP · World Bank, 2024</div>`
    + `<div><b>17,508 islands</b>across three time zones</div>`
    + `<div><b>38 provinces</b>514 regencies &amp; cities · BPS, 2024</div></div></section>`;
}

export function overviewView() {
  return hero() + kpiCards()
    + `<div class="chart-row">`
    + `<section class="chart-card"><h3>Population, 2014–2024</h3>`
    + lineChart(POPULATION_SERIES, { label: 'Population of Indonesia 2014 to 2024, millions', format: (v) => v.toFixed(0), showValues: false })
    + `<p class="chart-note">Millions of people, mid-year estimates. Source: BPS, 2024.</p></section>`
    + `<section class="chart-card"><h3>GDP growth, 2015–2024</h3>`
    + barChart(GDP_GROWTH, { label: 'GDP growth of Indonesia 2015 to 2024, percent', format: (v) => v.toFixed(1), showValues: true })
    + `<p class="chart-note">Real GDP growth, % year on year. The 2020 bar is the COVID-19 contraction. Source: BPS.</p></section>`
    + `</div>`
    + `<h2>At a glance</h2>`
    + `<p class="section-note">The latest headline indicator from each section, with its source and year.</p>`
    + statList([
      { label: 'Population', value: '281.6 million', note: 'BPS, 2024 — 4th largest in the world' },
      { label: 'GDP per capita', value: 'US$4,960', note: 'BPS, 2024 — Rp78.62 million' },
      { label: 'Inflation', value: '1.57%', note: 'BPS, 2024 — lowest since 2020' },
      { label: 'Labour force', value: '152.11 million', note: 'BPS, August 2024' },
      { label: 'People in poverty', value: '24.06 million', note: 'BPS, September 2024 — 8.57% of the population' },
      { label: 'Internet users', value: '229 million', note: 'APJII, 2025 — 80.66% of the population' },
    ])
    + `<div class="callout"><p><b>How to read this site.</b> Every number carries its source and year.
      Trend charts use only figures published by the named body — where a year is missing from the
      official series, the chart skips it rather than guessing.</p></div>`;
}

export function populationView() {
  return `<h1>Population</h1>`
    + `<p class="lede">281.6 million people in 2024 (BPS) — the fourth largest population in the world,
      spread across 17,508 islands and 38 provinces.</p>`
    + `<div class="chart-row">`
    + `<section class="chart-card"><h3>Population, 2014–2024</h3>`
    + lineChart(POPULATION_SERIES, { label: 'Population of Indonesia 2014 to 2024', format: (v) => v.toFixed(0), showValues: true })
    + `<p class="chart-note">Millions, mid-year. Source: BPS, via ESDM Handbook 2024.</p></section>`
    + `<section class="panel"><h3>Key facts</h3>`
    + statList([
      { label: 'Population, 2024', value: '281.6 million', note: 'BPS, 2024' },
      { label: '2020 Census', value: '270,203,917', note: 'BPS, 2020' },
      { label: 'World rank', value: '4th', note: 'BPS / UN, 2024' },
      { label: 'Density', value: '140 / km²', note: 'BPS, 2020 Census' },
      { label: 'Living on Java', value: '56.1%', note: 'BPS, 2020 Census' },
      { label: 'Urban share', value: '57%', note: 'World Bank, 2020' },
      { label: 'Provinces', value: '38', note: 'BPS, 2024' },
      { label: 'Regencies & cities', value: '514', note: 'BPS, 2024' },
    ]) + `</section></div>`
    + `<h2>Where people live</h2>`
    + `<p>Java holds just over half the population on less than 7% of the land. The six provinces
      with more than 10 million people are all named in the regions table; West Java alone, at
      48.27 million in the 2020 Census, has more people than Spain. At the other end, North
      Kalimantan counted 701,814 people in the same census.</p>`
    + citeLine('BPS, Population Census 2020; BPS population estimates 2024.')
    + `<p><a href="#/regions">See the full province table →</a></p>`;
}

export function economyView(metric) {
  const metricKey = metric === 'inflation' ? 'inflation' : 'growth';
  const chart = metricKey === 'inflation'
    ? lineChart(INFLATION, { label: 'Inflation in Indonesia 2015 to 2024, percent', format: (v) => v.toFixed(1), showValues: true, color: '#b97a1a' })
    : barChart(GDP_GROWTH, { label: 'GDP growth of Indonesia 2015 to 2024, percent', format: (v) => v.toFixed(1), showValues: true });
  const chartTitle = metricKey === 'inflation' ? 'Inflation (CPI), 2015–2024' : 'GDP growth, 2015–2024';
  const chartNote = metricKey === 'inflation'
    ? 'Consumer price inflation, % year on year. The 2022 spike followed the fuel-subsidy adjustment; 2024 came in at 1.57%. Source: BPS.'
    : 'Real GDP growth, % year on year. 2020 is the COVID-19 contraction; growth has held near 5% since 2022. Source: BPS.';
  return `<h1>Economy</h1>`
    + `<p class="lede">Southeast Asia's largest economy: US$1.40 trillion in 2024 (World Bank),
      growing 5.03% (BPS), with inflation at 1.57%.</p>`
    + `<div class="tabs" role="group" aria-label="Choose the chart">`
    + `<button data-metric="growth" aria-pressed="${metricKey === 'growth' ? 'true' : 'false'}">GDP growth</button>`
    + `<button data-metric="inflation" aria-pressed="${metricKey === 'inflation' ? 'true' : 'false'}">Inflation</button>`
    + `</div>`
    + `<div class="chart-row">`
    + `<section class="chart-card"><h3>${chartTitle}</h3>${chart}<p class="chart-note">${chartNote}</p></section>`
    + `<section class="panel"><h3>Key figures, 2024</h3>`
    + statList([
      { label: 'GDP (nominal)', value: 'US$1,396 bn', note: 'World Bank, 2024' },
      { label: 'GDP (rupiah)', value: 'Rp22,139 tn', note: 'BPS, 2024' },
      { label: 'GDP per capita', value: 'US$4,960', note: 'BPS, 2024' },
      { label: 'GDP (PPP)', value: 'US$4.67 tn', note: 'World Bank, 2024' },
      { label: 'World rank', value: '16th', note: 'World Bank, 2024' },
      { label: 'FDI inflows', value: 'US$24.2 bn', note: 'World Bank, 2024' },
      { label: 'Rupiah', value: 'Rp15,399 / US$', note: 'Bank Indonesia, end-2024' },
      { label: 'Policy rate', value: '6.00%', note: 'Bank Indonesia, end-2024' },
    ]) + `</section></div>`
    + `<h2>A decade of steady growth</h2>`
    + `<p>Between 2015 and 2019 growth ran between 4.88% and 5.17% every year (BPS). The pandemic
      cut it to −2.07% in 2020 — the first contraction since 1998 — before a rebound to 5.31% in
      2022. Since then it has held just above 5%: 5.05% in 2023 and 5.03% in 2024. Inflation tells
      the other half of the story: 5.51% in 2022, then 2.61% in 2023 and 1.57% in 2024, inside Bank
      Indonesia's 1.5–3.5% target band. GDP per capita reached US$4,960 in 2024 (BPS), up from
      US$4,942 on the World Bank's series.</p>`
    + citeLine('BPS, 2024; World Bank World Development Indicators, 2024; Bank Indonesia, 2024.');
}

export function employmentView() {
  return `<h1>Employment</h1>`
    + `<p class="lede">152.11 million people in the labour force in August 2024 (BPS), 144.64 million
      of them working — and an unemployment rate of 4.91%, the lowest in the series.</p>`
    + `<div class="chart-row">`
    + `<section class="chart-card"><h3>Unemployment rate, 2019–2024</h3>`
    + lineChart(UNEMPLOYMENT_SERIES, { label: 'Open unemployment rate in Indonesia 2019 to 2024, percent', format: (v) => v.toFixed(1), showValues: true })
    + `<p class="chart-note">Open unemployment rate (TPT), % of labour force, August of each year. The 2020 peak is the COVID-19 shock. Source: BPS, Sakernas.</p></section>`
    + `<section class="panel"><h3>Labour force, August 2024</h3>`
    + statList([
      { label: 'Working-age population', value: '215.37 million', note: 'BPS, Aug 2024' },
      { label: 'Labour force', value: '152.11 million', note: 'BPS, Aug 2024' },
      { label: 'Employed', value: '144.64 million', note: 'BPS, Aug 2024' },
      { label: 'Unemployed', value: '7.47 million', note: 'BPS, Aug 2024' },
      { label: 'Unemployment rate', value: '4.91%', note: 'BPS, Aug 2024' },
      { label: 'Average wage', value: 'Rp3.27 jt / month', note: 'BPS, Aug 2024 — employees' },
    ]) + `</section></div>`
    + `<h2>Job quality is the open question</h2>`
    + `<p>Headline unemployment has fallen every year since the 2020 peak of 7.07%. But 58% of workers
      were still informal in 2024 (BPS / IZA World of Labour), and median real monthly earnings were
      only slightly above Rp2 million — nearly 40% below the average minimum wage of Rp3.2 million.
      Agriculture still employs the most people (28.18% of workers), followed by wholesale and retail
      trade (18.89%). Female labour-force participation reached 56.4% in 2024. Provincial gaps are
      wide: unemployment was 1.32% in Papua Pegunungan and 6.75% in West Java in 2024 (BPS).</p>`
    + citeLine('BPS, Sakernas August 2024; IZA World of Labour, “The labour market in Indonesia, 2001–2024”.');
}

export function povertyView() {
  return `<h1>Poverty</h1>`
    + `<p class="lede">8.57% of Indonesians — 24.06 million people — lived below the poverty line in
      September 2024 (BPS), the lowest rate in the series.</p>`
    + `<div class="chart-row">`
    + `<section class="chart-card"><h3>Poverty rate, 2015–2024</h3>`
    + lineChart(POVERTY_SERIES, { label: 'Poverty rate in Indonesia 2015 to 2024, percent', format: (v) => v.toFixed(1), showValues: true, color: '#b3402e' })
    + `<p class="chart-note">% of population below the national poverty line, March of each year. The 2020–21 rise is the pandemic; September 2024 reached 8.57%. Source: BPS, Susenas.</p></section>`
    + `<section class="panel"><h3>Key figures</h3>`
    + statList([
      { label: 'Poverty, Sep 2024', value: '8.57%', note: 'BPS, Sep 2024' },
      { label: 'People in poverty', value: '24.06 million', note: 'BPS, Sep 2024' },
      { label: 'Poverty, Mar 2024', value: '9.03%', note: 'BPS, Mar 2024' },
      { label: 'COVID peak', value: '26.42 million', note: 'BPS, Mar 2020' },
      { label: 'Extreme poverty', value: '0.83%', note: 'BPS, 2024 — was 1.12% in 2023' },
      { label: 'Lowest province', value: 'Bali 4.0%', note: 'BPS, 2024' },
      { label: 'Highest province', value: 'Papua Pegunungan 32.97%', note: 'BPS, 2024' },
    ]) + `</section></div>`
    + `<h2>A decade of decline, with one reversal</h2>`
    + `<p>The poverty rate fell from 11.22% in March 2015 to 9.22% in September 2019 (BPS, Susenas).
      COVID-19 pushed it back above 10% in 2020–21, and the September 2022 fuel-price hike stalled
      the recovery at 9.57%. Since then it has fallen every round: 9.36% in March 2023, 9.03% in
      March 2024 and 8.57% in September 2024. The geography is stark: Bali's 4.0% against Papua
      Pegunungan's 32.97% in 2024 — an eight-fold gap inside one country.</p>`
    + citeLine('BPS, Susenas, March 2015 – September 2024.');
}

export function healthView() {
  return `<h1>Health</h1>`
    + `<p class="lede">Life expectancy reached 74.15 years in 2024 (BPS), and stunting in children
      under five fell to 19.8% (Ministry of Health, SSGI 2024) — nearly half its 2013 level.</p>`
    + `<div class="chart-row">`
    + `<section class="chart-card"><h3>Stunting, 2013–2024</h3>`
    + lineChart(STUNTING_SERIES, { label: 'Stunting prevalence in Indonesia 2013 to 2024, percent', format: (v) => v.toFixed(1), showValues: true, color: '#1e7d4f' })
    + `<p class="chart-note">% of children under five stunted. Source: Riskesdas 2013 &amp; 2018; Ministry of Health (SSGI) 2019–2024.</p></section>`
    + `<section class="panel"><h3>Key figures</h3>`
    + statList([
      { label: 'Life expectancy', value: '74.15 years', note: 'BPS, 2024' },
      { label: 'Stunting', value: '19.8%', note: 'Ministry of Health (SSGI), 2024' },
      { label: 'Stunting, 2013', value: '37.6%', note: 'Riskesdas, 2013' },
      { label: 'Wasting', value: '7.4%', note: 'Ministry of Health (SSGI), 2024' },
      { label: 'Overweight', value: '3.4%', note: 'Ministry of Health (SSGI), 2024' },
      { label: 'Maternal mortality', value: '189 / 100,000', note: 'Ministry of Health, 2024' },
    ]) + `</section></div>`
    + `<h2>Longer lives, healthier children</h2>`
    + `<p>Life expectancy has risen every year in the series: 73.37 years in 2020, 73.93 in 2023 and
      74.15 in 2024 (BPS). Child nutrition has improved faster: stunting fell from 37.6% in 2013 to
      30.8% in 2018 and 19.8% in 2024 (SSGI). It is still above the national target of 14% (RPJMN),
      and the provincial spread is wide — Central Papua recorded 28.53% in 2024. Wasting (7.4%) and
      overweight (3.4%) in under-fives were both down on 2023.</p>`
    + citeLine('BPS, 2024; Ministry of Health, SSGI 2024; UNICEF Nutrition Updates Vol. 6, 2025.');
}

export function educationView() {
  return `<h1>Education</h1>`
    + `<p class="lede">The Human Development Index reached 75.02 in 2024 (BPS) — “high human
      development” — with expected schooling of 13.21 years and mean schooling of 8.85 years.</p>`
    + `<div class="chart-row">`
    + `<section class="chart-card"><h3>Human Development Index</h3>`
    + lineChart(HDI_SERIES, { label: 'Human Development Index of Indonesia, 2015 and 2020 to 2025', format: (v) => v.toFixed(1), showValues: true })
    + `<p class="chart-note">HDI, 0–100 scale. Only years published by BPS are plotted — 2016–2019 are not shown. Source: BPS.</p></section>`
    + `<section class="panel"><h3>Key figures, 2024</h3>`
    + statList([
      { label: 'HDI', value: '75.02', note: 'BPS, 2024' },
      { label: 'Life expectancy', value: '74.15 years', note: 'BPS, 2024 — HDI health dimension' },
      { label: 'Expected schooling', value: '13.21 years', note: 'BPS, 2024 — age 7+' },
      { label: 'Mean schooling', value: '8.85 years', note: 'BPS, 2024 — age 25+' },
      { label: 'Per-capita expenditure', value: 'Rp12.34 jt / yr', note: 'BPS, 2024 — adjusted real' },
      { label: 'Highest provincial HDI', value: 'Jakarta 84.15', note: 'BPS, 2024' },
      { label: 'Lowest provincial HDI', value: 'Papua Pegunungan 54.91', note: 'BPS, 2024' },
    ]) + `</section></div>`
    + `<h2>Schooling is rising — unevenly</h2>`
    + `<p>Mean years of schooling rose from 8.48 in 2020 to 8.85 in 2024, and expected schooling from
      12.98 to 13.21 years (BPS). The averages hide a split: mean schooling is 10.5 years in cities
      and 7.2 years in villages. Provincial HDI spans almost 30 points — 84.15 in Jakarta against
      54.91 in Papua Pegunungan in 2024 — the widest internal gap of any indicator on this site.</p>`
    + citeLine('BPS, Human Development Index 2024 (released November 2024).');
}

export function regionsView() {
  return `<h1>Regions</h1>`
    + `<p class="lede">Twenty largest provinces by population, from the 2020 Population Census (BPS).
      Click a column to sort; type to filter.</p>`
    + `<div class="toolbar"><input type="search" id="region-search" placeholder="Filter provinces…" aria-label="Filter provinces">`
    + `<span class="count" id="region-count"></span></div>`
    + `<table class="data" id="region-table"><thead><tr>`
    + `<th class="sortable" data-key="name">Province</th>`
    + `<th class="sortable" data-key="capital">Capital</th>`
    + `<th class="sortable" data-key="island">Island</th>`
    + `<th class="sortable num" data-key="pop">Population (2020)</th>`
    + `<th class="sortable num" data-key="density">Density / km²</th>`
    + `</tr></thead><tbody id="region-body"></tbody></table>`
    + `<p class="cite">Source: BPS, Population Census 2020. Density is people per km². The table shows the
      20 most populous of the 38 provinces; the full census covers all 38.</p>`
    + `<h2>Java dominates; the east is empty</h2>`
    + `<p>Six provinces pass 10 million people, five of them on Java. Jakarta packs 16,022 people into
      each square kilometre; Papua has 13. The same pattern runs through every other section of this
      site: the richest and poorest provinces, the longest- and shortest-lived, are the same places —
      Jakarta at the top of the HDI table (84.15) and Papua Pegunungan at the bottom (54.91), both
      2024 (BPS).</p>`;
}

export function sourcesView() {
  return `<h1>Sources</h1>`
    + `<p class="lede">Every figure on this site comes from one of the bodies below, and is cited with
      its year where it appears.</p>`
    + `<ul class="sources">` + SOURCES.map((s) =>
      `<li><b>${s.name}</b> — ${s.what} (${s.years})</li>`).join('') + `</ul>`
    + `<h2>Method notes</h2>`
    + `<p>Population figures are mid-year estimates unless labelled Census. Poverty rates are March
      values unless labelled September. Unemployment is the August open unemployment rate (TPT).
      HDI charts plot only the years BPS published. Where an official series skips a year, the chart
      skips it too — no value on this site is interpolated or estimated by us.</p>`
    + `<p>Figures were last checked against their sources on 26 November 2026.</p>`;
}

export const ROUTES = {
  '': overviewView,
  population: populationView,
  economy: economyView,
  employment: employmentView,
  poverty: povertyView,
  health: healthView,
  education: educationView,
  regions: regionsView,
  sources: sourcesView,
};
