---
package: addy
path: ../addy-external/spec-driven-development.md
type: external-doc
bytes: 25104
unit: inv-addy-29
---

# ../addy-external/spec-driven-development.md

## Purpose — required, verbatim
> "Creates specs before coding. Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries when requirements are unclear, ambiguous, or only exist as a vague idea." — ../addy-external/spec-driven-development.md:1, 5

Triggering condition:
> "Starting a new project, feature, or significant change." — ../addy-external/spec-driven-development.md:5

Phase summary / sidebar blurb:
> "Clarify what to build before a line of code is written." — ../addy-external/spec-driven-development.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/spec-driven-development.md:13-14

## Design intent — required
Serves as the public web catalog, discovery portal, and installation landing page for Addy Osmani's `spec-driven-development` skill within the `agent-skills` ecosystem (`skills.addy.ie/skills/spec-driven-development/`). It provides human engineers and AI agent developers with a high-level summary of the skill's purpose, lifecycle positioning (`addy:Define` phase, `/spec` slash command), trigger conditions ("Starting a new project, feature, or significant change"), structural anatomy (the standardized 6-part workflow: Overview, When to Use, Process, Rationalizations, Red Flags, Verification), related skills in the Define phase (`interview-me`, `idea-refine`), and CLI installation commands via Vercel's open `skills` CLI (`npx skills add ...`). Without this page, developers and agent creators discovering `agent-skills` via web search or social links would lack an interactive portal summarizing the skill's metadata, command mapping, and single-skill versus full-suite installation paths prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Define

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/spec-driven-development/` — ../addy-external/spec-driven-development.md:1
- Upstream skill specification from `skills/spec-driven-development/SKILL.md` consumed at site build time — ../addy-external/spec-driven-development.md:1, 5, 10, 11
- Prerequisite trigger condition: "Starting a new project, feature, or significant change." — ../addy-external/spec-driven-development.md:5
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/spec-driven-development.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono via Google Font CDN (`fonts.googleapis.com`, `fonts.gstatic.com`) — ../addy-external/spec-driven-development.md:1
- External telemetry script: `/.netlify/scripts/rum` — ../addy-external/spec-driven-development.md:19
- Sibling skills metadata in `Define` phase: `interview-me`, `idea-refine` — ../addy-external/spec-driven-development.md:12

## Outputs — required
- Rendered HTML web page with Open Graph and Twitter Card metadata for search indexing and social sharing — ../addy-external/spec-driven-development.md:1, 5
- Copyable terminal CLI installation commands:
  - `npx skills add addyosmani/agent-skills --skill spec-driven-development` — ../addy-external/spec-driven-development.md:8
  - `npx skills add addyosmani/agent-skills` — ../addy-external/spec-driven-development.md:8, 15
- Hyperlinks to:
  - Canonical GitHub `SKILL.md`: `https://github.com/addyosmani/agent-skills/blob/main/skills/spec-driven-development/SKILL.md` — ../addy-external/spec-driven-development.md:10-11
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/spec-driven-development.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/spec-driven-development.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/spec-driven-development.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/spec-driven-development.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/spec-driven-development.md:15
  - Author GitHub profile: `https://github.com/addyosmani` — ../addy-external/spec-driven-development.md:16
  - Sibling skill pages: `/skills/interview-me/`, `/skills/idea-refine/` — ../addy-external/spec-driven-development.md:12
  - Site navigation links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/spec-driven-development.md:5, 12, 15
  - Sitemap: `/sitemap-index.xml` — ../addy-external/spec-driven-development.md:1
  - Favicon: `/favicon.svg` — ../addy-external/spec-driven-development.md:1
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/spec-driven-development.md:8
  - Mobile navigation drawer toggle — ../addy-external/spec-driven-development.md:5
  - IntersectionObserver scroll reveal effects (`.reveal`) — ../addy-external/spec-driven-development.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/spec-driven-development.md:19
- Files produced: none (static web documentation page)

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill spec-driven-development — ../addy-external/spec-driven-development.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/spec-driven-development.md:8, 15
- command /spec — ../addy-external/spec-driven-development.md:5, 12
- skill skills/spec-driven-development/SKILL.md — https://github.com/addyosmani/agent-skills/blob/main/skills/spec-driven-development/SKILL.md — ../addy-external/spec-driven-development.md:10-11
- skill skills/interview-me/ — /skills/interview-me/ — ../addy-external/spec-driven-development.md:12
- skill skills/idea-refine/ — /skills/idea-refine/ — ../addy-external/spec-driven-development.md:12
- doc README.md — https://github.com/addyosmani/agent-skills — ../addy-external/spec-driven-development.md:5
- doc CONTRIBUTING.md — https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md — ../addy-external/spec-driven-development.md:15
- directory evals — https://github.com/addyosmani/agent-skills/tree/main/evals — ../addy-external/spec-driven-development.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/spec-driven-development.md:6
- external-link https://addyosmani.com — ../addy-external/spec-driven-development.md:15
- external-link https://github.com/addyosmani — ../addy-external/spec-driven-development.md:16
- script /.netlify/scripts/rum — ../addy-external/spec-driven-development.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:204`. Not linked or invoked by any file in `sources/addy/`.)*

## Concepts named — required, verbatim
- `spec-driven-development` — ../addy-external/spec-driven-development.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/spec-driven-development.md:1, 5, 8, 12, 15 — used here
- `spec` — ../addy-external/spec-driven-development.md:1, 5 — used here
- `PRD` — ../addy-external/spec-driven-development.md:1, 5 — defined here
- `objectives` — ../addy-external/spec-driven-development.md:1, 5 — used here
- `commands` — ../addy-external/spec-driven-development.md:1, 5, 12 — used here
- `structure` — ../addy-external/spec-driven-development.md:1, 5, 8 — used here
- `code style` — ../addy-external/spec-driven-development.md:1, 5 — used here
- `testing` — ../addy-external/spec-driven-development.md:1, 5 — used here
- `boundaries` — ../addy-external/spec-driven-development.md:1, 5 — used here
- `Geist` — ../addy-external/spec-driven-development.md:1 — used here
- `Geist Mono` — ../addy-external/spec-driven-development.md:1 — used here
- `Skills` — ../addy-external/spec-driven-development.md:5, 15 — used here
- `Docs` — ../addy-external/spec-driven-development.md:5, 15 — used here
- `Tutorials` — ../addy-external/spec-driven-development.md:5, 15 — used here
- `Lifecycle` — ../addy-external/spec-driven-development.md:5, 12, 15 — used here
- `Loops` — ../addy-external/spec-driven-development.md:5, 15 — used here
- `Teach` — ../addy-external/spec-driven-development.md:5, 15 — used here
- `Compare` — ../addy-external/spec-driven-development.md:5, 15 — used here
- `Define` — ../addy-external/spec-driven-development.md:5, 12 — used here
- `Define phase` — ../addy-external/spec-driven-development.md:5, 12 — used here
- `/spec` — ../addy-external/spec-driven-development.md:5, 12 — used here
- `Use when` — ../addy-external/spec-driven-development.md:5, 12 — used here
- `#spec` — ../addy-external/spec-driven-development.md:5 — defined here
- `#planning` — ../addy-external/spec-driven-development.md:5 — defined here
- `#requirements` — ../addy-external/spec-driven-development.md:5 — defined here
- `skills CLI` — ../addy-external/spec-driven-development.md:6 — used here
- `This skill only` — ../addy-external/spec-driven-development.md:8 — defined here
- `All skills` — ../addy-external/spec-driven-development.md:8 — defined here
- `npx skills add` — ../addy-external/spec-driven-development.md:8, 15 — used here
- `anatomy` — ../addy-external/spec-driven-development.md:9, 10 — defined here
- `Overview` — ../addy-external/spec-driven-development.md:10 — used here
- `When to Use` — ../addy-external/spec-driven-development.md:10 — used here
- `Process` — ../addy-external/spec-driven-development.md:10 — used here
- `Rationalizations` — ../addy-external/spec-driven-development.md:10 — used here
- `Red Flags` — ../addy-external/spec-driven-development.md:10 — used here
- `Verification` — ../addy-external/spec-driven-development.md:10 — used here
- `SKILL.md` — ../addy-external/spec-driven-development.md:10, 11 — used here
- `Command` — ../addy-external/spec-driven-development.md:12 — used here
- `More in the Define phase` — ../addy-external/spec-driven-development.md:12 — defined here
- `interview-me` — ../addy-external/spec-driven-development.md:12 — used here
- `idea-refine` — ../addy-external/spec-driven-development.md:12 — used here
- `one-question-at-a-time interview` — ../addy-external/spec-driven-development.md:12 — used here
- `requirements discovery` — ../addy-external/spec-driven-development.md:12 — defined here
- `structured divergent/convergent thinking` — ../addy-external/spec-driven-development.md:12 — used here
- `ideation discovery` — ../addy-external/spec-driven-development.md:12 — defined here
- `The lifecycle` — ../addy-external/spec-driven-development.md:15 — used here
- `Loop engineering` — ../addy-external/spec-driven-development.md:15 — used here
- `Teach & share` — ../addy-external/spec-driven-development.md:15 — used here
- `How it compares` — ../addy-external/spec-driven-development.md:15 — used here
- `Getting started` — ../addy-external/spec-driven-development.md:15 — used here
- `Claude Code` — ../addy-external/spec-driven-development.md:15 — used here
- `Codex` — ../addy-external/spec-driven-development.md:15 — used here
- `Cursor` — ../addy-external/spec-driven-development.md:15 — used here
- `Antigravity` — ../addy-external/spec-driven-development.md:15 — used here
- `Contributing` — ../addy-external/spec-driven-development.md:15 — used here
- `Evals framework` — ../addy-external/spec-driven-development.md:15 — used here
- `Addy Osmani` — ../addy-external/spec-driven-development.md:1, 16 — used here

## Structure
- `<head>` (line 1)
  - Character encoding, viewport, favicon, canonical URL, document title, meta descriptions, Open Graph metadata, Twitter card metadata, Google Fonts preconnect/stylesheet links, sitemap link, stylesheet link (`compare.BYu2_sXs.css`)
- `<style>` inline block (lines 2-4)
  - CSS styling for `.cmd` (command box) and `.skill-card` components
- `<link rel="stylesheet" href="/_astro/_slug_.sGV3LZnA.css">` (line 5)
- `<body data-astro-cid-5hce7sga>` (line 5)
  - `<a href="#main" class="skip-link">Skip to content</a>` (line 5)
  - `<header class="nav">` (line 5)
    - Brand mark and home link (`agent-skills`) (line 5)
    - Primary navigation links: `Skills`, `Docs`, `Tutorials`, `Lifecycle`, `Loops`, `Teach`, `Compare` (line 5)
    - Nav actions: GitHub repository link, "Get started" button, mobile hamburger toggle button (line 5)
  - `<nav class="nav-mobile">` (mobile navigation menu) (line 5)
  - Mobile menu toggle inline module script (line 5)
  - `<main id="main">` (line 5)
    - `<article class="detail">` (line 5)
      - `<div class="container detail-head">` (line 5)
        - Breadcrumb: `Skills / Define` (line 5)
        - Phase badges: `Define phase`, `/spec` (line 5)
        - Heading: `<h1>spec-driven-development</h1>` (line 5)
        - Summary: `<p class="detail-summary">` (line 5)
        - Use-when trigger box: `<div class="detail-when">` ("Use when: Starting a new project, feature, or significant change.") (line 5)
        - Topic chips: `#spec`, `#planning`, `#requirements` (line 5)
      - `<div class="container detail-body">` (line 5)
        - `<div class="detail-main">` (line 5)
          - `<section class="panel">` (Installation options) (line 5)
            - Heading: `<h2>Install just this skill</h2>` (line 5)
            - Panel lede linking to open skills CLI (lines 6-8)
            - Command widget: `This skill only` (`$ npx skills add addyosmani/agent-skills --skill spec-driven-development`) (line 8)
            - Command widget: `All skills` (`$ npx skills add addyosmani/agent-skills`) (line 8)
            - Clipboard copy button script (line 8)
          - `<section class="panel">` (Skill anatomy) (line 8)
            - Heading: `<h2>How this skill is structured</h2>` (line 8)
            - Lede: "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." (lines 9-10)
            - Anatomy list: `01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification` (line 10)
            - Call to action: "Read the full SKILL.md" link to GitHub (lines 10-11)
        - `<aside class="detail-side">` (Lifecycle sidebar) (line 12)
          - Heading: `<h3>Define phase</h3>` (line 12)
          - Blurb: "Clarify what to build before a line of code is written." (line 12)
          - Command mapping: `Command: /spec` (line 12)
          - Link: `See the full lifecycle →` (`/lifecycle/`) (line 12)
      - `<div class="container detail-related">` (Related skills section) (line 12)
        - Heading: `<h2>More in the Define phase</h2>` (line 12)
        - Skill card: `interview-me` (summary, trigger, tags) (line 12)
        - Skill card: `idea-refine` (summary, trigger, tags) (line 12)
  - `<footer class="footer">` (line 12)
    - Brand mark and tagline (lines 12-15)
    - Quick-add command: `npx skills add addyosmani/agent-skills` (line 15)
    - Column: `Product` (`Skills catalog`, `Tutorials`, `The lifecycle`, `Loop engineering`, `Teach & share`, `How it compares`, `Getting started`) (line 15)
    - Column: `Setup` (`Claude Code`, `Codex`, `Cursor`, `Antigravity`) (line 15)
    - Column: `Resources` (`GitHub ↗`, `Contributing ↗`, `Evals framework ↗`, `addyosmani.com ↗`) (line 15)
    - Copyright and author credits: `© 2026 agent-skills · MIT licensed`, `Built by Addy Osmani & contributors` (lines 15-18)
- Script blocks:
  - Mobile drawer toggle (line 5)
  - Copy command button (line 8)
  - Scroll reveal observer (line 18)
  - Netlify RUM analytics script container (`/.netlify/scripts/rum`) (line 19)

## Scripts — required if type is script or the skill ships scripts
- Documented CLI command: `npx skills add addyosmani/agent-skills --skill spec-driven-development`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills --skill spec-driven-development` — ../addy-external/spec-driven-development.md:8
  - **executed:** yes
  - actual command run: `mkdir -p /tmp/test-spec-verify && cd /tmp/test-spec-verify && npx --yes skills add addyosmani/agent-skills --skill spec-driven-development -y --copy && ls -la .agents/skills/spec-driven-development && rm -rf /tmp/test-spec-verify`
  - actual exit code: `0`
  - abridged stdout:
    ```text
    Agent detected — installing non-interactively
    Cloning repository…
    Repository cloned
    Found 25 skills
    Selected 1 skill: spec-driven-development
    Installation complete
    Installed 1 skill: ✓ spec-driven-development (copied) → ./.agents/skills/spec-driven-development
    Done!
    total 24
    -rw-r--r--@ 1 peterkloss  staff  12163 Sep  3 10:58 SKILL.md
    ```
  - documented exit codes: none documented on page
  - does the output match what the documentation claims? yes; resolves package and non-interactively copies `spec-driven-development/SKILL.md` (12,163 bytes).

- Documented CLI command: `npx skills add addyosmani/agent-skills`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills` — ../addy-external/spec-driven-development.md:8, 15
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills -l`
  - actual exit code: `0`
  - abridged stdout:
    ```text
    spec-driven-development

      Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea. Use when a single requirement spans several independently testable capabilities and needs decomposing into a capability map of modules before specifying.
    ...
    Use --skill <name> to install specific skills
    ```
  - documented exit codes: none documented on page
  - does the output match what the documentation claims? yes; resolves package and lists all 25 skills including `spec-driven-development`.

- Embedded inline JavaScript snippets:
  - Mobile drawer toggle (line 5, 1 line, DOM class toggle)
  - Clipboard copy handler (line 8, 1 line, `navigator.clipboard.writeText` with textarea fallback)
  - Scroll reveal observer (line 18, 1 line, `IntersectionObserver`)
  - Netlify RUM analytics beacon (line 19, external script source)
  - Execution context: Browser DOM runtime only.

## Defects — required
- `doc-drift` · ../addy-external/spec-driven-development.md:8-10 vs sources/addy/skills/spec-driven-development/SKILL.md:22-203 · The external web page claims the skill follows a generic 6-part anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`). In contrast, `SKILL.md` defines a 5-phase waterfall-style gated lifecycle (`Phase 0: Scope Check / Capability Map`, `Phase 1: Specify`, `Phase 2: Plan`, `Phase 3: Tasks`, `Phase 4: Implement`) and omits the operational core (capability decomposition, assumption surfacing prompt, 3-tier boundary system, reframing requirements, and living spec maintenance).
- `doc-drift` · ../addy-external/spec-driven-development.md:1, 5 vs sources/addy/skills/spec-driven-development/SKILL.md:1-246 · The external web page states the skill "Writes a PRD covering objectives, commands, structure, code style, testing, and boundaries...". The upstream `SKILL.md` never uses the term "PRD" anywhere; it exclusively specifies creating a "spec document" or "specification" (`# Spec: [Project/Feature Name]`, `SPEC-identity.md`, `SPEC-billing.md`).
- `doc-drift` · ../addy-external/spec-driven-development.md:5 vs sources/addy/skills/spec-driven-development/SKILL.md:12-20 · The external page's "Use when" box condenses trigger conditions to a single sentence ("Starting a new project, feature, or significant change."), omitting four other positive triggers and the explicit "When NOT to use" negative trigger ("Single-line fixes, typo corrections, or changes where requirements are unambiguous and self-contained") defined in `SKILL.md`.
- `doc-drift` · ../addy-external/spec-driven-development.md:6-8 vs repository root docs · External page documents installation via `npx skills add addyosmani/agent-skills --skill spec-driven-development` (Vercel open `skills` CLI), which is not documented in `README.md`, `CLAUDE.md`, or `package.json`.
- `doc-drift` · ../addy-external/spec-driven-development.md:1 · The snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:204`, but its content is 100% compiled Astro HTML (`<!DOCTYPE html><html...`).
- `cross-file-contradiction` · ../addy-external/spec-driven-development.md:12 vs sources/addy/README.md:355-356 · "More in the Define phase" on the external page lists only `interview-me` and `idea-refine`, omitting `constraint-driven-development` and `doubt-driven-development` which are also cataloged in the Define phase in repository documentation.
- `missing-path` · ../addy-external/spec-driven-development.md:1, 5, 12, 15, 19 · Site-relative internal paths (`/favicon.svg`, `/sitemap-index.xml`, `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/skills/interview-me/`, `/skills/idea-refine/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · ../addy-external/spec-driven-development.md:1-20 · The external doc page is not referenced or linked from any file within `sources/addy/`; it is brought into scope solely via the external-doc rule of `METHOD.md` §1.1.

## Observations
- Public Catalog vs Operational Agent Instruction Duality: Demonstrates the structural divergence between public-facing marketing and discovery portals (optimized for human discovery, SEO, and quick CLI installation) and repository operational agent skills (`SKILL.md`). The webpage simplifies complex agent guardrails (such as the capability map decomposition in Phase 0, assumption verification prompts, and downstream coordination with `planning-and-task-breakdown`, `incremental-implementation`, and `test-driven-development`) down to a generic 6-point checklist.
- PRD vs Spec Nomenclature Drift: The external catalog introduces the industry-standard product management acronym `PRD` (Product Requirements Document), whereas the upstream technical skill strictly standardizes on `spec`. This terminological divergence provides key evidence for Phase 3 concordance and Phase 4 alignment decisions regarding artifact taxonomy.
- Vercel Open Skills Ecosystem Standard: Validates Addy's distribution architecture using the Vercel `skills` CLI standard (`npx skills add addyosmani/agent-skills --skill spec-driven-development`), enabling agent runtime agnostic skill installation across Claude Code, Codex, Cursor, and Antigravity.
- High Overhead in Raw Snapshot: Out of the 25,104 bytes in this file, over 94% (~23,800 bytes) consists of compiled Astro markup, CSS stylesheets, inline SVGs, and boilerplate scripts. The actual domain-relevant semantic content is only ~1,300 bytes (~325 tokens).

## Context cost
File size: 25,104 bytes (~6,276 tokens). Transitive cost is identical as it loads no local files. Domain-relevant semantic text accounts for only ~1,300 bytes (~325 tokens), with the remaining ~23,800 bytes consisting of web markup boilerplate and styling.
