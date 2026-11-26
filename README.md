# NusaData — Statistics of Indonesia

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/Iruwae/best-national-statistics-site-entry/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/Iruwae/best-national-statistics-site-entry/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

A national statistics site for Indonesia: population, economy, employment, poverty,
health, education and regions — every figure with its source and year.

## What it is

A static site (plain HTML, CSS and ES-module JavaScript, no build step, no network
requests). Eight sections, each reached by a link: Overview, Population, Economy,
Employment, Poverty, Health, Education, Regions — plus a Sources page. Charts are
hand-drawn inline SVG built from the same data files; the regions table sorts by
column and filters as you type; the economy page switches between GDP growth and
inflation charts. The layout is responsive down to a 390px phone.

## Data

All figures were checked against their named source before being written: Statistics
Indonesia (BPS), the World Bank, Bank Indonesia, the Ministry of Health (SSGI), the
2020 Population Census, IZA World of Labour and APJII. Each figure on the site carries
its source and year. Where an official series skips a year, the chart skips it too —
nothing is interpolated or guessed.

## Run it

```sh
node serve.ts        # app/ on http://localhost:8080
```

## Hand it in

`main.ts` (Node 22, standard library only) copies `app/` and `screenshots/` into the
output directory and writes `dossier.json` with the vendored make.fun library:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Screenshots (`screenshots/`, first by name is the cover):

1. `1-overview.jpg` — overview, desktop 1280×800
2. `2-economy.jpg` — economy page, desktop 1280×800
3. `3-regions.jpg` — regions table, desktop 1280×800
4. `4-overview-phone.jpg` — overview, phone 390×844

## License

MIT — see `LICENSE`.
