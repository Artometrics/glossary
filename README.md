# Artometrics Glossary

Artometrics Glossary — encyclopedia + style board.

This is a scaffold of the Artometrics visual shell (Astro 5 static export, same masthead, wordmark, typography, and color tokens as [artometrics.com](https://artometrics.com)). Full content will be added in later passes.

- Intended live domain: `glossary.artometrics.com`
- Firebase project / Hosting site (intended): `glossary-510519` / `glossary-510519`
- Default Hosting URL (once deployed): `https://glossary-510519.web.app`
- Indexing: **noindex**. Every page ships `<meta name="robots" content="noindex, nofollow">`, `firebase.json` sets `X-Robots-Tag: noindex, nofollow`, and `public/robots.txt` is `User-agent: *` / `Disallow: /`.

## Develop

```bash
npm install
npm run dev
npm run build
```

## Deploy

Deploy as `team@artometrics.com` with an explicit project flag:

```bash
firebase deploy --project glossary-510519 --only hosting
```

Do not attach this site to Betterment Health, kmcauliffe-rainfall, or Stratus. Do not upgrade the Firebase billing plan without asking.
