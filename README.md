# 2007prius.org

A community-maintained repair archive for the 2004–2009 Toyota Prius (Gen 2), built from 17 years of personal ownership experience.

## About

Bought in 2007. Owned for 17 years. This site documents repairs, failures, maintenance, lessons learned, and ownership experiences to help keep Gen 2 Priuses on the road.

A lot of Prius knowledge is scattered across dying forums, broken image links, and YouTube videos with no searchable text. This project preserves that knowledge in a structured, open-source format.

## Site Structure

```
index.html            — Home, story, quick nav
timeline.html         — Failure timeline by mileage
tools.html            — Tools, OBD2 scanners, parts sources
error-codes.html      — Common OBD2 and hybrid error codes

repairs/
  index.html          — All repairs overview
  combination-meter.html
  hybrid-battery.html
  inverter-pump.html
  abs-actuator.html

assets/css/style.css  — All styles (no build step needed)
```

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
