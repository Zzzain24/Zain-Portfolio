# zainbharde.com

Personal portfolio and photography site for Zain Bharde — Software Engineer at The Home Depot (Sourcing Core), Texas A&M graduate (B.S. Data Engineering, minor in Computer Science).

**[zainbharde.com](https://zainbharde.com)**

## About

Sections for background, work experience, projects, and contact, plus a `/photography` gallery backed by Vercel Blob — collections and photos are pulled live from Blob storage, so uploading new images doesn't require a redeploy.

## Tech Stack

- **Next.js 16** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for animation
- **Vercel Blob** for photography storage
- **Vercel Analytics**, hosted on Vercel

## Getting Started

This project uses **pnpm** (matches `pnpm-lock.yaml` — Vercel's build depends on it, don't use npm/yarn here).

```bash
git clone https://github.com/Zzzain24/zain-portfolio.git
cd zain-portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Note: the photography pages fetch live from Vercel Blob and need `BLOB_READ_WRITE_TOKEN` to resolve locally (`vercel env pull`) — see [Managing Photos](#managing-photos).

## Project Structure

```
app/
  photography/         # /photography and /photography/[collection] routes
  resume/
components/
  photography/          # collections grid, photo grid, lightbox, dither panel
lib/
  photography-data.ts   # collection metadata + live Blob fetching
public/
```

## Managing Photos

Collections are defined in `lib/photography-data.ts` (`collectionsMeta`) — each entry maps to a folder in the Blob store. To add photos: drag them into that collection's folder in the Vercel dashboard (Storage → Blob store); they show up on the site automatically, no code change needed.

- **Order**: add an `order: [...]` array of filenames to a collection entry — listed files come first, everything else falls back to alphabetical.
- **Cover photo**: set `cover: "<blob URL>"` on a collection entry, or leave it unset to default to the first photo in order.
- **New collection**: add a new entry to `collectionsMeta` with a `slug`, `title`, and `blobFolder`.

## Deploy

Push to `main` — Vercel deploys automatically.
