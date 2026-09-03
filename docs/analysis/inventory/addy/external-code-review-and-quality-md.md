---
package: addy
path: ../addy-external/code-review-and-quality.md
type: external-doc
bytes: 26687
unit: inv-addy-30
---

# ../addy-external/code-review-and-quality.md

## Purpose — required, verbatim
> "Conducts multi-axis code review across correctness, readability, architecture, security, and performance. Change sizing (~100 lines), severity labels (Critical/Required/Optional/Nit), review speed norms, and splitting strategies." — ../addy-external/code-review-and-quality.md:1, 5

Additional triggering purpose:
> "Before merging any change." — ../addy-external/code-review-and-quality.md:5

Sidebar summary:
> "Quality, security and performance gates before merge." — ../addy-external/code-review-and-quality.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/code-review-and-quality.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/code-review-and-quality/`, the public web documentation and distribution landing page for Addy Osmani's `code-review-and-quality` skill. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill code-review-and-quality`), lifecycle phase categorization (binding the skill to the `addy:Review` phase and the `/review` slash command), and setting quality gate expectations for agent workflows (multi-axis review across correctness, readability, architecture, security, and performance; change sizing around ~100 lines; severity labelling with Critical/Required/Optional/Nit; review speed norms; and splitting strategies). It provides concise triggering guidance ("Before merging any change."), standardizes a 6-part skill anatomy, and establishes cross-skill discovery for sibling skills in the Review phase (`code-simplification`, `security-and-hardening`, and `performance-optimization`) while linking directly to the canonical GitHub repository source (`skills/code-review-and-quality/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` through the web would lack an accessible overview of the skill's lifecycle mapping, anatomy breakdown, sibling skills in the Review phase, and CLI installation commands prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Review

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/code-review-and-quality/` — ../addy-external/code-review-and-quality.md:1
- User trigger / prerequisite condition: "Before merging any change." — ../addy-external/code-review-and-quality.md:5
- Upstream skill specification from `skills/code-review-and-quality/SKILL.md` consumed at site build time — ../addy-external/code-review-and-quality.md:1, 5, 10, 11
- Sibling skills in Review phase referenced: `code-simplification`, `security-and-hardening`, `performance-optimization` — ../addy-external/code-review-and-quality.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/code-review-and-quality.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/code-review-and-quality.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/code-review-and-quality.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/code-review-and-quality.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/code-review-and-quality.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/code-review-and-quality.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill code-review-and-quality`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Review-phase skills: `code-simplification` (`/code-simplify`), `security-and-hardening`, `performance-optimization` (`/webperf`) — ../addy-external/code-review-and-quality.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/code-review-and-quality/SKILL.md` — ../addy-external/code-review-and-quality.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/code-review-and-quality.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/code-review-and-quality.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/code-review-and-quality.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/code-review-and-quality.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/code-review-and-quality.md:15
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/code-review-and-quality.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/code-review-and-quality.md:8
  - Mobile navigation drawer toggle — ../addy-external/code-review-and-quality.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/code-review-and-quality.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/code-review-and-quality.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill code-review-and-quality — ../addy-external/code-review-and-quality.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/code-review-and-quality.md:8, 15
- skill skills/code-review-and-quality/SKILL.md — ../addy-external/code-review-and-quality.md:10-11
- skill skills/code-simplification/SKILL.md — ../addy-external/code-review-and-quality.md:12
- skill skills/security-and-hardening/SKILL.md — ../addy-external/code-review-and-quality.md:12
- skill skills/performance-optimization/SKILL.md — ../addy-external/code-review-and-quality.md:12
- command /review — ../addy-external/code-review-and-quality.md:5, 12
- command /code-simplify — ../addy-external/code-review-and-quality.md:12
- command /webperf — ../addy-external/code-review-and-quality.md:12
- doc CONTRIBUTING.md — ../addy-external/code-review-and-quality.md:15
- directory evals — ../addy-external/code-review-and-quality.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/code-review-and-quality.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/code-review-and-quality.md:5, 15
- external-link https://addyosmani.com — ../addy-external/code-review-and-quality.md:15
- script /.netlify/scripts/rum — ../addy-external/code-review-and-quality.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:206`. Not linked or invoked by any file in `sources/addy/`. Also referenced in `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md` as external documentation companion.)*

## Concepts named — required, verbatim
- `code-review-and-quality` — ../addy-external/code-review-and-quality.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/code-review-and-quality.md:1, 5, 8, 12, 15 — used here
- `Geist` — ../addy-external/code-review-and-quality.md:1 — used here
- `Geist Mono` — ../addy-external/code-review-and-quality.md:1 — used here
- `multi-axis code review` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `correctness` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `readability` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `architecture` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `security` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `performance` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `Change sizing` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `severity labels` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `Critical` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `Required` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `Optional` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `Nit` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `review speed norms` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `splitting strategies` — ../addy-external/code-review-and-quality.md:1, 5 — defined here
- `Skills` — ../addy-external/code-review-and-quality.md:5, 15 — used here
- `Docs` — ../addy-external/code-review-and-quality.md:5, 15 — used here
- `Tutorials` — ../addy-external/code-review-and-quality.md:5, 15 — used here
- `Lifecycle` — ../addy-external/code-review-and-quality.md:5, 12, 15 — used here
- `Loops` — ../addy-external/code-review-and-quality.md:5, 15 — used here
- `Teach` — ../addy-external/code-review-and-quality.md:5, 15 — used here
- `Compare` — ../addy-external/code-review-and-quality.md:5, 15 — used here
- `Review` — ../addy-external/code-review-and-quality.md:5, 12 — defined here
- `Review phase` — ../addy-external/code-review-and-quality.md:5, 12 — defined here
- `/review` — ../addy-external/code-review-and-quality.md:5, 12 — defined here
- `quality` — ../addy-external/code-review-and-quality.md:5, 12 — used here
- `skills CLI` — ../addy-external/code-review-and-quality.md:6 — used here
- `This skill only` — ../addy-external/code-review-and-quality.md:8 — defined here
- `All skills` — ../addy-external/code-review-and-quality.md:8 — defined here
- `How this skill is structured` — ../addy-external/code-review-and-quality.md:8 — defined here
- `Every skill follows the same anatomy` — ../addy-external/code-review-and-quality.md:9 — defined here
- `Overview` — ../addy-external/code-review-and-quality.md:10 — defined here
- `When to Use` — ../addy-external/code-review-and-quality.md:10 — defined here
- `Process` — ../addy-external/code-review-and-quality.md:10 — defined here
- `Rationalizations` — ../addy-external/code-review-and-quality.md:10 — defined here
- `Red Flags` — ../addy-external/code-review-and-quality.md:10 — defined here
- `Verification` — ../addy-external/code-review-and-quality.md:10 — defined here
- `SKILL.md` — ../addy-external/code-review-and-quality.md:10-11 — used here
- `code-simplification` — ../addy-external/code-review-and-quality.md:12 — used here
- `/code-simplify` — ../addy-external/code-review-and-quality.md:12 — used here
- `Chesterton’s Fence` — ../addy-external/code-review-and-quality.md:12 — used here
- `the Rule of 500` — ../addy-external/code-review-and-quality.md:12 — used here
- `refactoring` — ../addy-external/code-review-and-quality.md:12 — used here
- `security-and-hardening` — ../addy-external/code-review-and-quality.md:12 — used here
- `OWASP Top 10` — ../addy-external/code-review-and-quality.md:12 — used here
- `hardening` — ../addy-external/code-review-and-quality.md:12 — used here
- `performance-optimization` — ../addy-external/code-review-and-quality.md:12 — used here
- `/webperf` — ../addy-external/code-review-and-quality.md:12 — used here
- `Measure-first` — ../addy-external/code-review-and-quality.md:12 — used here
- `Core Web Vitals` — ../addy-external/code-review-and-quality.md:12 — used here
- `web-vitals` — ../addy-external/code-review-and-quality.md:12 — used here
- `Claude Code` — ../addy-external/code-review-and-quality.md:15 — used here
- `Codex` — ../addy-external/code-review-and-quality.md:15 — used here
- `Cursor` — ../addy-external/code-review-and-quality.md:15 — used here
- `Antigravity` — ../addy-external/code-review-and-quality.md:15 — used here
- `Evals framework` — ../addy-external/code-review-and-quality.md:15 — used here
- `MIT licensed` — ../addy-external/code-review-and-quality.md:15 — used here

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
   - Breadcrumb navigation (`Skills / Review`)
   - Header top: `Review phase` chip and `/review` command badge
   - Skill heading: `h1.detail-name` (`code-review-and-quality`)
   - Detail summary: multi-axis review, change sizing (~100 lines), severity labels, speed norms, splitting
   - Trigger condition: `Use when Before merging any change.`
   - Tags: `#review`, `#quality`, `#security`
   - Panel `Install just this skill`:
     - Command block 1: `npx skills add addyosmani/agent-skills --skill code-review-and-quality`
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
     - Review phase overview card (`Quality, security and performance gates before merge.`)
     - Command mapping row (`/review`)
     - Link to full lifecycle (`/lifecycle/`)
   - Related skills grid (`section.detail-related`):
     - `code-simplification` (`/code-simplify`)
     - `security-and-hardening`
     - `performance-optimization` (`/webperf`)
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
   - Path: inline documentation at `../addy-external/code-review-and-quality.md:8`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills --skill code-review-and-quality` — `../addy-external/code-review-and-quality.md:8`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill code-review-and-quality -y --copy` (in isolated temp directory)
   - Actual exit code: `0`
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Selected 1 skill: code-review-and-quality ... Installed 1 skill: ✓ code-review-and-quality (copied) → ./.agents/skills/code-review-and-quality`
   - Output match claim: yes, clones repository and installs `skills/code-review-and-quality/SKILL.md`.

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at `../addy-external/code-review-and-quality.md:8, 15`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills` — `../addy-external/code-review-and-quality.md:8, 15`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill code-review-and-quality -l`
   - Actual exit code: `0`
   - Actual stdout (abridged): Listed all 25 skills from `addyosmani/agent-skills`, confirming `code-review-and-quality` description and availability.
   - Output match claim: yes, lists full pack including `code-review-and-quality`.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at `../addy-external/code-review-and-quality.md:5`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on mobile menu toggle click
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at `../addy-external/code-review-and-quality.md:8`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on clicking copy button for CLI commands
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at `../addy-external/code-review-and-quality.md:18`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: `/.netlify/scripts/rum` referenced at `../addy-external/code-review-and-quality.md:19`
   - Language: JavaScript, 1 line script tag
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- `doc-drift` — `../addy-external/code-review-and-quality.md:1, 5` vs `sources/addy/skills/code-review-and-quality/SKILL.md:3, 10`: The external documentation summarizes purpose as `"Conducts multi-axis code review across correctness, readability, architecture, security, and performance. Change sizing (~100 lines), severity labels (Critical/Required/Optional/Nit), review speed norms, and splitting strategies."`, which condenses the operational text of `SKILL.md:10` and omits the core `Approval Standard` philosophy detailed in `SKILL.md:12`.
- `doc-drift` — `../addy-external/code-review-and-quality.md:5` vs `sources/addy/skills/code-review-and-quality/SKILL.md:3`: The external page reduces the trigger conditions to a single line `"Before merging any change."`, omitting two additional triggers documented in `SKILL.md:3` ("Use when reviewing code written by yourself, another agent, or a human", and "Use when you need to assess code quality across multiple dimensions before it enters the main branch").
- `doc-drift` — `../addy-external/code-review-and-quality.md:9-10` vs `sources/addy/skills/code-review-and-quality/SKILL.md`: The external page claims every skill follows a 6-part anatomy including `03 Process — Step-by-step workflow`, but `SKILL.md` contains no section titled `Process`, structuring its procedural review guidelines under `## The Five-Axis Review` and `## Review Workflow & Communication`.
- `doc-drift` — `../addy-external/code-review-and-quality.md:5, 12` vs `sources/addy/skills/code-review-and-quality/SKILL.md`: The external page explicitly pairs `code-review-and-quality` with `/review`, but `SKILL.md` itself omits all slash command references, relying entirely on external repo configuration files (`commands/review.toml`, `.claude/commands/review.md`, `.gemini/commands/review.toml`, `README.md:367`, `CLAUDE.md:25`).
- `doc-drift` — `../addy-external/code-review-and-quality.md:6, 8` vs `sources/addy/README.md:1-400`: The external page documents skill installation via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill code-review-and-quality`), which is completely absent from repository root documentation (`README.md`, `CLAUDE.md`).
- `doc-drift` — `../addy-external/code-review-and-quality.md:15` vs `sources/addy/docs/`: Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all link to `/docs/getting-started/` rather than their specific setup documents (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).
- `doc-drift` — `../addy-external/code-review-and-quality.md:1-20`: File is stored with a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% minified HTML markup (`<!DOCTYPE html><html...`).
- `missing-path` — `../addy-external/code-review-and-quality.md:1, 5, 12, 15, 19`: Web server-relative internal links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not exist on disk in the local workspace.
- `orphan` — `../addy-external/code-review-and-quality.md:1-20`: File is an external documentation snapshot brought into scope solely via METHOD.md §1.1; it is not referenced, imported, or invoked by any source file in `sources/addy/`.

## Observations
- **Architectural Role in Ecosystem**: This page represents the public catalog face of the `Review` phase quality gate. It unifies discovery for code quality enforcement prior to merging into main.
- **Related Review Skills Cluster**: The page explicitly clusters Review-stage skills in its sidebar and related grid: `code-simplification` (`/code-simplify`), `security-and-hardening`, and `performance-optimization` (`/webperf`). Noticeably, `security-and-hardening` is the only Review-phase skill without a slash command badge, matching repository command parity where no `/security` command exists.
- **Severity Classification Alignment**: The external summary directly advertises the 4 primary severity levels (`Critical`, `Required`, `Optional`, `Nit`), aligning with `SKILL.md:181-192` (which also defines `FYI`).
- **Change Sizing Guidance**: The external summary emphasizes `Change sizing (~100 lines)`, which reinforces the core threshold from `SKILL.md:104-129` where 100 lines is considered good and ~1000 lines triggers mandatory splitting.
- **Cross-Reference to In-Repo Inventory**: The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md` under unit `inv-addy-16`.

## Context cost
- File size: 26,687 bytes (~7,500 tokens).
- When combined with upstream target `skills/code-review-and-quality/SKILL.md` (20,555 bytes, ~5,800 tokens), total related context is ~47,242 bytes (~13,300 tokens).
