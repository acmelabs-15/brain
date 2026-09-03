---
package: addy
path: ../addy-external/incremental-implementation.md
type: external-doc
bytes: 26461
unit: inv-addy-23
---

# ../addy-external/incremental-implementation.md

## Purpose — required, verbatim
> "Delivers changes incrementally as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes. Use when you’re about to write a large amount of code at once." — ../addy-external/incremental-implementation.md:5

Additional triggering purpose:
> "Any change touching more than one file." — ../addy-external/incremental-implementation.md:5

Sidebar summary:
> "Write the code in thin, tested vertical slices." — ../addy-external/incremental-implementation.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/incremental-implementation.md:13-14

## Design intent — required
Serves as the public web catalog, discovery portal, and distribution page for the `incremental-implementation` skill on `skills.addy.ie`. It establishes the skill's identity within the `addy:Build` lifecycle phase, associates it with the `/build` slash command, articulates the senior engineering value proposition of thin vertical slices and safe defaults, provides installation mechanisms via Vercel's open `skills` CLI (`npx skills add ...`), exposes the standardized 6-part skill anatomy, links directly to the canonical `SKILL.md` on GitHub, and provides cross-skill discovery for related Build-phase skills (`test-driven-development`, `context-engineering`, `source-driven-development`). Without this page, developers and agent creators discovering `agent-skills` through the web would lack an accessible overview of the skill's lifecycle mapping, anatomy breakdown, sibling skills in the Build phase, and CLI installation commands prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Build

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/incremental-implementation/` — ../addy-external/incremental-implementation.md:1
- Upstream skill specification from `skills/incremental-implementation/SKILL.md` consumed at site build time — ../addy-external/incremental-implementation.md:1, 5, 10, 11
- Prerequisite condition / trigger: "Any change touching more than one file." — ../addy-external/incremental-implementation.md:5
- Sibling skills in Build phase referenced: `test-driven-development`, `context-engineering`, `source-driven-development` — ../addy-external/incremental-implementation.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/incremental-implementation.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/incremental-implementation.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/incremental-implementation.md:19

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/incremental-implementation.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/incremental-implementation.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill incremental-implementation`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Build-phase skills: `test-driven-development` (`/test`), `context-engineering`, `source-driven-development` — ../addy-external/incremental-implementation.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/incremental-implementation/SKILL.md` — ../addy-external/incremental-implementation.md:10
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/incremental-implementation.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/incremental-implementation.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/incremental-implementation.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/incremental-implementation.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/incremental-implementation.md:15
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/incremental-implementation.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/incremental-implementation.md:8
  - Mobile navigation drawer toggle — ../addy-external/incremental-implementation.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/incremental-implementation.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/incremental-implementation.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill incremental-implementation — ../addy-external/incremental-implementation.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/incremental-implementation.md:8, 15
- skill skills/incremental-implementation/SKILL.md — ../addy-external/incremental-implementation.md:10
- skill skills/test-driven-development/SKILL.md — ../addy-external/incremental-implementation.md:12
- skill skills/context-engineering/SKILL.md — ../addy-external/incremental-implementation.md:12
- skill skills/source-driven-development/SKILL.md — ../addy-external/incremental-implementation.md:12
- command /build — ../addy-external/incremental-implementation.md:5, 12
- command /test — ../addy-external/incremental-implementation.md:12
- doc CONTRIBUTING.md — ../addy-external/incremental-implementation.md:15
- directory evals — ../addy-external/incremental-implementation.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/incremental-implementation.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/incremental-implementation.md:5, 15
- external-link https://addyosmani.com — ../addy-external/incremental-implementation.md:15
- script /.netlify/scripts/rum — ../addy-external/incremental-implementation.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:198`. Not linked or invoked by any file in `sources/addy/`.)*

## Concepts named — required, verbatim
- `incremental-implementation` — ../addy-external/incremental-implementation.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/incremental-implementation.md:1, 5, 8, 12, 15 — used here
- `Geist` — ../addy-external/incremental-implementation.md:1 — used here
- `Geist Mono` — ../addy-external/incremental-implementation.md:1 — used here
- `thin vertical slices` — ../addy-external/incremental-implementation.md:1, 5, 12 — used here
- `feature flags` — ../addy-external/incremental-implementation.md:1, 5 — used here
- `safe defaults` — ../addy-external/incremental-implementation.md:1, 5 — used here
- `rollback-friendly changes` — ../addy-external/incremental-implementation.md:1, 5 — used here
- `Skills` — ../addy-external/incremental-implementation.md:5, 15 — used here
- `Docs` — ../addy-external/incremental-implementation.md:5, 15 — used here
- `Tutorials` — ../addy-external/incremental-implementation.md:5, 15 — used here
- `Lifecycle` — ../addy-external/incremental-implementation.md:5, 12, 15 — used here
- `Loops` — ../addy-external/incremental-implementation.md:5, 15 — used here
- `Teach` — ../addy-external/incremental-implementation.md:5, 15 — used here
- `Compare` — ../addy-external/incremental-implementation.md:5, 15 — used here
- `Build` — ../addy-external/incremental-implementation.md:5, 12 — used here
- `Build phase` — ../addy-external/incremental-implementation.md:5, 12 — defined here
- `/build` — ../addy-external/incremental-implementation.md:5, 12 — used here
- `Use when` — ../addy-external/incremental-implementation.md:5 — defined here
- `#implementation` — ../addy-external/incremental-implementation.md:5 — defined here
- `#workflow` — ../addy-external/incremental-implementation.md:5 — defined here
- `skills CLI` — ../addy-external/incremental-implementation.md:6 — used here
- `This skill only` — ../addy-external/incremental-implementation.md:8 — defined here
- `All skills` — ../addy-external/incremental-implementation.md:8 — defined here
- `npx skills add` — ../addy-external/incremental-implementation.md:8, 15 — used here
- `How this skill is structured` — ../addy-external/incremental-implementation.md:8 — defined here
- `anatomy` — ../addy-external/incremental-implementation.md:9, 10 — defined here
- `workflow` — ../addy-external/incremental-implementation.md:9 — used here
- `Overview` — ../addy-external/incremental-implementation.md:10 — defined here
- `When to Use` — ../addy-external/incremental-implementation.md:10 — defined here
- `Process` — ../addy-external/incremental-implementation.md:10 — defined here
- `Rationalizations` — ../addy-external/incremental-implementation.md:10 — defined here
- `Red Flags` — ../addy-external/incremental-implementation.md:10 — defined here
- `Verification` — ../addy-external/incremental-implementation.md:10 — defined here
- `SKILL.md` — ../addy-external/incremental-implementation.md:10, 11 — used here
- `test-driven-development` — ../addy-external/incremental-implementation.md:12 — used here
- `/test` — ../addy-external/incremental-implementation.md:12 — used here
- `#testing` — ../addy-external/incremental-implementation.md:12 — used here
- `#tdd` — ../addy-external/incremental-implementation.md:12 — used here
- `#quality` — ../addy-external/incremental-implementation.md:12 — used here
- `Red-Green-Refactor` — ../addy-external/incremental-implementation.md:12 — used here
- `the test pyramid` — ../addy-external/incremental-implementation.md:12 — used here
- `DAMP over DRY` — ../addy-external/incremental-implementation.md:12 — used here
- `the Beyoncé Rule` — ../addy-external/incremental-implementation.md:12 — used here
- `context-engineering` — ../addy-external/incremental-implementation.md:12 — used here
- `#context` — ../addy-external/incremental-implementation.md:12 — used here
- `#agents` — ../addy-external/incremental-implementation.md:12 — used here
- `#mcp` — ../addy-external/incremental-implementation.md:12 — used here
- `rules files` — ../addy-external/incremental-implementation.md:12 — used here
- `context packing` — ../addy-external/incremental-implementation.md:12 — used here
- `MCP` — ../addy-external/incremental-implementation.md:12 — used here
- `source-driven-development` — ../addy-external/incremental-implementation.md:12 — used here
- `#documentation` — ../addy-external/incremental-implementation.md:12 — used here
- `#correctness` — ../addy-external/incremental-implementation.md:12 — used here
- `More in the Build phase` — ../addy-external/incremental-implementation.md:12 — defined here
- `The lifecycle` — ../addy-external/incremental-implementation.md:15 — defined here
- `Loop engineering` — ../addy-external/incremental-implementation.md:15 — defined here
- `Teach & share` — ../addy-external/incremental-implementation.md:15 — defined here
- `How it compares` — ../addy-external/incremental-implementation.md:15 — defined here
- `Getting started` — ../addy-external/incremental-implementation.md:15 — defined here
- `Claude Code` — ../addy-external/incremental-implementation.md:15 — used here
- `Codex` — ../addy-external/incremental-implementation.md:15 — used here
- `Cursor` — ../addy-external/incremental-implementation.md:15 — used here
- `Antigravity` — ../addy-external/incremental-implementation.md:15 — used here
- `Contributing` — ../addy-external/incremental-implementation.md:15 — used here
- `Evals framework` — ../addy-external/incremental-implementation.md:15 — used here
- `Addy Osmani` — ../addy-external/incremental-implementation.md:1, 16 — used here

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
      - `Breadcrumb: Skills / Build` (line 5)
      - `Top badges: Build phase, /build` (line 5)
      - `<h1>incremental-implementation</h1>` (line 5)
      - `<p class="detail-summary">` (line 5)
      - `<div class="detail-when">` ("Use when: Any change touching more than one file.") (line 5)
      - `Tags: #implementation, #workflow` (line 5)
    - `<div class="container detail-body">` (line 5)
      - `<div class="detail-main">` (line 5)
        - `<section class="panel">` (line 5)
          - `<h2>Install just this skill</h2>` (line 5)
          - `Command block: This skill only ($ npx skills add addyosmani/agent-skills --skill incremental-implementation)` (line 8)
          - `Command block: All skills ($ npx skills add addyosmani/agent-skills)` (line 8)
        - `<section class="panel">` (line 8)
          - `<h2>How this skill is structured</h2>` (line 8)
          - `Lede: Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads.` (line 9)
          - `Anatomy list: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification` (line 10)
          - `Action button: Read the full SKILL.md` (lines 10-12)
      - `<aside class="detail-side">` (line 12)
        - `<h3>Build phase</h3>` (line 12)
        - `Side blurb: Write the code in thin, tested vertical slices.` (line 12)
        - `Command mapping: /build` (line 12)
        - `Link: See the full lifecycle → (/lifecycle/)` (line 12)
    - `<div class="container detail-related">` (line 12)
      - `<h2>More in the Build phase</h2>` (line 12)
      - `Related cards: test-driven-development, context-engineering, source-driven-development` (line 12)
- `<footer class="footer">` (line 12)
  - `Tagline & quick-add command: npx skills add addyosmani/agent-skills` (lines 12-15)
  - `Product column: <h3>Product</h3>` (line 15)
  - `Setup column: <h3>Setup</h3>` (line 15)
  - `Resources column: <h3>Resources</h3>` (line 15)
  - `Copyright, licensing, author credit` (lines 15-18)
- Embedded scripts: mobile menu toggle (line 5), copy button (line 8), reveal animation (line 18), Netlify RUM analytics (line 19)

## Scripts — required if type is script or the skill ships scripts
- Documented CLI command: `npx skills add addyosmani/agent-skills --skill incremental-implementation`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills --skill incremental-implementation` — ../addy-external/incremental-implementation.md:8
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills --skill incremental-implementation --list`
  - abridged stdout:
    ```text
    incremental-implementation
      Delivers changes incrementally. Use when implementing any feature or change that touches more than one file. Use when you're about to write a large amount of code at once, or when a task feels too big to land in one step.
    ...
    Use --skill <name> to install specific skills
    ```
  - **actual exit code:** `0`
  - documented exit codes: none documented on page
  - does output match documentation claim: yes; resolves package and exposes `--skill incremental-implementation`
- Embedded inline JavaScript snippets:
  - Mobile drawer toggle (line 5, 1 line, DOM class toggle)
  - Clipboard copy handler (line 8, 1 line, `navigator.clipboard.writeText`)
  - Scroll reveal observer (line 18, 1 line, `IntersectionObserver`)
  - Netlify RUM analytics beacon (line 19, external script source)
  - Execution context: Browser DOM runtime only.

## Defects — required
- `doc-drift` · ../addy-external/incremental-implementation.md:10 vs skills/incremental-implementation/SKILL.md:21-250 · Website asserts a standardized 6-section anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), omitting substantive operational mechanisms from `SKILL.md` (`The Increment Cycle` diagram and loop, `Slicing Strategies` [Vertical, Contract-First, Risk-First], `Implementation Rules` [Rule 0 Simplicity, Rule 0.5 Scope Discipline, Rule 1 One Thing at a Time, Rule 2 Keep It Compilable, Rule 3 Feature Flags, Rule 4 Safe Defaults, Rule 5 Rollback-Friendly], `Working with Agents` pattern, `Increment Checklist`, `Anti-Reassurance` rule, and `See Also`).
- `doc-drift` · ../addy-external/incremental-implementation.md:1, 5 vs skills/incremental-implementation/SKILL.md:3 · Summary text drifts: external page elevates architectural mechanisms ("as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes") into the primary description, omitting "touches more than one file" and "feels too big to land in one step".
- `doc-drift` · ../addy-external/incremental-implementation.md:5 vs skills/incremental-implementation/SKILL.md:12-20 · External page condenses 4 positive triggers into one sentence ("Any change touching more than one file.") and completely drops the negative trigger ("When NOT to use: Single-file, single-function changes where the scope is already minimal").
- `doc-drift` · ../addy-external/incremental-implementation.md:5, 12 vs commands/build.toml:4 · Web page displays `/build` as the singular command badge for `incremental-implementation`, whereas in the repository `/build` is a composite command orchestrating multiple skills (`incremental-implementation`, `test-driven-development`, etc.).
- `doc-drift` · ../addy-external/incremental-implementation.md:6-8 vs repository root docs · External page documents installation via `npx skills add addyosmani/agent-skills --skill incremental-implementation` (Vercel open `skills` CLI), which is not documented in repository root files.
- `doc-drift` · ../addy-external/incremental-implementation.md:15 vs docs/ · Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all navigate uniformly to `/docs/getting-started/` rather than their platform-specific setup guides (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).
- `doc-drift` · ../addy-external/incremental-implementation.md:1 · Snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:198`, but its content is 100% compiled HTML (`<!DOCTYPE html><html...`) generated by Astro.
- `missing-path` · ../addy-external/incremental-implementation.md:1, 5, 12, 15, 19 · Site-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · ../addy-external/incremental-implementation.md:1-20 · External doc page is not referenced or linked from any file within `sources/addy/`; brought into scope solely via METHOD.md §1.1.

## Observations
- Intra-Phase Skill Clustering: Uniquely showcases intra-phase relationship clustering by rendering cards for `test-driven-development`, `context-engineering`, and `source-driven-development` under the `Build` phase umbrella, reinforcing phase-boundary coherence.
- Catalog Web Abstraction: The website normalizes heterogeneous markdown skills into a clean, developer-friendly card layout with standard metadata (`#implementation`, `#workflow`, `/build`, `Build phase`).
- Open Skills CLI Integration: Integrates directly with Vercel's `npx skills` package manager, providing seamless zero-install execution for end users.
- High Overhead in Raw Snapshot: Over 90% of the raw 26,461 bytes consists of CSS rules, SVG vectors, and navigation chrome rather than semantic content, making direct inclusion in an agent's working context cost-inefficient without preprocessing or HTML tag stripping.

## Context cost
File size: 26,461 bytes (~6,615 tokens). Transitive cost is identical as it loads no local files. Domain-relevant semantic text accounts for ~2,500 bytes (~625 tokens), with >90% (~24,000 bytes) representing HTML/CSS presentation markup and SVG/JS boilerplate.
