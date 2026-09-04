---
package: addy
path: external/context-engineering.md
type: external-doc
bytes: 26352
unit: inv-addy-12
memo_inputs:
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/context-engineering.md

## Purpose — required, verbatim
> "Optimizes agent context setup. Configure rules files, pack context deliberately, and wire MCP integrations so the agent has exactly what it needs - no more, no less." — external/context-engineering.md:5

> "Starting a session, switching tasks, or when output quality drops." — external/context-engineering.md:5

> "Write the code in thin, tested vertical slices." — external/context-engineering.md:12

> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — external/context-engineering.md:13-14

## Design intent — required
Serves as the public web catalog, discovery portal, and installation landing page for Addy Osmani's `context-engineering` skill within the `agent-skills` ecosystem at `https://skills.addy.ie/skills/context-engineering/`. It establishes the skill's identity and discoverability on the web, anchors it in the `addy:Build` lifecycle phase alongside the `/build` slash command, articulates the senior engineering value of deliberate context curation (configuring rules files, packing context deliberately, and wiring MCP integrations to prevent agent hallucination or attention dilution), provides verified CLI installation commands via Vercel's open `skills` CLI (`npx skills add ...`), exposes the standardized 6-part skill anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), links directly to the canonical repository source `SKILL.md` on GitHub, and provides cross-skill discovery for sibling Build-phase skills (`incremental-implementation`, `test-driven-development`, `source-driven-development`). Without this external document, developers and agent creators discovering `agent-skills` through web search or social links would lack an accessible overview of the skill's lifecycle mapping, anatomy breakdown, sibling skills in the Build phase, and CLI installation commands prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Build

(Authoritative evidence: `external/context-engineering.md:5`: `<span class="crumb-phase" data-astro-cid-jrlgpo3w>Build</span>`, `<span class="chip phase-chip" data-astro-cid-jrlgpo3w><span class="phase-dot" data-astro-cid-jrlgpo3w></span>Build phase</span>`; `external/context-engineering.md:12`: `<h3 class="side-title" data-astro-cid-jrlgpo3w>Build phase</h3>`, `<code class="mono" data-astro-cid-jrlgpo3w>/build</code>`; correlated with `sources/addy/README.md:359` categorizing under Build phase and `sources/addy/CLAUDE.md:23`).

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/context-engineering/` — external/context-engineering.md:1
- Upstream skill specification from `skills/context-engineering/SKILL.md` consumed at site build time — external/context-engineering.md:10
- Prerequisite condition / trigger: "Starting a session, switching tasks, or when output quality drops." — external/context-engineering.md:5
- Sibling skills in Build phase referenced: `incremental-implementation`, `test-driven-development`, `source-driven-development` — external/context-engineering.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css` — external/context-engineering.md:1, `/_astro/_slug_.sGV3LZnA.css` — external/context-engineering.md:5
- External web fonts: Google Fonts Geist and Geist Mono via Google Font CDN (`fonts.googleapis.com`, `fonts.gstatic.com`) — external/context-engineering.md:1
- External telemetry script: `/.netlify/scripts/rum` — external/context-engineering.md:19

## Outputs — required
- Rendered HTML web page with Open Graph and Twitter Card metadata for search indexing and social sharing — external/context-engineering.md:1
- Copyable terminal CLI installation commands:
  - "npx skills add addyosmani/agent-skills --skill context-engineering" — external/context-engineering.md:8
  - "npx skills add addyosmani/agent-skills" — external/context-engineering.md:8
- Phase-clustered recommendations for sibling Build-phase skills: `incremental-implementation` (`/build`), `test-driven-development` (`/test`), `source-driven-development` — external/context-engineering.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/context-engineering/SKILL.md` — external/context-engineering.md:10
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — external/context-engineering.md:5
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — external/context-engineering.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — external/context-engineering.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — external/context-engineering.md:15
  - Author personal website: `https://addyosmani.com` — external/context-engineering.md:15
  - Author GitHub profile: `https://github.com/addyosmani` — external/context-engineering.md:16
  - Sibling skill pages: `/skills/incremental-implementation/`, `/skills/test-driven-development/`, `/skills/source-driven-development/` — external/context-engineering.md:12
  - Site navigation links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — external/context-engineering.md:5
  - Sitemap: `/sitemap-index.xml` — external/context-engineering.md:1
  - Favicon: `/favicon.svg` — external/context-engineering.md:1
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — external/context-engineering.md:8
  - Mobile navigation drawer toggle — external/context-engineering.md:5
  - IntersectionObserver scroll reveal effects — external/context-engineering.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — external/context-engineering.md:19
- Files produced: none (static web documentation page)

## Invokes — required
- skill skills/context-engineering/SKILL.md — external/context-engineering.md:10
- skill incremental-implementation — external/context-engineering.md:12
- skill test-driven-development — external/context-engineering.md:12
- skill source-driven-development — external/context-engineering.md:12
- command /build — external/context-engineering.md:12
- command /test — external/context-engineering.md:12
- doc CONTRIBUTING.md — external/context-engineering.md:15
- doc evals — external/context-engineering.md:15
- script /.netlify/scripts/rum — external/context-engineering.md:19
- file /_astro/compare.BYu2_sXs.css — external/context-engineering.md:1
- file /_astro/_slug_.sGV3LZnA.css — external/context-engineering.md:5

## Invoked by — required
orphan

*(Note: External documentation page fetched from `https://skills.addy.ie/skills/context-engineering/` into `sources/addy-external/context-engineering.md`. Brought into scope via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:190`. Not linked or invoked by any file in `sources/addy/`.)*

## Concepts named — required, verbatim
- `context-engineering` — external/context-engineering.md:1 — defined here
- `agent-skills` — external/context-engineering.md:1 — used here
- `rules files` — external/context-engineering.md:1 — used here
- `context` — external/context-engineering.md:1 — used here
- `MCP` — external/context-engineering.md:1 — used here
- `Geist` — external/context-engineering.md:1 — used here
- `Geist Mono` — external/context-engineering.md:1 — used here
- `Skills` — external/context-engineering.md:5 — used here
- `Docs` — external/context-engineering.md:5 — used here
- `Tutorials` — external/context-engineering.md:5 — used here
- `Lifecycle` — external/context-engineering.md:5 — used here
- `Loops` — external/context-engineering.md:5 — used here
- `Teach` — external/context-engineering.md:5 — used here
- `Compare` — external/context-engineering.md:5 — used here
- `Build` — external/context-engineering.md:5 — used here
- `Build phase` — external/context-engineering.md:5 — defined here
- `Use when` — external/context-engineering.md:5 — defined here
- `#context` — external/context-engineering.md:5 — defined here
- `#agents` — external/context-engineering.md:5 — defined here
- `#mcp` — external/context-engineering.md:5 — defined here
- `Install just this skill` — external/context-engineering.md:5 — defined here
- `skills CLI` — external/context-engineering.md:6 — used here
- `This skill only` — external/context-engineering.md:8 — defined here
- `All skills` — external/context-engineering.md:8 — defined here
- `npx skills add` — external/context-engineering.md:8 — used here
- `How this skill is structured` — external/context-engineering.md:8 — defined here
- `anatomy` — external/context-engineering.md:10 — defined here
- `Overview` — external/context-engineering.md:10 — defined here
- `When to Use` — external/context-engineering.md:10 — defined here
- `Process` — external/context-engineering.md:10 — defined here
- `Rationalizations` — external/context-engineering.md:10 — defined here
- `Red Flags` — external/context-engineering.md:10 — defined here
- `Verification` — external/context-engineering.md:10 — defined here
- `SKILL.md` — external/context-engineering.md:10 — used here
- `Read the full SKILL.md` — external/context-engineering.md:11 — defined here
- `Command` — external/context-engineering.md:12 — defined here
- `/build` — external/context-engineering.md:12 — used here
- `See the full lifecycle` — external/context-engineering.md:12 — defined here
- `More in the Build phase` — external/context-engineering.md:12 — defined here
- `incremental-implementation` — external/context-engineering.md:12 — used here
- `thin vertical slices` — external/context-engineering.md:12 — used here
- `rollback-friendly changes` — external/context-engineering.md:12 — used here
- `test-driven-development` — external/context-engineering.md:12 — used here
- `/test` — external/context-engineering.md:12 — used here
- `Red-Green-Refactor` — external/context-engineering.md:12 — used here
- `the test pyramid` — external/context-engineering.md:12 — used here
- `DAMP over DRY` — external/context-engineering.md:12 — used here
- `the Beyoncé Rule` — external/context-engineering.md:12 — used here
- `source-driven-development` — external/context-engineering.md:12 — used here
- `official docs` — external/context-engineering.md:12 — used here
- `authoritative, source-cited code` — external/context-engineering.md:12 — used here
- `The lifecycle` — external/context-engineering.md:15 — defined here
- `Loop engineering` — external/context-engineering.md:15 — defined here
- `Teach &amp; share` — external/context-engineering.md:15 — defined here
- `How it compares` — external/context-engineering.md:15 — defined here
- `Getting started` — external/context-engineering.md:15 — defined here
- `Claude Code` — external/context-engineering.md:15 — used here
- `Codex` — external/context-engineering.md:15 — used here
- `Cursor` — external/context-engineering.md:15 — used here
- `Antigravity` — external/context-engineering.md:15 — used here
- `Contributing` — external/context-engineering.md:15 — used here
- `Evals framework` — external/context-engineering.md:15 — used here
- `Addy Osmani` — external/context-engineering.md:16 — used here

## Structure
- `<head>` — external/context-engineering.md:1
- `<header class="nav"` — external/context-engineering.md:5
- `<main id="main"` — external/context-engineering.md:5
  - Breadcrumbs & Header (`<nav class="crumbs"`, `.phase-chip`, `.detail-name`, `.detail-summary`, `.detail-when`, `.detail-tags`) — external/context-engineering.md:5
  - `Install just this skill` (`<section class="panel"`) — external/context-engineering.md:5
    - `This skill only` (`npx skills add addyosmani/agent-skills --skill context-engineering`) — external/context-engineering.md:8
    - `All skills` (`npx skills add addyosmani/agent-skills`) — external/context-engineering.md:8
  - `How this skill is structured` (`<section class="panel"`) — external/context-engineering.md:8
    - Anatomy list (`01`, `02`, `03`, `04`, `05`, `06`) — external/context-engineering.md:10
    - `Read the full SKILL.md` — external/context-engineering.md:11
  - Sidebar (`<aside class="detail-side"`) — external/context-engineering.md:12
    - `Build phase` (`/build`, `See the full lifecycle`) — external/context-engineering.md:12
  - `More in the Build phase` (`<div class="container detail-related"`) — external/context-engineering.md:12
    - `incremental-implementation` (`/build`) — external/context-engineering.md:12
    - `test-driven-development` (`/test`) — external/context-engineering.md:12
    - `source-driven-development` — external/context-engineering.md:12
- `<footer class="footer"` — external/context-engineering.md:12
  - Brand summary & install command (lines 12, 15)
  - Navigation columns (`Product`, `Setup`, `Resources`) — external/context-engineering.md:15
  - Footer bottom (copyright, `Addy Osmani`) — external/context-engineering.md:15, 16
- Scripts (IntersectionObserver `.reveal`, Netlify RUM telemetry) — external/context-engineering.md:18, 19

## Scripts — required if type is script or the skill ships scripts
- Vercel skills CLI invocation:
  - path: npx skills add addyosmani/agent-skills --skill context-engineering
  - language: shell / Node CLI
  - documented invocation: `npx skills add addyosmani/agent-skills --skill context-engineering` — external/context-engineering.md:8
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills --skill context-engineering --list`
  - abridged stdout:
    ```text
    context-engineering

      Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project.
    ...
    Use --skill <name> to install specific skills
    ```
  - **actual exit code:** `0`
  - documented exit codes: none documented on page
  - does output match documentation claim: yes; resolves package and exposes `--skill context-engineering`
- Embedded inline JavaScript snippets:
  - Mobile drawer toggle (line 5, 1 line, DOM class toggle)
  - Clipboard copy handler (line 8, 1 line, `navigator.clipboard.writeText`)
  - Scroll reveal observer (line 18, 1 line, `IntersectionObserver`)
  - Netlify RUM analytics beacon (line 19, external script source)
  - Execution context: Browser DOM runtime only.

## Defects — required
- `doc-drift` · external/context-engineering.md:10 vs skills/context-engineering/SKILL.md:8-290 · Website asserts a standardized 6-section anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), omitting substantive operational sections from `SKILL.md` (`## The Context Hierarchy`, `## Context Packing Strategies`, `## Confusion Management`, `## Anti-Patterns`), and naming its rationalizations section `## Common Rationalizations` rather than `Rationalizations`.
- `doc-drift` · external/context-engineering.md:12 vs skills/incremental-implementation/SKILL.md:2 · The sidebar blurb claims "Write the code in thin, tested vertical slices." for the Build phase card on this page, which is the verbatim summary of sibling skill incremental-implementation rather than describing context engineering or the general Build phase definition.
- `doc-drift` · external/context-engineering.md:1, 5 vs skills/context-engineering/SKILL.md:3 · The external page summary describes the skill as: "Optimizes agent context setup. Configure rules files, pack context deliberately, and wire MCP integrations so the agent has exactly what it needs - no more, no less.", whereas `skills/context-engineering/SKILL.md:3` defines description as: "Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project." (the in-repo description omits MCP and packing specifics in favor of inline triggers).
- `doc-drift` · external/context-engineering.md:15 vs docs/ · Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all navigate uniformly to `/docs/getting-started/` rather than their platform-specific setup guides.
- `doc-drift` · external/context-engineering.md:1 · Snapshot file uses a `.md` markdown file extension in `sources/addy-external/` and `docs/analysis/manifest/addy.md:190`, but its content is 100% compiled HTML (`<!DOCTYPE html><html...`) generated by Astro.
- `missing-path` · external/context-engineering.md:1, 5, 12, 15, 19 · Site-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not resolve to local files on disk in the snapshot directory.
- `orphan` · external/context-engineering.md:1-20 · External doc page is not referenced or linked from any file within `sources/addy/`; brought into scope solely via METHOD.md §1.1.

## Observations
- Open skills CLI distribution: Serves as an interactive web landing page for Vercel's skills CLI package manager (`npx skills add addyosmani/agent-skills --skill context-engineering`), enabling modular, per-skill installation without full repository checkout.
- Standardized lifecycle mapping: Explicitly places `context-engineering` in the `addy:Build` phase alongside `/build`, linking it to sibling Build-phase skills `incremental-implementation`, `test-driven-development`, and `source-driven-development`.
- Non-essential client-side payload: Contains client-side tracking assets (Netlify RUM analytics token at line 19) and CDN-hosted fonts (Geist, Geist Mono at line 1) which are web-only presentation concerns irrelevant to agent reasoning.

## Context cost
- Raw source file size: 26,352 bytes (~6,500 tokens).
- External resources referenced: Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`), Netlify RUM analytics script (`/.netlify/scripts/rum`), local Astro CSS stylesheets (`/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css`). Total payload when rendered in browser exceeds 150 KB.
