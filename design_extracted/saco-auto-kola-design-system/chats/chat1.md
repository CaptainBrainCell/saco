# Website Layout

_Started 2026-05-05 20:34 UTC_

---

## User



## Assistant

_[tool: update_todos]_

_[tool: set_project_title]_

_[tool: list_files]_

Empty project — I'll build everything from the brief. Let me start with the foundational files.

_[tool: write_file]_

_[tool: write_file]_

Now let me build the logo, preview cards, and UI kit.

_[tool: write_file]_

_[tool: write_file]_

Now I'll build the preview cards in batches.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: register_assets]_

_[tool: update_todos]_

_[tool: snip]_

Now the UI kit — the marketing website. I'll structure it as small JSX component files plus an interactive `index.html`.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

Rozumiem — jeden samostatný `index.html`, FTP-ready, dôsledne podľa nášho design systému. Pôjdem na to. Žiadne otázky, podklady mám.

_[tool: update_todos]_

_[tool: write_file]_

## Assistant

## Assistant

_[tool: snip]_

_[tool: write_file]_

_[tool: update_todos]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

_[tool: snip]_

Hotovo. `SACO.html` je jediný súbor — stačí nahrať na FTP, žiadne build kroky.

**Čo je vnútri**
- Sticky white nav s SACO logom (wordmark + amber bodka + dashed road-line) + "Nový kurz" pulz + Prihláška CTA + mobilné burger menu
- Hero: navy + Unsplash fotka, h1 *„Vodičák, ktorý ti sadne."*, dlhý road-line, dual CTA, side-by-side prihlasovací formulár
- Stat strip · 4 kurzové karty (B, A, A2, A1) s vertikálnym primary stripom čo na hover „rozteká" navrch
- Postup — 4-stupňová timeline so sticky SVG dekoráciou (pneumatikové stopy + amber centreline)
- Tmavá *Prečo my* sekcia (víkendy, splátky, individuálny prístup, kondičné jazdy)
- Cenník („Cena na vyžiadanie" — bezpečné voči zmenám), detské ihrisko, plný kontakt s OSM mapou + form
- Pulsing pop-up „Nový kurz" s `localStorage` pamätaním, ESC + backdrop close, focus trap, prelinkovanie do kontakt formulára
- Plne respektuje `prefers-reduced-motion`, AA kontrast, focus rings, sk lokalizácia, no emoji v prose

**Editácia obsahu** — všetky kľúčové texty sú priamo v HTML; nový kurz konfiguruje objekt `NEW_COURSE` v `<script>` na konci. Hero pozadie môžeš vymeniť za vlastnú fotku v `.hero-photo { background-image }`.

**Caveats**
- Zachoval som „Cena na vyžiadanie" namiesto vymyslených súm — nahraď keď budú aktuálne.
- Stat „100% pripravenosť na skúšku" je zástupné — uprav alebo nechaj.
- Form `submit` zatiaľ len ukazuje toast, neposiela e-mail. Na ostro pridaj action endpoint (Formspree, Netlify Forms, vlastný PHP `mailto:` skript).

## User

Verifier agent check completed

## Assistant

Fixing the hero form header overlap.

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: done]_

Hero form header opravený — emoji odstránená, žiadne ďalšie wrapping konflikty.

## User

now build out the single page website

## Assistant

The single-page website is already built — `SACO.html` is the complete, FTP-ready single-page site with all sections (hero, stats, kurzy, postup, prečo my, cenník, ihrisko, kontakt, footer, pop-up modal). The hero form header fix from the last verification round is in place.

If you'd like me to extend it further — add a real photo gallery, testimonials section, FAQ accordion, or wire up the forms to an actual mail endpoint — let me know which.

