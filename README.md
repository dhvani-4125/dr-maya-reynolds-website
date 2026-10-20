# Dr. Maya Reynolds, PsyD — Part 2 redesign

A redesigned homepage using the supplied Dr. Maya Reynolds profile as the source of truth for therapist-specific content. The page includes local SEO copy for Santa Monica, three service areas, approach/modalities, in-person and telehealth details, FAQs, and contact calls to action.

## Run locally
1. Install Node.js (LTS).
2. Open this project folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Images
The included portrait and office photographs came from the supplied profile image pack. They are stored locally in `public/assets/` so they don't rely on external image URLs.

## Content notes
The profile provides an office address, but does not provide a phone number or a real email address. The contact CTA therefore opens an email draft to a clearly marked placeholder (`hello@mayareynolds.example`); replace it with a real practice contact before publishing. Do not treat the fictional therapist profile as a real clinical service.


## Design refinement
The current homepage uses Libre Baskerville for display headings, Lato for body copy, and the approved Powder Blue & Warm White palette. The Our Office section uses the two supplied profile office images locally. The copyright year is intentionally fixed at 2026 to avoid a dynamic Date expression during Next.js prerendering.
