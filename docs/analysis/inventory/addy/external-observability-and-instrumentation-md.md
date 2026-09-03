---
package: addy
path: ../addy-external/observability-and-instrumentation.md
type: external-doc
bytes: 26344
unit: inv-addy-33
---

# ../addy-external/observability-and-instrumentation.md

## Purpose — required, verbatim
> "Instruments code so production behavior is visible and diagnosable. Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident." — ../addy-external/observability-and-instrumentation.md:1, 5

Additional triggering purpose:
> "Adding telemetry, or shipping anything that runs in production." — ../addy-external/observability-and-instrumentation.md:5

Sidebar summary:
> "Deploy with confidence - rollout, rollback, observe." — ../addy-external/observability-and-instrumentation.md:12

Skill anatomy lede:
> "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — ../addy-external/observability-and-instrumentation.md:9

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer
          workflows across the full lifecycle." — ../addy-external/observability-and-instrumentation.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/observability-and-instrumentation/`, the public web documentation and distribution landing page for Addy Osmani's `observability-and-instrumentation` skill. Built with the Astro framework and hosted on Netlify, its design intent is public discovery, package distribution via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill observability-and-instrumentation`), lifecycle categorization (assigning the skill to the `addy:Ship` phase alongside deployment and release workflows), and establishing baseline operational telemetry standards for coding agents (structured logging, RED metrics, OpenTelemetry distributed tracing, and symptom-based alerting under the core philosophy "instrument as you build, not after an incident"). It provides triggering guidance ("Adding telemetry, or shipping anything that runs in production."), standardizes a 6-part skill anatomy, and establishes cross-skill discovery for sibling skills in the Ship phase (`git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration`) while providing direct navigation to the canonical upstream GitHub repository source (`skills/observability-and-instrumentation/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` through the web would lack an accessible visual overview of the skill's lifecycle mapping, anatomy breakdown, sibling skills in the Ship phase, and modular CLI installation commands prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Ship

*(Note: Although operational telemetry and system monitoring are commonly treated in external DevOps or SRE taxonomies as part of an operational "Monitor" or "Operate" phase, Addy's lifecycle schema defines exactly 6 canonical phases (`Define`, `Plan`, `Build`, `Verify`, `Review`, `Ship` per `sources/addy/CLAUDE.md:26`, `README.md:273-283`, and `skills/using-agent-skills/SKILL.md:191`), with no `Monitor` phase existing. Both the external landing page breadcrumbs/badges (`../addy-external/observability-and-instrumentation.md:5, 12`) and the in-repo skill inventory place this skill strictly in `addy:Ship`.)*

## Inputs — required
- Web client HTTP GET request to canonical path `/skills/observability-and-instrumentation/` — ../addy-external/observability-and-instrumentation.md:1
- User trigger / prerequisite condition: "Adding telemetry, or shipping anything that runs in production." — ../addy-external/observability-and-instrumentation.md:5
- Upstream skill specification from `skills/observability-and-instrumentation/SKILL.md` consumed at site build time — ../addy-external/observability-and-instrumentation.md:1, 5, 10, 11
- Sibling skills in the Ship phase referenced: `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` — ../addy-external/observability-and-instrumentation.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/observability-and-instrumentation.md:1, 5
- External web typography: Google Fonts Geist and Geist Mono — ../addy-external/observability-and-instrumentation.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/observability-and-instrumentation.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/observability-and-instrumentation.md:6

## Outputs — required
- Rendered HTML web document with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/observability-and-instrumentation.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/observability-and-instrumentation.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill observability-and-instrumentation`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Ship-phase skills: `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` — ../addy-external/observability-and-instrumentation.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/observability-and-instrumentation/SKILL.md` — ../addy-external/observability-and-instrumentation.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/observability-and-instrumentation.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/observability-and-instrumentation.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/observability-and-instrumentation.md:15
  - Upstream evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/observability-and-instrumentation.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/observability-and-instrumentation.md:15
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/observability-and-instrumentation.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/observability-and-instrumentation.md:8
  - Mobile navigation drawer toggle — ../addy-external/observability-and-instrumentation.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/observability-and-instrumentation.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/observability-and-instrumentation.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill observability-and-instrumentation — ../addy-external/observability-and-instrumentation.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/observability-and-instrumentation.md:8, 15
- skill skills/observability-and-instrumentation/SKILL.md — ../addy-external/observability-and-instrumentation.md:10-11
- skill skills/git-workflow-and-versioning/SKILL.md — ../addy-external/observability-and-instrumentation.md:12
- skill skills/ci-cd-and-automation/SKILL.md — ../addy-external/observability-and-instrumentation.md:12
- skill skills/deprecation-and-migration/SKILL.md — ../addy-external/observability-and-instrumentation.md:12
- command /ship — ../addy-external/observability-and-instrumentation.md:12
- doc CONTRIBUTING.md — ../addy-external/observability-and-instrumentation.md:15
- directory evals — ../addy-external/observability-and-instrumentation.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/observability-and-instrumentation.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/observability-and-instrumentation.md:5, 15
- external-link https://addyosmani.com — ../addy-external/observability-and-instrumentation.md:15
- script /.netlify/scripts/rum — ../addy-external/observability-and-instrumentation.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and cataloged in `docs/analysis/manifest/addy.md:209`. Not linked, imported, or invoked by any file in `sources/addy/`. Referenced in `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md:59` as its public documentation companion.)*

## Concepts named — required, verbatim
- `observability-and-instrumentation` — ../addy-external/observability-and-instrumentation.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/observability-and-instrumentation.md:1, 5, 8, 12, 13, 15 — used here
- `Geist` — ../addy-external/observability-and-instrumentation.md:1 — used here
- `Geist Mono` — ../addy-external/observability-and-instrumentation.md:1 — used here
- `Structured logging` — ../addy-external/observability-and-instrumentation.md:1, 5 — defined here
- `RED metrics` — ../addy-external/observability-and-instrumentation.md:1, 5 — defined here
- `OpenTelemetry tracing` — ../addy-external/observability-and-instrumentation.md:1, 5 — defined here
- `symptom-based alerting` — ../addy-external/observability-and-instrumentation.md:1, 5 — defined here
- `instrument as you build` — ../addy-external/observability-and-instrumentation.md:1, 5 — defined here
- `Skills` — ../addy-external/observability-and-instrumentation.md:5, 12, 15 — used here
- `Docs` — ../addy-external/observability-and-instrumentation.md:5, 15 — used here
- `Tutorials` — ../addy-external/observability-and-instrumentation.md:5, 15 — used here
- `Lifecycle` — ../addy-external/observability-and-instrumentation.md:5, 12, 15 — used here
- `Loops` — ../addy-external/observability-and-instrumentation.md:5, 15 — used here
- `Teach` — ../addy-external/observability-and-instrumentation.md:5, 15 — used here
- `Compare` — ../addy-external/observability-and-instrumentation.md:5, 15 — used here
- `Ship` — ../addy-external/observability-and-instrumentation.md:5, 12 — defined here
- `Ship phase` — ../addy-external/observability-and-instrumentation.md:5, 12 — defined here
- `observability` — ../addy-external/observability-and-instrumentation.md:5 — defined here
- `production` — ../addy-external/observability-and-instrumentation.md:5 — defined here
- `/ship` — ../addy-external/observability-and-instrumentation.md:12 — defined here
- `skills CLI` — ../addy-external/observability-and-instrumentation.md:6 — used here
- `This skill only` — ../addy-external/observability-and-instrumentation.md:8 — defined here
- `All skills` — ../addy-external/observability-and-instrumentation.md:8 — defined here
- `How this skill is structured` — ../addy-external/observability-and-instrumentation.md:8 — defined here
- `Every skill follows the same anatomy` — ../addy-external/observability-and-instrumentation.md:9 — defined here
- `Overview` — ../addy-external/observability-and-instrumentation.md:10 — defined here
- `When to Use` — ../addy-external/observability-and-instrumentation.md:10 — defined here
- `Process` — ../addy-external/observability-and-instrumentation.md:10 — defined here
- `Rationalizations` — ../addy-external/observability-and-instrumentation.md:10 — defined here
- `Red Flags` — ../addy-external/observability-and-instrumentation.md:10 — defined here
- `Verification` — ../addy-external/observability-and-instrumentation.md:10 — defined here
- `SKILL.md` — ../addy-external/observability-and-instrumentation.md:10-11 — used here
- `git-workflow-and-versioning` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `trunk-based development` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `atomic commits` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `~100-line changes` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `commit-as-save-point` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `ci-cd-and-automation` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `Shift Left` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `Faster is Safer` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `feature flags` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `quality-gate pipelines` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `deprecation-and-migration` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `code-as-liability mindset` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `compulsory vs advisory deprecation` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `zombie-code removal` — ../addy-external/observability-and-instrumentation.md:12 — used here
- `Claude Code` — ../addy-external/observability-and-instrumentation.md:15 — used here
- `Codex` — ../addy-external/observability-and-instrumentation.md:15 — used here
- `Cursor` — ../addy-external/observability-and-instrumentation.md:15 — used here
- `Antigravity` — ../addy-external/observability-and-instrumentation.md:15 — used here
- `GitHub` — ../addy-external/observability-and-instrumentation.md:5, 15 — used here
- `Contributing` — ../addy-external/observability-and-instrumentation.md:15 — used here
- `Evals framework` — ../addy-external/observability-and-instrumentation.md:15 — used here
- `addyosmani.com` — ../addy-external/observability-and-instrumentation.md:15 — used here
- `MIT licensed` — ../addy-external/observability-and-instrumentation.md:15 — used here

## Structure
The file is structured as a compiled Astro HTML document with the following semantic sections:
1. `head` metadata and stylesheets (lines 1-5):
   - Canonical URL (`https://skills.addy.ie/skills/observability-and-instrumentation/`), title, meta description, theme color
   - Open Graph (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`)
   - Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:creator`)
   - Google Fonts preconnect and stylesheets (`Geist`, `Geist Mono`)
   - Sitemap index link (`/sitemap-index.xml`)
   - CSS stylesheets (`compare.BYu2_sXs.css`, `_slug_.sGV3LZnA.css`) and scoped component `<style>` rules for `.cmd` and `.skill-card`
2. `header.nav` top navigation bar (line 5):
   - Accessibility skip-link (`a.skip-link`) to `#main`
   - Brand mark and logo linking to `/`
   - Primary navigation bar links (`Skills`, `Docs`, `Tutorials`, `Lifecycle`, `Loops`, `Teach`, `Compare`)
   - GitHub repository SVG icon link (`https://github.com/addyosmani/agent-skills`)
   - Call-to-action button (`Get started` -> `/docs/getting-started/`)
   - Mobile navigation toggle button and responsive drawer navigation menu
   - Embedded JS module for navigation drawer toggle interaction
3. `main#main` / `article.detail` content body (lines 5-12):
   - Breadcrumb navigation (`Skills / Ship`)
   - Detail top header:
     - `Ship phase` chip badge (`<span class="chip phase-chip">`)
     - Main skill title: `h1.detail-name.mono` (`observability-and-instrumentation`)
     - Detail summary: Structured logging, RED metrics, OpenTelemetry tracing, symptom-based alerting
     - Triggering condition: `Use when Adding telemetry, or shipping anything that runs in production.`
     - Topic tags: `#observability`, `#production`
   - Left column panel (`div.detail-main`):
     - Installation panel (`h2.panel-title` "Install just this skill"):
       - Command block 1: `npx skills add addyosmani/agent-skills --skill observability-and-instrumentation` ("This skill only")
       - Command block 2: `npx skills add addyosmani/agent-skills` ("All skills")
       - Copy-to-clipboard module script with fallback textarea execution and timer reset
     - Anatomy panel (`h2.panel-title` "How this skill is structured"):
       - Standardized 6-part skill anatomy list:
         - `01 Overview — What this skill does`
         - `02 When to Use — Triggering conditions`
         - `03 Process — Step-by-step workflow`
         - `04 Rationalizations — Excuses + rebuttals`
         - `05 Red Flags — Signs something’s wrong`
         - `06 Verification — Evidence requirements`
       - Action link button: `Read the full SKILL.md` (pointing to GitHub blob)
   - Right column sidebar (`aside.detail-side`):
     - Sidebar card for `Ship phase` with overview description ("Deploy with confidence - rollout, rollback, observe.")
     - Command mapping row: `Command /ship`
     - Link to lifecycle overview (`/lifecycle/`)
   - Related skills grid (`div.detail-related`):
     - Sibling Ship-phase skill cards:
       - `git-workflow-and-versioning`
       - `ci-cd-and-automation`
       - `deprecation-and-migration`
4. `footer.footer` (lines 13-18):
   - Brand mark, tagline, and full-package CLI install command (`npx skills add addyosmani/agent-skills`)
   - Navigation columns:
     - Product: Skills catalog, Tutorials, The lifecycle, Loop engineering, Teach & share, How it compares, Getting started
     - Setup: Claude Code, Codex, Cursor, Antigravity (all linking to `/docs/getting-started/`)
     - Resources: GitHub, Contributing, Evals framework, addyosmani.com
   - Copyright notice (`© 2026 agent-skills · MIT licensed`) and attribution to Addy Osmani & contributors
   - Embedded JS module for `IntersectionObserver` scroll reveal animation
5. Telemetry (line 19):
   - Netlify Real User Monitoring (RUM) asynchronous script tag (`/.netlify/scripts/rum`) with site ID, deploy branch, and Core Web Vitals token

## Scripts — required if type is script or the skill ships scripts
The file itself is an external HTML document and contains two documented CLI installation commands and several embedded client-side JavaScript modules:

1. **Documented CLI Command: Modular Skill Installation**
   - Path: inline documentation at `../addy-external/observability-and-instrumentation.md:8`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills --skill observability-and-instrumentation` — `../addy-external/observability-and-instrumentation.md:8`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill observability-and-instrumentation -y --copy` (executed in an isolated temporary directory `/tmp/test-obs-install-worker`)
   - Actual exit code: `0`
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Found 25 skills ... Selected 1 skill: observability-and-instrumentation ... Installed 1 skill: ✓ observability-and-instrumentation (copied) → ./.agents/skills/observability-and-instrumentation ... Done!`
   - Filesystem verification: Installed `SKILL.md` (11,053 bytes). It did not bundle `references/observability-checklist.md`.
   - Output match claim: yes, cleanly installed the targeted skill into the agent environment.

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at `../addy-external/observability-and-instrumentation.md:8, 15`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills` — `../addy-external/observability-and-instrumentation.md:8, 15`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills -l`
   - Actual exit code: `0`
   - Actual stdout (abridged): Enumerated all 25 skills in `addyosmani/agent-skills`, including `observability-and-instrumentation` with its trigger description.
   - Output match claim: yes, accurately lists the entire repository skill catalog.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at `../addy-external/observability-and-instrumentation.md:5`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser upon clicking `[data-nav-toggle]`
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at `../addy-external/observability-and-instrumentation.md:8`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser upon clicking `[data-copy-btn]` on CLI command blocks
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at `../addy-external/observability-and-instrumentation.md:18`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: `/.netlify/scripts/rum` referenced at `../addy-external/observability-and-instrumentation.md:19`
   - Language: JavaScript, 1 line script container
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:12` vs `sources/addy/commands/ship.toml:1-4` and `sources/addy/.claude/commands/ship.md:1-4`: The external documentation sidebar explicitly displays `Command /ship`, implying that `/ship` executes or maps to `observability-and-instrumentation`; in repository reality, `/ship` orchestrates pre-flight checklists and deployment for `shipping-and-launch` with zero invocation of `observability-and-instrumentation`, and no `/observe` command exists.
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:1, 5` vs `sources/addy/skills/observability-and-instrumentation/SKILL.md:3, 10`: The external documentation summarizes the skill as `"Instruments code so production behavior is visible and diagnosable. Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident."`, which synthesizes operational features and condenses the foundational philosophical rationale stated in `SKILL.md:10` ("Code you can't observe is code you can't operate...").
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:5` vs `sources/addy/skills/observability-and-instrumentation/SKILL.md:12-23`: The external page collapses the skill's triggering criteria into a single clause (`"Adding telemetry, or shipping anything that runs in production."`), omitting 5 detailed positive trigger scenarios and 3 mandatory "NOT for" negative boundaries (redirecting debugging to `debugging-and-error-recovery`, performance bottlenecks to `performance-optimization`, and release gating to `shipping-and-launch`).
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:9-10` vs `sources/addy/skills/observability-and-instrumentation/SKILL.md:8, 12, 25, 166, 178, 190`: The external page asserts that every skill follows a standardized 6-part anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`). In `SKILL.md:25`, `## Process` is explicitly present, containing 7 numbered H3 subsections (`### 1. Define "working" before instrumenting` through `### 7. Verify the telemetry itself`). The 6 primary H2 sections of `SKILL.md` match the 6 anatomy steps from `sources/addy-external/observability-and-instrumentation.md:10` almost 1:1, with the only divergence being `04 Rationalizations` on the web card vs `## Common Rationalizations` (`line 166`) in `SKILL.md`.
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:12` vs `sources/addy/CLAUDE.md:26` and `sources/addy/README.md:273-283`: The "More in the Ship phase" section renders only 3 sibling skill cards (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`), omitting `shipping-and-launch` and `documentation-and-adrs` from the Ship phase cluster.
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:6, 8` vs `sources/addy/README.md:46-66` and `sources/addy/CLAUDE.md:5`: The external landing page promotes skill distribution via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill observability-and-instrumentation`). In repository reality, `npx skills add addyosmani/agent-skills` IS prominently featured in `sources/addy/README.md:46-63` under "## Quick Start" as the fastest path across 70+ agents (with explicit warning in lines 61-66 about the single-skill isolation hazard), though it is not mentioned in agent-specific guidelines (`CLAUDE.md`, `AGENTS.md`) which configure in-repo contributors rather than consumer skill distribution; the external web card promotes the single-skill command without displaying this isolation warning.
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:15` vs `sources/addy/docs/`: Footer setup navigation links for "Claude Code", "Codex", "Cursor", and "Antigravity" all link to the generic `/docs/getting-started/` destination. Claude Code setup is documented directly in `docs/getting-started.md:105-126` and root `README.md:70-98` (no `docs/claude-code-setup.md` exists). Dedicated platform-specific setup guides exist in `sources/addy/docs/` for Codex, Cursor, and Antigravity (`docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/antigravity-setup.md`), but the external website collapses all 4 setup links to the generic `/docs/getting-started/` destination.
- `doc-drift` — `../addy-external/observability-and-instrumentation.md:1-20`: The file is stored with a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% minified HTML markup (`<!DOCTYPE html><html...`).
- `isolation-hazard` — `../addy-external/observability-and-instrumentation.md:8` vs `sources/addy/skills/observability-and-instrumentation/SKILL.md:203`: The standalone installation command (`npx skills add addyosmani/agent-skills --skill observability-and-instrumentation`) copies only `SKILL.md` into the target environment without bundling the companion reference `references/observability-checklist.md`, creating a broken relative markdown link when an agent attempts to consult the pre-launch gate checklist.
- `missing-path` — `../addy-external/observability-and-instrumentation.md:1, 5, 12, 15, 19`: Web server-relative internal routes (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not exist as filesystem paths in the local repository.
- `orphan` — `../addy-external/observability-and-instrumentation.md:1-20`: The file is an external documentation snapshot brought into scope solely via METHOD.md §1.1; it is not referenced, imported, or invoked by any source file in `sources/addy/`.

## Observations
- **Architectural Role in Ecosystem**: This page serves as the public web catalog entry for Addy Osmani's operational instrumentation skill. It presents the four essential telemetry layers (Structured logging, RED metrics, OpenTelemetry distributed tracing, Symptom-based alerting) and connects them to the overarching release lifecycle under the philosophy "instrument as you build, not after an incident."
- **Lifecycle Integration & Ship Phase Placement**: Addy's taxonomy explicitly clusters observability into the `Ship` phase rather than establishing an independent "Monitor", "Operate", or "Maintenance" phase. The phase blurb `"Deploy with confidence - rollout, rollback, observe."` underscores that observability telemetry is treated as a core pre-requisite gate to safe production deployment.
- **Sister Skills Cluster in Ship Phase**: The external page establishes a functional quartet for production readiness in the Ship phase:
  1. `git-workflow-and-versioning` (version control discipline, atomic commits, ~100-line changes)
  2. `ci-cd-and-automation` (automated quality-gate pipelines, feature flags, Shift Left, Faster is Safer)
  3. `observability-and-instrumentation` (logging, metrics, tracing, symptom alerting)
  4. `deprecation-and-migration` (code-as-liability mindset, compulsory vs advisory deprecation, zombie-code removal)
- **Telemetry Architecture Endorsement**: The page explicitly highlights four foundational pillars of modern software observability:
  1. *Structured logging* (machine-readable JSON events, log levels, correlation ID propagation)
  2. *RED metrics* (Rate, Errors, Duration on services; histograms over averages; low cardinality)
  3. *OpenTelemetry tracing* (distributed vendor-neutral tracing with context propagation)
  4. *Symptom-based alerting* (alerting strictly on user-visible symptoms rather than internal cause thresholds)
- **Cross-Reference to In-Repo Inventory**: The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md` (unit `inv-addy-17`), and its companion reference checklist was inventoried in `docs/analysis/inventory/addy/references-observability-checklist-md.md` (unit `inv-addy-2`).

## Context cost
- File size: 26,344 bytes (~7,400 tokens).
- Content efficiency: Approximately 2,100 bytes (~525 tokens) of semantic content; >90% of file size consists of compiled HTML markup, inline SVG icons, scoped CSS stylesheets, and client-side JavaScript runtime modules.
- Combined context cost:
  - Landing page snapshot (`observability-and-instrumentation.md`): 26,344 bytes (~7,400 tokens)
  - Canonical in-repo skill (`SKILL.md`): 11,053 bytes (~3,100 tokens)
  - Companion reference (`observability-checklist.md`): 4,931 bytes (~1,400 tokens)
  - Total operational context: 42,328 bytes (~11,900 tokens)
