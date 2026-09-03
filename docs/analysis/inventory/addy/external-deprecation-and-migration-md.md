---
package: addy
path: ../addy-external/deprecation-and-migration.md
type: external-doc
bytes: 26252
unit: inv-addy-32
---

# ../addy-external/deprecation-and-migration.md

## Purpose — required, verbatim
> "Manages deprecation and migration. A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code." — ../addy-external/deprecation-and-migration.md:1, 5

Additional triggering purpose:
> "Use when Removing old systems, migrating users, or sunsetting features." — ../addy-external/deprecation-and-migration.md:5

Sidebar summary:
> "Deploy with confidence - rollout, rollback, observe." — ../addy-external/deprecation-and-migration.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/deprecation-and-migration.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/deprecation-and-migration/`, the public web documentation and distribution catalog landing page for Addy Osmani's `deprecation-and-migration` skill. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill deprecation-and-migration`), lifecycle phase categorization (binding the skill to the `addy:Ship` phase alongside the `/ship` command family), and establishing deprecation & migration principles (code-as-liability mindset, compulsory vs advisory deprecation tracks, migration patterns including Strangler, Adapter, and Expand/Contract database schema migrations, and zombie-code removal). It provides concise triggering guidance ("Removing old systems, migrating users, or sunsetting features."), outlines a standardized 6-part skill anatomy, and establishes cross-skill discovery for sibling skills in the Ship phase (`git-workflow-and-versioning`, `ci-cd-and-automation`, and `documentation-and-adrs`) while linking directly to the canonical GitHub repository source (`skills/deprecation-and-migration/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` through the web would lack an accessible overview of the skill's role in the Ship lifecycle, its anatomy breakdown, sibling skills in the Ship phase, and CLI installation commands prior to inspecting raw repository markdown files.

## Phase — required
addy:Ship

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/deprecation-and-migration/` — ../addy-external/deprecation-and-migration.md:1
- User trigger / prerequisite condition: "Removing old systems, migrating users, or sunsetting features." — ../addy-external/deprecation-and-migration.md:5
- Upstream skill specification from `skills/deprecation-and-migration/SKILL.md` consumed at site build time — ../addy-external/deprecation-and-migration.md:1, 5, 10, 11
- Sibling skills in Ship phase referenced: `git-workflow-and-versioning`, `ci-cd-and-automation`, `documentation-and-adrs` — ../addy-external/deprecation-and-migration.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/deprecation-and-migration.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/deprecation-and-migration.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/deprecation-and-migration.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/deprecation-and-migration.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/deprecation-and-migration.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/deprecation-and-migration.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill deprecation-and-migration`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Ship-phase skills: `git-workflow-and-versioning`, `ci-cd-and-automation`, `documentation-and-adrs` — ../addy-external/deprecation-and-migration.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/deprecation-and-migration/SKILL.md` — ../addy-external/deprecation-and-migration.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/deprecation-and-migration.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/deprecation-and-migration.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/deprecation-and-migration.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/deprecation-and-migration.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/deprecation-and-migration.md:15
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/deprecation-and-migration.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/deprecation-and-migration.md:8
  - Mobile navigation drawer toggle — ../addy-external/deprecation-and-migration.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/deprecation-and-migration.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/deprecation-and-migration.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill deprecation-and-migration — ../addy-external/deprecation-and-migration.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/deprecation-and-migration.md:8, 15
- skill skills/deprecation-and-migration/SKILL.md — ../addy-external/deprecation-and-migration.md:10-11
- skill skills/git-workflow-and-versioning/SKILL.md — ../addy-external/deprecation-and-migration.md:12
- skill skills/ci-cd-and-automation/SKILL.md — ../addy-external/deprecation-and-migration.md:12
- skill skills/documentation-and-adrs/SKILL.md — ../addy-external/deprecation-and-migration.md:12
- command /ship — ../addy-external/deprecation-and-migration.md:12
- doc CONTRIBUTING.md — ../addy-external/deprecation-and-migration.md:15
- directory evals — ../addy-external/deprecation-and-migration.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/deprecation-and-migration.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/deprecation-and-migration.md:5, 15
- external-link https://addyosmani.com — ../addy-external/deprecation-and-migration.md:15
- script /.netlify/scripts/rum — ../addy-external/deprecation-and-migration.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:208`. Not linked or invoked by any file in `sources/addy/`. Cross-referenced in `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md:50` as external documentation companion.)*

## Concepts named — required, verbatim
- `deprecation-and-migration` — ../addy-external/deprecation-and-migration.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/deprecation-and-migration.md:1, 5, 8, 12, 15 — used here
- `Geist` — ../addy-external/deprecation-and-migration.md:1 — used here
- `Geist Mono` — ../addy-external/deprecation-and-migration.md:1 — used here
- `code-as-liability mindset` — ../addy-external/deprecation-and-migration.md:1, 5 — defined here
- `compulsory vs advisory deprecation` — ../addy-external/deprecation-and-migration.md:1, 5 — defined here
- `migration patterns` — ../addy-external/deprecation-and-migration.md:1, 5 — defined here
- `zombie-code removal` — ../addy-external/deprecation-and-migration.md:1, 5 — defined here
- `Skills` — ../addy-external/deprecation-and-migration.md:5, 15 — used here
- `Docs` — ../addy-external/deprecation-and-migration.md:5, 15 — used here
- `Tutorials` — ../addy-external/deprecation-and-migration.md:5, 15 — used here
- `Lifecycle` — ../addy-external/deprecation-and-migration.md:5, 12, 15 — used here
- `Loops` — ../addy-external/deprecation-and-migration.md:5, 15 — used here
- `Teach` — ../addy-external/deprecation-and-migration.md:5, 15 — used here
- `Compare` — ../addy-external/deprecation-and-migration.md:5, 15 — used here
- `Ship` — ../addy-external/deprecation-and-migration.md:5, 12 — defined here
- `Ship phase` — ../addy-external/deprecation-and-migration.md:5, 12 — defined here
- `/ship` — ../addy-external/deprecation-and-migration.md:12 — defined here
- `migration` — ../addy-external/deprecation-and-migration.md:5 — defined here
- `maintenance` — ../addy-external/deprecation-and-migration.md:5 — defined here
- `skills CLI` — ../addy-external/deprecation-and-migration.md:6 — used here
- `This skill only` — ../addy-external/deprecation-and-migration.md:8 — defined here
- `All skills` — ../addy-external/deprecation-and-migration.md:8 — defined here
- `How this skill is structured` — ../addy-external/deprecation-and-migration.md:8 — defined here
- `Every skill follows the same anatomy` — ../addy-external/deprecation-and-migration.md:9 — defined here
- `Overview` — ../addy-external/deprecation-and-migration.md:10 — defined here
- `When to Use` — ../addy-external/deprecation-and-migration.md:10 — defined here
- `Process` — ../addy-external/deprecation-and-migration.md:10 — defined here
- `Rationalizations` — ../addy-external/deprecation-and-migration.md:10 — defined here
- `Red Flags` — ../addy-external/deprecation-and-migration.md:10 — defined here
- `Verification` — ../addy-external/deprecation-and-migration.md:10 — defined here
- `SKILL.md` — ../addy-external/deprecation-and-migration.md:10-11 — used here
- `git-workflow-and-versioning` — ../addy-external/deprecation-and-migration.md:12 — used here
- `trunk-based development` — ../addy-external/deprecation-and-migration.md:12 — used here
- `atomic commits` — ../addy-external/deprecation-and-migration.md:12 — used here
- `~100-line changes` — ../addy-external/deprecation-and-migration.md:12 — used here
- `commit-as-save-point` — ../addy-external/deprecation-and-migration.md:12 — used here
- `ci-cd-and-automation` — ../addy-external/deprecation-and-migration.md:12 — used here
- `Shift Left` — ../addy-external/deprecation-and-migration.md:12 — used here
- `Faster is Safer` — ../addy-external/deprecation-and-migration.md:12 — used here
- `feature flags` — ../addy-external/deprecation-and-migration.md:12 — used here
- `quality-gate pipelines` — ../addy-external/deprecation-and-migration.md:12 — used here
- `documentation-and-adrs` — ../addy-external/deprecation-and-migration.md:12 — used here
- `Architecture Decision Records` — ../addy-external/deprecation-and-migration.md:12 — used here
- `API docs` — ../addy-external/deprecation-and-migration.md:12 — used here
- `inline standards` — ../addy-external/deprecation-and-migration.md:12 — used here
- `document the why` — ../addy-external/deprecation-and-migration.md:12 — used here
- `Claude Code` — ../addy-external/deprecation-and-migration.md:15 — used here
- `Codex` — ../addy-external/deprecation-and-migration.md:15 — used here
- `Cursor` — ../addy-external/deprecation-and-migration.md:15 — used here
- `Antigravity` — ../addy-external/deprecation-and-migration.md:15 — used here
- `Evals framework` — ../addy-external/deprecation-and-migration.md:15 — used here
- `MIT licensed` — ../addy-external/deprecation-and-migration.md:15 — used here

## Structure
The file is structured as a compiled Astro HTML document with the following semantic sections:
1. `head` metadata and stylesheets (lines 1-5)
   - Open Graph, Twitter cards, canonical link, title, meta description
   - Google Fonts links (`Geist`, `Geist Mono`)
   - Stylesheets (`compare.BYu2_sXs.css`, `_slug_.sGV3LZnA.css`) and inline component styles (`.cmd`, `.skill-card`)
2. `header.nav` (line 5)
   - Brand mark and logo linking to `/`
   - Primary navigation bar (`Skills`, `Docs`, `Tutorials`, `Lifecycle`, `Loops`, `Teach`, `Compare`)
   - GitHub repository icon link
   - Call-to-action button (`Get started` -> `/docs/getting-started/`)
   - Mobile navigation drawer and toggle script
3. `main#main` / `article.detail` (lines 5-12)
   - Breadcrumb navigation (`Skills / Ship`)
   - Header top: `Ship phase` chip
   - Skill heading: `h1.detail-name` (`deprecation-and-migration`)
   - Detail summary: code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, zombie-code removal
   - Trigger condition: `Use when Removing old systems, migrating users, or sunsetting features.`
   - Tags: `#migration`, `#maintenance`
   - Panel `Install just this skill`:
     - Command block 1: `npx skills add addyosmani/agent-skills --skill deprecation-and-migration`
     - Command block 2: `npx skills add addyosmani/agent-skills`
     - Copy-to-clipboard module script
   - Panel `How this skill is structured`:
     - Standardized 6-part skill anatomy list:
       - `01 Overview — What this skill does`
       - `02 When to Use — Triggering conditions`
       - `03 Process — Step-by-step workflow`
       - `04 Rationalizations — Excuses + rebuttals`
       - `05 Red Flags — Signs something’s wrong`
       - `06 Verification — Evidence requirements`
     - Link button: `Read the full SKILL.md` (pointing to GitHub)
   - Aside sidebar (`aside.detail-side`):
     - Ship phase overview card (`Deploy with confidence - rollout, rollback, observe.`)
     - Command mapping row (`Command` `/ship`)
     - Link to full lifecycle (`/lifecycle/`)
   - Related skills grid (`section.detail-related`):
     - `git-workflow-and-versioning`
     - `ci-cd-and-automation`
     - `documentation-and-adrs`
4. `footer.footer` (lines 13-18)
   - Product, Setup, Resources navigation links
   - Full package install command (`npx skills add addyosmani/agent-skills`)
   - Copyright and license information (`© 2026 agent-skills · MIT licensed`)
   - Scroll reveal `IntersectionObserver` script
5. Telemetry (line 19)
   - Netlify Real User Monitoring (RUM) script tag

## Scripts — required if type is script or the skill ships scripts
The file itself is an external HTML document and contains two documented CLI installation commands and several embedded client-side JavaScript modules:

1. **Documented CLI Command: Modular Skill Installation**
   - Path: inline documentation at `../addy-external/deprecation-and-migration.md:8`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills --skill deprecation-and-migration` — `../addy-external/deprecation-and-migration.md:8`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill deprecation-and-migration -y --copy` (in isolated temp directory)
   - Actual exit code: `0`
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Selected 1 skill: deprecation-and-migration ... Installed 1 skill: ✓ deprecation-and-migration (copied) → ./.agents/skills/deprecation-and-migration ... Done!`
   - Output match claim: yes, clones repository and installs `skills/deprecation-and-migration/SKILL.md`.

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at `../addy-external/deprecation-and-migration.md:8, 15`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills` — `../addy-external/deprecation-and-migration.md:8, 15`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills -l`
   - Actual exit code: `0`
   - Actual stdout (abridged): Listed all 25 skills from `addyosmani/agent-skills`, including `deprecation-and-migration` with summary description.
   - Output match claim: yes, lists full pack including `deprecation-and-migration`.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at `../addy-external/deprecation-and-migration.md:5`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on mobile menu toggle click
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at `../addy-external/deprecation-and-migration.md:8`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on clicking copy button for CLI commands
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at `../addy-external/deprecation-and-migration.md:18`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: `/.netlify/scripts/rum` referenced at `../addy-external/deprecation-and-migration.md:19`
   - Language: JavaScript, 1 line script tag
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- `doc-drift` — `../addy-external/deprecation-and-migration.md:1, 5` vs `sources/addy/skills/deprecation-and-migration/SKILL.md:10`: The external documentation summarizes purpose as `"Manages deprecation and migration. A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code."`, which condenses the operational text of `SKILL.md:10` ("Code is a liability, not an asset. Every line of code has ongoing maintenance cost...").
- `doc-drift` — `../addy-external/deprecation-and-migration.md:5` vs `sources/addy/skills/deprecation-and-migration/SKILL.md:14-22`: The external page reduces trigger conditions to a single line `"Removing old systems, migrating users, or sunsetting features."`, omitting detailed operational triggers documented in `SKILL.md:14-22` (including migrating database schema in production without downtime via expand/contract, removing old APIs, and deciding whether to maintain or sunset existing code).
- `doc-drift` — `../addy-external/deprecation-and-migration.md:9-10` vs `sources/addy/skills/deprecation-and-migration/SKILL.md`: The external page claims every skill follows a 6-part anatomy including `03 Process — Step-by-step workflow`, but `SKILL.md` structures its operational guidance under `The Migration Process` (Steps 1-4) and `Migration Patterns` (Strangler, Adapter, Feature Flag, Database Schema Expand/Contract).
- `doc-drift` — `../addy-external/deprecation-and-migration.md:10` vs `sources/addy/skills/deprecation-and-migration/SKILL.md:204`: The external page titles item 04 as `Rationalizations`, whereas `SKILL.md:204` titles the section `Common Rationalizations`.
- `doc-drift` — `../addy-external/deprecation-and-migration.md:12` vs `sources/addy/commands/`: The external page sidebar links the Ship phase to `/ship`, but `deprecation-and-migration` has no dedicated command (no `/deprecate` exists in `commands/`), nor does `SKILL.md` mention `/ship`. Furthermore, `.claude/commands/ship.md` runs `shipping-and-launch` and omits `deprecation-and-migration`.
- `doc-drift` — `../addy-external/deprecation-and-migration.md:12` vs `sources/addy/README.md:376`: The related skills grid displays only 3 skills in the Ship phase (`git-workflow-and-versioning`, `ci-cd-and-automation`, `documentation-and-adrs`), omitting `shipping-and-launch` and `observability-and-instrumentation` which are also cataloged in the Ship phase in repository documentation.
- `doc-drift` — `../addy-external/deprecation-and-migration.md:6, 8` vs `sources/addy/README.md:1-400`: The external page documents skill installation via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill deprecation-and-migration`), which is not documented in repository root documentation (`README.md`, `CLAUDE.md`, `AGENTS.md`).
- `doc-drift` — `../addy-external/deprecation-and-migration.md:15` vs `sources/addy/docs/`: Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all navigate to `/docs/getting-started/` rather than their specific setup documents (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).
- `doc-drift` — `../addy-external/deprecation-and-migration.md:1-20`: File is stored with a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% minified HTML markup (`<!DOCTYPE html><html...`).
- `missing-path` — `../addy-external/deprecation-and-migration.md:1, 5, 12, 15, 19`: Web server-relative internal links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not exist on disk in the local workspace.
- `orphan` — `../addy-external/deprecation-and-migration.md:1-20`: File is an external documentation snapshot brought into scope solely via METHOD.md §1.1; it is not referenced, imported, or invoked by any source file in `sources/addy/`.

## Observations
- **Architectural Role in Ecosystem**: This page represents the public catalog face of the `Ship` phase decommissioning and migration workflow. It advocates the "code is a liability, not an asset" mindset.
- **Related Ship Skills Cluster**: The page links to `git-workflow-and-versioning`, `ci-cd-and-automation`, and `documentation-and-adrs` under "More in the Ship phase".
- **Cross-Reference to In-Repo Inventory**: The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md` under unit `inv-addy-17`.
- **Behavioral Evaluation Parity**: Tested via `sources/addy/evals/cases/deprecation-and-migration.json` (eval 1: Plan the deprecation of a public v1 REST API with 200 external consumers, replaced by v2).

## Context cost
- File size: 26,252 bytes (~7,400 tokens).
- When combined with upstream target `skills/deprecation-and-migration/SKILL.md` (12,516 bytes, ~3,500 tokens), total related context is ~38,768 bytes (~10,900 tokens).
