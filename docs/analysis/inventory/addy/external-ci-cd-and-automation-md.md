---
package: addy
path: external/ci-cd-and-automation.md
type: external-doc
bytes: 26179
unit: inv-addy-9
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/ci-cd-and-automation.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — external/ci-cd-and-automation.md:1, 5

Triggering condition:
> "Setting up or modifying build and deploy pipelines." — external/ci-cd-and-automation.md:5

Sidebar summary:
> "Deploy with confidence - rollout, rollback, observe." — external/ci-cd-and-automation.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — external/ci-cd-and-automation.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/ci-cd-and-automation/`, the public web documentation, catalog, and distribution landing page for Addy Osmani's `ci-cd-and-automation` skill. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via Vercel's open `skills` CLI (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`), lifecycle phase categorization (binding the skill to the `addy:Ship` phase and the `/ship` slash command), and setting operational expectations for automated quality-gate pipelines (shift-left gating, faster-is-safer release velocity, feature flags, quality-gate pipelines, and failure feedback loops). It provides concise triggering guidance ("Setting up or modifying build and deploy pipelines."), standardizes a 6-part skill anatomy, establishes cross-skill discovery for sibling skills in the Ship phase (`git-workflow-and-versioning`, `deprecation-and-migration`, and `documentation-and-adrs`), and links directly to the canonical GitHub repository source (`skills/ci-cd-and-automation/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` through the web would lack an accessible overview of the skill's lifecycle mapping, anatomy breakdown, sibling skills in the Ship phase, and CLI installation commands prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Ship

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/ci-cd-and-automation/` — external/ci-cd-and-automation.md:1
- User trigger / prerequisite condition: "Setting up or modifying build and deploy pipelines." — external/ci-cd-and-automation.md:5
- Upstream skill specification from `skills/ci-cd-and-automation/SKILL.md` consumed at site build time — external/ci-cd-and-automation.md:1, 5, 10
- Sibling skills in Ship phase referenced: `git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs` — external/ci-cd-and-automation.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css` — external/ci-cd-and-automation.md:1, `/_astro/_slug_.sGV3LZnA.css` — external/ci-cd-and-automation.md:5
- External web fonts: Google Fonts Geist and Geist Mono — external/ci-cd-and-automation.md:1
- External tracking script: `/.netlify/scripts/rum` — external/ci-cd-and-automation.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — external/ci-cd-and-automation.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — external/ci-cd-and-automation.md:1, 5
- Copyable terminal CLI installation commands — external/ci-cd-and-automation.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Ship-phase skills: `git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs` — external/ci-cd-and-automation.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md` — external/ci-cd-and-automation.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — external/ci-cd-and-automation.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — external/ci-cd-and-automation.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — external/ci-cd-and-automation.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — external/ci-cd-and-automation.md:15
  - Author personal website: `https://addyosmani.com` — external/ci-cd-and-automation.md:15
  - Author GitHub profile: `https://github.com/addyosmani` — external/ci-cd-and-automation.md:16
  - Internal documentation and lifecycle links: `/skills/` — external/ci-cd-and-automation.md:5, 15, `/lifecycle/` — external/ci-cd-and-automation.md:5, 12, 15, `/compare/` — external/ci-cd-and-automation.md:5, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — external/ci-cd-and-automation.md:8
  - Mobile navigation drawer toggle — external/ci-cd-and-automation.md:5
  - IntersectionObserver scroll reveal effects — external/ci-cd-and-automation.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — external/ci-cd-and-automation.md:19

## Invokes — required
- command /ship — external/ci-cd-and-automation.md:12
- skill skills/ci-cd-and-automation/SKILL.md — external/ci-cd-and-automation.md:10
- skill git-workflow-and-versioning — external/ci-cd-and-automation.md:12
- skill deprecation-and-migration — external/ci-cd-and-automation.md:12
- skill documentation-and-adrs — external/ci-cd-and-automation.md:12
- doc CONTRIBUTING.md — external/ci-cd-and-automation.md:15
- file evals — external/ci-cd-and-automation.md:15
- script /.netlify/scripts/rum — external/ci-cd-and-automation.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:137`. Not linked or invoked by any file in `sources/addy/`. Also referenced in `docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md` as external documentation companion.)*

## Concepts named — required, verbatim
- `ci-cd-and-automation` — external/ci-cd-and-automation.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/ci-cd-and-automation.md:1, 5, 8, 15 — used here
- `Geist` — external/ci-cd-and-automation.md:1 — used here
- `Geist Mono` — external/ci-cd-and-automation.md:1 — used here
- `Shift Left` — external/ci-cd-and-automation.md:1, 5 — defined here
- `Faster is Safer` — external/ci-cd-and-automation.md:1, 5 — defined here
- `feature flags` — external/ci-cd-and-automation.md:1, 5 — defined here
- `quality-gate pipelines` — external/ci-cd-and-automation.md:1, 5 — defined here
- `failure feedback loops` — external/ci-cd-and-automation.md:1, 5 — defined here
- `Ship` — external/ci-cd-and-automation.md:5, 12 — defined here
- `Ship phase` — external/ci-cd-and-automation.md:5, 12 — defined here
- `Skills` — external/ci-cd-and-automation.md:5, 12, 15 — used here
- `Docs` — external/ci-cd-and-automation.md:5, 15 — used here
- `Tutorials` — external/ci-cd-and-automation.md:5, 15 — used here
- `Lifecycle` — external/ci-cd-and-automation.md:5, 12, 15 — used here
- `Loops` — external/ci-cd-and-automation.md:5, 15 — used here
- `Teach` — external/ci-cd-and-automation.md:5, 15 — used here
- `Compare` — external/ci-cd-and-automation.md:5, 15 — used here
- `skills CLI` — external/ci-cd-and-automation.md:6 — used here
- `This skill only` — external/ci-cd-and-automation.md:8 — defined here
- `All skills` — external/ci-cd-and-automation.md:8 — defined here
- `How this skill is structured` — external/ci-cd-and-automation.md:8 — defined here
- `Every skill follows the same anatomy` — external/ci-cd-and-automation.md:9 — defined here
- `anatomy` — external/ci-cd-and-automation.md:9, 10 — defined here
- `workflow` — external/ci-cd-and-automation.md:9, 10, 14 — defined here
- `Overview` — external/ci-cd-and-automation.md:10 — defined here
- `What this skill does` — external/ci-cd-and-automation.md:10 — defined here
- `When to Use` — external/ci-cd-and-automation.md:10 — defined here
- `Triggering conditions` — external/ci-cd-and-automation.md:10 — defined here
- `Process` — external/ci-cd-and-automation.md:10 — defined here
- `Step-by-step workflow` — external/ci-cd-and-automation.md:10 — defined here
- `Rationalizations` — external/ci-cd-and-automation.md:10 — defined here
- `Excuses + rebuttals` — external/ci-cd-and-automation.md:10 — defined here
- `Red Flags` — external/ci-cd-and-automation.md:10 — defined here
- `Signs something’s wrong` — external/ci-cd-and-automation.md:10 — defined here
- `Verification` — external/ci-cd-and-automation.md:10 — defined here
- `Evidence requirements` — external/ci-cd-and-automation.md:10 — defined here
- `SKILL.md` — external/ci-cd-and-automation.md:10, 11 — used here
- `/ship` — external/ci-cd-and-automation.md:12 — used here
- `git-workflow-and-versioning` — external/ci-cd-and-automation.md:12 — used here
- `Trunk-based development` — external/ci-cd-and-automation.md:12 — used here
- `atomic commits` — external/ci-cd-and-automation.md:12 — used here
- `~100-line changes` — external/ci-cd-and-automation.md:12 — used here
- `commit-as-save-point` — external/ci-cd-and-automation.md:12 — used here
- `deprecation-and-migration` — external/ci-cd-and-automation.md:12 — used here
- `code-as-liability mindset` — external/ci-cd-and-automation.md:12 — used here
- `compulsory vs advisory deprecation` — external/ci-cd-and-automation.md:12 — used here
- `zombie-code removal` — external/ci-cd-and-automation.md:12 — used here
- `documentation-and-adrs` — external/ci-cd-and-automation.md:12 — used here
- `Architecture Decision Records` — external/ci-cd-and-automation.md:12 — used here
- `API docs` — external/ci-cd-and-automation.md:12 — used here
- `inline standards` — external/ci-cd-and-automation.md:12 — used here
- `document the why` — external/ci-cd-and-automation.md:12 — used here
- `Skills catalog` — external/ci-cd-and-automation.md:15 — used here
- `The lifecycle` — external/ci-cd-and-automation.md:15 — used here
- `Loop engineering` — external/ci-cd-and-automation.md:15 — used here
- `How it compares` — external/ci-cd-and-automation.md:15 — used here
- `Getting started` — external/ci-cd-and-automation.md:15 — used here
- `Claude Code` — external/ci-cd-and-automation.md:15 — used here
- `Codex` — external/ci-cd-and-automation.md:15 — used here
- `Cursor` — external/ci-cd-and-automation.md:15 — used here
- `Antigravity` — external/ci-cd-and-automation.md:15 — used here
- `Contributing` — external/ci-cd-and-automation.md:15 — used here
- `Evals framework` — external/ci-cd-and-automation.md:15 — used here
- `addyosmani.com` — external/ci-cd-and-automation.md:15 — used here
- `MIT licensed` — external/ci-cd-and-automation.md:15 — used here
- `Addy Osmani` — external/ci-cd-and-automation.md:16 — used here

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
   - Skill heading: `h1.detail-name` (`ci-cd-and-automation`)
   - Detail summary: Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops
   - Trigger condition: `Use when Setting up or modifying build and deploy pipelines.`
   - Tags: `#ci-cd`, `#automation`
   - Panel `Install just this skill`:
     - Command block 1: `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`
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
     - Command mapping row (`/ship`)
     - Link to full lifecycle (`/lifecycle/`)
   - Related skills grid (`section.detail-related`):
     - `git-workflow-and-versioning`
     - `deprecation-and-migration`
     - `documentation-and-adrs`
4. `footer.footer` (lines 13-18)
   - Brand tagline (`Production-grade engineering skills for AI coding agents...`)
   - Full package install command (`npx skills add addyosmani/agent-skills`)
   - Product, Setup, Resources navigation links
   - Copyright and license information (`© 2026 agent-skills · MIT licensed`)
   - Author attribution (`Built by Addy Osmani & contributors`)
   - Scroll reveal `IntersectionObserver` script
5. Telemetry (line 19)
   - Netlify Real User Monitoring (RUM) script tag

## Scripts — required if type is script or the skill ships scripts
The file itself is an external HTML document and contains two documented CLI installation commands and several embedded client-side JavaScript modules:

1. **Documented CLI Command: Modular Skill Installation**
   - Path: inline documentation at `external/ci-cd-and-automation.md:8`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` — `external/ci-cd-and-automation.md:8`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill ci-cd-and-automation -y --copy` (in isolated temp directory)
   - Actual exit code: `0`
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Selected 1 skill: ci-cd-and-automation ... Installed 1 skill: ✓ ci-cd-and-automation (copied) → ./.agents/skills/ci-cd-and-automation`
   - Output match claim: yes, clones repository and installs `skills/ci-cd-and-automation/SKILL.md`.

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at `external/ci-cd-and-automation.md:8, 15`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills` — `external/ci-cd-and-automation.md:8, 15`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill ci-cd-and-automation -l`
   - Actual exit code: `0`
   - Actual stdout (abridged): Listed all 25 skills from `addyosmani/agent-skills`, confirming `ci-cd-and-automation` description and availability.
   - Output match claim: yes, lists full pack including `ci-cd-and-automation`.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at `external/ci-cd-and-automation.md:5`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on mobile menu toggle click
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at `external/ci-cd-and-automation.md:8`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on clicking copy button for CLI commands
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at `external/ci-cd-and-automation.md:18`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: `/.netlify/scripts/rum` referenced at `external/ci-cd-and-automation.md:19`
   - Language: JavaScript, 1 line script tag
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- `doc-drift` — `external/ci-cd-and-automation.md:1, 5` vs `sources/addy/skills/ci-cd-and-automation/SKILL.md:3`: The external documentation summarizes purpose as `"Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound."`, which condenses and alters the operational text of `SKILL.md:3` (`"Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies."`).
- `doc-drift` — `external/ci-cd-and-automation.md:5` vs `sources/addy/skills/ci-cd-and-automation/SKILL.md:16-23`: The external page reduces trigger conditions to a single line `"Setting up or modifying build and deploy pipelines."`, omitting 4 additional triggers documented in `SKILL.md:16-23` ("Adding or modifying automated checks", "Configuring deployment pipelines", "When a change should trigger automated verification", and "Debugging CI failures").
- `doc-drift` — `external/ci-cd-and-automation.md:9-10` vs `sources/addy/skills/ci-cd-and-automation/SKILL.md`: The external page claims every skill follows a 6-part anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`), but `SKILL.md` does not have a section named `Process`, instead detailing workflows under `## The Quality Gate Pipeline`, `## GitHub Actions Configuration`, `## Feeding CI Failures Back to Agents`, `## Deployment Strategies`, `## Environment Management`, `## Automation Beyond CI`, and `## CI Optimization`.
- `doc-drift` — `external/ci-cd-and-automation.md:12` vs `sources/addy/skills/ci-cd-and-automation/SKILL.md`: The external page displays `/ship` in the sidebar card, but `SKILL.md` itself contains no reference to `/ship` or any slash commands, relying on external command definitions (`commands/ship.toml`, `.claude/commands/ship.md`, `.gemini/commands/ship.toml`).
- `doc-drift` — `external/ci-cd-and-automation.md:6, 8` vs `sources/addy/README.md:1-400`: The external page documents skill installation via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`), which is completely absent from repository root documentation (`README.md`, `CLAUDE.md`).
- `doc-drift` — `external/ci-cd-and-automation.md:15` vs `sources/addy/docs/`: Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all point to `/docs/getting-started/` rather than their specific setup documents (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`).
- `doc-drift` — `external/ci-cd-and-automation.md:1-20`: File is stored with a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% minified HTML markup (`<!DOCTYPE html><html...`).
- `missing-path` — `external/ci-cd-and-automation.md:1, 5, 12, 15, 19`: Web server-relative internal paths (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not exist on disk in the local workspace.
- `orphan` — `external/ci-cd-and-automation.md:1-20`: File is an external documentation snapshot brought into scope solely via METHOD.md §1.1; it is not referenced, imported, or invoked by any source file in `sources/addy/`.

## Observations
- **Role in Ecosystem**: Public catalog landing page for the `ci-cd-and-automation` skill, representing the automated enforcement mechanism for all quality standards across the full development lifecycle.
- **Ship Phase Alignment**: The page classifies `ci-cd-and-automation` as part of the `Ship` phase, sharing the `/ship` command association with `shipping-and-launch`, `git-workflow-and-versioning`, `deprecation-and-migration`, and `documentation-and-adrs`.
- **Sibling Discovery Grid**: Related cards under `More in the Ship phase` recommend `git-workflow-and-versioning` ("Trunk-based development, atomic commits, ~100-line changes, commit-as-save-point."), `deprecation-and-migration` ("Code-as-liability mindset, compulsory vs advisory deprecation, zombie-code removal."), and `documentation-and-adrs` ("Architecture Decision Records, API docs, inline standards - document the why.").
- **Core Principles Promoted**: Prominently features the twin maxims `"Shift Left"` (catch issues early) and `"Faster is Safer"` (smaller, more frequent releases reduce risk), along with `"feature flags"`, `"quality-gate pipelines"`, and `"failure feedback loops"`.
- **Cross-Reference to In-Repo Inventory**: The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md` under unit `inv-addy-14`.

## Context cost
- File size: 26,179 bytes (~7,350 tokens).
- Upstream target: `skills/ci-cd-and-automation/SKILL.md` (11,332 bytes, ~2,833 tokens).
- Combined context cost: ~37,511 bytes (~10,183 tokens).
