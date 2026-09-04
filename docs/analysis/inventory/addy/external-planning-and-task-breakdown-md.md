---
package: addy
path: external/planning-and-task-breakdown.md
type: external-doc
bytes: 22310
unit: inv-addy-22
aliases: []
memo_inputs:
  - {path: external/planning-and-task-breakdown.md, sha256: 8fb58d1a8023ab97c340e53c0e34f9f20419c0de574f60fa64fbae00fd4927e4}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/planning-and-task-breakdown.md

## Purpose — required, verbatim
> "Breaks work into ordered tasks with acceptance criteria and dependency ordering. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — external/planning-and-task-breakdown.md:5

## Design intent — required
Serves as the public web catalog, discovery portal, and installation landing page for Addy Osmani's `planning-and-task-breakdown` skill within the `agent-skills` ecosystem (`skills.addy.ie`). It provides human developers and AI agent integrators with an accessible, high-level overview of the skill's purpose, lifecycle positioning (`Plan` phase, `/plan` slash command), trigger conditions ("You have a spec and need implementable units."), structural anatomy (the standardized 6-part workflow: Overview, When to Use, Process, Rationalizations, Red Flags, Verification), and CLI installation commands via Vercel's open `skills` CLI (`npx skills add ...`). Without this page, developers and agent creators discovering `agent-skills` via web search or social links would lack an interactive portal summarizing the skill's metadata, command mapping, and single-skill versus full-suite installation paths prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Plan

(Rendered as `Plan` in breadcrumb at external/planning-and-task-breakdown.md:5, and as `Plan phase` in the phase chip and sidebar at external/planning-and-task-breakdown.md:5, 12. Associated with slash command `/plan` at external/planning-and-task-breakdown.md:5, 12).

## Inputs — required
- Web client HTTP GET request to "https://skills.addy.ie/skills/planning-and-task-breakdown/" — external/planning-and-task-breakdown.md:1
- Upstream skill specification from "skills/planning-and-task-breakdown/SKILL.md" consumed at site build time — external/planning-and-task-breakdown.md:10
- Prerequisite condition / artifact input: "You have a spec and need implementable units." — external/planning-and-task-breakdown.md:5
- Local stylesheet assets: "/_astro/compare.BYu2_sXs.css" — external/planning-and-task-breakdown.md:1, "/_astro/_slug_.sGV3LZnA.css" — external/planning-and-task-breakdown.md:5
- External web fonts: Google Fonts "Geist" and "Geist Mono" — external/planning-and-task-breakdown.md:1
- External telemetry script: "/.netlify/scripts/rum" — external/planning-and-task-breakdown.md:19

## Outputs — required
- Rendered HTML web page with Open Graph and Twitter Card metadata for search indexing and social sharing — external/planning-and-task-breakdown.md:1, 5
- Copyable terminal CLI installation commands — external/planning-and-task-breakdown.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown` — external/planning-and-task-breakdown.md:8
  - `npx skills add addyosmani/agent-skills` — external/planning-and-task-breakdown.md:8, 15
- Hyperlinks to:
  - Canonical GitHub `SKILL.md`: "https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md" — external/planning-and-task-breakdown.md:10
  - Upstream GitHub repository: "https://github.com/addyosmani/agent-skills" — external/planning-and-task-breakdown.md:5, 15
  - Vercel skills CLI repository: "https://github.com/vercel-labs/skills" — external/planning-and-task-breakdown.md:6
  - Upstream contributing guide: "https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md" — external/planning-and-task-breakdown.md:15
  - Evals framework: "https://github.com/addyosmani/agent-skills/tree/main/evals" — external/planning-and-task-breakdown.md:15
  - Author personal website: "https://addyosmani.com" — external/planning-and-task-breakdown.md:15
  - Site navigation links: "/skills/", "/docs/getting-started/", "/tutorials/", "/lifecycle/", "/loops/", "/teach/", "/compare/" — external/planning-and-task-breakdown.md:5, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — external/planning-and-task-breakdown.md:8
  - Mobile navigation drawer toggle — external/planning-and-task-breakdown.md:5
  - IntersectionObserver scroll reveal effects — external/planning-and-task-breakdown.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — external/planning-and-task-breakdown.md:19
- `none` for disk files (pure web documentation reference)

## Invokes — required
- command /plan — external/planning-and-task-breakdown.md:12
- file skills/planning-and-task-breakdown/SKILL.md — external/planning-and-task-breakdown.md:10
- doc CONTRIBUTING.md — external/planning-and-task-breakdown.md:15
- doc evals — external/planning-and-task-breakdown.md:15
- doc lifecycle — external/planning-and-task-breakdown.md:5
- doc tutorials — external/planning-and-task-breakdown.md:5
- doc loops — external/planning-and-task-breakdown.md:5
- doc teach — external/planning-and-task-breakdown.md:5
- doc compare — external/planning-and-task-breakdown.md:5
- script /.netlify/scripts/rum — external/planning-and-task-breakdown.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/planning-and-task-breakdown.md`) is a frozen snapshot of `https://skills.addy.ie/skills/planning-and-task-breakdown/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — external/planning-and-task-breakdown.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/planning-and-task-breakdown.md:1, 5, 8, 10, 15 — used here
- `Geist` — external/planning-and-task-breakdown.md:1 — used here
- `Geist Mono` — external/planning-and-task-breakdown.md:1 — used here
- `Skills` — external/planning-and-task-breakdown.md:5, 15 — used here
- `Docs` — external/planning-and-task-breakdown.md:5, 15 — used here
- `Tutorials` — external/planning-and-task-breakdown.md:5, 15 — used here
- `Lifecycle` — external/planning-and-task-breakdown.md:5, 12, 15 — used here
- `Loops` — external/planning-and-task-breakdown.md:5, 15 — used here
- `Teach` — external/planning-and-task-breakdown.md:5, 15 — used here
- `Compare` — external/planning-and-task-breakdown.md:5, 15 — used here
- `Plan` — external/planning-and-task-breakdown.md:5 — used here
- `Plan phase` — external/planning-and-task-breakdown.md:5, 12 — defined here
- `/plan` — external/planning-and-task-breakdown.md:5, 12 — used here
- `ordered tasks` — external/planning-and-task-breakdown.md:1, 5, 12 — used here
- `acceptance criteria` — external/planning-and-task-breakdown.md:1, 5 — used here
- `dependency ordering` — external/planning-and-task-breakdown.md:1, 5 — used here
- `spec` — external/planning-and-task-breakdown.md:5, 12 — used here
- `implementable units` — external/planning-and-task-breakdown.md:5 — defined here
- `#planning` — external/planning-and-task-breakdown.md:5 — defined here
- `#tasks` — external/planning-and-task-breakdown.md:5 — defined here
- `skills CLI` — external/planning-and-task-breakdown.md:6 — used here
- `This skill only` — external/planning-and-task-breakdown.md:8 — defined here
- `All skills` — external/planning-and-task-breakdown.md:8 — defined here
- `npx skills add` — external/planning-and-task-breakdown.md:8, 15 — used here
- `anatomy` — external/planning-and-task-breakdown.md:9, 10 — defined here
- `Overview` — external/planning-and-task-breakdown.md:10 — defined here
- `When to Use` — external/planning-and-task-breakdown.md:10 — defined here
- `Process` — external/planning-and-task-breakdown.md:10 — defined here
- `Rationalizations` — external/planning-and-task-breakdown.md:10 — defined here
- `Red Flags` — external/planning-and-task-breakdown.md:10 — defined here
- `Verification` — external/planning-and-task-breakdown.md:10 — defined here
- `SKILL.md` — external/planning-and-task-breakdown.md:10, 11 — used here
- `Command` — external/planning-and-task-breakdown.md:12 — defined here
- `The lifecycle` — external/planning-and-task-breakdown.md:15 — used here
- `Loop engineering` — external/planning-and-task-breakdown.md:15 — used here
- `Teach &amp; share` — external/planning-and-task-breakdown.md:15 — used here
- `How it compares` — external/planning-and-task-breakdown.md:15 — used here
- `Getting started` — external/planning-and-task-breakdown.md:15 — used here
- `Claude Code` — external/planning-and-task-breakdown.md:15 — used here
- `Codex` — external/planning-and-task-breakdown.md:15 — used here
- `Cursor` — external/planning-and-task-breakdown.md:15 — used here
- `Antigravity` — external/planning-and-task-breakdown.md:15 — used here
- `Contributing` — external/planning-and-task-breakdown.md:15 — used here
- `Evals framework` — external/planning-and-task-breakdown.md:15 — used here
- `Addy Osmani` — external/planning-and-task-breakdown.md:16 — used here

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
none

## Defects — required
- doc-drift · external/planning-and-task-breakdown.md:10 vs sources/addy/skills/planning-and-task-breakdown/SKILL.md:125-220, 255-258 · The external page claims the skill strictly follows a generic 6-part anatomy (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification), omitting substantive domain-specific sections (Task Sizing Guidelines, Output Files / tasks/plan.md / tasks/todo.md, Plan Document Template, Parallelization Opportunities, and See Also) that constitute the operational core of SKILL.md.
- doc-drift · external/planning-and-task-breakdown.md:5 vs sources/addy/skills/planning-and-task-breakdown/SKILL.md:12-20 · The external page's primary "Use when" box collapses trigger criteria into a single condition ("You have a spec and need implementable units."), omitting three other explicit positive triggers and the negative trigger ("When NOT to use") documented in SKILL.md.
- doc-drift · external/planning-and-task-breakdown.md:10 vs sources/addy/skills/planning-and-task-breakdown/SKILL.md:22, 222 · The external page names anatomy sections "Process" and "Rationalizations", whereas SKILL.md titles them "The Planning Process" and "Common Rationalizations".
- doc-drift · external/planning-and-task-breakdown.md:6-8 vs sources/addy/README.md · External page documents installation via npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown (Vercel open skills CLI), which is not documented in README.md, CLAUDE.md, or package.json.
- doc-drift · external/planning-and-task-breakdown.md:1 · The snapshot file uses a .md markdown file extension in sources/addy-external/ and docs/analysis/manifest/addy.md:197, but its content is 100% compiled HTML (<!DOCTYPE html><html...) generated by Astro.
- missing-path · external/planning-and-task-breakdown.md:1, 5, 12, 15, 19 · Site-relative internal paths (/skills/, /docs/getting-started/, /tutorials/, /lifecycle/, /loops/, /teach/, /compare/, /_astro/..., /.netlify/...) do not resolve to local files on disk in the snapshot directory.
- orphan · external/planning-and-task-breakdown.md:1-20 · The external doc page is not referenced or linked from any file within sources/addy/; it is brought into scope solely via the external-doc rule of METHOD.md §1.1.
- other · external/planning-and-task-breakdown.md:1-20 · Heavy packaging overhead: 22,310 bytes of static compiled Astro HTML markup, CSS stylesheets, navigation chrome, and Netlify telemetry, with less than 1,200 bytes (~5%) dedicated to skill-specific description and metadata.

## Observations
- **Public Discovery vs Operational Source Duality**: Demonstrates the structural tension between external marketing/catalog documentation (optimized for developer discovery, SEO, and one-click installation via Vercel's open `skills` CLI) and in-repository operational agent instructions (`SKILL.md`). The web page abstracts away concrete agent guardrails (such as the "never overwrite an incomplete plan" rule at `SKILL.md:150` and task sizing heuristics) in favor of high-level elevator pitches.
- **Open Skills CLI Standard**: Highlights Addy's adoption of the Vercel-labs open `skills` ecosystem (`npx skills add addyosmani/agent-skills --skill planning-and-task-breakdown`), enabling cross-harness installation into 70+ agent runtimes.
- **Standardized 6-Step Skill Anatomy Framework**: Explicitly formalizes Addy's design philosophy: "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" (Overview, When to Use, Process, Rationalizations, Red Flags, Verification).
- **High Overhead in Raw Snapshot**: Over 90% of the raw 22,310 bytes consists of CSS rules, SVG vectors, and navigation chrome rather than semantic content, making direct inclusion in an agent's working context cost-inefficient without preprocessing or HTML tag stripping.

## Context cost
- File size: 22,310 bytes (~5,578 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime.
