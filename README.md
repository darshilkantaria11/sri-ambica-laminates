# Sri Ambica Laminates — new website

Next.js 15 (App Router) + Tailwind CSS 3 + Framer Motion. Light theme, fully responsive.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

**Before you deploy:** copy your six catalogue PDFs into `public/pdf/` (see `public/pdf/README.txt`).
They were left out of the zip because they are ~330 MB.

## Where to edit things

Everything a business owner would change lives in **`lib/site.js`**:

| What | Where in `lib/site.js` |
| --- | --- |
| Phone, WhatsApp, e-mail, address, hours, map | `site` |
| Team members + photos | `team` |
| Collections (cover image, flipbook link, PDF file) | `collections` |
| Finish gallery (hero switcher + horizontal gallery) | `finishes` |
| Room photos | `scenes` |
| Stats, services, FAQs, testimonials, ordering steps | `stats`, `services`, `faqs`, `testimonials`, `process` |

Images are in `public/img/` (optimised WebP cut from your catalogues). The logo is `public/logo.png`.

## What's on the home page (in order)

1. **Preloader** — logo + progress; plays once per browser session.
2. **Hero** — headline reveal, live finish switcher with 3D tilt. The sheet "falls" away as you scroll…
3. **Brand marquee** — collection names drifting + partner logos.
4. **Statement** — the paragraph lights up word by word as you scroll.
5. **The journey of a sheet (scroll story, pinned)** — the sheet stack unfolds → one is chosen → it is pressed
   onto a plain wooden board by a roller → the board becomes a wardrobe → the wardrobe is loaded onto a delivery
   truck. Scroll back and it rewinds. Component: `components/StoryScroll.jsx` (timeline constants at the top of the
   component body — tweak the `seg(p, from, to)` ranges to re-time any step).
6. **Collections** — parallax covers with staggered layout.
7. **Finishes gallery** — pinned horizontal scroll on desktop, swipe rail on mobile.
8. **In real rooms** — masonry gallery with parallax.
9. **Stats** — count-up numbers.
10. **How ordering works** — a road draws itself down the page, a pin travels along it and each step lights up.
11. **Testimonials**, **FAQ**, **CTA band**, **Footer** (oversized wordmark).

Other pages: `/catalogue` (flipbook modal + PDF download per collection), `/services`, `/about`, `/contact`
(the form opens WhatsApp with the visitor's details pre-filled — no backend needed).

## Fonts

`Fraunces` (display serif) and `Manrope` (UI sans), loaded through `next/font/google` in `app/layout.js`.

## Accessibility & performance notes

* Users with "reduce motion" turned on get gentle fades instead of movement (`MotionConfig reducedMotion="user"` + CSS).
* Images are WebP, sized and lazy-loaded by `next/image`.
* Scroll-driven scenes use a single `requestAnimationFrame`-throttled listener (`lib/scroll.js`).

## Notes for the developer

* `app/sitemap.js` and `app/robots.js` replace the old static sitemap.
* Structured data (LocalBusiness) is in `app/layout.js`.
* The old site's Google-Drive PDF links were replaced by local PDFs + the existing Heyzine flipbook links.
