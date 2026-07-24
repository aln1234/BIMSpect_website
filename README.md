# BIMSpect Website

Production-ready Next.js migration of the original static BIMSpect page in `bimspect-redesign-for-business.html`.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

The site uses the App Router, TypeScript, `next/font/google` for DM Sans and DM Mono, extracted screenshot assets under `public/images/bimspect/`, and native CSS plus Intersection Observer animations. No animation library is used.

## Docker

Build and run the production image:

```bash
docker build -t bimspect-website .
docker run --rm -p 3000:3000 bimspect-website
```

Or use Docker Compose:

```bash
docker compose up --build
```
