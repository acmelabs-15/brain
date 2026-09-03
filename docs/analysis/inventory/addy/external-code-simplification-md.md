---
package: addy
path: ../addy-external/code-simplification.md
type: external-doc
bytes: 26320
unit: inv-addy-35
---

# ../addy-external/code-simplification.md

## Purpose — required, verbatim
> "Simplifies code for clarity. Chesterton’s Fence, the Rule of 500 - reduce complexity while preserving exact behavior when code has accumulated unnecessary weight." — ../addy-external/code-simplification.md:1, 5

Additional triggering purpose:
> "Code works but is harder to read or maintain than it should be." — ../addy-external/code-simplification.md:5

Sidebar summary:
> "Quality, security and performance gates before merge." — ../addy-external/code-simplification.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/code-simplification.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/code-simplification/`, the public web documentation and distribution landing page for Addy Osmani's `code-simplification` skill. Built with Astro and hosted on Netlify, its design intent is public discovery, package distribution via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill code-simplification`), lifecycle phase categorization (binding the skill to the `addy:Review` phase and the `/code-simplify` slash command), and establishing foundational quality heuristics for agent refactoring (behavior-preserving simplification, Chesterton's Fence for understanding prior context, and the Rule of 500 for transitioning from manual refactoring to automation). It articulates a concise triggering condition ("Code works but is harder to read or maintain than it should be."), standardizes a 6-part skill anatomy ("a workflow the agent follows, not a doc it reads"), promotes related Review-phase skills (`code-review-and-quality`, `security-and-hardening`, and `performance-optimization`), and links directly to the canonical GitHub repository source (`skills/code-simplification/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` via web search or package registries would lack an accessible overview of the skill's lifecycle role, structure, and CLI installation commands before inspecting raw repository source code.

## Phase — required
addy:Review

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/code-simplification/` — ../addy-external/code-simplification.md:1
- User trigger / prerequisite condition: "Code works but is harder to read or maintain than it should be." — ../addy-external/code-simplification.md:5
- Upstream skill specification from `skills/code-simplification/SKILL.md` consumed at site build time — ../addy-external/code-simplification.md:1, 5, 10, 11
- Sibling skills in Review phase referenced: `code-review-and-quality`, `security-and-hardening`, `performance-optimization` — ../addy-external/code-simplification.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/code-simplification.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/code-simplification.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/code-simplification.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/code-simplification.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/code-simplification.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/code-simplification.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill code-simplification`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Review-phase skills: `code-review-and-quality` (`/review`), `security-and-hardening`, `performance-optimization` (`/webperf`) — ../addy-external/code-simplification.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/code-simplification/SKILL.md` — ../addy-external/code-simplification.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/code-simplification.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/code-simplification.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/code-simplification.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/code-simplification.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/code-simplification.md:15
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/code-simplification.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/code-simplification.md:8
  - Mobile navigation drawer toggle — ../addy-external/code-simplification.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/code-simplification.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/code-simplification.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill code-simplification — ../addy-external/code-simplification.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/code-simplification.md:8, 15
- skill skills/code-simplification/SKILL.md — ../addy-external/code-simplification.md:10-11
- skill skills/code-review-and-quality/SKILL.md — ../addy-external/code-simplification.md:12
- skill skills/security-and-hardening/SKILL.md — ../addy-external/code-simplification.md:12
- skill skills/performance-optimization/SKILL.md — ../addy-external/code-simplification.md:12
- command /code-simplify — ../addy-external/code-simplification.md:5
- command /review — ../addy-external/code-simplification.md:12
- command /webperf — ../addy-external/code-simplification.md:12
- doc CONTRIBUTING.md — ../addy-external/code-simplification.md:15
- directory evals — ../addy-external/code-simplification.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/code-simplification.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/code-simplification.md:5, 15
- external-link https://addyosmani.com — ../addy-external/code-simplification.md:15
- script /.netlify/scripts/rum — ../addy-external/code-simplification.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:211`. Not linked or invoked by any file in `sources/addy/`. Companion external documentation page to `docs/analysis/inventory/addy/skills-code-simplification-skill-md.md`.)*

## Concepts named — required, verbatim
- `code-simplification` — ../addy-external/code-simplification.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/code-simplification.md:1, 5, 8, 12, 13, 15 — used here
- `Geist` — ../addy-external/code-simplification.md:1 — used here
- `Geist Mono` — ../addy-external/code-simplification.md:1 — used here
- `Chesterton’s Fence` — ../addy-external/code-simplification.md:1, 5 — defined here
- `the Rule of 500` — ../addy-external/code-simplification.md:1, 5 — defined here
- `Rule of 500` — ../addy-external/code-simplification.md:1, 5 — defined here
- `reduce complexity` — ../addy-external/code-simplification.md:1, 5 — defined here
- `preserving exact behavior` — ../addy-external/code-simplification.md:1, 5 — defined here
- `Review phase` — ../addy-external/code-simplification.md:5, 12 — defined here
- `/code-simplify` — ../addy-external/code-simplification.md:5 — defined here
- `refactoring` — ../addy-external/code-simplification.md:5 — defined here
- `quality` — ../addy-external/code-simplification.md:5, 12 — used here
- `skills CLI` — ../addy-external/code-simplification.md:6 — defined here
- `Skills` — ../addy-external/code-simplification.md:5, 15 — used here
- `Docs` — ../addy-external/code-simplification.md:5, 15 — used here
- `Tutorials` — ../addy-external/code-simplification.md:5, 15 — used here
- `Lifecycle` — ../addy-external/code-simplification.md:5, 12, 15 — used here
- `Loops` — ../addy-external/code-simplification.md:5, 15 — used here
- `Teach` — ../addy-external/code-simplification.md:5, 15 — used here
- `Compare` — ../addy-external/code-simplification.md:5, 15 — used here
- `This skill only` — ../addy-external/code-simplification.md:8 — defined here
- `All skills` — ../addy-external/code-simplification.md:8 — defined here
- `npx skills add` — ../addy-external/code-simplification.md:8, 15 — used here
- `How this skill is structured` — ../addy-external/code-simplification.md:8 — defined here
- `Every skill follows the same anatomy` — ../addy-external/code-simplification.md:9 — defined here
- `Overview` — ../addy-external/code-simplification.md:10 — defined here
- `When to Use` — ../addy-external/code-simplification.md:5, 10 — defined here
- `Process` — ../addy-external/code-simplification.md:10 — defined here
- `Rationalizations` — ../addy-external/code-simplification.md:10 — defined here
- `Red Flags` — ../addy-external/code-simplification.md:10 — defined here
- `Verification` — ../addy-external/code-simplification.md:10 — defined here
- `SKILL.md` — ../addy-external/code-simplification.md:11 — used here
- `code-review-and-quality` — ../addy-external/code-simplification.md:12 — used here
- `/review` — ../addy-external/code-simplification.md:12 — used here
- `Five-axis review` — ../addy-external/code-simplification.md:12 — used here
- `~100-line change sizing` — ../addy-external/code-simplification.md:12 — used here
- `severity labels` — ../addy-external/code-simplification.md:12 — used here
- `review-speed norms` — ../addy-external/code-simplification.md:12 — used here
- `security-and-hardening` — ../addy-external/code-simplification.md:12 — used here
- `OWASP Top 10` — ../addy-external/code-simplification.md:12 — used here
- `OWASP Top 10 prevention` — ../addy-external/code-simplification.md:12 — used here
- `auth patterns` — ../addy-external/code-simplification.md:12 — used here
- `secrets` — ../addy-external/code-simplification.md:12 — used here
- `dependency auditing` — ../addy-external/code-simplification.md:12 — used here
- `performance-optimization` — ../addy-external/code-simplification.md:12 — used here
- `/webperf` — ../addy-external/code-simplification.md:12 — used here
- `Measure-first` — ../addy-external/code-simplification.md:12 — used here
- `Core Web Vitals` — ../addy-external/code-simplification.md:12 — used here
- `Core Web Vitals targets` — ../addy-external/code-simplification.md:12 — used here
- `profiling` — ../addy-external/code-simplification.md:12 — used here
- `bundle analysis` — ../addy-external/code-simplification.md:12 — used here
- `N+1 fixes` — ../addy-external/code-simplification.md:12 — used here
- `Claude Code` — ../addy-external/code-simplification.md:15 — used here
- `Codex` — ../addy-external/code-simplification.md:15 — used here
- `Cursor` — ../addy-external/code-simplification.md:15 — used here
- `Antigravity` — ../addy-external/code-simplification.md:15 — used here
- `Contributing` — ../addy-external/code-simplification.md:15 — used here
- `Evals framework` — ../addy-external/code-simplification.md:15 — used here
- `MIT licensed` — ../addy-external/code-simplification.md:15 — used here
- `Netlify` — ../addy-external/code-simplification.md:19 — used here
- `RUM` — ../addy-external/code-simplification.md:19 — used here

## Structure
- `<!DOCTYPE html><html lang="en"...>` — ../addy-external/code-simplification.md:1
- `<head>`: Meta, Title, Open Graph, Twitter Cards, Fonts (Geist, Geist Mono), Stylesheets (`compare.BYu2_sXs.css`, `_slug_.sGV3LZnA.css`) — ../addy-external/code-simplification.md:1, 5
- `<header class="nav">`: Brand, Nav Links (Skills, Docs, Tutorials, Lifecycle, Loops, Teach, Compare), GitHub repository link, CTA button (`Get started`), Mobile navigation drawer and toggle script — ../addy-external/code-simplification.md:5
- `<main id="main">`:
  - `<nav class="crumbs">`: Skills / Review — ../addy-external/code-simplification.md:5
  - `<div class="detail-top">`: Review phase chip, `/code-simplify` command badge, `<h1>code-simplification</h1>`, summary, `Use when`, tags (`#refactoring`, `#quality`) — ../addy-external/code-simplification.md:5
  - `<section class="panel">`: `<h2>Install just this skill</h2>` (CLI command snippets with copy button script) — ../addy-external/code-simplification.md:5-8
  - `<section class="panel">`: `<h2>How this skill is structured</h2>` (6-stage anatomy: 01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification, and "Read the full SKILL.md" button) — ../addy-external/code-simplification.md:8-12
  - `<aside class="detail-side">`: `<h3>Review phase</h3>` blurb, Command `/review`, lifecycle link — ../addy-external/code-simplification.md:12
  - `<div class="container detail-related">`: `<h2>More in the Review phase</h2>` (`code-review-and-quality`, `security-and-hardening`, `performance-optimization`) — ../addy-external/code-simplification.md:12
- `<footer class="footer">`: Brand, Tagline, `npx skills add`, Product links, Setup links, Resources links, Copyright, Author — ../addy-external/code-simplification.md:12-18
- `<script>`: IntersectionObserver scroll reveal module — ../addy-external/code-simplification.md:18
- `<script id="netlify-rum-container">`: Netlify RUM analytics beacon — ../addy-external/code-simplification.md:19

## Scripts — required if type is script or the skill ships scripts
The file itself is an external HTML document and contains two documented CLI installation commands and several embedded client-side JavaScript modules:

1. **Documented CLI Command: Modular Skill Installation**
   - Path: inline documentation at `../addy-external/code-simplification.md:8`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills --skill code-simplification` — `../addy-external/code-simplification.md:8`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill code-simplification -y --copy` (in isolated temp directory)
   - Actual exit code: `0`
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Selected 1 skill: code-simplification ... Installed 1 skill: ✓ code-simplification (copied) → ./.agents/skills/code-simplification`
   - Output match claim: yes, clones repository and installs `skills/code-simplification/SKILL.md`.

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at `../addy-external/code-simplification.md:8, 15`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills` — `../addy-external/code-simplification.md:8, 15`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills -l`
   - Actual exit code: `0`
   - Actual stdout (abridged): Listed all 25 skills from `addyosmani/agent-skills`, confirming `code-simplification` description and availability.
   - Output match claim: yes, lists full pack including `code-simplification`.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at `../addy-external/code-simplification.md:5`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on mobile menu toggle click
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at `../addy-external/code-simplification.md:8`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on clicking copy button for CLI commands
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at `../addy-external/code-simplification.md:18`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: `/.netlify/scripts/rum` referenced at `../addy-external/code-simplification.md:19`
   - Language: JavaScript, 1 line script tag
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- `doc-drift` · `../addy-external/code-simplification.md:12` vs `../addy-external/code-simplification.md:5` and `commands/code-simplify.toml`: The sidebar card for "Review phase" lists `Command: /review` (`<code class="mono">/review</code>`), contradicting the header badge `/code-simplify` (`line 5`), the repository command file `commands/code-simplify.toml`, and the skill mapping. In `skills.addy.ie` web templates, the sidebar erroneously hardcoded `/review` instead of the skill's dedicated command `/code-simplify`.
- `doc-drift` · `../addy-external/code-simplification.md:9-10` vs `sources/addy/skills/code-simplification/SKILL.md`: The external landing page claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads" and lists `03 Process — Step-by-step workflow`, whereas `skills/code-simplification/SKILL.md` structures its process under `## The Five Principles`, `## The Simplification Process` (4 steps), and `## Language-Specific Guidance`, deviating from the strict 6-part taxonomy.
- `doc-drift` · `../addy-external/code-simplification.md:5` vs `sources/addy/skills/code-simplification/SKILL.md:3, 14-29`: The external page condenses the triggering criteria into a single sentence ("Code works but is harder to read or maintain than it should be"), omitting the 6 granular trigger scenarios and 4 explicit negative trigger cases ("When NOT to use") documented in `SKILL.md`.
- `missing-path` · `../addy-external/code-simplification.md:1, 5, 12, 15, 19`: Web-relative paths (`/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css`, `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/.netlify/scripts/rum`, `/favicon.svg`) do not exist locally on disk.
- `orphan` · `../addy-external/code-simplification.md:1`: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:211`; not linked or invoked by any source file in `sources/addy/`.
- `other` · `../addy-external/code-simplification.md:1`: The file carries a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% compiled HTML (`<!DOCTYPE html><html...`).
- `doc-drift` · `../addy-external/code-simplification.md:6, 8, 15` vs `sources/addy/README.md`: The external page recommends installation via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill code-simplification`), an open distribution mechanism not documented in `sources/addy/README.md`, `CLAUDE.md`, or `AGENTS.md`.
- `doc-drift` · `../addy-external/code-simplification.md:15` vs `sources/addy/docs/`: Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all link to `/docs/getting-started/` rather than their specific setup documents (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).

## Observations
- **Refactoring Philosophy and Core Heuristics:** Highlights Chesterton's Fence ("understand before touching") and the Rule of 500 (mandating automation over manual editing when refactorings exceed 500 lines) as the primary pillars of safe agent simplification (`lines 1, 5`).
- **Sibling Review-Phase Synergy:** The external landing page explicitly bundles `code-simplification` (`/code-simplify`), `code-review-and-quality` (`/review`), `security-and-hardening`, and `performance-optimization` (`/webperf`) as the comprehensive quality gate cluster before merge (`line 12`).
- **Open Package Management:** Promotes installation via Vercel Labs' open `skills` CLI (`npx skills add addyosmani/agent-skills --skill code-simplification`), providing an automated installation pathway across Claude Code, Cursor, Codex, and Antigravity environments (`lines 6, 8, 15`).
- **Companion Defensive Hook:** Supported in the repository by `hooks/simplify-ignore.sh` and `hooks/SIMPLIFY-IGNORE.md`, allowing developers to safeguard performance-critical or sensitive code blocks with comments (`/* simplify-ignore-start */`) so agents do not alter them during refactoring passes.
- **Cross-Reference to In-Repo Inventory:** The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-code-simplification-skill-md.md` under unit `inv-addy-18`.

## Context cost
- File size: 26,320 bytes (~6,580 tokens).
- Combined with upstream canonical skill `skills/code-simplification/SKILL.md` (13,545 bytes, ~3,386 tokens), total related context is ~39,865 bytes (~9,966 tokens).
