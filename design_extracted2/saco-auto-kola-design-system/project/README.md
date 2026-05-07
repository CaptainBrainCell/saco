# SACO Autoškola — Design System

Family-run driving school in Žiar nad Hronom, Slovakia, operating since 2003. Trains drivers for cars (Group B) and motorcycles (A, A2, A1), and runs a children's traffic playground (detské dopravné ihrisko).

The brand voice is confident, human, Slovak — never corporate, never SaaS-flavoured. The site should feel like a real local business that has been doing its job well for two decades, not a generated landing page.

## Sources

This design system was authored from a written brief (no codebase, no Figma). All decisions trace back to that brief — see CONTENT FUNDAMENTALS and VISUAL FOUNDATIONS below for the canonical rules.

Real contact details (used everywhere in mocks):

- Adresa: Rudenkova 816/19, 965 01 Žiar nad Hronom
- Telefón: 0905 650 761, 0905 589 441
- E-mail: info@saco.sk, autoskola@saco.sk
- Facebook: facebook.com/autoskola.saco
- IČO: 46008101 — SACO s.r.o., od 2003

## Index

- `colors_and_type.css` — base + semantic tokens, all component CSS, `.road-line-h/v` signature element
- `fonts/` — (Google Fonts: Plus Jakarta Sans + Inter, loaded from CDN; no local files yet)
- `assets/` — logo SVGs (light + dark), favicon
- `preview/` — Design System tab cards (colors, type, components, brand)
- `ui_kits/website/` — high-fidelity recreation of the marketing site
- `SKILL.md` — Agent Skill manifest for downloadable / Claude Code use

## CONTENT FUNDAMENTALS

**Language:** Slovak only. No English UI strings, no anglicisms ("level up", "skill up", "discover"). No corporate copywriting. Numbers use Slovak conventions (3 500 kg, not 3,500).

**Tone:** confident, human, factual. Prefer concrete over poetic — *"Osobné automobily do 3 500 kg"* beats *"Tvoja brána k slobode na kolesách"*. Avoid LinkedIn slogans like *"Sadni si za volant. Po svojom."* or *"Tvoja cesta začína tu."*

**Person mix (deliberate, idiomatic Slovak):**
- **Tykanie** in CTAs, hero, button labels, badges: *Prihlás sa, Vyber si, Zisti viac, Mám záujem*.
- **Vykanie** in descriptive body copy: *Naučíme vás, Pripravíme vás, Ponúkame vám*.

This split mirrors how a real Slovak driving school talks to 17–25-year-olds (B, A1, A2) and 25–50-year-olds (A, kondičné jazdy) at the same time.

**Casing:** sentence case for headings (*Otvárame nový kurz skupiny B*). UPPERCASE only for eyebrow labels (*PREČO MY*, *NOVÝ KURZ*) and the SACO wordmark.

**Emoji:** never in prose, body, buttons, or nav. Allowed only inside pulsing announcement badges (*🚦 Nový kurz*). No 🚗 🏍 💳 in social-proof rows — use plain text separated by middots: *Od roku 2003 · 5 000+ absolventov · Žiar nad Hronom*.

**Numbers:** tabular figures (`font-feature-settings: "tnum"`) for stats and dates. Slovak month names lowercase: *15. november 2025*.

**Examples (good vs bad):**

| Good | Bad |
|---|---|
| Prihlás sa na kurz | Začni svoju cestu |
| Naučíme vás bezpečne jazdiť | Level up your driving skills |
| Cena na vyžiadanie | Get a custom quote 🚀 |
| Od 17 rokov | Available from age 17 ✨ |

## VISUAL FOUNDATIONS

**Palette philosophy.** The page alternates light and dark sections vertically. Navy (`--bg-dark #0E1B2E`) anchors the design — hero, "Prečo my", contact CTA, footer. Amber (`--accent #F59E0B`) is signal-only: the dot in the logo, the dashed road-line motif, CTAs sitting on dark backgrounds, and the "Nový kurz" badge. Blue (`--primary #2563EB`) is the action colour — buttons, icons, focus rings, course-card stripes.

Section rhythm (top to bottom): white nav → dark hero → soft stat strip → white courses → soft process → dark "why us" → white pricing → soft playground → dark contact → dark footer.

**Type.** Plus Jakarta Sans for headings, eyebrows, stats, and buttons; Inter for body, forms, footer. Hero h1 is `clamp(3rem, 7vw, 5.5rem) / 800 / -0.02em`, tight line-height 1.05. Body sits at 16–17px / 1.65. Eyebrows are 0.875rem 700 uppercase with 0.12em tracking, coloured `--primary` on light or `--accent` on dark, underlined by a 40px dashed road-line.

**Signature element — the road-line.** A 3px dashed amber stripe that mimics a road's centre line (`linear-gradient(90deg, var(--accent) 60%, transparent 60%)` with a 24px tile). It appears in exactly four places: under the hero h1 (~120px), under every section eyebrow (~40px), as a footer divider (full width), and vertically between steps in the "Postup" timeline. Nowhere else.

**Backgrounds.** Solid colours only — no gradient meshes, no floating blobs, no glassmorphism, no backdrop-filter. The hero uses a real photographic image (atmospheric car/motorcycle from Unsplash) on top of `--bg-dark`. Section backgrounds are flat `--bg`, `--bg-soft`, or `--bg-dark`.

**Borders & corners.** 1px `--border` on light cards, `rgba(255,255,255,.08)` on dark cards. Border-radius 16px on cards, 10px on buttons and inputs, 999px on pill tags. No double-borders, no inset shadows.

**Shadows & elevation.** Almost none. Cards lift via `translateY(-3px)` + border-colour change on hover, not via shadow. The only acceptable shadow is a subtle `0 1px 2px rgba(0,0,0,.04)` under the sticky nav once it scrolls.

**Hover & press.** 200ms ease-out. Cards: lift 3px, border darkens to `--border-hover`. Buttons: background swaps to the `-hover` token, no scale, no shine sweep, no glow. Press state: same as hover, no separate active style.

**Focus.** `outline: 2px solid var(--primary); outline-offset: 2px;` on every interactive element. Always visible.

**Animation.** Minimum, not maximum. Allowed: section fade-in on scroll (Intersection Observer, 500ms ease-out, opacity only, **no slide**, fires once), button/card hover transitions, smooth scroll on nav anchors, a single pulsing dot in the "Nový kurz" badge. **Forbidden:** parallax, mouse-following blobs, count-ups, shine sweeps, scale on hover, custom cursors, scroll-jacking, glassmorphism on nav, Awwwards-style reveals. Respect `prefers-reduced-motion`.

**Imagery vibe.** Real photography, slightly cool, dramatic light — wet asphalt, headlights at dusk, motorcycle in motion. Never stock-cheerful. Never illustrated cars. If a photo isn't available, use a richly-layered SVG composite (≥80 lines, gradients, perspective, halo light) — never a flat outline car icon.

**Layout.** Container max-width 1200px, padding `clamp(20px, 4vw, 40px)`. Section vertical padding `clamp(64px, 8vw, 120px)`. Grid gap 24px mobile / 32px desktop. Standard 4-column grid for "Prečo my" — no bento.

**Spacing rhythm inside a section:** eyebrow → h2 = 12px · h2 → road-line = 16px · road-line → subheading = 24px · subheading → content = 48–64px.

**Cards.** Light card = white bg, 1px `--border`, 16px radius, 32px padding (24px mobile). Course card = same + 4px vertical `--primary` stripe on the left that animates to a 4px top border on hover. Dark card (in "Prečo my") = `--bg-dark-2` bg, `rgba(255,255,255,.08)` border, slightly lighter on hover.

**Transparency & blur.** Used sparingly: backdrop fade behind the popup modal (`rgba(15,15,20,.5)` + light blur), `rgba(255,255,255,.10)` ghost-button hover on dark. Never on the nav.

**Accessibility.** WCAG AA contrast verified for navy/white pairs. Semantic HTML5 landmarks. `aria-label` on icon-only buttons. Form labels via `htmlFor`. Reduced-motion respected.

## ICONOGRAPHY

No custom icon font is shipped with this brand. Icons are kept to a minimum — the design leans on typography and the road-line motif rather than icon decoration.

**Where icons appear:**
- Course cards — one icon per card (car, motorcycle), in a 56×56 filled circle of `--primary`.
- "Prečo my" cards — small amber icons (24px) above each card title.
- Footer — Facebook glyph, phone, email.
- Form inputs — none (labels do the work).

**Icon set used:** [Lucide](https://lucide.dev) via CDN — its hairline (1.5–2px) stroke matches the brand's restraint. Loaded as inline SVG copies in `assets/icons/` so they can be recoloured per context. **This is a substitution flagged for review** — the brief does not name an icon set; Lucide was chosen for stroke weight + Slovak-friendly neutrality. Swap if you have a preferred set.

**Emoji.** Permitted only inside the pulsing announcement badge (e.g. `🚦 Nový kurz`). Forbidden in prose, buttons, nav, social-proof rows.

**Unicode characters as separators.** Middot `·` is the canonical separator in social-proof rows and footer meta. No bullets, no slashes.
