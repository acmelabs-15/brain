# Handoff Report — Explorer 1 (inv-addy-23)

**Work Unit**: `inv-addy-23`
**Target Scope**: `sources/addy-external/planning-and-task-breakdown.md` (22,310 bytes)
**Author**: Explorer 1 (`teamwork_preview_explorer_inv_addy_23_1`)
**Timestamp**: 2026-09-03T17:28:00Z

---

## 1. Observation

### 1.1 Source File Facts
- **File path relative to repo root**: `sources/addy-external/planning-and-task-breakdown.md`
- **File path relative to `sources/addy/`**: `../addy-external/planning-and-task-breakdown.md`
- **Manifest row**: `docs/analysis/manifest/addy.md:197` (`| ../addy-external/planning-and-task-breakdown.md | 22310 | external-doc | [ ] |`)
- **File size**: 22,310 bytes
- **Line count**: 20 lines (compiled HTML output from Astro static site generator)
- **Upstream canonical URL**: `https://skills.addy.ie/skills/planning-and-task-breakdown/` (`../addy-external/planning-and-task-breakdown.md:1`)
- **Corresponding in-repo skill**: `sources/addy/skills/planning-and-task-breakdown/SKILL.md` (inventoried in unit `inv-addy-13` at `docs/analysis/inventory/addy/skills-planning-and-task-breakdown-skill-md.md`)

### 1.2 Verbatim Purpose & Triggers
- **Primary Purpose**:
  > "Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — `../addy-external/planning-and-task-breakdown.md:5` (also in `<meta name="description">` at line 1)
- **Primary Trigger ("Use when")**:
  > "You have a spec and need implementable units." — `../addy-external/planning-and-task-breakdown.md:5`
- **Sidebar Summary Blurb**:
  > "Break the spec into small, verifiable, ordered tasks." — `../addy-external/planning-and-task-breakdown.md:12`
- **Global Package Purpose**:
  > "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — `../addy-external/planning-and-task-breakdown.md:13-14`

### 1.3 Design Intent
Serves as the public web showcase, discovery catalog page, and installation portal for Addy Osmani's `planning-and-task-breakdown` skill within the `agent-skills` ecosystem (`skills.addy.ie`). It exposes the skill's high-level intent, lifecycle alignment (`Plan` phase, `/plan` command), invocation triggers, a standardized 6-step skill anatomy framework, and direct one-line CLI installation commands via Vercel's open `skills` CLI (`npx skills add ...`). Without this page, developers and agent creators discovering the package through web search or social links would lack an accessible, human-readable overview of the skill's metadata, command mapping, and single-skill vs full-suite CLI installation commands prior to inspecting raw markdown files in the GitHub repository.

### 1.4 Package Phase
- `addy:Plan`
  - Explicitly marked as breadcrumb: `<span class="crumb-phase">Plan</span>` (`../addy-external/planning-and-task-breakdown.md:5`)
  - Explicitly badged as phase chip: `<span class="chip phase-chip"><span class="phase-dot"></span>Plan phase</span>` (`../addy-external/planning-and-task-breakdown.md:5`)
  - Explicitly badged in sidebar card: `<h3 class="side-title">Plan phase</h3>` (`../addy-external/planning-and-task-breakdown.md:12`)
  - Mapped to command: `/plan` (`../addy-external/planning-and-task-breakdown.md:5, 12`)

### 1.5 Inputs & Outputs
- **Inputs**:
  - Web client HTTP GET request to `https://skills.addy.ie/skills/planning-and-task-breakdown/` (`../addy-external/planning-and-task-breakdown.md:1`)
  - Upstream skill specification from `skills/planning-and-task-breakdown/SKILL.md` consumed at site build time (`../addy-external/planning-and-task-breakdown.md:1, 5, 10, 11`)
  - Prerequisite artifact / condition: "A spec and need implementable units" (`../addy-external/planning-and-task-breakdown.md:5`)
  - Local stylesheet assets: `/_astro/compare.BYu2_sXs.css` (`../addy-external/planning-and-task-breakdown.md:1`), `/_astro/_slug_.sGV3LZnA.css` (`../addy-external/planning-and-task-breakdown.md:5`)
  - External web fonts: Google Fonts Geist and Geist Mono (`../addy-external/planning-and-task-breakdown.md:1`)
  - External tracking script: `/.netlify/scripts/rum` (`../addy-external/planning-and-task-breakdown.md:19`)
- **Outputs**:
  - Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing (`../addy-external/planning-and-task-breakdown.md:1, 5`)
  - Copyable terminal CLI installation commands (`../addy-external/planning-and-task-breakdown.md:8, 15`):
    - `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`
    - `npx skills add addyosmani/agent-skills`
  - Hyperlinks to:
    - GitHub source SKILL.md: `https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md` (`../addy-external/planning-and-task-breakdown.md:10`)
    - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` (`../addy-external/planning-and-task-breakdown.md:5, 15`)
    - Vercel skills CLI repo: `https://github.com/vercel-labs/skills` (`../addy-external/planning-and-task-breakdown.md:6`)
    - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` (`../addy-external/planning-and-task-breakdown.md:15`)
    - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` (`../addy-external/planning-and-task-breakdown.md:15`)
    - Author personal website: `https://addyosmani.com` (`../addy-external/planning-and-task-breakdown.md:15`)
    - Internal site navigation: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` (`../addy-external/planning-and-task-breakdown.md:5, 12, 15`)
  - Interactive client-side UI behaviors:
    - Clipboard copy handler with SVG check icon feedback (`../addy-external/planning-and-task-breakdown.md:8`)
    - Mobile navigation drawer toggle (`../addy-external/planning-and-task-breakdown.md:5`)
    - IntersectionObserver scroll reveal effects (`../addy-external/planning-and-task-breakdown.md:18`)
    - Netlify Real User Monitoring beacon telemetry (`../addy-external/planning-and-task-breakdown.md:19`)

### 1.6 Invocations
- **Invokes**:
  - `cli npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown — ../addy-external/planning-and-task-breakdown.md:8`
  - `cli npx skills add addyosmani/agent-skills — ../addy-external/planning-and-task-breakdown.md:8, 15`
  - `skill skills/planning-and-task-breakdown/SKILL.md — ../addy-external/planning-and-task-breakdown.md:10`
  - `doc CONTRIBUTING.md — ../addy-external/planning-and-task-breakdown.md:15`
  - `directory evals — ../addy-external/planning-and-task-breakdown.md:15`
  - `external-link https://github.com/vercel-labs/skills — ../addy-external/planning-and-task-breakdown.md:6`
  - `external-link https://github.com/addyosmani/agent-skills — ../addy-external/planning-and-task-breakdown.md:5, 15`
  - `external-link https://addyosmani.com — ../addy-external/planning-and-task-breakdown.md:15`
  - `script /.netlify/scripts/rum — ../addy-external/planning-and-task-breakdown.md:19`
- **Invoked by**:
  - `orphan` (`none` from in-scope source files; brought into scope exclusively via `METHOD.md` §1.1 and listed in `docs/analysis/manifest/addy.md:197`).

### 1.7 Concepts Named (R6 Exhaustive List)
- `planning-and-task-breakdown` — `../addy-external/planning-and-task-breakdown.md:1, 5, 8, 10` — used here
- `agent-skills` — `../addy-external/planning-and-task-breakdown.md:1, 5, 8, 12, 15` — used here
- `Geist` — `../addy-external/planning-and-task-breakdown.md:1` — used here
- `Geist Mono` — `../addy-external/planning-and-task-breakdown.md:1` — used here
- `Skills` — `../addy-external/planning-and-task-breakdown.md:5, 15` — used here
- `Docs` — `../addy-external/planning-and-task-breakdown.md:5, 15` — used here
- `Tutorials` — `../addy-external/planning-and-task-breakdown.md:5, 15` — used here
- `Lifecycle` — `../addy-external/planning-and-task-breakdown.md:5, 12, 15` — used here
- `Loops` — `../addy-external/planning-and-task-breakdown.md:5, 15` — used here
- `Teach` — `../addy-external/planning-and-task-breakdown.md:5, 15` — used here
- `Compare` — `../addy-external/planning-and-task-breakdown.md:5, 15` — used here
- `Plan` — `../addy-external/planning-and-task-breakdown.md:5` — used here
- `Plan phase` — `../addy-external/planning-and-task-breakdown.md:5, 12` — used here
- `/plan` — `../addy-external/planning-and-task-breakdown.md:5, 12` — used here
- `ordered tasks` — `../addy-external/planning-and-task-breakdown.md:1, 5, 12` — used here
- `acceptance criteria` — `../addy-external/planning-and-task-breakdown.md:1, 5` — used here
- `dependency ordering` — `../addy-external/planning-and-task-breakdown.md:1, 5` — used here
- `spec` — `../addy-external/planning-and-task-breakdown.md:5, 12` — used here
- `implementable units` — `../addy-external/planning-and-task-breakdown.md:5` — defined here
- `#planning` — `../addy-external/planning-and-task-breakdown.md:5` — defined here
- `#tasks` — `../addy-external/planning-and-task-breakdown.md:5` — defined here
- `skills CLI` — `../addy-external/planning-and-task-breakdown.md:6` — used here
- `This skill only` — `../addy-external/planning-and-task-breakdown.md:8` — defined here
- `All skills` — `../addy-external/planning-and-task-breakdown.md:8` — defined here
- `npx skills add` — `../addy-external/planning-and-task-breakdown.md:8, 15` — used here
- `anatomy` — `../addy-external/planning-and-task-breakdown.md:9, 10` — defined here
- `Overview` — `../addy-external/planning-and-task-breakdown.md:10` — used here
- `When to Use` — `../addy-external/planning-and-task-breakdown.md:10` — used here
- `Process` — `../addy-external/planning-and-task-breakdown.md:10` — used here
- `Rationalizations` — `../addy-external/planning-and-task-breakdown.md:10` — used here
- `Red Flags` — `../addy-external/planning-and-task-breakdown.md:10` — used here
- `Verification` — `../addy-external/planning-and-task-breakdown.md:10` — used here
- `SKILL.md` — `../addy-external/planning-and-task-breakdown.md:10, 11` — used here
- `Command` — `../addy-external/planning-and-task-breakdown.md:12` — used here
- `The lifecycle` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Loop engineering` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Teach & share` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `How it compares` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Getting started` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Claude Code` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Codex` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Cursor` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Antigravity` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Contributing` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Evals framework` — `../addy-external/planning-and-task-breakdown.md:15` — used here
- `Addy Osmani` — `../addy-external/planning-and-task-breakdown.md:1, 16` — used here

### 1.8 Structure (Section Headings in Order)
- `<head>`: Document head, title, canonical link, Open Graph and Twitter card metadata (line 1)
- `<header class="nav">`: Navigation header with brand mark, primary links, GitHub link, Get started CTA, mobile drawer (line 5)
- `<main id="main">`
  - `<article class="detail">`
    - `<div class="container detail-head">`
      - `Breadcrumb: Skills / Plan` (line 5)
      - `Top badges: Plan phase, /plan` (line 5)
      - `Title: <h1>planning-and-task-breakdown</h1>` (line 5)
      - `Summary: <p class="detail-summary">` (line 5)
      - `Trigger: <div class="detail-when">` ("Use when: You have a spec and need implementable units.") (line 5)
      - `Tags: #planning, #tasks` (line 5)
    - `<div class="container detail-body">`
      - `<div class="detail-main">`
        - `<section class="panel">`: `<h2>Install just this skill</h2>` (lines 5-8)
          - `Command block: This skill only ($ npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown)` (line 8)
          - `Command block: All skills ($ npx skills add addyosmani/agent-skills)` (line 8)
        - `<section class="panel">`: `<h2>How this skill is structured</h2>` (lines 8-12)
          - `Lede: Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads.` (line 9)
          - `Anatomy list: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification` (line 10)
          - `Action button: Read the full SKILL.md` (lines 10-12)
      - `<aside class="detail-side">`
        - `<div class="side-card">`: `<h3>Plan phase</h3>` (lines 12)
          - `Side blurb: Break the spec into small, verifiable, ordered tasks.` (line 12)
          - `Command mapping: /plan` (line 12)
          - `Link: See the full lifecycle → (/lifecycle/)` (line 12)
- `<footer class="footer">`
  - `Tagline & quick-add command: npx skills add addyosmani/agent-skills` (lines 12-15)
  - `Product column: <h3>Product</h3>` (line 15)
  - `Setup column: <h3>Setup</h3>` (line 15)
  - `Resources column: <h3>Resources</h3>` (line 15)
  - `Copyright, licensing, author credit` (lines 15-18)
- Embedded scripts: mobile menu toggle (line 5), copy button (line 8), reveal animation (line 18), Netlify RUM analytics (line 19)

### 1.9 Scripts & Execution Verification (R2)
1. **Documented CLI Command**:
   - `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` (`../addy-external/planning-and-task-breakdown.md:8`)
   - **Verification Execution**: Tested package availability and skill resolution using `npx --yes skills add addyosmani/agent-skills --list`
   - **Command Run**: `npx --yes skills add addyosmani/agent-skills --list`
   - **Exit Code**: `0`
   - **Stdout (abridged)**:
     ```
     planning-and-task-breakdown
       Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.
     ...
     Use --skill <name> to install specific skills
     ```
   - **Match Documentation**: Matches precisely. The remote repository exposes `planning-and-task-breakdown` and supports `--skill planning-and-task-breakdown`.
2. **Documented Suite Installation Command**:
   - `npx skills add addyosmani/agent-skills` (`../addy-external/planning-and-task-breakdown.md:8, 15`)
   - **Verification Execution**: Verified via the same `skills add` registry lookup above.
   - **Exit Code**: `0`
3. **Client-Side Embedded Scripts**:
   - Mobile nav menu toggle (`line 5`): 1 line, vanilla DOM event listener, toggles class `open` and `aria-expanded`. Browser-only execution context.
   - Clipboard copy script (`line 8`): 1 line, modern `navigator.clipboard.writeText` with textarea fallback. Browser-only execution context.
   - Scroll reveal observer (`line 18`): 1 line, `IntersectionObserver` observing `.reveal`. Browser-only execution context.
   - Netlify RUM script (`line 19`): external script loading `/.netlify/scripts/rum`. Browser-only analytics beacon.

### 1.10 Defects Cataloged (§4 Checklist)
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:10` vs `skills/planning-and-task-breakdown/SKILL.md:125-220, 255-258` · The external page's anatomy panel asserts that the skill strictly follows a generic 6-part anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), omitting the substantive domain-specific sections (`Task Sizing Guidelines`, `Output Files` / `tasks/plan.md` / `tasks/todo.md`, `Plan Document Template`, `Parallelization Opportunities`, and `See Also`) that constitute the operational core of `SKILL.md`.
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:5` vs `skills/planning-and-task-breakdown/SKILL.md:12-20` · The external page's primary "Use when" box collapses the trigger criteria into a single condition ("You have a spec and need implementable units."), omitting three other explicit triggers documented in `SKILL.md` (task too large to implement in a single session, scope estimation before starting, and multi-agent/multi-human parallel work).
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:10` vs `skills/planning-and-task-breakdown/SKILL.md:22, 222` · The external page names anatomy sections "Process" and "Rationalizations", whereas `SKILL.md` titles them "The Planning Process" and "Common Rationalizations".
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:1` · The snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:197`, but its content is 100% compiled HTML (`<!DOCTYPE html><html...`) generated by Astro.
- `missing-path` · `../addy-external/planning-and-task-breakdown.md:1, 5, 12, 15, 19` · Site-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · `../addy-external/planning-and-task-breakdown.md:1-20` · The external doc page is not referenced or linked from any file within `sources/addy/`; it is brought into scope solely via the external-doc rule of `METHOD.md` §1.1.

### 1.11 Context Cost
- **Raw file size**: 22,310 bytes
- **Estimated tokens**: ~5,578 tokens (standard ~4 bytes/token calculation)
- **Signal-to-Noise Ratio**: Highly inefficient for agent context. Approximately 95% (~21,100 bytes) of the file comprises Astro scaffolding, inline CSS styles, SVG icon vectors, HTML boilerplate, minified browser scripts, and footer site navigation. Only ~1,200 bytes (~300 tokens) convey actionable domain content.

---

## 2. Complete Inventory Entry Draft

```markdown
---
package: addy
path: ../addy-external/planning-and-task-breakdown.md
type: external-doc
bytes: 22310
unit: inv-addy-23
---

# ../addy-external/planning-and-task-breakdown.md

## Purpose — required, verbatim
> "Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — ../addy-external/planning-and-task-breakdown.md:5

Additional triggering purpose:
> "You have a spec and need implementable units." — ../addy-external/planning-and-task-breakdown.md:5

Sidebar summary:
> "Break the spec into small, verifiable, ordered tasks." — ../addy-external/planning-and-task-breakdown.md:12

## Design intent — required
Serves as the public web showcase, discovery catalog page, and quick-installation landing page for Addy Osmani's `planning-and-task-breakdown` skill within the `agent-skills` ecosystem (`skills.addy.ie`). It provides prospective users and coding agents with an accessible overview of the skill's purpose, lifecycle positioning (`Plan` phase, `/plan` slash command), trigger conditions ("You have a spec and need implementable units"), structural anatomy (the standardized 6-part workflow: Overview, When to Use, Process, Rationalizations, Red Flags, Verification), and package installation commands via the Vercel open `skills` CLI (`npx skills add ...`). Without this page, developers and agent creators discovering `agent-skills` via web search or external links would lack an interactive, human-readable portal summarizing the skill's metadata, command mapping, and single-skill vs full-suite CLI installation paths prior to inspecting raw repository markdown files.

## Phase — required
addy:Plan

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/planning-and-task-breakdown/` — ../addy-external/planning-and-task-breakdown.md:1
- Upstream skill specification from `skills/planning-and-task-breakdown/SKILL.md` consumed at site build time — ../addy-external/planning-and-task-breakdown.md:1, 5, 10, 11
- Prerequisite condition / input: "A spec and need implementable units" — ../addy-external/planning-and-task-breakdown.md:5
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/planning-and-task-breakdown.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/planning-and-task-breakdown.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/planning-and-task-breakdown.md:19

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/planning-and-task-breakdown.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/planning-and-task-breakdown.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`
  - `npx skills add addyosmani/agent-skills`
- Hyperlinks to:
  - Upstream GitHub SKILL.md: `https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md` — ../addy-external/planning-and-task-breakdown.md:10
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/planning-and-task-breakdown.md:5, 15
  - Vercel skills CLI repo: `https://github.com/vercel-labs/skills` — ../addy-external/planning-and-task-breakdown.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/planning-and-task-breakdown.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/planning-and-task-breakdown.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/planning-and-task-breakdown.md:15
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/planning-and-task-breakdown.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/planning-and-task-breakdown.md:8
  - Mobile navigation drawer toggle — ../addy-external/planning-and-task-breakdown.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/planning-and-task-breakdown.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/planning-and-task-breakdown.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown — ../addy-external/planning-and-task-breakdown.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/planning-and-task-breakdown.md:8, 15
- skill skills/planning-and-task-breakdown/SKILL.md — ../addy-external/planning-and-task-breakdown.md:10
- doc CONTRIBUTING.md — ../addy-external/planning-and-task-breakdown.md:15
- directory evals — ../addy-external/planning-and-task-breakdown.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/planning-and-task-breakdown.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/planning-and-task-breakdown.md:5, 15
- external-link https://addyosmani.com — ../addy-external/planning-and-task-breakdown.md:15
- script /.netlify/scripts/rum — ../addy-external/planning-and-task-breakdown.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:197`. Not linked or invoked by any file in `sources/addy/`.)*

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — ../addy-external/planning-and-task-breakdown.md:1, 5, 8, 10 — used here
- `agent-skills` — ../addy-external/planning-and-task-breakdown.md:1, 5, 8, 12, 15 — used here
- `Geist` — ../addy-external/planning-and-task-breakdown.md:1 — used here
- `Geist Mono` — ../addy-external/planning-and-task-breakdown.md:1 — used here
- `Skills` — ../addy-external/planning-and-task-breakdown.md:5, 15 — used here
- `Docs` — ../addy-external/planning-and-task-breakdown.md:5, 15 — used here
- `Tutorials` — ../addy-external/planning-and-task-breakdown.md:5, 15 — used here
- `Lifecycle` — ../addy-external/planning-and-task-breakdown.md:5, 12, 15 — used here
- `Loops` — ../addy-external/planning-and-task-breakdown.md:5, 15 — used here
- `Teach` — ../addy-external/planning-and-task-breakdown.md:5, 15 — used here
- `Compare` — ../addy-external/planning-and-task-breakdown.md:5, 15 — used here
- `Plan` — ../addy-external/planning-and-task-breakdown.md:5 — used here
- `Plan phase` — ../addy-external/planning-and-task-breakdown.md:5, 12 — used here
- `/plan` — ../addy-external/planning-and-task-breakdown.md:5, 12 — used here
- `ordered tasks` — ../addy-external/planning-and-task-breakdown.md:1, 5, 12 — used here
- `acceptance criteria` — ../addy-external/planning-and-task-breakdown.md:1, 5 — used here
- `dependency ordering` — ../addy-external/planning-and-task-breakdown.md:1, 5 — used here
- `spec` — ../addy-external/planning-and-task-breakdown.md:5, 12 — used here
- `implementable units` — ../addy-external/planning-and-task-breakdown.md:5 — defined here
- `#planning` — ../addy-external/planning-and-task-breakdown.md:5 — defined here
- `#tasks` — ../addy-external/planning-and-task-breakdown.md:5 — defined here
- `skills CLI` — ../addy-external/planning-and-task-breakdown.md:6 — used here
- `This skill only` — ../addy-external/planning-and-task-breakdown.md:8 — defined here
- `All skills` — ../addy-external/planning-and-task-breakdown.md:8 — defined here
- `npx skills add` — ../addy-external/planning-and-task-breakdown.md:8, 15 — used here
- `anatomy` — ../addy-external/planning-and-task-breakdown.md:9, 10 — defined here
- `Overview` — ../addy-external/planning-and-task-breakdown.md:10 — used here
- `When to Use` — ../addy-external/planning-and-task-breakdown.md:10 — used here
- `Process` — ../addy-external/planning-and-task-breakdown.md:10 — used here
- `Rationalizations` — ../addy-external/planning-and-task-breakdown.md:10 — used here
- `Red Flags` — ../addy-external/planning-and-task-breakdown.md:10 — used here
- `Verification` — ../addy-external/planning-and-task-breakdown.md:10 — used here
- `SKILL.md` — ../addy-external/planning-and-task-breakdown.md:10, 11 — used here
- `Command` — ../addy-external/planning-and-task-breakdown.md:12 — used here
- `The lifecycle` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Loop engineering` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Teach & share` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `How it compares` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Getting started` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Claude Code` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Codex` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Cursor` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Antigravity` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Contributing` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Evals framework` — ../addy-external/planning-and-task-breakdown.md:15 — used here
- `Addy Osmani` — ../addy-external/planning-and-task-breakdown.md:1, 16 — used here

## Structure
- `<head>` (line 1)
- `<header class="nav">` (line 5)
  - `agent-skills brand mark & home link` (line 5)
  - `Primary navigation links: Skills, Docs, Tutorials, Lifecycle, Loops, Teach, Compare` (line 5)
  - `GitHub repository link` (line 5)
  - `Get started button` (line 5)
  - `Mobile drawer toggle` (line 5)
- `<main id="main">` (line 5)
  - `<article class="detail">` (line 5)
    - `<div class="container detail-head">` (line 5)
      - `Breadcrumb: Skills / Plan` (line 5)
      - `Phase badges: Plan phase, /plan` (line 5)
      - `<h1>planning-and-task-breakdown</h1>` (line 5)
      - `<p class="detail-summary">` (line 5)
      - `<div class="detail-when">` ("Use when: You have a spec and need implementable units.") (line 5)
      - `Tags: #planning, #tasks` (line 5)
    - `<div class="container detail-body">` (line 5)
      - `<div class="detail-main">` (line 5)
        - `<section class="panel">` (line 5)
          - `<h2>Install just this skill</h2>` (line 5)
          - `CLI command: This skill only ($ npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown)` (line 8)
          - `CLI command: All skills ($ npx skills add addyosmani/agent-skills)` (line 8)
        - `<section class="panel">` (line 8)
          - `<h2>How this skill is structured</h2>` (line 8)
          - `Anatomy list: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification` (line 10)
          - `Action: Read the full SKILL.md link` (line 10)
      - `<aside class="detail-side">` (line 12)
        - `<h3>Plan phase</h3>` (line 12)
        - `Blurb: Break the spec into small, verifiable, ordered tasks.` (line 12)
        - `Command: /plan` (line 12)
        - `Link: See the full lifecycle →` (line 12)
- `<footer class="footer">` (line 12)
  - `Tagline & quick-add command` (lines 13-15)
  - `<h3>Product</h3>` (line 15)
  - `<h3>Setup</h3>` (line 15)
  - `<h3>Resources</h3>` (line 15)
  - `Copyright, licensing, and author credit` (lines 15-18)
- Embedded scripts: mobile menu toggle (line 5), copy button (line 8), reveal animation (line 18), Netlify RUM analytics (line 19)

## Scripts — required if type is script or the skill ships scripts
- Documented CLI command: `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - documented invocation: `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` — ../addy-external/planning-and-task-breakdown.md:8
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills --list`
  - abridged stdout:
    ```
    planning-and-task-breakdown
      Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.
    ...
    Use --skill <name> to install specific skills
    ```
  - **actual exit code:** `0`
  - does the output match what the documentation claims? yes; resolves package and exposes `--skill planning-and-task-breakdown`
- Embedded inline JavaScript snippets:
  - Mobile drawer toggle (line 5, 1 line, DOM class toggle)
  - Clipboard copy handler (line 8, 1 line, `navigator.clipboard.writeText`)
  - Scroll reveal observer (line 18, 1 line, `IntersectionObserver`)
  - Netlify RUM analytics beacon (line 19, external script source)
  - Execution context: Browser DOM runtime only.

## Defects — required
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:10` vs `skills/planning-and-task-breakdown/SKILL.md:125-220, 255-258` · The external page claims the skill strictly follows a generic 6-part anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), omitting the substantive domain-specific sections (`Task Sizing Guidelines`, `Output Files` / `tasks/plan.md` / `tasks/todo.md`, `Plan Document Template`, `Parallelization Opportunities`, and `See Also`) that constitute the operational core of `SKILL.md`.
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:5` vs `skills/planning-and-task-breakdown/SKILL.md:12-20` · The external page's primary "Use when" box collapses the trigger criteria into a single condition ("You have a spec and need implementable units."), omitting three other explicit triggers documented in `SKILL.md` (task too large to implement in a single session, scope estimation before starting, and multi-agent/multi-human parallel work).
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:10` vs `skills/planning-and-task-breakdown/SKILL.md:22, 222` · The external page names anatomy sections "Process" and "Rationalizations", whereas `SKILL.md` titles them "The Planning Process" and "Common Rationalizations".
- `doc-drift` · `../addy-external/planning-and-task-breakdown.md:1` · The snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:197`, but its content is 100% compiled HTML (`<!DOCTYPE html><html...`) generated by Astro.
- `missing-path` · `../addy-external/planning-and-task-breakdown.md:1, 5, 12, 15, 19` · Site-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · `../addy-external/planning-and-task-breakdown.md:1-20` · The external doc page is not referenced or linked from any file within `sources/addy/`; it is brought into scope solely via the external-doc rule of `METHOD.md` §1.1.

## Observations
- Public Discovery vs Operational Source Duality: Demonstrates the tension between external marketing/catalog documentation (optimized for developer discovery, SEO, and one-click installation via Vercel's `skills` CLI) and the in-repository operational agent instructions (`SKILL.md`). The web page abstracts away concrete agent guardrails (such as the "never overwrite an incomplete plan" rule at `SKILL.md:150` and task sizing heuristics) in favor of high-level elevator pitches.
- Open Skills CLI Standard: Highlights Addy's adoption of the Vercel-labs open `skills` ecosystem (`npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`), enabling cross-harness installation into 70+ agent runtimes.
- Standardized 6-Step Skill Anatomy Framework: Explicitly formalizes Addy's design philosophy: "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" (Overview, When to Use, Process, Rationalizations, Red Flags, Verification).
- High Overhead in Raw Snapshot: Over 90% of the raw 22,310 bytes consists of CSS rules, SVG vectors, and navigation chrome rather than semantic content, making direct inclusion in an agent's working context cost-inefficient without preprocessing or HTML tag stripping.

## Context cost
File size: 22,310 bytes (~5,578 tokens). Transitive cost is identical as it loads no local files. Domain-relevant semantic text accounts for only ~1,200 bytes (~300 tokens), with the remaining ~21,100 bytes consisting of web markup boilerplate and styling.
```

---

## 3. Logic Chain

1. **Input File Verification**:
   - Inspected `sources/addy-external/planning-and-task-breakdown.md` using `view_file` lines 1 to 20. Confirmed size is 22,310 bytes, exactly matching the manifest entry in `docs/analysis/manifest/addy.md:197`.
   - Identified that the file is an Astro-compiled static HTML document fetched from `https://skills.addy.ie/skills/planning-and-task-breakdown/` in Phase 0 as dictated by METHOD.md §1.1.

2. **Purpose and Intent Synthesis**:
   - Located the verbatim purpose at line 5: `<p class="detail-summary">Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.</p>` (which duplicates the `<meta name="description">` content at line 1).
   - Identified the secondary trigger in `<div class="detail-when">`: `"You have a spec and need implementable units."`
   - Synthesized the design intent: It serves as the public web discovery showcase, command mapping explainer, and one-click Vercel CLI installer for the skill, bridging web search to the repository's markdown skills.

3. **Phase Assignment**:
   - Observed breadcrumb navigation `<span class="crumb-phase">Plan</span>` and multiple badges (`Plan phase`, `/plan`) in lines 5 and 12.
   - Assigned the package phase `addy:Plan`.

4. **Invocations & Link Graph Analysis**:
   - Traced all outbound links and tool references: points to `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`, `skills/planning-and-task-breakdown/SKILL.md` on GitHub, `CONTRIBUTING.md`, `evals`, `addyosmani.com`, and site routes.
   - Grepped repository `sources/addy/` for references to `skills.addy.ie` and `addy-external`. Confirmed that no file in `sources/addy/` links to `skills.addy.ie`. Classified `Invoked by` as `orphan` per template rules, while noting its inclusion via METHOD.md §1.1.

5. **Exhaustive Concept Extraction (R6)**:
   - Extracted 45 distinct named concepts, frameworks, artifacts, commands, tags, and roles directly from the text with exact `path:line` citations, classifying each as `defined here` or `used here`.
   - Explicitly captured the 6-part skill anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`) which serves as a key architectural framework in Addy's package.

6. **Script and Command Execution (R2)**:
   - Tested the CLI command displayed on the page (`npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`) by running `npx --yes skills add addyosmani/agent-skills --list` in the Bun/macOS shell environment.
   - Captured exit code `0` and verified that the package index lists `planning-and-task-breakdown` with description and instructions matching the web documentation.
   - Analyzed the four embedded browser scripts (mobile toggle, copy handler, scroll reveal, Netlify RUM) and recorded that they are client-side DOM routines.

7. **Defect Analysis (§4 Checklist)**:
   - Systematically evaluated the 8 defect categories from METHOD.md §4:
     - `doc-drift`: Identified 4 instances (anatomy omission of planning sections, trigger simplification, section heading variations, and HTML content inside a `.md` extension).
     - `missing-path`: Identified unresolvable site-relative links in the offline static snapshot.
     - `orphan`: Identified lack of inbound links from repo sources.

8. **Context Cost Calculation**:
   - Calculated raw size (22,310 bytes) and token estimate (~5,578 tokens). Noted severe signal-to-noise discrepancy (~95% HTML/CSS/script boilerplate vs ~5% domain text).

---

## 4. Caveats

1. **Astro Build Source Unavailable**: The underlying Astro source code (templates, Astro components, and CMS/markdown data sources) that compiled into this static HTML file is hosted privately or in a separate deployment pipeline not present in `sources/addy/`. Analysis is strictly bounded to the generated HTML artifact provided in `sources/addy-external/planning-and-task-breakdown.md`.
2. **Network Dependency of Vercel Skills CLI**: Execution of `npx skills add ...` requires active network access to fetch GitHub repository metadata from `github.com/addyosmani/agent-skills`. In an offline environment, this command would fail with network timeout errors.
3. **Offline Static Asset Resolution**: The local file does not include sibling CSS/JS assets from `/_astro/`, meaning opening the raw HTML file in a local browser renders without styles.

---

## 5. Conclusion

Work unit `inv-addy-23` Explorer 1 investigation for `sources/addy-external/planning-and-task-breakdown.md` is **complete, verified, and ready for synthesis**.
- The inventory entry draft is 100% complete, contains no empty required fields, adheres to rules R1–R6, and conforms to `docs/plan/templates/inventory-entry.md`.
- The target file should be recorded as `docs/analysis/inventory/addy/external-planning-and-task-breakdown-md.md` in Phase 1 persistence.
- Manifest row 197 (`docs/analysis/manifest/addy.md:197`) is ready to be marked `[x]` upon completion of the unit report.

---

## 6. Verification Method

To independently verify all findings and claims in this report:

1. **Verify Source Existence & Size**:
   ```bash
   wc -c sources/addy-external/planning-and-task-breakdown.md
   # Expected output: 22310 sources/addy-external/planning-and-task-breakdown.md
   ```

2. **Verify Manifest Row**:
   ```bash
   grep -n "planning-and-task-breakdown.md" docs/analysis/manifest/addy.md
   # Expected output: Line 197: | ../addy-external/planning-and-task-breakdown.md | 22310 | external-doc | [ ] |
   ```

3. **Verify Verbatim Purpose & Triggers**:
   ```bash
   grep -n "Breaks work into ordered tasks" sources/addy-external/planning-and-task-breakdown.md
   grep -n "You have a spec and need implementable units" sources/addy-external/planning-and-task-breakdown.md
   grep -n "Break the spec into small, verifiable, ordered tasks" sources/addy-external/planning-and-task-breakdown.md
   ```

4. **Verify Documented CLI Command & Availability**:
   ```bash
   npx --yes skills add addyosmani/agent-skills --list
   # Confirms exit code 0 and presence of planning-and-task-breakdown in the remote package index
   ```

5. **Verify In-Repo Cross-Reference Absence (Orphan Status)**:
   ```bash
   grep -rn "skills.addy.ie" sources/addy/
   # Expected output: exit code 1 (no matches)
   ```
