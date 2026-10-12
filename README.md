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
- The Vietnam Stock Data Pipeline card and technology groups were checked against repository source at commit `c1d6e342f95f5fd60b18d82ea8303b520e02ee09`: Python/SQL, VNStock, kafka-python/Kafka, PySpark Structured Streaming, PostgreSQL/TimescaleDB, Snowflake Python Connector, psycopg2/JDBC, Snowflake Streams & Tasks, Pandas/NumPy, Streamlit/Plotly, Docker Compose, Nginx, ZooKeeper, Kafka UI, Spark UI/History Server, pgAdmin, and Linux/Bash/systemd. Dependency-only packages are not presented as independently used skills; configured batch sizes are not presented as measured throughput.
- All 11 known certificates are visible in the credentials grid. IBM courses link to their Coursera verification pages; other cards open the supplied PDFs.
- Every certificate card shows its certificate preview. Four local PDFs are rendered to JPEG previews; six IBM previews come from their Coursera verification pages, and the DBA preview is rendered from the supplied original PDF.
- The `public/.nojekyll` file keeps GitHub Pages from applying Jekyll processing to the Vite output.
- `public/Nguyen-Viet-Anh-CV.pdf` is the updated one-page CV, linked from the contact section and GitHub profile. It features Adult Income (LightGBM/PyTorch), HealthMate, and the Vietnam Stock Data Pipeline, with consistent project headings, metadata, bullets and plain clickable links.

The site respects `prefers-reduced-motion`. No client-side routing is used, so all sections are accessible from the single project URL.
