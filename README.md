# EV Street Co

Marketing site for EV Street Co, curbside EV charging in Chicago. Property owners buy and own
the charging station at their curb, set their own rate, and earn on every session.

Built with [Astro](https://astro.build) 7 and Tailwind CSS 4, on the
[AstroWind](https://github.com/arthelokyo/astrowind) template.

**Live:** https://nickavion.github.io/arclight-website/

## Running it

Requires Node 22.12 or newer.

```bash
npm install && npm run dev
```

The dev server comes up on port 4331. `npm run build` writes the static site to `dist/`.

## Deploying

The site is static and deploys from the `gh-pages` branch.

```bash
npm run deploy
```

That builds and pushes `dist/` to `gh-pages`. GitHub Pages serves it a minute or so later.

## Pre-launch status

This site is not finished. Several facts it needs are still unresolved, and rather than
inventing plausible values they are `null` in `src/brand.ts` and render as visible amber
"TBD" chips on the page. That is deliberate, so an unfinished claim cannot ship by accident.

Still unset: contractor licence number, contact email, phone, warranty terms, insurance,
payout schedule, and the estimate form endpoint. The privacy policy and terms of service are
drafts and say so at the top of each page.

**The estimate form is intentionally disabled** until `FORM_ENDPOINT` is set in
`src/brand.ts`. A form that posts nowhere loses leads silently, so the button is disabled and
the page says why.

## Where things live

| Path | Holds |
|---|---|
| `src/brand.ts` | Every fact the site asserts. Start here. |
| `src/config.yaml` | Site URL, base path, SEO, analytics |
| `src/navigation.ts` | Header and footer |
| `src/pages/index.astro` | The home page |
| `src/components/CurbsideDiagram.astro` | The hero diagram |
| `src/components/EstimateForm.astro` | The lead form |
| `src/components/CustomStyles.astro` | Brand colours and fonts |

## Custom domain

To move this to the EV Street Co domain once registered: point the DNS at GitHub Pages, set `site` to the domain
and `base` back to `/` in `src/config.yaml`, add a `public/CNAME` file containing the domain,
and set the custom domain in the repository's Pages settings.
