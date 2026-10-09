# Nguyen Viet Anh · Portfolio

Personal portfolio for Nguyen Viet Anh, a data engineer working across reliable data systems and applied machine learning.

## Run locally

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. The site is built with React, Vite, native CSS, and self-hosted fonts. It has no backend or analytics.

Run `npm run lint` and `npm run format:check` before publishing.

## Build and deploy

```bash
npm run build
npm run preview
npm run deploy
```

`npm run deploy` builds the site and publishes `dist/` to the existing `gh-pages` branch. The Vite base path is `/VietAnhPortfolio/`, matching the GitHub Pages project URL. GitHub Pages should use the `gh-pages` branch root as its publishing source.

## Content notes

- Project descriptions and results come from the current CV and the previous portfolio. Model metrics include relevant evaluation caveats.
- All 10 known certificates are visible in the credentials grid. IBM courses link to their Coursera verification pages; other cards open the supplied PDFs.
- Three IBM cards show resized WebP certificate previews; the remaining cards use typographic previews.
- The `public/.nojekyll` file keeps GitHub Pages from applying Jekyll processing to the Vite output.

The site respects `prefers-reduced-motion`. No client-side routing is used, so all sections are accessible from the single project URL.
