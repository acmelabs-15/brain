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

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/planning-and-task-breakdown.md:13-14

## Design intent — required
Serves as the public web catalog, discovery portal, and installation landing page for Addy Osmani's `planning-and-task-breakdown` skill within the `agent-skills` ecosystem (`skills.addy.ie`). It provides human developers and AI agent integrators with an accessible, high-level overview of the skill's purpose, lifecycle positioning (`Plan` phase, `/plan` slash command), trigger conditions ("You have a spec and need implementable units"), structural anatomy (the standardized 6-part workflow: Overview, When to Use, Process, Rationalizations, Red Flags, Verification), and CLI installation commands via Vercel's open `skills` CLI (`npx skills add ...`). Without this page, developers and agent creators discovering `agent-skills` via web search or social links would lack an interactive portal summarizing the skill's metadata, command mapping, and single-skill versus full-suite installation paths prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Plan

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/planning-and-task-breakdown/` — ../addy-external/planning-and-task-breakdown.md:1
- Upstream skill specification from `skills/planning-and-task-breakdown/SKILL.md` consumed at site build time — ../addy-external/planning-and-task-breakdown.md:1, 5, 10, 11
- Prerequisite condition / artifact input: "A spec and need implementable units" — ../addy-external/planning-and-task-breakdown.md:5
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/planning-and-task-breakdown.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/planning-and-task-breakdown.md:1
- External telemetry script: `/.netlify/scripts/rum` — ../addy-external/planning-and-task-breakdown.md:19

## Outputs — required
- Rendered HTML web page with Open Graph and Twitter Card metadata for search indexing and social sharing — ../addy-external/planning-and-task-breakdown.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/planning-and-task-breakdown.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`
  - `npx skills add addyosmani/agent-skills`
- Hyperlinks to:
  - Canonical GitHub `SKILL.md`: `https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md` — ../addy-external/planning-and-task-breakdown.md:10
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/planning-and-task-breakdown.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/planning-and-task-breakdown.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/planning-and-task-breakdown.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/planning-and-task-breakdown.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/planning-and-task-breakdown.md:15
  - Site navigation links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/planning-and-task-breakdown.md:5, 12, 15
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
  - `Tagline & quick-add command: npx skills add addyosmani/agent-skills` (lines 13-15)
  - `<h3>Product</h3>` (line 15)
  - `<h3>Setup</h3>` (line 15)
  - `<h3>Resources</h3>` (line 15)
  - `Copyright, licensing, and author credit` (lines 15-18)
- Embedded scripts: mobile menu toggle (line 5), copy button (line 8), reveal animation (line 18), Netlify RUM analytics (line 19)

## Scripts — required if type is script or the skill ships scripts
- Documented CLI command: `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` — ../addy-external/planning-and-task-breakdown.md:8
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills --list`
  - abridged stdout:
    ```text
    planning-and-task-breakdown
      Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible.
    ...
    Use --skill <name> to install specific skills
    ```
  - **actual exit code:** `0`
  - documented exit codes: none documented on page
  - does the output match what the documentation claims? yes; resolves package and exposes `--skill planning-and-task-breakdown`
- Embedded inline JavaScript snippets:
  - Mobile drawer toggle (line 5, 1 line, DOM class toggle)
  - Clipboard copy handler (line 8, 1 line, `navigator.clipboard.writeText`)
  - Scroll reveal observer (line 18, 1 line, `IntersectionObserver`)
  - Netlify RUM analytics beacon (line 19, external script source)
  - Execution context: Browser DOM runtime only.

## Defects — required
- `doc-drift` · ../addy-external/planning-and-task-breakdown.md:10 vs skills/planning-and-task-breakdown/SKILL.md:125-220, 255-258 · The external page claims the skill strictly follows a generic 6-part anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), omitting substantive domain-specific sections (`Task Sizing Guidelines`, `Output Files` / `tasks/plan.md` / `tasks/todo.md`, `Plan Document Template`, `Parallelization Opportunities`, and `See Also`) that constitute the operational core of `SKILL.md`.
- `doc-drift` · ../addy-external/planning-and-task-breakdown.md:5 vs skills/planning-and-task-breakdown/SKILL.md:12-20 · The external page's primary "Use when" box collapses trigger criteria into a single condition ("You have a spec and need implementable units."), omitting three other explicit positive triggers and the negative trigger ("When NOT to use") documented in `SKILL.md`.
- `doc-drift` · ../addy-external/planning-and-task-breakdown.md:10 vs skills/planning-and-task-breakdown/SKILL.md:22, 222 · The external page names anatomy sections "Process" and "Rationalizations", whereas `SKILL.md` titles them "The Planning Process" and "Common Rationalizations".
- `doc-drift` · ../addy-external/planning-and-task-breakdown.md:6-8 vs repository root docs · External page documents installation via `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` (Vercel open `skills` CLI), which is not documented in `README.md`, `CLAUDE.md`, or `package.json`.
- `doc-drift` · ../addy-external/planning-and-task-breakdown.md:1 · The snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:197`, but its content is 100% compiled HTML (`<!DOCTYPE html><html...`) generated by Astro.
- `missing-path` · ../addy-external/planning-and-task-breakdown.md:1, 5, 12, 15, 19 · Site-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · ../addy-external/planning-and-task-breakdown.md:1-20 · The external doc page is not referenced or linked from any file within `sources/addy/`; it is brought into scope solely via the external-doc rule of `METHOD.md` §1.1.

## Observations
- Public Discovery vs Operational Source Duality: Demonstrates the structural tension between external marketing/catalog documentation (optimized for developer discovery, SEO, and one-click installation via Vercel's open `skills` CLI) and in-repository operational agent instructions (`SKILL.md`). The web page abstracts away concrete agent guardrails (such as the "never overwrite an incomplete plan" rule at `SKILL.md:150` and task sizing heuristics) in favor of high-level elevator pitches.
- Open Skills CLI Standard: Highlights Addy's adoption of the Vercel-labs open `skills` ecosystem (`npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`), enabling cross-harness installation into 70+ agent runtimes.
- Standardized 6-Step Skill Anatomy Framework: Explicitly formalizes Addy's design philosophy: "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" (Overview, When to Use, Process, Rationalizations, Red Flags, Verification).
- High Overhead in Raw Snapshot: Over 90% of the raw 22,310 bytes consists of CSS rules, SVG vectors, and navigation chrome rather than semantic content, making direct inclusion in an agent's working context cost-inefficient without preprocessing or HTML tag stripping.

## Context cost
File size: 22,310 bytes (~5,578 tokens). Transitive cost is identical as it loads no local files. Domain-relevant semantic text accounts for only ~1,200 bytes (~300 tokens), with the remaining ~21,100 bytes consisting of web markup boilerplate and styling.
