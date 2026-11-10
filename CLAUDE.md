# CLAUDE.md — ahmedmeid.com

Personal website and technical blog of **Ahmed Mohamed Eid** (أحمد محمد عيد), Senior Solutions Architect specialized in  Data & AI, Riyadh.
Live at https://ahmedmeid.com and https://www.ahmedmeid.com.

## Stack and hard constraints

- **Astro 4.0.2** static site, based on the **Astrofy** template (MIT, last updated Jan 2024), with **Tailwind CSS 3 + daisyUI 4** and `@tailwindcss/typography`.
- **Package manager: pnpm 9, always with the lockfile.**
  - Install: `npx -y pnpm@9 install --frozen-lockfile`
  - Dev server: `npx -y pnpm@9 run dev` (http://localhost:4321)
  - Build: `npx -y pnpm@9 run build` · Preview: `npx -y pnpm@9 run preview`
  - **Never run `npm install`.** npm ignores `pnpm-lock.yaml`, pulls newer plugins (e.g. `@astrojs/sitemap`) that are incompatible with Astro 4, and the build breaks.
- **Do not upgrade dependencies** (Astro, daisyUI, Tailwind, plugins) unless explicitly asked. An Astro 4 → 7 migration is a separate, planned task.
- Do not add new dependencies without asking first. Prefer plain Astro components and Tailwind/daisyUI classes.
- **Hosting:** Cloudflare Workers Static Assets, deployed by Cloudflare Workers Builds on every push to `main` (GitHub: `ahmedmeid/ahmedmeid-site`).
  - Cloudflare build command: `npx -y pnpm@9 install --frozen-lockfile && npx -y pnpm@9 run build`
  - Deploy command: `npx wrangler deploy`
  - `wrangler.jsonc` must keep `"name": "ahmedmeid-site"` and `assets.directory: "./dist"`.
- `.wrangler/`, `dist/`, `node_modules/`, `.astro/` are never committed.

## Definition of done for any change

1. `npx -y pnpm@9 run build` completes with no errors.
2. No template leftovers introduced or left behind in touched files (Manuel Ernesto, Astrofy demo text, lorem ipsum, demo links, store items).
3. Pages work at phone width (no horizontal scroll) and in both light and dark themes.
4. Text contrast meets WCAG AA (4.5:1 body text) in both themes.
5. Summarize what changed and which files; do not commit or push unless asked.

## Design system

Direction: calm, typography-led, reading-first. Personality comes from type, one accent colour, and **illustrated architecture diagrams on a blueprint grid** (the site's signature, inspired by Jay Alammar's illustrated explanations). No gradient washes, no emoji in UI, no stock-template look.

### Colours (daisyUI themes in `tailwind.config.cjs`)

Theme `ahmedmeid` (default, light) and `ahmedmeid-dark`. The site always starts in light theme; a moon/sun toggle fixed to the top-right corner of every page (`ThemeToggle.astro`) switches to dark by setting `data-theme="ahmedmeid-dark"` on `<html>` and remembers the choice in `localStorage` ("theme": "light" | "dark"). There is no `prefers-color-scheme` auto-detection — `BaseHead.astro` applies the saved choice (if any) before first paint, and re-applies it on every Astro View Transitions swap, so there's no flash of the wrong theme on load or on client-side navigation.

| Token | Light | Dark |
| --- | --- | --- |
| primary (accent, buttons, links) | `#2A5BD7` | `#7EA2FF` |
| secondary (navy, badges) | `#1E3A8A` | `#A9BFFF` |
| base-100 (page) | `#FCFCFB` | `#0F1115` |
| base-200 (sidebar, blueprint bg) | `#F3F6FD` | `#151923` |
| base-300 (borders, active item) | `#E3E9F7` | `#232A3A` |
| base-content (text) | `#16181D` | `#E7EAF0` |

Use daisyUI semantic classes (`btn-primary`, `text-primary`, `bg-base-200`, `badge-secondary`…), never hard-coded hex values in components. Blueprint grid: the `.blueprint` class in `src/styles/global.css`.

### Typography

IBM Plex family, loaded from Google Fonts in `src/components/BaseHead.astro`:
- `font-sans` = IBM Plex Sans (+ IBM Plex Sans Arabic for Arabic) — headings, UI.
- `font-serif` = IBM Plex Serif — article body text (`PostLayout.astro`).
- `font-mono` = IBM Plex Mono — code, dates, small uppercase labels.
Arabic text: wrap in `<span lang="ar" dir="rtl">`. Keep layouts RTL-safe (logical properties, flex/grid, no hard-coded left/right where avoidable) — an Arabic edition is planned.

### Photo

`public/profile.webp` — Ahmed's portrait (navy blazer, white shirt). It should be prominent: large, beside the headline at the top of the home page (like samnewman.io), not only a small sidebar avatar. Always use `astro:assets` `<Image>` with `alt="Ahmed Mohamed Eid"`.

## Content: source of truth

Use only these facts. **Never invent** metrics, clients, dates, testimonials, or project details. If something is missing, insert a visible `[TODO: …]` placeholder and list it in your summary.

**Positioning (from LinkedIn):** Most organizations know they need AI, but very few know where to start or how to make it pay off. Ahmed guides organizations from initial AI ambitions to measurable production value: identifying the most profitable use cases, planning the infrastructure, building robust pipelines, and deploying with strict security and monitoring. Blend of deep technical expertise and 18+ years of enterprise business judgment. Closing call to action: ready to move past AI exploration and start driving real outcomes? Let's talk.

**Headline:** AI Solutions Architect · Generative AI, RAG & Agentic Systems · Enterprise AI Delivery.

**Experience**
- AI & Cloud Solutions Architect — TONOMUS (NEOM), Riyadh · Oct 2021–present. Embedded with the Saudi Public Investment Fund (PIF) AI solutions team: architected and hands-on built an end-to-end enterprise GenAI system on Palantir Foundry & AIP — RAG (vector, hybrid, graph-based retrieval), ASR ingestion/transcription workflow, agentic workflows, RBAC, lineage, telemetry; LLM evaluation and regression-testing suites (retrieval relevance, groundedness, latency, cost); led and mentored a team of Saudi fresh-graduate data engineers. Across NEOM sectors (Food, Environment, Energy & Water, Hotels, University of NEOM): enterprise AI and cloud reference architectures, landing zones, HLD/LLD, NFR and cost/option analyses, procurement and technology advisory, AI discovery workshops.
- Solution Architect — Mobily, Riyadh · Jul 2017–Sep 2021.
- Senior Consultant — Ericsson, Sulaymaniyah · Jul 2013–Jun 2017 (BSCS iX billing transformation for Asiacell).
- Consultant — Atos, Rabat · Aug 2012–Jun 2013 (Maroc Telecom).
- Software Engineer — Xpress Integration & Ericsson, Cairo · Jul 2008–Jul 2012.
- Earlier career summary: telecom BSS/OSS domain expert across four countries (Egypt, Morocco, Iraq, Saudi Arabia).

**Education**
- M.Sc. in Artificial Intelligence — University of Texas at Austin, Sep 2024–May 2026, GPA 3.93/4.00. **Completed** (graduated May 2026) — don't describe it as in progress.
  - Medical imaging diagnostic pipeline: brain-cancer classification with Grad-CAM/SHAP explainability; structured error analysis reduced false positives by 13%.
  - Vision-language model fine-tuning for visual question answering: preprocessing, augmentation, experiment tracking, structured evaluation.
- Postgraduate Diploma in Software Engineering — ITI, Cairo, 2007–2008.
- B.Sc. in Mathematics and Computer Science — Menoufia University, 2001–2005.

**Certifications**
- Google Cloud: Professional Machine Learning Engineer, Professional Data Engineer, Professional Cloud Architect, Generative AI Leader, Associate Cloud Engineer.
- AWS: Solutions Architect – Professional, DevOps Engineer – Professional, Solutions Architect – Associate, Cloud Practitioner.
- Palantir: Foundry Data Engineer Associate, Foundry Application Developer Associate, Foundry & AIP Builder.

**Side builds (AI-assisted):** kumo (AWS-like mini cloud a developer can start in 15 minutes) · ibex (iPhone Backup Explorer) · AI Tender Evaluation (document analysis and decision support for evaluating technical proposals submitted to an RFP) · Connected Vehicles (in progress: Raspberry Pi + GSM/GPS + OBD-II telemetry to an IoT platform).

**Languages:** Arabic (native), English (fluent).

**Links:** LinkedIn https://www.linkedin.com/in/eidam/ · GitHub https://github.com/ahmedmeid · Twitter: https://x.com/ahmedmeid · Email: ahmedmeid@gmx.com . **Never publish a phone number.**

**Confidentiality:** describe client work (PIF, NEOM) only at the level above. No internal names, screenshots, architecture specifics, or data beyond what is stated here.

**Archive:** first blog, Oct 2009 (ameid.blogspot.com): "Finally I created my blog", "ITI memories", and an Arabic opinion post. Ahmed decides which to import; never import without asking.

## Site structure (target)

- Home: photo + headline + CTA ("Let's talk", "See selected work") · credentials strip · "How I take AI from idea to production" (4 steps) · Selected work · Latest writing · short About + career timeline · contact CTA.
- Work/Projects · Writing (blog, by topic: AI strategy, RAG & evaluation, Architecture, Data platforms, Builds) · CV · Contact (mailto + LinkedIn).
- Remove the template's **Store** and repurpose **Services** as "How I work" / engagements (only if Ahmed confirms consulting is offered).

## Writing conventions

- Voice: first person, plain, specific, confident without hype. Short sentences. British/American spelling: American.
- Blog posts live in `src/content/blog/` with frontmatter per `src/content/config.ts`. Every architecture post gets at least one diagram in the blueprint style.
- Never put draft or placeholder posts live: use `draft`-style handling or keep them out of `src/content/blog/` until Ahmed approves.
