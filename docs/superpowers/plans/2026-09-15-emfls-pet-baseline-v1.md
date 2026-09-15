# EMFLS Network Baseline v1 Implementation Plan

> **For agentic workers:** Execute this plan task-by-task while preserving the existing emfls-pet Astro structure.

**Goal:** Apply the network baseline to emfls-pet and improve the existing 15 guides without redesigning the site.

**Architecture:** Keep Astro static output, Markdown Content Collection, and the existing warm rounded UI. Centralize URL/SEO/accessibility behavior in the shared layout; keep sitemap generation in its existing endpoint and enrich only the selected guide content.

**Tech Stack:** Astro, TypeScript, Markdown, vanilla CSS/JavaScript.

**Spec:** User-provided EMFLS Network Baseline v1 request.

## Global Constraints

- Repository is `emfls-pet`; domain is `https://pet.emfls.com`; GA4 is `G-DS3JXX4VR6`.
- Do not modify other repositories, Cloudflare projects, AdSense, dependencies, or existing tools.
- Keep all 15 guides and exclude 404, search URLs, localhost, pages.dev, and other domains from sitemap.

### Task 1: URL and SEO baseline

- Modify `astro.config.mjs` to explicitly use `trailingSlash: 'always'`.
- Extend `src/layouts/Layout.astro` with optional noindex, OG/Twitter fields, theme color, and safe JSON-LD props while preserving production-only GA4.
- Add `WebSite` JSON-LD on the homepage and `Article` plus `BreadcrumbList` on guide detail pages using only real guide data.

### Task 2: Accessibility baseline

- Add a skip link, `aria-labelledby`/semantic labels where useful, keyboard-visible focus, touch-sized controls, and reduced-motion CSS in the shared layout.
- Preserve native form semantics on guides and tools; add explicit progress semantics only where it improves meaning.

### Task 3: Content and trust audit

- Audit all 15 Markdown guides for question-first answers, order of checks, avoidances, safety signals, and internal links.
- Substantively strengthen `dog-not-eating`, `cat-not-drinking`, and feeding-related guidance without diagnosis, prescriptions, or unsupported precise medical claims.
- Update `CONTENT_GUIDE.md` and `editorial-policy.astro` with the resulting quality and source rules.

### Task 4: Documentation and verification

- Record baseline decisions, audited and strengthened guides, and QA in `PROJECT_HISTORY.md`; update `TASKS.md` truthfully.
- Run `npm run check`, `npm run build`, static sitemap/URL checks, and production endpoint checks where available.
