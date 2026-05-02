---
description: Create a new event after-report page. Converts new event PNGs to WebP, builds /pages/events/<YYMMDD>.jsx, and registers the event in PortfolioData.jsx and BlogData.jsx so it appears on /events and the homepage Event Reports section.
argument-hint: [Luma URL or event title + date + photo basename]
---

# Event after-report workflow

The user is creating an after-report for an event that just happened. Follow the steps below in order. Confirm with the user only when something is genuinely ambiguous — otherwise proceed.

User input: $ARGUMENTS

## Step 1 — gather event facts

If the user gave a Luma URL, fetch it with WebFetch to extract: title, date, venue, registered count. If they gave a free-form description, parse it. You still need the user to confirm:

- Event title (and optional subtitle)
- Date (`YYYY-MM-DD`) → derive `YYMMDD` for filenames
- Venue
- Actual attendees (vs registered on Luma)
- Categories (e.g. Workshop / Hackathon / Meetup, Offline / Online, AI / Design / etc.)
- Partners / co-hosts
- Image basename pattern (default `event<YYMMDD>_big1`, `_big2`, `_small1`, `_small2`, `_small3` — confirm)
- Which image is the group photo / 集合写真 (defaults to `_big2`)

Ask only the items you cannot confidently infer.

## Step 2 — verify and convert images

Run from the repo root:

```bash
ls public/images/events/event<YYMMDD>_*.{png,webp,jpg,jpeg} 2>/dev/null
```

If any `.png` files exist, convert them to WebP and delete the source:

```bash
npm run convert:events -- --delete
```

If the user already added `.webp` files directly, skip the conversion. The script is idempotent — files with an existing `.webp` sibling are skipped.

After conversion, every event image should be `.webp`. If anything else remains (`.jpg`, `.jpeg`, etc.) flag it and ask before proceeding.

## Step 3 — read the most recent event report as a template

Read `pages/events/260427.jsx` (or whichever is the most recent dated file in `pages/events/`) so the new page matches the exact JSX structure and tone the codebase already uses.

## Step 4 — create the new event page

Write `pages/events/<YYMMDD>.jsx` following the template. Required:

- Component name `Event<YYMMDD>`, default-exported
- All image imports use `.webp`
- `placeholder="blur"` on every `<Image>` (this works automatically on static WebP imports)
- The group photo goes in the more prominent slot of the 2-big-image row
- Body copy in **English** (matches site convention — see 260427.jsx, 260308.jsx)
- Escape `'` as `&apos;` and `"` as `&quot;` inside JSX text
- 4-space indentation, JSX style matching neighboring files
- Lightbox state + `onClick` wrappers around the big images so users can expand them

The structure (mirror 260427.jsx):
1. Hero h1 + 1-paragraph subtitle
2. 4 fancy-box cards: Category / Date / Website / Partners
3. 3 small images in a row
4. Prose section: "Overview" (~2-3 paragraphs)
5. Prose section: "Featured: <something specific>" (~2 paragraphs)
6. 2 big images (group photo on the more prominent side)
7. Prose section: "Featured: <another specific thing>" (~2 paragraphs)
8. Prose section: "Best Practices / Takeaways" (~3 short paragraphs with bolded leads)
9. Prose section: "Closing" (thanks, what's next, sign-off)

Voice: energetic, concrete, lots of specifics, no buzzword soup. Match the level of detail in the existing reports.

## Step 5 — register in PortfolioData.jsx

Edit `components/Portfolio/PortfolioData.jsx`:

1. Add an import near the other event imports (alphabetical-ish by date):
   ```js
   import Event<YYMMDD>Image from '@/public/images/events/event<YYMMDD>_<groupPhoto>.webp'
   ```
2. Add a new entry at the **top** of `portfolioList.projects`:
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

1. Add an import near the other event imports:
   ```js
   import Event<YYMMDD>Image from '@/public/images/events/event<YYMMDD>_<groupPhoto>.webp'
   ```
2. Add a new entry at the **top** of `events.posts`:
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

If the build fails, fix and re-run before reporting back. Do not skip this step.

## Step 8 — summary

Report:
- File path of the new event page
- Number of images registered (and bytes saved if conversion ran)
- The two data files updated
- Build status

Do **not** commit unless the user explicitly asks. The branch they're on may be a feature branch they want to keep separate.
