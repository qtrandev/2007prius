# 2007prius.org

A community-maintained repair archive for the 2004–2009 Toyota Prius (Gen 2), built from 17 years of personal ownership experience.

## About

Bought in 2007. Owned for 17 years. This site documents repairs, failures, maintenance, lessons learned, and ownership experiences to help keep Gen 2 Priuses on the road.

A lot of Prius knowledge is scattered across dying forums, broken image links, and YouTube videos with no searchable text. This project preserves that knowledge in a structured, open-source format.

## Site Structure

- [index.html](index.html) — Home, story, quick nav
- [search.html](search.html) — Full-text search across all guides
- [timeline.html](timeline.html) — Failure timeline by mileage
- [tools.html](tools.html) — Tools, OBD2 scanners, parts sources
- [error-codes.html](error-codes.html) — Common OBD2 and hybrid error codes
- [disclaimer.html](disclaimer.html) — Site disclaimer

**[repairs/](repairs/)**
- [repairs/index.html](repairs/index.html) — All repairs overview

  *Hybrid & Cooling System*
  - [repairs/hybrid-battery.html](repairs/hybrid-battery.html) — HV hybrid battery replacement
  - [repairs/inverter-pump.html](repairs/inverter-pump.html) — Inverter coolant pump replacement
  - [repairs/p1121.html](repairs/p1121.html) — P1121 coolant flow control valve

  *Brakes*
  - [repairs/abs-actuator.html](repairs/abs-actuator.html) — ABS actuator (3 amigos fix)

  *Electrical & Instrument*
  - [repairs/combination-meter.html](repairs/combination-meter.html) — Speedometer/instrument cluster
  - [repairs/mfd-display.html](repairs/mfd-display.html) — MFD touchscreen (DOME fuse + replacement)

  *Maintenance*
  - [repairs/12v-battery.html](repairs/12v-battery.html) — 12V auxiliary battery
  - [repairs/spark-plugs.html](repairs/spark-plugs.html) — Spark plug replacement
  - [repairs/oil-consumption.html](repairs/oil-consumption.html) — High-mileage oil consumption
  - [repairs/cabin-air-filter.html](repairs/cabin-air-filter.html) — Cabin air filter
  - [repairs/key-fob-battery.html](repairs/key-fob-battery.html) — Key fob battery (CR2032)

  *Comfort & Climate*
  - [repairs/ac-recharge.html](repairs/ac-recharge.html) — AC refrigerant recharge (R-134a)

  *Diagnostics*
  - [repairs/clear-engine-codes.html](repairs/clear-engine-codes.html) — Read & clear OBD2 codes
  - [repairs/p0420.html](repairs/p0420.html) — P0420 catalytic converter

  *Lighting*
  - [repairs/headlight-bulbs.html](repairs/headlight-bulbs.html) — Headlight bulb replacement

  *Tires*
  - [repairs/tires.html](repairs/tires.html) — Tire size, costs, real-world data

  *Body & Exterior*
  - [repairs/hatch-latch.html](repairs/hatch-latch.html) — Rear hatch latch replacement
  - [repairs/hatch-struts.html](repairs/hatch-struts.html) — Hatch lift struts
  - [repairs/trunk-water-leak.html](repairs/trunk-water-leak.html) — Trunk water leak diagnosis & repair
  - [repairs/weatherstrip.html](repairs/weatherstrip.html) — Window weatherstrip replacement

**assets/**
- [assets/css/style.css](assets/css/style.css) — All styles (no build step needed)
- [assets/js/nav.js](assets/js/nav.js) — Mobile nav / hamburger menu
- [assets/js/search-index.js](assets/js/search-index.js) — Search index data (Fuse.js)

## Hosting on GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set Source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/2007prius`

To use a custom domain (e.g. `2007prius.org`):
- Add a `CNAME` file to the root with your domain name
- Point your domain's DNS to GitHub Pages (see GitHub Pages docs)

## Contributing

This is a public repo — fork it, improve it, add your own repair notes, translate it, or add your affiliate links. The more people contribute, the longer this knowledge survives.

- No build tools required — pure HTML and CSS
- Each repair guide is a single self-contained HTML file
- Add new repair pages to `repairs/` and link from `repairs/index.html`

## License

- Code: [MIT License](LICENSE)
- Documentation content: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
