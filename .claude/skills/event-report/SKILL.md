---
name: event-report
description: Use this skill whenever the user wants to create an after-report / event recap page for a MeltingHack event that just happened. Strong triggers: a Luma URL paired with attendance numbers, phrases like "イベントレポート", "after report", "event recap", "this event was held on <date>", or a request to add an event with a YYMMDD-style filename pattern. The skill creates `pages/events/<YYMMDD>.jsx`, registers the event in PortfolioData.jsx and BlogData.jsx, and converts any new event PNGs to WebP via `npm run convert:events`.
---

# Event after-report workflow (MeltingHack CommunityWebsite)

Follow these steps in order. Confirm with the user only when something is genuinely ambiguous — otherwise proceed.

## Step 1 — gather event facts

If a Luma URL is given, fetch it with WebFetch to extract: title, date, venue, registered count. If the user gave a free-form description, parse it. You still need:

- Event title (and optional subtitle)
- Date (`YYYY-MM-DD`) → derive `YYMMDD` for filenames
- Venue
- Actual attendees (vs registered on Luma)
- Categories (e.g. Workshop / Hackathon / Meetup, Offline / Online, AI / Design)
- Partners / co-hosts
- Image basename pattern (default `event<YYMMDD>_big1`, `_big2`, `_small1`, `_small2`, `_small3` — confirm)
- Which image is the group photo / 集合写真 (defaults to `_big2`)

Ask only the items you cannot confidently infer.

## Step 2 — verify and convert images

From repo root:

```bash
ls public/images/events/event<YYMMDD>_*.{png,webp,jpg,jpeg} 2>/dev/null
```

If any `.png` files exist for this event, convert and delete the source:

```bash
npm run convert:events -- --delete
```

If only `.webp` files exist already, skip. The script is idempotent — files with an existing `.webp` sibling are skipped. Any non-PNG/WebP files (`.jpg`, etc.) — flag and ask before proceeding.

## Step 3 — read the most recent event report as a template

Read the most recent dated file in `pages/events/` (e.g. `pages/events/260427.jsx`) so the new page matches the JSX structure and tone the codebase already uses.

## Step 4 — create the new event page

Write `pages/events/<YYMMDD>.jsx`. Required:

- Component name `Event<YYMMDD>`, default-exported
- All image imports use `.webp` extension
- `placeholder="blur"` on every `<Image>` (works automatically on static WebP imports)
- The group photo goes in the more prominent slot of the 2-big-image row
- Body copy in **English** (matches site convention — see 260427.jsx, 260308.jsx)
- Escape `'` as `&apos;` and `"` as `&quot;` inside JSX text
- 4-space indentation, JSX style matching neighboring files
- Lightbox state + `onClick` wrappers around the big images

Structure (mirror 260427.jsx exactly):
1. Hero h1 + 1-paragraph subtitle
2. 4 fancy-box cards: Category / Date / Website / Partners
3. 3 small images in a row
4. Prose section: "Overview" (~2-3 paragraphs)
5. Prose section: "Featured: <something specific>" (~2 paragraphs)
6. 2 big images (group photo on the more prominent side)
7. Prose section: "Featured: <another specific thing>" (~2 paragraphs)
8. Prose section: "Best Practices / Takeaways" (~3 short paragraphs with bolded leads)
9. Prose section: "Closing" (thanks, what's next, sign-off)

Voice: energetic, concrete, lots of specifics, no buzzword soup.

## Step 5 — register in PortfolioData.jsx

Edit `components/Portfolio/PortfolioData.jsx`:

1. Add image import near the other event imports:
   ```js
   import Event<YYMMDD>Image from '@/public/images/events/event<YYMMDD>_<groupPhoto>.webp'
   ```
2. Add an entry at the **top** of `portfolioList.projects`:
   ```js
   {
       title: '<Event title>',
       slug: '../events/<YYMMDD>',
       description: '',
       category: '<workshop|hackathon|fun-event>',
       services: [],
       client: '',
       projectLink: {},
       duration: '',
       content: '',
       mainImage: Event<YYMMDD>Image,
       media: [],
       images: [],
       categories: [
           { name: '<e.g. Workshop>' },
           { name: '<e.g. Offline>' },
           { name: '<e.g. AI>' },
       ],
   },
   ```

## Step 6 — register in BlogData.jsx

Edit `components/Blog/BlogData.jsx`:

1. Add image import near the other event imports.
2. Add an entry at the **top** of `events.posts`:
   ```js
   {
       title: '<Event title>',
       slug: '../events/<YYMMDD>',
       description: '',
       keywords: '',
       categories: [
           { name: '<e.g. Workshop>' },
           { name: '<e.g. Offline>' },
           { name: '<e.g. AI>' },
       ],
       date: '<Month Dth, YYYY>',
       postedBy: '',
       content: '',
       mainImage: Event<YYMMDD>Image,
       media: [],
       images: [],
       tags: []
   },
   ```

## Step 7 — verify build

```bash
npm run build
```

If the build fails, fix and re-run before reporting back. Do not skip.

## Step 8 — summary

Report:
- File path of the new event page
- Number of images registered (and bytes saved if conversion ran)
- The two data files updated
- Build status

Do **not** commit unless the user explicitly asks — they may want to keep the branch separate.
