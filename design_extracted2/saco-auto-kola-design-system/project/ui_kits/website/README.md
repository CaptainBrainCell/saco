# SACO Autoškola — Website UI Kit

High-fidelity recreation of the saco.sk marketing site. Single-page, alternating light/dark sections, Slovak copy, real contact details.

## Files

- `index.html` — full assembled page; clickable nav, working "Nový kurz" modal, working contact form (mock), reduced-motion-aware fade-in
- `Nav.jsx` — sticky white top navigation
- `Hero.jsx` — dark hero with photo + mini sign-up form
- `StatStrip.jsx` — soft 4-number stat row
- `Courses.jsx` — 4 course cards with vertical primary stripes
- `Postup.jsx` — vertical timeline with road-line-v between numbered steps
- `WhyUs.jsx` — dark section, 4 cards with amber icons
- `Pricing.jsx` — 4-column pricing grid
- `Playground.jsx` — split section for detské dopravné ihrisko
- `ContactCTA.jsx` — dark section, info left, white form box right
- `Footer.jsx` — dark footer, 3 columns + road-line separator
- `NewCourseModal.jsx` — popup driven by the `NEW_COURSE` config object
- `Icons.jsx` — small inline SVG icon set (Lucide-derived)

## How to run / preview

Open `index.html` directly. All scripts load from CDN (React 18.3.1 + Babel standalone, pinned).

## Behaviours mocked

- Nav scrolls smoothly to anchors.
- "Nový kurz" link reopens modal; localStorage `saco_popup_seen_2025-11-15` suppresses auto-show.
- Modal closes via ×, backdrop click, ESC.
- "Mám záujem" prefills the contact form subject and scrolls there.
- Hero mini-form posts to the contact section as well (fake — just toasts a success state).
- Section fade-in via IntersectionObserver, opacity-only, fires once, respects `prefers-reduced-motion`.
