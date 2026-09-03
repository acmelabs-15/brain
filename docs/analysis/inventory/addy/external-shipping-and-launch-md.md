---
package: addy
path: ../addy-external/shipping-and-launch.md
type: external-doc
bytes: 26336
unit: inv-addy-28
---

# ../addy-external/shipping-and-launch.md

## Purpose — required, verbatim
> "Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go." — ../addy-external/shipping-and-launch.md:1, 5

Additional triggering purpose:
> "Preparing to deploy to production." — ../addy-external/shipping-and-launch.md:5

Sidebar summary:
> "Deploy with confidence - rollout, rollback, observe." — ../addy-external/shipping-and-launch.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/shipping-and-launch.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/shipping-and-launch/`, the public web documentation, catalog, and distribution page for Addy Osmani's `shipping-and-launch` skill. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via Vercel's open `skills` CLI (`npx skills add addyosmani/agent-skills --skill shipping-and-launch`), lifecycle phase categorization (binding the skill to the `addy:Ship` phase and the `/ship` slash command), and setting operational expectations for production release safety (pre-launch checklists across 6 dimensions, feature-flag lifecycles, staged canary rollouts with quantitative metrics thresholds, rollback procedures, and monitoring setup). It provides high-level triggering guidance ("Use when Preparing to deploy to production."), displays a standardized 6-part skill anatomy, presents intra-phase discovery for sibling Ship-phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration`), and links directly to the canonical GitHub repository source (`skills/shipping-and-launch/SKILL.md`). Uniquely among external documentation pages, its primary description explicitly synthesizes the multi-agent fan-out orchestration of the `/ship` command ("Run via /ship to fan out review personas, then merge into a go/no-go"), bridging the declarative release checklists in `SKILL.md` with the automated parallel reviewer orchestration defined in `.claude/commands/ship.md`. Without this page, developers and agent creators discovering `agent-skills` on the web would lack an accessible overview of the skill's lifecycle mapping, anatomy breakdown, sibling skills in the Ship phase, and CLI installation commands prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Ship

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/shipping-and-launch/` — ../addy-external/shipping-and-launch.md:1
- User trigger / prerequisite condition: "Preparing to deploy to production." — ../addy-external/shipping-and-launch.md:5
- Upstream skill specification from `skills/shipping-and-launch/SKILL.md` consumed at site build time — ../addy-external/shipping-and-launch.md:1, 5, 10, 11
- Slash command orchestration model from `.claude/commands/ship.md` reflected in description — ../addy-external/shipping-and-launch.md:1, 5
- Sibling skills in Ship phase referenced: `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` — ../addy-external/shipping-and-launch.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/shipping-and-launch.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/shipping-and-launch.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/shipping-and-launch.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/shipping-and-launch.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/shipping-and-launch.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/shipping-and-launch.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill shipping-and-launch`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Ship-phase skills: `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` — ../addy-external/shipping-and-launch.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/shipping-and-launch/SKILL.md` — ../addy-external/shipping-and-launch.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/shipping-and-launch.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/shipping-and-launch.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/shipping-and-launch.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/shipping-and-launch.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/shipping-and-launch.md:15
  - Author GitHub profile: `https://github.com/addyosmani` — ../addy-external/shipping-and-launch.md:16
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/shipping-and-launch.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/shipping-and-launch.md:8
  - Mobile navigation drawer toggle — ../addy-external/shipping-and-launch.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/shipping-and-launch.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/shipping-and-launch.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill shipping-and-launch — ../addy-external/shipping-and-launch.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/shipping-and-launch.md:8, 15
- skill skills/shipping-and-launch/SKILL.md — ../addy-external/shipping-and-launch.md:10-11
- skill skills/git-workflow-and-versioning/SKILL.md — ../addy-external/shipping-and-launch.md:12
- skill skills/ci-cd-and-automation/SKILL.md — ../addy-external/shipping-and-launch.md:12
- skill skills/deprecation-and-migration/SKILL.md — ../addy-external/shipping-and-launch.md:12
- command /ship — ../addy-external/shipping-and-launch.md:1, 5, 12
- doc CONTRIBUTING.md — ../addy-external/shipping-and-launch.md:15
- directory evals — ../addy-external/shipping-and-launch.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/shipping-and-launch.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/shipping-and-launch.md:5, 15
- external-link https://addyosmani.com — ../addy-external/shipping-and-launch.md:15
- external-link https://github.com/addyosmani — ../addy-external/shipping-and-launch.md:16
- script /.netlify/scripts/rum — ../addy-external/shipping-and-launch.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:203`. Not linked or invoked by any file in `sources/addy/`. Also referenced in `docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md` as external documentation snapshot.)*

## Concepts named — required, verbatim
- `shipping-and-launch` — ../addy-external/shipping-and-launch.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/shipping-and-launch.md:1, 5, 8, 12, 15 — used here
- `Geist` — ../addy-external/shipping-and-launch.md:1 — used here
- `Geist Mono` — ../addy-external/shipping-and-launch.md:1 — used here
- `production launches` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `Pre-launch checklists` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `feature-flag lifecycle` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `staged rollouts` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `rollback procedures` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `monitoring setup` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `/ship` — ../addy-external/shipping-and-launch.md:1, 5, 12 — used here
- `fan out review personas` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `review personas` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `go/no-go` — ../addy-external/shipping-and-launch.md:1, 5 — defined here
- `Skills` — ../addy-external/shipping-and-launch.md:5, 15 — used here
- `Docs` — ../addy-external/shipping-and-launch.md:5, 15 — used here
- `Tutorials` — ../addy-external/shipping-and-launch.md:5, 15 — used here
- `Lifecycle` — ../addy-external/shipping-and-launch.md:5, 12, 15 — used here
- `Loops` — ../addy-external/shipping-and-launch.md:5, 15 — used here
- `Teach` — ../addy-external/shipping-and-launch.md:5, 15 — used here
- `Compare` — ../addy-external/shipping-and-launch.md:5, 15 — used here
- `Ship` — ../addy-external/shipping-and-launch.md:5, 12 — used here
- `Ship phase` — ../addy-external/shipping-and-launch.md:5, 12 — defined here
- `Use when` — ../addy-external/shipping-and-launch.md:5 — defined here
- `Preparing to deploy to production` — ../addy-external/shipping-and-launch.md:5 — defined here
- `#launch` — ../addy-external/shipping-and-launch.md:5 — defined here
- `#production` — ../addy-external/shipping-and-launch.md:5 — defined here
- `#rollout` — ../addy-external/shipping-and-launch.md:5 — defined here
- `skills CLI` — ../addy-external/shipping-and-launch.md:6 — used here
- `This skill only` — ../addy-external/shipping-and-launch.md:8 — defined here
- `All skills` — ../addy-external/shipping-and-launch.md:8 — defined here
- `npx skills add` — ../addy-external/shipping-and-launch.md:8, 15 — used here
- `How this skill is structured` — ../addy-external/shipping-and-launch.md:8 — defined here
- `anatomy` — ../addy-external/shipping-and-launch.md:9, 10 — defined here
- `workflow` — ../addy-external/shipping-and-launch.md:9 — used here
- `Overview` — ../addy-external/shipping-and-launch.md:10 — defined here
- `When to Use` — ../addy-external/shipping-and-launch.md:10 — defined here
- `Process` — ../addy-external/shipping-and-launch.md:10 — defined here
- `Rationalizations` — ../addy-external/shipping-and-launch.md:10 — defined here
- `Red Flags` — ../addy-external/shipping-and-launch.md:10 — defined here
- `Verification` — ../addy-external/shipping-and-launch.md:10 — defined here
- `SKILL.md` — ../addy-external/shipping-and-launch.md:10, 11 — used here
- `Deploy with confidence - rollout, rollback, observe` — ../addy-external/shipping-and-launch.md:12 — defined here
- `Command` — ../addy-external/shipping-and-launch.md:12 — used here
- `More in the Ship phase` — ../addy-external/shipping-and-launch.md:12 — defined here
- `git-workflow-and-versioning` — ../addy-external/shipping-and-launch.md:12 — used here
- `trunk-based development` — ../addy-external/shipping-and-launch.md:12 — used here
- `atomic commits` — ../addy-external/shipping-and-launch.md:12 — used here
- `~100-line changes` — ../addy-external/shipping-and-launch.md:12 — used here
- `commit-as-save-point` — ../addy-external/shipping-and-launch.md:12 — used here
- `ci-cd-and-automation` — ../addy-external/shipping-and-launch.md:12 — used here
- `Shift Left` — ../addy-external/shipping-and-launch.md:12 — used here
- `Faster is Safer` — ../addy-external/shipping-and-launch.md:12 — used here
- `feature flags` — ../addy-external/shipping-and-launch.md:12 — used here
- `quality-gate pipelines` — ../addy-external/shipping-and-launch.md:12 — used here
- `deprecation-and-migration` — ../addy-external/shipping-and-launch.md:12 — used here
- `code-as-liability mindset` — ../addy-external/shipping-and-launch.md:12 — used here
- `compulsory vs advisory deprecation` — ../addy-external/shipping-and-launch.md:12 — used here
- `zombie-code removal` — ../addy-external/shipping-and-launch.md:12 — used here
- `The lifecycle` — ../addy-external/shipping-and-launch.md:15 — defined here
- `Loop engineering` — ../addy-external/shipping-and-launch.md:15 — defined here
- `Teach & share` — ../addy-external/shipping-and-launch.md:15 — defined here
- `How it compares` — ../addy-external/shipping-and-launch.md:15 — defined here
- `Getting started` — ../addy-external/shipping-and-launch.md:15 — defined here
- `Claude Code` — ../addy-external/shipping-and-launch.md:15 — used here
- `Codex` — ../addy-external/shipping-and-launch.md:15 — used here
- `Cursor` — ../addy-external/shipping-and-launch.md:15 — used here
- `Antigravity` — ../addy-external/shipping-and-launch.md:15 — used here
- `Contributing` — ../addy-external/shipping-and-launch.md:15 — used here
- `Evals framework` — ../addy-external/shipping-and-launch.md:15 — used here
- `Addy Osmani` — ../addy-external/shipping-and-launch.md:1, 16 — used here
- `Netlify RUM` — ../addy-external/shipping-and-launch.md:19 — used here

## Structure
- `<head>` (line 1)
  - Metadata: charset, viewport, canonical URL (`https://skills.addy.ie/skills/shipping-and-launch/`), page title (`shipping-and-launch - agent-skills`), description, theme-color
  - Open Graph tags: `og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`
  - Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:creator`
  - Preconnect & Fonts: Google Fonts `Geist` & `Geist Mono`
  - Sitemap link (`/sitemap-index.xml`) & Stylesheet (`/_astro/compare.BYu2_sXs.css`)
- `<style>` (lines 2-4): Component styles for `.cmd` (command copy box) and `.skill-card` (related skill cards)
- `<link rel="stylesheet" href="/_astro/_slug_.sGV3LZnA.css">` (line 5)
- `<header class="nav">` (line 5)
  - Skip link (`#main`)
  - Nav brand: `agent-skills` logo and link to `/`
  - Primary navigation links: `Skills` (`/skills/`), `Docs` (`/docs/getting-started/`), `Tutorials` (`/tutorials/`), `Lifecycle` (`/lifecycle/`), `Loops` (`/loops/`), `Teach` (`/teach/`), `Compare` (`/compare/`)
  - Nav actions: GitHub repository link (`https://github.com/addyosmani/agent-skills`), `Get started` CTA button (`/docs/getting-started/`), mobile menu hamburger toggle (`data-nav-toggle`)
  - Mobile navigation drawer: `nav.nav-mobile` with same link targets + GitHub link
- Inline Script: Mobile menu toggle event listener (line 5)
- `<main id="main">` (line 5)
  - `<article class="detail">`
    - Header `<div class="container detail-head">`:
      - Breadcrumb navigation: `Skills / Ship`
      - Top badges: `Ship phase` (`.phase-chip`), `/ship` (`.detail-cmd-badge`)
      - Skill title `<h1>shipping-and-launch</h1>`
      - Lead summary: `"Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go."`
      - When to use: `"Use when Preparing to deploy to production."`
      - Tags: `#launch`, `#production`, `#rollout`
    - Body `<div class="container detail-body">`:
      - Main column `<div class="detail-main">`:
        - Panel 1: `Install just this skill` (lines 5-8):
          - Description: Link to open `skills CLI` (`https://github.com/vercel-labs/skills`)
          - Command 1: `This skill only`: `npx skills add addyosmani/agent-skills --skill shipping-and-launch`
          - Inline Script: Clipboard copy interaction with fallback to `document.execCommand("copy")` and `.copied` class toggle (line 8)
          - Command 2: `All skills`: `npx skills add addyosmani/agent-skills`
        - Panel 2: `How this skill is structured` (lines 8-12):
          - Subheading: `Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads.`
          - Standardized 6-part anatomy list:
            - `01 Overview — What this skill does`
            - `02 When to Use — Triggering conditions`
            - `03 Process — Step-by-step workflow`
            - `04 Rationalizations — Excuses + rebuttals`
            - `05 Red Flags — Signs something’s wrong`
            - `06 Verification — Evidence requirements`
          - Action button: `Read the full SKILL.md` pointing to GitHub repository blob (`https://github.com/addyosmani/agent-skills/blob/main/skills/shipping-and-launch/SKILL.md`)
      - Sidebar `<aside class="detail-side">` (line 12):
        - Phase card: `Ship phase`
        - Blurb: `"Deploy with confidence - rollout, rollback, observe."`
        - Command mapping: `Command: /ship`
        - Lifecycle link: `See the full lifecycle →` (`/lifecycle/`)
    - Related section `<div class="container detail-related">` (line 12):
      - Section header: `More in the Ship phase`
      - Grid of sibling skill cards:
        - `git-workflow-and-versioning` (`/skills/git-workflow-and-versioning/`)
        - `ci-cd-and-automation` (`/skills/ci-cd-and-automation/`)
        - `deprecation-and-migration` (`/skills/deprecation-and-migration/`)
- `<footer class="footer">` (lines 12-18):
  - Brand block: logo, tagline (`"Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle."`), and quick install command (`npx skills add addyosmani/agent-skills`)
  - Navigation columns:
    - Product: `Skills catalog`, `Tutorials`, `The lifecycle`, `Loop engineering`, `Teach & share`, `How it compares`, `Getting started`
    - Setup: `Claude Code`, `Codex`, `Cursor`, `Antigravity`
    - Resources: `GitHub ↗`, `Contributing ↗`, `Evals framework ↗`, `addyosmani.com ↗`
  - Footer bottom: Copyright (`© 2026 agent-skills · MIT licensed`), author credit (`Built by Addy Osmani & contributors`)
- Inline Script: Scroll reveal observer with `IntersectionObserver` (line 18)
- External Script: Netlify RUM analytics container (`/.netlify/scripts/rum`) with site and CWV token data attributes (line 19)

## Scripts — required if type is script or the skill ships scripts
- Documented CLI command: `npx skills add addyosmani/agent-skills --skill shipping-and-launch`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills --skill shipping-and-launch` — ../addy-external/shipping-and-launch.md:8
  - **executed:** yes
  - actual command run: `bunx skills add addyosmani/agent-skills --skill shipping-and-launch -y --copy` (in isolated sandbox)
  - abridged stdout:
    ```text
    Selected 1 skill: shipping-and-launch
    Installed 1 skill: ✓ shipping-and-launch (copied) -> .agents/skills/shipping-and-launch
    ```
  - **actual exit code:** `0`
  - documented exit codes: none documented on page
  - does output match documentation claim: yes; copies `skills/shipping-and-launch/SKILL.md` (10,137 bytes) to destination folder
- Documented CLI command: `npx skills add addyosmani/agent-skills`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills` — ../addy-external/shipping-and-launch.md:8, 15
  - **executed:** yes
  - actual command run: `bunx skills add addyosmani/agent-skills -l`
  - abridged stdout:
    ```text
    shipping-and-launch
      Prepares production launches. Use when preparing to deploy to production...
    ...
    25 skills listed
    ```
  - **actual exit code:** `0`
  - documented exit codes: none documented on page
  - does output match documentation claim: yes; lists all 25 skills in repository
- Embedded inline JavaScript snippets:
  - Mobile drawer toggle (line 5, 1 line, DOM class toggle)
  - Clipboard copy handler (line 8, 1 line, `navigator.clipboard.writeText`)
  - Scroll reveal observer (line 18, 1 line, `IntersectionObserver`)
  - Netlify RUM analytics beacon (line 19, external script source)
  - Execution context: Browser DOM runtime only.

## Defects — required
- `doc-drift` · ../addy-external/shipping-and-launch.md:1, 5 vs skills/shipping-and-launch/SKILL.md:3 · Description copy differs between external documentation and in-repo skill: external doc summarizes operational mechanisms and explicitly references slash command persona orchestration (`"Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go."`), whereas `SKILL.md:3` specifies usage trigger conditions only (`"Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy."`) and omits all mention of `/ship`, persona fan-out, and go/no-go merging.
- `doc-drift` · ../addy-external/shipping-and-launch.md:9-10 vs skills/shipping-and-launch/SKILL.md:8-311 · Structural anatomy drift: external page claims every skill follows a standardized 6-part anatomy including `03 Process — Step-by-step workflow`, but `sources/addy/skills/shipping-and-launch/SKILL.md` contains no section titled `Process`, structuring its operational guidance across `The Pre-Launch Checklist`, `Feature Flag Strategy`, `Staged Rollout`, `Monitoring and Observability`, and `Rollback Strategy`.
- `doc-drift` · ../addy-external/shipping-and-launch.md:5, 12 vs skills/shipping-and-launch/SKILL.md · Command binding omission: external doc associates `shipping-and-launch` with the slash command `/ship` and the `Ship phase`, but the in-repo skill file `SKILL.md` omits any slash command reference or frontmatter phase designation (mapping is only defined in `.claude/commands/ship.md:5`, `CLAUDE.md:26`, and `README.md:17, 36, 282, 376`).
- `doc-drift` · ../addy-external/shipping-and-launch.md:5 vs skills/shipping-and-launch/SKILL.md:12-19 · Trigger condition reduction: external doc reduces the five detailed trigger bullets in `SKILL.md` to a single condensed clause (`"Preparing to deploy to production."`).
- `doc-drift` · ../addy-external/shipping-and-launch.md:12 vs README.md:273-283 · Sibling skill truncation: "More in the Ship phase" renders cards for only 3 skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`), omitting 2 other official Ship phase skills (`documentation-and-adrs` and `observability-and-instrumentation`).
- `doc-drift` · ../addy-external/shipping-and-launch.md:10 vs skills/shipping-and-launch/SKILL.md:273 · Anatomy heading naming: external page titles item 04 as "Rationalizations", whereas `SKILL.md:273` titles the section "Common Rationalizations".
- `doc-drift` · ../addy-external/shipping-and-launch.md:6-8 vs repository root docs · External page documents installation via `npx skills add addyosmani/agent-skills --skill shipping-and-launch` (Vercel open `skills` CLI), which is not documented in repository root files.
- `doc-drift` · ../addy-external/shipping-and-launch.md:15 vs docs/ · Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all navigate uniformly to `/docs/getting-started/` rather than platform-specific setup guides (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).
- `doc-drift` · ../addy-external/shipping-and-launch.md:1 · Snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:203`, but its content is 100% compiled HTML (`<!DOCTYPE html><html...`) generated by Astro.
- `missing-path` · ../addy-external/shipping-and-launch.md:1, 5, 12, 15, 19 · Site-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · ../addy-external/shipping-and-launch.md:1-20 · External doc page is not referenced or linked from any file within `sources/addy/`; brought into scope solely via METHOD.md §1.1.

## Observations
- Command-Skill Bidirectional Binding: Unlike several other external pages, `shipping-and-launch.md` directly embeds the orchestration behavior of its paired slash command (`/ship`) into its primary description: `"Run via /ship to fan out review personas, then merge into a go/no-go."`. This creates an explicit bridge between the human/agent interactive command layer (`.claude/commands/ship.md`) and the underlying procedural skill (`skills/shipping-and-launch/SKILL.md`).
- Intra-Phase Skill Clustering: Accurately groups sibling Ship-phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration`), establishing lifecycle phase boundary coherence across release automation, version control, and legacy sunsetting.
- Web Catalog Abstraction: Normalizes markdown skill repository content into a structured developer-friendly card layout with standardized phase taxonomy (`Ship phase`), command association (`/ship`), and categorization tags (`#launch`, `#production`, `#rollout`).
- Open Skills CLI Integration: Directly supports Vercel's `@vercel-labs/skills` CLI package manager, allowing standalone copy installation (`--skill shipping-and-launch`) into `.agents/skills/` or global agent configurations.
- High Overhead in Raw Snapshot: Over 90% of the raw 26,336 bytes consists of CSS rules, inline SVG icons, and HTML markup rather than semantic content, making direct inclusion in an LLM working context token-inefficient without pre-stripping HTML tags.
- Standalone Installation Dependency Boundary: `npx skills add addyosmani/agent-skills --skill shipping-and-launch` copies only `skills/shipping-and-launch/SKILL.md`. However, lines 268-271 of `SKILL.md` reference root reference documents (`references/definition-of-done.md`, `references/security-checklist.md`, `references/performance-checklist.md`, `references/accessibility-checklist.md`) which are not bundled when installed in isolation.

## Context cost
26,336 bytes (~6,584 tokens). If an agent loads the referenced repository skill `skills/shipping-and-launch/SKILL.md` (10,137 bytes), paired command `.claude/commands/ship.md` (4,601 bytes), and eval case `evals/cases/shipping-and-launch.json` (1,816 bytes), total reachable context is 42,890 bytes (~10,722 tokens). Domain-relevant semantic text on the web page accounts for ~2,200 bytes (~550 tokens), with >90% representing HTML/CSS presentation markup and SVG/JS boilerplate.
