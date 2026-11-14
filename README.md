# Artometrics Glossary

Encyclopedia and style board for `glossary.artometrics.com`. Astro 5 static export, same masthead, wordmark, typography, and color tokens as [artometrics.com](https://artometrics.com).

- Intended live domain: `glossary.artometrics.com`
- Firebase project / Hosting site (intended): `glossary-510519` / `glossary-510519`
- Default Hosting URL (once deployed): `https://glossary-510519.web.app`
- Indexing: **noindex**. Every page ships `<meta name="robots" content="noindex, nofollow">`, `firebase.json` sets `X-Robots-Tag: noindex, nofollow`, and `public/robots.txt` is `User-agent: *` / `Disallow: /`. The HTML starters under `public/downloads/` carry the same robots meta.

## What is on the shelf

- **Encyclopedia** (`/encyclopedia`) — A–Z, search, and kind filters (people, events, context). Entries live in `site/data/entries.ts`. One dense paragraph, then “Sources / how much we actually know.” Pages generate at `/entries/{slug}`.
- **Style board** (`/styles`) — searchable grid, plus a placeholder “Find your style” sorter that only knows the styles on the board. Boards live in `site/data/styles.ts`. Galleries are captioned placeholders. No artwork is embedded.
- **Downloads** — `public/downloads/{slug}/`. Each style has an HTML/CSS starter (a real, original study) and `.ai` / `.psd` text stubs. The stubs are not binary Adobe files. They are labeled as briefs an agent can read.

To add an entry or a style, add an object to the data file. Slugs become URLs with no trailing slash. If a style gets starter files, put them in `public/downloads/{slug}/` and point `downloads` at those paths.

## Develop

```bash
npm install
npm run dev
npm run build
```

## Deploy

Deploy from the box, as `team@artometrics.com`, with an explicit project flag:

```bash
firebase deploy --project glossary-510519 --only hosting
```

Do not attach this site to Betterment Health, kmcauliffe-rainfall, or Stratus. Do not upgrade the Firebase billing plan without asking.
