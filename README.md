> Source of truth: this starter is exported from the `contentrain-starters` monorepo.
> Internal starter id: `sveltekit-editorial`.
# Contentrain SvelteKit Editorial

Editorial starter for journals, essays, and smaller publication sites with a lighter runtime.

## Contentrain Ecosystem

- SDK and CLI: [ai.contentrain.io/packages/sdk.html](https://ai.contentrain.io/packages/sdk.html)
- Product guides: [docs.contentrain.io](https://docs.contentrain.io/)
- Content operations UI: [studio.contentrain.io](https://studio.contentrain.io)

## Quick Start

```bash
pnpm install
pnpm dev
```

## Commands

- `pnpm dev`
- `pnpm check`
- `pnpm build`
- `pnpm preview`
- `pnpm contentrain:generate`

## Contentrain

- Layout and page server loads read from the generated `#contentrain` client
- Global site settings, navigation, footer, SEO, authors, categories, and stories are seeded in `.contentrain/`
- Story cards now link to real internal story pages under `/stories/[slug]`
- Static build output is ready after clone
- The starter stays parallel to the Contentrain ecosystem model: git-backed content, explicit schemas, and generated runtime access inside the app

## Deploy

- Vercel: `pnpm deploy:vercel`
- Netlify: `pnpm deploy:netlify`
- Cloudflare Pages: `pnpm deploy:cloudflare`
- Static output directory: `build`
