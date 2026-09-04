---
package: addy
path: external/performance-optimization.md
type: external-doc
bytes: 26603
unit: inv-addy-22
aliases: []
memo_inputs:
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/performance-optimization.md

## Purpose — required, verbatim
> "Optimizes application performance across frontend, backend, queries, and databases. Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection. Run the audit via /webperf." — external/performance-optimization.md:5

## Design intent — required
The external documentation page at `https://skills.addy.ie/skills/performance-optimization/` serves as the public web catalog entry, discovery portal, and installation landing page for Addy Osmani's `performance-optimization` skill within the `agent-skills` ecosystem (`skills.addy.ie`). It provides human developers and AI agent integrators with an accessible, high-level overview of the skill's purpose, lifecycle positioning (`Review phase`, associated commands `/webperf` and `/review`), trigger conditions ("Performance requirements exist or you suspect regressions."), structural anatomy (the standardized 6-part workflow: Overview, When to Use, Process, Rationalizations, Red Flags, Verification), related review skills (`code-review-and-quality`, `code-simplification`, `security-and-hardening`), and CLI installation commands via Vercel's open `skills` CLI (`npx skills add ...`). Without this document, human developers and autonomous agents browsing the public web documentation would lack an interactive portal summarizing the measure-first optimization methodology across frontend, backend, queries, and databases, its installation entry points, and its structural placement within the review phase of the development lifecycle.

## Phase — required
addy:Review

(Rendered as `Review` in breadcrumb at external/performance-optimization.md:5, and as `Review phase` in the phase chip and sidebar at external/performance-optimization.md:5, 12. Aligns with `CLAUDE.md:25`, `README.md:267, 367`, and `skills/using-agent-skills/SKILL.md:183`).

## Inputs — required
- Web client HTTP GET request to "https://skills.addy.ie/skills/performance-optimization/" — external/performance-optimization.md:1
- Upstream skill specification from "skills/performance-optimization/SKILL.md" consumed at site build time — external/performance-optimization.md:10
- Prerequisite condition / triggering context: "Performance requirements exist or you suspect regressions." — external/performance-optimization.md:5
- Local stylesheet assets: "/_astro/compare.BYu2_sXs.css" — external/performance-optimization.md:1, "/_astro/_slug_.sGV3LZnA.css" — external/performance-optimization.md:5
- External web fonts: Google Fonts "Geist" and "Geist Mono" — external/performance-optimization.md:1
- External telemetry script: "/.netlify/scripts/rum" — external/performance-optimization.md:19

## Outputs — required
- Rendered HTML web page with Open Graph and Twitter Card metadata for search indexing and social sharing — external/performance-optimization.md:1, 5
- Copyable terminal CLI installation commands — external/performance-optimization.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill performance-optimization` — external/performance-optimization.md:8
  - `npx skills add addyosmani/agent-skills` — external/performance-optimization.md:8, 15
- Hyperlinks to:
  - Canonical GitHub `SKILL.md`: "https://github.com/addyosmani/agent-skills/blob/main/skills/performance-optimization/SKILL.md" — external/performance-optimization.md:10
  - Upstream GitHub repository: "https://github.com/addyosmani/agent-skills" — external/performance-optimization.md:5, 15
  - Vercel skills CLI repository: "https://github.com/vercel-labs/skills" — external/performance-optimization.md:6
  - Upstream contributing guide: "https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md" — external/performance-optimization.md:15
  - Evals framework: "https://github.com/addyosmani/agent-skills/tree/main/evals" — external/performance-optimization.md:15
  - Author personal website: "https://addyosmani.com" — external/performance-optimization.md:15
  - Site navigation links: "/skills/", "/docs/getting-started/", "/tutorials/", "/lifecycle/", "/loops/", "/teach/", "/compare/" — external/performance-optimization.md:5, 15
- Canonical skill anatomy specification (6-step structure: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — external/performance-optimization.md:10
- Lifecycle navigation routing and discovery links to related review skills ("code-review-and-quality", "code-simplification", "security-and-hardening") and lifecycle documentation — external/performance-optimization.md:12
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — external/performance-optimization.md:8
  - Mobile navigation drawer toggle — external/performance-optimization.md:5
  - IntersectionObserver scroll reveal effects — external/performance-optimization.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — external/performance-optimization.md:19
- `none` for disk files (pure web documentation reference)

## Invokes — required
- command /webperf — external/performance-optimization.md:5
- command /review — external/performance-optimization.md:12
- skill code-review-and-quality — external/performance-optimization.md:12
- skill code-simplification — external/performance-optimization.md:12
- skill security-and-hardening — external/performance-optimization.md:12
- file skills/performance-optimization/SKILL.md — external/performance-optimization.md:10
- doc CONTRIBUTING.md — external/performance-optimization.md:15
- doc evals — external/performance-optimization.md:15
- doc lifecycle — external/performance-optimization.md:5
- doc tutorials — external/performance-optimization.md:5
- doc loops — external/performance-optimization.md:5
- doc teach — external/performance-optimization.md:5
- doc compare — external/performance-optimization.md:5
- script /.netlify/scripts/rum — external/performance-optimization.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/performance-optimization.md`) is a frozen snapshot of `https://skills.addy.ie/skills/performance-optimization/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `performance-optimization` — external/performance-optimization.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/performance-optimization.md:1, 5, 8, 10, 15 — used here
- `Geist` — external/performance-optimization.md:1 — used here
- `Geist Mono` — external/performance-optimization.md:1 — used here
- `Skills` — external/performance-optimization.md:5, 15 — used here
- `Review` — external/performance-optimization.md:5, 12 — defined here
- `Review phase` — external/performance-optimization.md:5, 12 — defined here
- `/webperf` — external/performance-optimization.md:1, 5 — used here
- `/review` — external/performance-optimization.md:12 — used here
- `/code-simplify` — external/performance-optimization.md:12 — used here
- `Core Web Vitals` — external/performance-optimization.md:1, 5 — used here
- `anti-pattern detection` — external/performance-optimization.md:1, 5 — used here
- `bundle analysis` — external/performance-optimization.md:1, 5 — used here
- `profiling workflows` — external/performance-optimization.md:1, 5 — used here
- `Measure-first approach` — external/performance-optimization.md:1, 5 — defined here
- `#performance` — external/performance-optimization.md:5 — defined here
- `#web-vitals` — external/performance-optimization.md:5 — defined here
- `skills CLI` — external/performance-optimization.md:6 — used here
- `This skill only` — external/performance-optimization.md:8 — defined here
- `All skills` — external/performance-optimization.md:8 — defined here
- `npx skills add` — external/performance-optimization.md:8, 15 — used here
- `anatomy` — external/performance-optimization.md:9, 10 — defined here
- `Overview` — external/performance-optimization.md:10 — defined here
- `When to Use` — external/performance-optimization.md:10 — defined here
- `Process` — external/performance-optimization.md:10 — defined here
- `Rationalizations` — external/performance-optimization.md:10 — defined here
- `Red Flags` — external/performance-optimization.md:10 — defined here
- `Verification` — external/performance-optimization.md:10 — defined here
- `SKILL.md` — external/performance-optimization.md:10, 11 — used here
- `Command` — external/performance-optimization.md:8, 12 — defined here
- `More in the Review phase` — external/performance-optimization.md:12 — defined here
- `code-review-and-quality` — external/performance-optimization.md:12 — used here
- `code-simplification` — external/performance-optimization.md:12 — used here
- `security-and-hardening` — external/performance-optimization.md:12 — used here
- `Five-axis review` — external/performance-optimization.md:12 — used here
- `Chesterton’s Fence` — external/performance-optimization.md:12 — used here
- `OWASP Top 10` — external/performance-optimization.md:12 — used here
- `The lifecycle` — external/performance-optimization.md:15 — used here
- `Loop engineering` — external/performance-optimization.md:15 — used here
- `Teach &amp; share` — external/performance-optimization.md:15 — used here
- `How it compares` — external/performance-optimization.md:15 — used here
- `Getting started` — external/performance-optimization.md:15 — used here
- `Claude Code` — external/performance-optimization.md:15 — used here
- `Codex` — external/performance-optimization.md:15 — used here
- `Cursor` — external/performance-optimization.md:15 — used here
- `Antigravity` — external/performance-optimization.md:15 — used here
- `Contributing` — external/performance-optimization.md:15 — used here
- `Evals framework` — external/performance-optimization.md:15 — used here
- `Addy Osmani` — external/performance-optimization.md:16 — used here

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
    - `<div class="detail-grid-bg grid-bg">` (line 5)
    - `<div class="container detail-head">` (line 5)
      - `Breadcrumb: Skills / Review` (line 5)
      - `Phase badges: Review phase, /webperf` (line 5)
      - `<h1>performance-optimization</h1>` (line 5)
      - `<p class="detail-summary">` (line 5)
      - `<div class="detail-when">` ("Use when: Performance requirements exist or you suspect regressions.") (line 5)
      - `Tags: #performance, #web-vitals` (line 5)
    - `<div class="container detail-body">` (line 5)
      - `<div class="detail-main">` (line 5)
        - `<section class="panel">` (line 5)
          - `<h2>Install just this skill</h2>` (line 5)
          - `CLI command: This skill only ($ npx skills add addyosmani/agent-skills --skill performance-optimization)` (line 8)
          - `CLI command: All skills ($ npx skills add addyosmani/agent-skills)` (line 8)
        - `<section class="panel">` (line 8)
          - `<h2>How this skill is structured</h2>` (line 8)
          - `Anatomy list: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification` (line 10)
          - `Action: Read the full SKILL.md link` (line 10)
      - `<aside class="detail-side">` (line 12)
        - `<h3>Review phase</h3>` (line 12)
        - `Blurb: Quality, security and performance gates before merge.` (line 12)
        - `Command: /review` (line 12)
        - `Link: See the full lifecycle →` (line 12)
    - `<div class="container detail-related">` (line 12)
      - `<h2>More in the Review phase</h2>` (line 12)
      - `Related skill card: code-review-and-quality (/review)` (line 12)
      - `Related skill card: code-simplification (/code-simplify)` (line 12)
      - `Related skill card: security-and-hardening` (line 12)
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
- internal-contradiction · external/performance-optimization.md:5 vs external/performance-optimization.md:12 · Severe self-contradiction on command mapping: the header badge at line 5 specifies slash command /webperf ("Run the audit via /webperf."), whereas the sidebar metadata card at line 12 specifies "Command: /review".
- doc-drift · external/performance-optimization.md:5, 12 vs sources/addy/commands/webperf.toml:1-4 and sources/addy/commands/review.toml:1-12 · Upstream repository defines /webperf as a standalone web application performance auditing command that spawns the web-performance-auditor subagent, whereas /review conducts a broader five-axis code review across correctness, readability, architecture, security, and performance; the external page conflates the two by presenting /webperf as the header badge and /review in the sidebar card.
- doc-drift · external/performance-optimization.md:10 vs sources/addy/skills/performance-optimization/SKILL.md:8-497 · The external page asserts a generic 6-part skill anatomy (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification), omitting core operational sections defined in SKILL.md: Core Web Vitals Targets (lines 22-29), The Optimization Workflow (5 steps: Measure, Identify, Fix, Verify, Guard, lines 30-38), Where to Start Measuring diagnostic tree (lines 73-97), Common Anti-Patterns (lines 221-365), and Verification Checklist (lines 425-455).
- doc-drift · external/performance-optimization.md:5 vs sources/addy/skills/performance-optimization/SKILL.md:12-20 · The external page's primary "Use when" callout collapses trigger criteria to a single clause ("Performance requirements exist or you suspect regressions."), omitting three other positive triggers (user/monitoring reports, Core Web Vitals score drops, large dataset/high traffic feature building) and omitting the negative trigger constraint ("When NOT to use: Don't optimize before you have evidence of a problem.").
- doc-drift · external/performance-optimization.md:10 vs sources/addy/skills/performance-optimization/SKILL.md:30, 367 · The external page names anatomy sections "Process" and "Rationalizations", whereas SKILL.md titles them "The Optimization Workflow" and "Common Rationalizations".
- doc-drift · external/performance-optimization.md:6-8 vs sources/addy/README.md · External page promotes installation via npx skills add addyosmani/agent-skills --skill performance-optimization (Vercel open skills CLI), which is not documented in README.md, CLAUDE.md, or package.json.
- doc-drift · external/performance-optimization.md:1 · The snapshot file uses a .md markdown file extension in sources/addy-external/ and docs/analysis/manifest/addy.md:196, but its content is 100% compiled HTML (<!DOCTYPE html><html...) generated by Astro.
- missing-path · external/performance-optimization.md:1, 5, 12, 15, 19 · Site-relative internal paths (/skills/, /docs/getting-started/, /tutorials/, /lifecycle/, /loops/, /teach/, /compare/, /_astro/..., /.netlify/...) do not resolve to local files on disk in the snapshot directory.
- orphan · external/performance-optimization.md:1-20 · The external doc page is not referenced or linked from any file within sources/addy/; it is brought into scope solely via the external-doc rule of METHOD.md §1.1.
- other · external/performance-optimization.md:1-20 · Heavy packaging overhead: 26,603 bytes of static compiled Astro HTML markup, CSS stylesheets, navigation chrome, and Netlify telemetry, with less than 1,500 bytes (~5.6%) dedicated to skill-specific description and metadata.

## Observations
- **Measure-First Methodology**: Strongly reinforces the core engineering principle articulated in `SKILL.md`: "Measure before optimizing. Performance work without measurement is guessing — and guessing leads to premature optimization that adds complexity without improving what matters."
- **Command Discrepancy & Routing Confusion**: The duality between `/webperf` (a specialized audit tool relying on Lighthouse, CrUX, and Chrome DevTools MCP) and `/review` (a general 5-axis code review command) creates ambiguity in how agents and humans should trigger performance evaluations.
- **Review Phase Cluster**: Grouped alongside `code-review-and-quality`, `code-simplification`, and `security-and-hardening` in the `Review phase`, representing the pre-merge quality and hardening gate of the development lifecycle.
- **Vercel Skills CLI Distribution**: Provides copy-paste commands for single-skill and full-suite installation using Vercel's open `skills` CLI, enabling cross-agent platform integration.
- **Raw HTML Snapshot Inefficiency**: Over 94% of the 26,603 bytes consists of compiled HTML markup, styling classes, and boilerplate chrome rather than operational skill guidance.

## Context cost
- File size: 26,603 bytes (~6,650 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime.
