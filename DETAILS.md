# Portfolio Load-Time Findings

I checked the repo, looked at the components that render on first paint, inspected the image sizes, and ran a production build.

Important context:
- The production JavaScript bundle is not the main problem here. `vite build` produced about `203.12 KB` of JS (`63.61 KB` gzip) and `10.10 KB` of CSS.
- The biggest slowdown is media weight and how that media is loaded.
- I cannot verify your hosting cache headers from this repo alone, so the notes below focus on client-side causes visible in code.

## What is making the portfolio slow

1. Extremely large homepage screenshots are being shipped as-is

- `public/images/Scaling.png` is about `12.43 MB` and `9324 x 5622`.
- `public/images/manageInSync.png` is about `6.15 MB` and `9324 x 5622`.
- These images are rendered inside cards that live in a `max-w-3xl` layout, so the browser is downloading images that are far larger than the displayed size.
- Because they live in `public/`, Vite copies them to `dist/` without optimizing or resizing them.
- Relevant code:
  - `src/components/work/work.data.ts:14`
  - `src/components/experiments/experiments.data.ts:14`
  - `src/components/work/WorkCard.tsx:27`
  - `src/components/experiments/ExperimentCard.tsx:26`
  - `src/layouts/MainLayout.tsx:10`

2. The homepage eagerly loads too much image data on first visit

- The home view alone references about `19.4 MB` of image/icon assets.
- The project and experiment cards use plain `<img>` tags, so the browser treats them as normal eager image loads unless told otherwise.
- That means below-the-fold content competes with the hero section during initial load.
- Relevant code:
  - `src/components/work/WorkCard.tsx:27`
  - `src/components/experiments/ExperimentCard.tsx:26`

3. The hover GIF is preloaded on every page load

- `Hero.tsx` preloads `/images/welcome.gif` inside `useEffect`, which forces an extra request even if the visitor never hovers the avatar.
- That GIF is about `376 KB`, so it adds cost to every first load for a purely optional interaction.
- Relevant code:
  - `src/components/hero/Hero.tsx:24`
  - `src/components/hero/Hero.tsx:38`

4. The About page is not code-split from the Home page

- `Home.tsx` statically imports `About`, even though the default view is `"home"`.
- That means the hidden About component is bundled into the initial JS chunk instead of being loaded only when someone clicks `About`.
- This is a smaller issue than the large PNGs, but it still increases the first bundle unnecessarily.
- Relevant code:
  - `src/pages/Home.tsx:7`
  - `src/pages/Home.tsx:28`

5. The About page will trigger another media-heavy download when opened

- The About section pulls in `12` gallery images plus one more photo, totaling about `3.02 MB`.
- None of those images use lazy loading either, so opening `About` can feel heavy.
- Relevant code:
  - `src/components/about/About.tsx:1`
  - `src/components/about/About.tsx:21`
  - `src/components/about/About.tsx:40`
  - `src/components/about/About.tsx:91`

6. There is an extra third-party font request during page startup

- `index.html` loads `Instrument Sans` from Google Fonts.
- This is much smaller than the image problem, but it still adds another network dependency and can delay text rendering on slower connections.
- Relevant code:
  - `index.html:8`

7. The tech-stack marquee creates extra above-the-fold requests

- The hero renders `11` unique SVG icons immediately.
- They are small, so this is not your biggest problem, but it still adds extra network requests right at startup.
- Relevant code:
  - `src/components/hero/Hero.tsx:3`
  - `src/components/hero/Hero.tsx:58`

## Biggest offenders in order

1. `Scaling.png` at `12.43 MB`
2. `manageInSync.png` at `6.15 MB`
3. Eager loading of project/experiment images
4. Preloading `welcome.gif` on every visit
5. Shipping the hidden About view in the initial JS
6. Google Fonts and icon-request overhead

## Short version

Your portfolio feels slow mainly because the homepage is media-heavy, not because the React app is unusually large. The first thing to fix is image optimization and lazy loading, especially the two oversized PNG screenshots.
