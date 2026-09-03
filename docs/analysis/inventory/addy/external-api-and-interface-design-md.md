---
package: addy
path: ../addy-external/api-and-interface-design.md
type: external-doc
bytes: 26413
unit: inv-addy-24
---

# ../addy-external/api-and-interface-design.md

## Purpose — required, verbatim
> "Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules." — ../addy-external/api-and-interface-design.md:1, 5

Additional triggering purpose:
> "Designing APIs, module boundaries, or public interfaces." — ../addy-external/api-and-interface-design.md:5

Sidebar summary:
> "Write the code in thin, tested vertical slices." — ../addy-external/api-and-interface-design.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/api-and-interface-design.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/api-and-interface-design/`, the public web documentation and distribution portal for Addy Osmani's `api-and-interface-design` skill. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill api-and-interface-design`), lifecycle phase categorization (binding the skill to the `addy:Build` phase and the `/build` slash command), and setting architectural expectations for agent workflows (contract-first design, Hyrum's Law, the One-Version Rule, error semantics, and boundary validation). It provides high-level triggering guidance ("Use when Designing APIs, module boundaries, or public interfaces"), standardizes a 6-part skill anatomy, and establishes cross-skill discovery for sibling skills in the Build phase (`incremental-implementation`, `test-driven-development`, and `context-engineering`) while linking directly to the canonical GitHub repository source (`skills/api-and-interface-design/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` through the web would lack an accessible overview of the skill's lifecycle mapping, anatomy breakdown, sibling skills in the Build phase, and CLI installation commands prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Build

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/api-and-interface-design/` — ../addy-external/api-and-interface-design.md:1
- User trigger / prerequisite condition: "Designing APIs, module boundaries, or public interfaces." — ../addy-external/api-and-interface-design.md:5
- Upstream skill specification from `skills/api-and-interface-design/SKILL.md` consumed at site build time — ../addy-external/api-and-interface-design.md:1, 5, 10, 11
- Sibling skills in Build phase referenced: `incremental-implementation`, `test-driven-development`, `context-engineering` — ../addy-external/api-and-interface-design.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/api-and-interface-design.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/api-and-interface-design.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/api-and-interface-design.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/api-and-interface-design.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/api-and-interface-design.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/api-and-interface-design.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill api-and-interface-design`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Build-phase skills: `incremental-implementation` (`/build`), `test-driven-development` (`/test`), `context-engineering` — ../addy-external/api-and-interface-design.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/api-and-interface-design/SKILL.md` — ../addy-external/api-and-interface-design.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/api-and-interface-design.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/api-and-interface-design.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/api-and-interface-design.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/api-and-interface-design.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/api-and-interface-design.md:15
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/api-and-interface-design.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/api-and-interface-design.md:8
  - Mobile navigation drawer toggle — ../addy-external/api-and-interface-design.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/api-and-interface-design.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/api-and-interface-design.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill api-and-interface-design — ../addy-external/api-and-interface-design.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/api-and-interface-design.md:8, 15
- skill skills/api-and-interface-design/SKILL.md — ../addy-external/api-and-interface-design.md:10-11
- skill skills/incremental-implementation/SKILL.md — ../addy-external/api-and-interface-design.md:12
- skill skills/test-driven-development/SKILL.md — ../addy-external/api-and-interface-design.md:12
- skill skills/context-engineering/SKILL.md — ../addy-external/api-and-interface-design.md:12
- command /build — ../addy-external/api-and-interface-design.md:12
- command /test — ../addy-external/api-and-interface-design.md:12
- doc CONTRIBUTING.md — ../addy-external/api-and-interface-design.md:15
- directory evals — ../addy-external/api-and-interface-design.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/api-and-interface-design.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/api-and-interface-design.md:5, 15
- external-link https://addyosmani.com — ../addy-external/api-and-interface-design.md:15
- script /.netlify/scripts/rum — ../addy-external/api-and-interface-design.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:199`. Not linked or invoked by any file in `sources/addy/`. Also referenced in `docs/analysis/inventory/addy/skills-api-and-interface-design-skill-md.md:69` as external documentation snapshot.)*

## Concepts named — required, verbatim
- `api-and-interface-design` — ../addy-external/api-and-interface-design.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/api-and-interface-design.md:1, 5, 8, 12, 15 — used here
- `Geist` — ../addy-external/api-and-interface-design.md:1 — used here
- `Geist Mono` — ../addy-external/api-and-interface-design.md:1 — used here
- `stable API and interface design` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `Contract-first design` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `Hyrum’s Law` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `the One-Version Rule` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `error semantics` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `boundary validation` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `REST` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `GraphQL` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `type contracts between modules` — ../addy-external/api-and-interface-design.md:1, 5 — defined here
- `module boundaries` — ../addy-external/api-and-interface-design.md:5 — defined here
- `public interfaces` — ../addy-external/api-and-interface-design.md:5 — defined here
- `Skills` — ../addy-external/api-and-interface-design.md:5, 15 — used here
- `Docs` — ../addy-external/api-and-interface-design.md:5, 15 — used here
- `Tutorials` — ../addy-external/api-and-interface-design.md:5, 15 — used here
- `Lifecycle` — ../addy-external/api-and-interface-design.md:5, 12, 15 — used here
- `Loops` — ../addy-external/api-and-interface-design.md:5, 15 — used here
- `Teach` — ../addy-external/api-and-interface-design.md:5, 15 — used here
- `Compare` — ../addy-external/api-and-interface-design.md:5, 15 — used here
- `Build` — ../addy-external/api-and-interface-design.md:5, 12 — used here
- `Build phase` — ../addy-external/api-and-interface-design.md:5, 12 — defined here
- `Use when` — ../addy-external/api-and-interface-design.md:5 — defined here
- `#api` — ../addy-external/api-and-interface-design.md:5 — defined here
- `#architecture` — ../addy-external/api-and-interface-design.md:5 — defined here
- `skills CLI` — ../addy-external/api-and-interface-design.md:6 — used here
- `This skill only` — ../addy-external/api-and-interface-design.md:8 — defined here
- `All skills` — ../addy-external/api-and-interface-design.md:8 — defined here
- `npx skills add` — ../addy-external/api-and-interface-design.md:8, 15 — used here
- `How this skill is structured` — ../addy-external/api-and-interface-design.md:8 — defined here
- `anatomy` — ../addy-external/api-and-interface-design.md:9, 10 — defined here
- `workflow` — ../addy-external/api-and-interface-design.md:9 — used here
- `Overview` — ../addy-external/api-and-interface-design.md:10 — defined here
- `When to Use` — ../addy-external/api-and-interface-design.md:10 — defined here
- `Process` — ../addy-external/api-and-interface-design.md:10 — defined here
- `Rationalizations` — ../addy-external/api-and-interface-design.md:10 — defined here
- `Red Flags` — ../addy-external/api-and-interface-design.md:10 — defined here
- `Verification` — ../addy-external/api-and-interface-design.md:10 — defined here
- `SKILL.md` — ../addy-external/api-and-interface-design.md:10, 11 — used here
- `thin, tested vertical slices` — ../addy-external/api-and-interface-design.md:12 — used here
- `/build` — ../addy-external/api-and-interface-design.md:12 — used here
- `incremental-implementation` — ../addy-external/api-and-interface-design.md:12 — used here
- `thin vertical slices` — ../addy-external/api-and-interface-design.md:12 — used here
- `rollback-friendly changes` — ../addy-external/api-and-interface-design.md:12 — used here
- `test-driven-development` — ../addy-external/api-and-interface-design.md:12 — used here
- `/test` — ../addy-external/api-and-interface-design.md:12 — used here
- `Red-Green-Refactor` — ../addy-external/api-and-interface-design.md:12 — used here
- `the test pyramid` — ../addy-external/api-and-interface-design.md:12 — used here
- `DAMP over DRY` — ../addy-external/api-and-interface-design.md:12 — used here
- `the Beyoncé Rule` — ../addy-external/api-and-interface-design.md:12 — used here
- `context-engineering` — ../addy-external/api-and-interface-design.md:12 — used here
- `rules files` — ../addy-external/api-and-interface-design.md:12 — used here
- `context packing` — ../addy-external/api-and-interface-design.md:12 — used here
- `MCP` — ../addy-external/api-and-interface-design.md:12 — used here
- `More in the Build phase` — ../addy-external/api-and-interface-design.md:12 — defined here
- `The lifecycle` — ../addy-external/api-and-interface-design.md:15 — defined here
- `Loop engineering` — ../addy-external/api-and-interface-design.md:15 — defined here
- `Teach & share` — ../addy-external/api-and-interface-design.md:15 — defined here
- `How it compares` — ../addy-external/api-and-interface-design.md:15 — defined here
- `Getting started` — ../addy-external/api-and-interface-design.md:15 — defined here
- `Claude Code` — ../addy-external/api-and-interface-design.md:15 — used here
- `Codex` — ../addy-external/api-and-interface-design.md:15 — used here
- `Cursor` — ../addy-external/api-and-interface-design.md:15 — used here
- `Antigravity` — ../addy-external/api-and-interface-design.md:15 — used here
- `Contributing` — ../addy-external/api-and-interface-design.md:15 — used here
- `Evals framework` — ../addy-external/api-and-interface-design.md:15 — used here
- `Addy Osmani` — ../addy-external/api-and-interface-design.md:1, 16 — used here

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
      - `Top badges: Build phase` (line 5)
      - `<h1>api-and-interface-design</h1>` (line 5)
      - `<p class="detail-summary">` (line 5)
      - `<div class="detail-when">` ("Use when Designing APIs, module boundaries, or public interfaces.") (line 5)
      - `Tags: #api, #architecture` (line 5)
    - `<div class="container detail-body">` (line 5)
      - `<div class="detail-main">` (line 5)
        - `<section class="panel">` (line 5)
          - `<h2>Install just this skill</h2>` (line 5)
          - `Command block: This skill only ($ npx skills add addyosmani/agent-skills --skill api-and-interface-design)` (line 8)
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
      - `Related cards: incremental-implementation (/build), test-driven-development (/test), context-engineering` (line 12)
- `<footer class="footer">` (line 12)
  - `Tagline & quick-add command: npx skills add addyosmani/agent-skills` (lines 12-15)
  - `Product column: <h3>Product</h3>` (line 15)
  - `Setup column: <h3>Setup</h3>` (line 15)
  - `Resources column: <h3>Resources</h3>` (line 15)
  - `Copyright, licensing, author credit` (lines 15-18)
- Embedded scripts: mobile menu toggle (line 5), copy button (line 8), reveal animation (line 18), Netlify RUM analytics (line 19)

## Scripts — required if type is script or the skill ships scripts
- Documented CLI command: `npx skills add addyosmani/agent-skills --skill api-and-interface-design`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills --skill api-and-interface-design` — ../addy-external/api-and-interface-design.md:8
  - **executed:** yes
  - actual command run: `bunx skills add addyosmani/agent-skills --skill api-and-interface-design -y --copy` (in isolated sandbox)
  - abridged stdout:
    ```text
    Selected 1 skill: api-and-interface-design
    Installed 1 skill: ✓ api-and-interface-design (copied) -> .agents/skills/api-and-interface-design
    ```
  - **actual exit code:** `0`
  - documented exit codes: none documented on page
  - does output match documentation claim: yes; copies `skills/api-and-interface-design/SKILL.md` (14,884 bytes) to destination folder
- Documented CLI command: `npx skills add addyosmani/agent-skills`
  - path: external CLI package (`skills` / `vercel-labs/skills`)
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills` — ../addy-external/api-and-interface-design.md:8, 15
  - **executed:** yes
  - actual command run: `bunx skills add addyosmani/agent-skills -l`
  - abridged stdout:
    ```text
    api-and-interface-design
      Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface...
    ...
    25 skills listed
    ```
  - **actual exit code:** `0`
  - documented exit codes: none documented on page
  - does output match documentation claim: yes; lists/installs all 25 skills in repository
- Embedded inline JavaScript snippets:
  - Mobile drawer toggle (line 5, 1 line, DOM class toggle)
  - Clipboard copy handler (line 8, 1 line, `navigator.clipboard.writeText`)
  - Scroll reveal observer (line 18, 1 line, `IntersectionObserver`)
  - Netlify RUM analytics beacon (line 19, external script source)
  - Execution context: Browser DOM runtime only.

## Defects — required
- `doc-drift` · ../addy-external/api-and-interface-design.md:1, 5 vs skills/api-and-interface-design/SKILL.md:3 · Description copy differs between external documentation and in-repo skill: external doc summarizes architectural mechanisms (`"Guides stable API and interface design. Contract-first design, Hyrum’s Law, the One-Version Rule, error semantics, and boundary validation for REST, GraphQL, and type contracts between modules."`), whereas `SKILL.md:3` specifies detailed trigger conditions (`"Guides stable API and interface design. Use when designing APIs, module boundaries, or any public interface. Use when creating REST or GraphQL endpoints, defining type contracts between modules, or establishing boundaries between frontend and backend."`).
- `doc-drift` · ../addy-external/api-and-interface-design.md:9-10 vs skills/api-and-interface-design/SKILL.md:8-368 · Structural anatomy drift: external page claims every skill follows a 6-part anatomy including `03 Process — Step-by-step workflow`, but `sources/addy/skills/api-and-interface-design/SKILL.md` contains no section titled `Process`, structuring its content under `Core Principles`, `REST API Patterns`, and `TypeScript Interface Patterns` instead.
- `doc-drift` · ../addy-external/api-and-interface-design.md:5, 12 vs skills/api-and-interface-design/SKILL.md · Command binding omission: external doc associates `api-and-interface-design` with the slash command `/build` and the `Build phase`, but the in-repo skill file `SKILL.md` omits any slash command reference or frontmatter phase designation (mapping is only defined in `CLAUDE.md:23` and `README.md:364`).
- `doc-drift` · ../addy-external/api-and-interface-design.md:5 vs skills/api-and-interface-design/SKILL.md:12-18 · Trigger condition reduction: external doc reduces the five detailed trigger bullets in `SKILL.md` to a single condensed clause (`"Designing APIs, module boundaries, or public interfaces."`).
- `doc-drift` · ../addy-external/api-and-interface-design.md:6-8 vs repository root docs · External page documents installation via `npx skills add addyosmani/agent-skills --skill api-and-interface-design` (Vercel open `skills` CLI), which is not documented in repository root files.
- `doc-drift` · ../addy-external/api-and-interface-design.md:15 vs docs/ · Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all navigate uniformly to `/docs/getting-started/` rather than platform-specific setup guides (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).
- `doc-drift` · ../addy-external/api-and-interface-design.md:1 · Snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:199`, but its content is 100% compiled HTML (`<!DOCTYPE html><html...`) generated by Astro.
- `missing-path` · ../addy-external/api-and-interface-design.md:1, 5, 12, 15, 19 · Site-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · ../addy-external/api-and-interface-design.md:1-20 · External doc page is not referenced or linked from any file within `sources/addy/`; brought into scope solely via METHOD.md §1.1.

## Observations
- Intra-Phase Skill Clustering: Displays intra-phase relationship clustering by rendering cards for `incremental-implementation`, `test-driven-development`, and `context-engineering` under the `Build` phase umbrella, reinforcing phase-boundary coherence.
- Web Catalog Abstraction: The website normalizes heterogeneous markdown skills into a clean, developer-friendly card layout with standard metadata (`#api`, `#architecture`, `/build`, `Build phase`).
- Open Skills CLI Integration: Integrates directly with Vercel's `npx skills` package manager, providing seamless zero-install execution for end users.
- High Overhead in Raw Snapshot: Over 90% of the raw 26,413 bytes consists of CSS rules, SVG vectors, and navigation chrome rather than semantic content, making direct inclusion in an agent's working context cost-inefficient without preprocessing or HTML tag stripping.
- Standalone Installation Dependency Boundary: `npx skills add addyosmani/agent-skills --skill api-and-interface-design` copies only `skills/api-and-interface-design/SKILL.md`. Although this skill does not depend on root `references/`, line 30 of `SKILL.md` references the sibling skill `deprecation-and-migration`, which is not bundled when installed in isolation.

## Context cost
26,413 bytes (~6,603 tokens). If an agent loads the referenced repository skill `skills/api-and-interface-design/SKILL.md` (14,884 bytes), total reachable context is 41,297 bytes (~10,324 tokens). Domain-relevant semantic text on the web page accounts for ~2,500 bytes (~625 tokens), with >90% representing HTML/CSS presentation markup and SVG/JS boilerplate.
