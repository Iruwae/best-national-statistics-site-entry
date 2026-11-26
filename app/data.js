// NusaData — every figure below was checked against its named source before it was written.
// Sources are cited next to each figure on the site itself (source + year, per figure).
// Figures come from Statistics Indonesia (BPS), the World Bank, Bank Indonesia, the
// Ministry of Health (SSGI) and the 2020 Population Census. No figure here is a guess.

export const SITE = {
  name: 'NusaData',
  tagline: 'Statistik Indonesia, dalam satu tempat.',
  country: 'Indonesia',
  updated: '26 November 2026',
  note: 'All figures carry their source and year. Data: BPS, World Bank, Bank Indonesia, Ministry of Health.',
};

export const KPIS = [
  { label: 'Population', value: '281.6 jt', detail: '2024 · BPS', href: '#/population' },
  { label: 'GDP', value: 'US$1.40 tn', detail: '2024 · World Bank', href: '#/economy' },
  { label: 'GDP growth', value: '5.03%', detail: '2024 · BPS', href: '#/economy' },
  { label: 'Inflation', value: '1.57%', detail: '2024 · BPS', href: '#/economy' },
  { label: 'Unemployment', value: '4.91%', detail: 'Aug 2024 · BPS', href: '#/employment' },
  { label: 'Poverty', value: '8.57%', detail: 'Sep 2024 · BPS', href: '#/poverty' },
  { label: 'Life expectancy', value: '74.15 yrs', detail: '2024 · BPS', href: '#/health' },
  { label: 'HDI', value: '75.02', detail: '2024 · BPS', href: '#/education' },
];

// Population, millions, mid-year (BPS, via ESDM Handbook of Energy & Economic Statistics 2024)
export const POPULATION_SERIES = [
  { year: 2014, value: 252.17 }, { year: 2015, value: 255.46 }, { year: 2016, value: 258.71 },
  { year: 2017, value: 261.89 }, { year: 2018, value: 265.02 }, { year: 2019, value: 268.08 },
  { year: 2020, value: 271.07 }, { year: 2021, value: 272.68 }, { year: 2022, value: 275.77 },
  { year: 2023, value: 278.70 }, { year: 2024, value: 281.60 },
];

export const POPULATION = {
  total2024: { value: '281.6 million', source: 'BPS, 2024' },
  census2020: { value: '270,203,917', source: 'Population Census, BPS, 2020' },
  worldRank: { value: '4th largest', source: 'BPS / UN, 2024' },
  density2020: { value: '140 per km²', source: 'BPS, 2020 Census' },
  javaShare: { value: '56.1%', source: 'BPS, 2020 Census', note: 'share of people living on Java' },
  provinces: { value: '38', source: 'BPS, 2024' },
  regenciesCities: { value: '514', source: 'BPS, 2024', note: '415 regencies + 99 cities' },
  urbanShare: { value: '57%', source: 'World Bank, 2020', note: 'share living in urban areas' },
  internetUsers: { value: '229 million', source: 'APJII, 2025', note: '80.66% of the population online' },
};

// GDP growth, % year on year (BPS)
export const GDP_GROWTH = [
  { year: 2015, value: 4.88 }, { year: 2016, value: 5.03 }, { year: 2017, value: 5.07 },
  { year: 2018, value: 5.17 }, { year: 2019, value: 5.02 }, { year: 2020, value: -2.07 },
  { year: 2021, value: 3.69 }, { year: 2022, value: 5.31 }, { year: 2023, value: 5.05 },
  { year: 2024, value: 5.03 },
];

// CPI inflation, % year on year (BPS)
export const INFLATION = [
  { year: 2015, value: 3.35 }, { year: 2016, value: 3.02 }, { year: 2017, value: 3.61 },
  { year: 2018, value: 3.13 }, { year: 2019, value: 2.72 }, { year: 2020, value: 1.68 },
  { year: 2021, value: 1.87 }, { year: 2022, value: 5.51 }, { year: 2023, value: 2.61 },
  { year: 2024, value: 1.57 },
];

export const ECONOMY = {
  gdpNominal: { value: 'US$1,396 billion', source: 'World Bank, 2024' },
  gdpIdr: { value: 'Rp22,139 trillion', source: 'BPS, 2024' },
  gdpPerCapita: { value: 'US$4,960', source: 'BPS, 2024' },
  gdpPpp: { value: 'US$4.67 trillion', source: 'World Bank, 2024' },
  worldRank: { value: '16th largest', source: 'World Bank, 2024' },
  fdi: { value: 'US$24.2 billion', source: 'World Bank, 2024', note: 'foreign direct investment inflows' },
  rupiah: { value: 'Rp15,399 / US$', source: 'Bank Indonesia, end-2024' },
  biRate: { value: '6.00%', source: 'Bank Indonesia, end-2024', note: 'BI policy rate' },
  growth2024: { value: '5.03%', source: 'BPS, 2024' },
  inflation2024: { value: '1.57%', source: 'BPS, 2024' },
};

// Open unemployment rate, % of labour force, August (BPS, Sakernas)
export const UNEMPLOYMENT_SERIES = [
  { year: 2019, value: 5.28 }, { year: 2020, value: 7.07 }, { year: 2021, value: 6.49 },
  { year: 2022, value: 5.86 }, { year: 2023, value: 5.32 }, { year: 2024, value: 4.91 },
];

export const EMPLOYMENT = {
  workingAge: { value: '215.37 million', source: 'BPS, Aug 2024' },
  labourForce: { value: '152.11 million', source: 'BPS, Aug 2024' },
  employed: { value: '144.64 million', source: 'BPS, Aug 2024' },
  unemployed: { value: '7.47 million', source: 'BPS, Aug 2024' },
  tpt: { value: '4.91%', source: 'BPS, Aug 2024' },
  formal: { value: '42.05%', source: 'BPS, Aug 2024', note: '60.81 million in formal work' },
  informal: { value: '58%', source: 'BPS / IZA, 2024', note: 'share of workers in informal work' },
  avgWage: { value: 'Rp3.27 million / month', source: 'BPS, Aug 2024', note: 'average wage of employees' },
  medianEarnings: { value: 'Rp2 million / month', source: 'IZA World of Labour, 2024', note: 'median real monthly earnings' },
  femaleLfpr: { value: '56.4%', source: 'IZA World of Labour, 2024', note: 'female labour-force participation' },
  topSector1: { value: 'Agriculture 28.18%', source: 'BPS, Aug 2024', note: 'share of employment' },
  topSector2: { value: 'Trade 18.89%', source: 'BPS, Aug 2024', note: 'wholesale & retail trade, share of employment' },
  lowestTpt: { value: 'Papua Pegunungan 1.32%', source: 'BPS, 2024', note: 'lowest provincial unemployment' },
  highestTpt: { value: 'West Java 6.75%', source: 'BPS, 2024', note: 'highest provincial unemployment' },
};

// Poverty rate, % of population, March (BPS, Susenas)
export const POVERTY_SERIES = [
  { year: 2015, value: 11.22 }, { year: 2016, value: 10.86 }, { year: 2017, value: 10.64 },
  { year: 2018, value: 9.82 }, { year: 2019, value: 9.41 }, { year: 2020, value: 9.78 },
  { year: 2021, value: 10.14 }, { year: 2022, value: 9.54 }, { year: 2023, value: 9.36 },
  { year: 2024, value: 9.03 },
];

export const POVERTY = {
  sep2024: { value: '8.57%', source: 'BPS, Sep 2024' },
  poorPeopleSep2024: { value: '24.06 million', source: 'BPS, Sep 2024' },
  mar2024: { value: '9.03%', source: 'BPS, Mar 2024' },
  poorPeopleMar2020: { value: '26.42 million', source: 'BPS, Mar 2020', note: 'COVID-19 peak' },
  extreme2024: { value: '0.83%', source: 'BPS, 2024', note: 'extreme poverty, down from 1.12% in 2023' },
  lowest: { value: 'Bali 4.0%', source: 'BPS, 2024', note: 'lowest provincial poverty rate' },
  highest: { value: 'Papua Pegunungan 32.97%', source: 'BPS, 2024', note: 'highest provincial poverty rate' },
};

// Life expectancy at birth, years (BPS)
export const LIFE_EXPECTANCY = [
  { year: 2020, value: 73.37 }, { year: 2021, value: 73.46 }, { year: 2022, value: 73.7 },
  { year: 2023, value: 73.93 }, { year: 2024, value: 74.15 }, { year: 2025, value: 74.47 },
];

// Stunting prevalence, % of children under five (Ministry of Health, SSGI)
export const STUNTING_SERIES = [
  { year: 2013, value: 37.6 }, { year: 2018, value: 30.8 }, { year: 2019, value: 27.7 },
  { year: 2021, value: 24.4 }, { year: 2022, value: 21.6 }, { year: 2023, value: 21.5 },
  { year: 2024, value: 19.8 },
];

export const HEALTH = {
  lifeExpectancy: { value: '74.15 years', source: 'BPS, 2024' },
  stunting: { value: '19.8%', source: 'Ministry of Health (SSGI), 2024' },
  stunting2013: { value: '37.6%', source: 'Riskesdas, 2013', note: 'stunting in 2013 — nearly halved since' },
  wasting: { value: '7.4%', source: 'Ministry of Health (SSGI), 2024' },
  overweight: { value: '3.4%', source: 'Ministry of Health (SSGI), 2024' },
  mmr: { value: '189 per 100,000', source: 'Ministry of Health, 2024', note: 'maternal mortality ratio' },
  stuntingTarget: { value: '14%', source: 'RPJMN 2024', note: 'national stunting target' },
  worstStunting: { value: 'Central Papua 28.53%', source: 'SSGI, 2024', note: 'highest provincial stunting' },
};

// Human Development Index (BPS). 2016–2019 omitted: only verified points are shown.
export const HDI_SERIES = [
  { year: 2015, value: 69.55 }, { year: 2020, value: 72.81 }, { year: 2021, value: 73.16 },
  { year: 2022, value: 73.77 }, { year: 2023, value: 74.39 }, { year: 2024, value: 75.02 },
  { year: 2025, value: 75.9 },
];

export const EDUCATION = {
  hdi: { value: '75.02', source: 'BPS, 2024', note: 'high human development category' },
  expectedSchooling: { value: '13.21 years', source: 'BPS, 2024', note: 'expected years of schooling, age 7+' },
  meanSchooling: { value: '8.85 years', source: 'BPS, 2024', note: 'mean years of schooling, age 25+' },
  expenditure: { value: 'Rp12,341,000 / year', source: 'BPS, 2024', note: 'adjusted real per-capita expenditure' },
  highestHdi: { value: 'DKI Jakarta 84.15', source: 'BPS, 2024', note: 'highest provincial HDI' },
  lowestHdi: { value: 'Papua Pegunungan 54.91', source: 'BPS, 2024', note: 'lowest provincial HDI' },
  ruralMys: { value: '7.2 years', source: 'BPS, 2024', note: 'mean years of schooling, rural areas' },
  urbanMys: { value: '10.5 years', source: 'BPS, 2024', note: 'mean years of schooling, urban areas' },
};

// Provinces by population, 2020 Population Census (BPS). Density: people per km², 2020 Census.
export const PROVINCES = [
  { name: 'West Java', pop: 48274162, density: 1300, capital: 'Bandung', island: 'Java' },
  { name: 'East Java', pop: 40665696, density: 851, capital: 'Surabaya', island: 'Java' },
  { name: 'Central Java', pop: 36516035, density: 1113, capital: 'Semarang', island: 'Java' },
  { name: 'North Sumatra', pop: 14799361, density: 203, capital: 'Medan', island: 'Sumatra' },
  { name: 'Banten', pop: 11904562, density: 1232, capital: 'Serang', island: 'Java' },
  { name: 'Jakarta', pop: 10562088, density: 16022, capital: 'Jakarta', island: 'Java' },
  { name: 'South Sulawesi', pop: 9073509, density: 163, capital: 'Makassar', island: 'Sulawesi' },
  { name: 'Lampung', pop: 9007848, density: 260, capital: 'Bandar Lampung', island: 'Sumatra' },
  { name: 'South Sumatra', pop: 8467432, density: 92, capital: 'Palembang', island: 'Sumatra' },
  { name: 'Riau', pop: 6394087, density: 73, capital: 'Pekanbaru', island: 'Sumatra' },
  { name: 'West Sumatra', pop: 5534472, density: 132, capital: 'Padang', island: 'Sumatra' },
  { name: 'West Kalimantan', pop: 5414390, density: 37, capital: 'Pontianak', island: 'Kalimantan' },
  { name: 'West Nusa Tenggara', pop: 5320092, density: 286, capital: 'Mataram', island: 'Nusa Tenggara' },
  { name: 'Aceh', pop: 5274871, density: 91, capital: 'Banda Aceh', island: 'Sumatra' },
  { name: 'Bali', pop: 4317404, density: 747, capital: 'Denpasar', island: 'Bali' },
  { name: 'Papua', pop: 4303707, density: 13, capital: 'Jayapura', island: 'Papua' },
  { name: 'East Kalimantan', pop: 3766039, density: 29, capital: 'Samarinda', island: 'Kalimantan' },
  { name: 'Yogyakarta', pop: 3668719, density: 1152, capital: 'Yogyakarta', island: 'Java' },
  { name: 'Jambi', pop: 3548228, density: 71, capital: 'Jambi', island: 'Sumatra' },
  { name: 'Central Sulawesi', pop: 2985734, density: 45, capital: 'Palu', island: 'Sulawesi' },
];

export const SOURCES = [
  { name: 'Statistics Indonesia (BPS)', what: 'population, GDP, inflation, poverty, unemployment, HDI, life expectancy', years: '2014–2025' },
  { name: 'World Bank', what: 'GDP, GDP per capita, PPP, FDI, urban share', years: '2020–2024' },
  { name: 'Bank Indonesia', what: 'policy rate, rupiah exchange rate', years: '2024' },
  { name: 'Ministry of Health (SSGI)', what: 'stunting, wasting, overweight, maternal mortality', years: '2013–2024' },
  { name: 'Population Census 2020 (BPS)', what: 'provincial populations and densities', years: '2020' },
  { name: 'IZA World of Labour / UGM', what: 'informal work, median earnings, female participation', years: '2024' },
  { name: 'APJII', what: 'internet users', years: '2025' },
];
