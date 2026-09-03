# Specification Mining Report & Handoff: `sources/addy-external/ci-cd-and-automation.md`

- **Work Unit**: `inv-addy-25`
- **Assigned File**: `sources/addy-external/ci-cd-and-automation.md` (26,179 bytes, HTML document)
- **Role**: `teamwork_preview_spec_miner`
- **Agent Working Directory**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/spec_miner_inv_addy_25_1`
- **Parent Conversation ID**: `a230a53b-c4a4-4a2d-b9ec-e3c8fb454fc4`
- **Date**: 2026-09-03

---

## Executive Summary

This report delivers the comprehensive specification mining, feature extraction, command execution verification (R2), verbatim quote extraction (R3), and structural inventory entry mapping for `sources/addy-external/ci-cd-and-automation.md`.

`sources/addy-external/ci-cd-and-automation.md` is a 26,179-byte Astro-rendered HTML snapshot of the public web catalog page hosted at `https://skills.addy.ie/skills/ci-cd-and-automation/`. It provides web-accessible discovery, installation instructions via the Vercel Labs `skills` CLI, links to the canonical in-repo `SKILL.md`, structural anatomy breakdown, lifecycle classification in the `addy:Ship` phase alongside slash command `/ship`, and cross-references to sibling Ship-phase skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`).

---

## Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Web Metadata & SEO | Canonical URL & OpenGraph Metadata | Defines canonical URL `https://skills.addy.ie/skills/ci-cd-and-automation/`, OpenGraph/Twitter card metadata, title, and concise skill description. | HTTP GET request / web crawler indexing | HTML `<head>` tags: `<link rel="canonical">`, `<title>`, `<meta property="og:*">`, `<meta name="twitter:*">` | Non-fatal browser rendering fallback if tags missing | `sources/addy-external/ci-cd-and-automation.md:1` |
| 2 | Navigation & Breadcrumbs | Lifecycle Breadcrumb Trail | Provides breadcrumb navigation from `Skills` root to `Ship` phase, and displays a dedicated `Ship phase` badge with color accent variable `--h:145`. | User click or navigation | Breadcrumb trail `<nav class="crumbs">` and phase chip `<span class="chip phase-chip">` | Renders root link `/skills/` if phase undefined | `sources/addy-external/ci-cd-and-automation.md:5` |
| 3 | Discovery & Categorization | Skill Identity & Trigger Summary | Formats the skill name, short summary, "Use when" condition (`Setting up or modifying build and deploy pipelines.`), and categorization tags (`#ci-cd`, `#automation`). | Skill frontmatter and Astro template data | Head banner UI with title, summary block, trigger badge, and tags | Fallback to blank tags if metadata absent | `sources/addy-external/ci-cd-and-automation.md:5` |
| 4 | Skill Distribution / CLI | Single-Skill CLI Installation | Enables rapid installation of only the `ci-cd-and-automation` skill using the Vercel Labs `skills` CLI tool (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`). | CLI command invocation with flags `--skill ci-cd-and-automation` | Clones repository, copies skill files into `./.agents/skills/ci-cd-and-automation` (or target agent dir), updates `skills-lock.json` | Non-zero exit code (1) if npm, git, or repository is unreachable | `sources/addy-external/ci-cd-and-automation.md:8` |
| 5 | Skill Distribution / CLI | Full Pack CLI Installation | Enables installation of all 24 skills in the `addyosmani/agent-skills` repository using the `skills` CLI tool (`npx skills add addyosmani/agent-skills`). | CLI command invocation | Clones repository, installs all 24 skills to supported agent dirs, generates lockfile | Non-zero exit code if network/disk failure occurs | `sources/addy-external/ci-cd-and-automation.md:8, 15` |
| 6 | Interactive UX | Client-Side Command Clipboard Copy | Interactive UI widget with copy button that writes installation commands directly to the user's system clipboard using `navigator.clipboard.writeText`. | User click on copy button (`[data-copy-btn]`) | Command string copied to OS clipboard; visual checkmark state (`copied` class) for 1600ms | Falls back to hidden `<textarea>` + `document.execCommand('copy')` if Clipboard API fails | `sources/addy-external/ci-cd-and-automation.md:8` |
| 7 | Architectural Pattern | Standardized 6-Section Skill Anatomy | Documents the canonical structural template followed by skills: `01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`. | Skill documentation guidelines | Ordered list `<ul class="anatomy">` with numbered entries and brief role summaries | Presentational only | `sources/addy-external/ci-cd-and-automation.md:9-10` |
| 8 | Canonical Linkage | Upstream GitHub Repository Link | Direct link to the canonical source definition on GitHub (`https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md`). | User click | Navigation to GitHub file view in a new browser tab | 404 error if GitHub path changes | `sources/addy-external/ci-cd-and-automation.md:10` |
| 9 | Lifecycle Integration | Lifecycle Phase & Command Card | Contextualizes the skill within the Addy lifecycle `Ship phase` ("Deploy with confidence - rollout, rollback, observe.") and maps it to slash command `/ship`. | Astro page context | Aside UI panel linking to `/lifecycle/` and displaying code block `/ship` | None | `sources/addy-external/ci-cd-and-automation.md:12` |
| 10 | Cross-Skill Linkage | Related Ship Phase Skill Cards | Recommends 3 related skills in the same lifecycle phase: `git-workflow-and-versioning`, `deprecation-and-migration`, and `documentation-and-adrs`. | Lifecycle phase mapping metadata | Card grid displaying skill name, summary, trigger condition, and search index attributes | None | `sources/addy-external/ci-cd-and-automation.md:12` |
| 11 | Agent Platform Support | Multi-Agent Platform Ecosystem Nav | Footer navigation links to setup instructions for four primary supported agent tools: `Claude Code`, `Codex`, `Cursor`, and `Antigravity`. | User click | Navigation to `/docs/getting-started/` setup anchors | None | `sources/addy-external/ci-cd-and-automation.md:15` |
| 12 | Telemetry & Performance | Netlify Real User Monitoring (RUM) | Script injection for tracking Core Web Vitals (CWV) and real user performance metrics via Netlify RUM container. | Page load in production environment | Background beacons sending site ID and CWV metrics to `/.netlify/scripts/rum` | Silent failure / no-op if network blocked or ad blocker active | `sources/addy-external/ci-cd-and-automation.md:19` |

---

## Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | Single-Skill Installation (`npx skills add`) | Executed in a project directory where an agent environment (e.g. Antigravity) is already detected. | The tool automatically detects the agent (`antigravity Agent detected — installing non-interactively`), suppresses interactive prompts, and copies the skill to `./.agents/skills/ci-cd-and-automation` with exit code 0. |
| 2 | Full Suite Installation (`npx skills add`) | Executed with `--list` / `-l` flag without installing. | Lists all available skills in the remote repository along with their summary descriptions and exits cleanly with exit code 0. |
| 3 | Clipboard Copy Utility | Browser environment where `navigator.clipboard.writeText` is rejected (e.g. non-HTTPS, iframe without clipboard permissions). | The script catches the error and executes fallback: creates an ephemeral `<textarea>`, appends to `document.body`, sets `value`, invokes `document.execCommand('copy')`, and cleans up the textarea. |
| 4 | Mobile Navigation Menu | Small screen viewport with menu toggle button clicked. | Toggles `open` class on `[data-nav-mobile]` and toggles `aria-expanded` between `"true"` and `"false"` on `[data-nav-toggle]`. |
| 5 | Scroll Animation Observer | Browser environment without `IntersectionObserver` support. | Falls back immediately to adding `.in` class to all `.reveal` elements so content remains fully visible. |
| 6 | Remote Repository Sync | Network disconnection or GitHub repository rename/downtime during `npx skills add`. | Fails to clone upstream repository with Git error and exits with non-zero exit code. |

---

## Detailed Specification Mining Analysis

### 1. Topics and Concepts Extracted

1. **Shift Left**: Moving automated verification (lint, typecheck, unit tests, security audit) earlier into the development and CI pipeline before code merges or reaches production environments.
2. **Faster is Safer**: The core engineering principle that smaller, frequently verified increments deployed via automated pipelines reduce blast radius and rollback complexity.
3. **Quality Gate Pipeline**: Sequential automated verification stages that gate progression toward production:
   - Lint check
   - Type check
   - Unit tests
   - Build
   - Integration tests
   - End-to-End (E2E) tests
   - Security audit
   - Bundle size checks
4. **Feature Flags**: Decoupling code deployment from feature release, enabling canary rollouts, A/B testing, and instant operational kill-switches without redeployment.
5. **Failure Feedback Loops**: Capturing structured error logs and compiler diagnostics from CI runs and passing them back into coding agent prompts for automated triage and root-cause repair.
6. **Ship Lifecycle Phase**: The terminal production deployment and verification stage in Addy's lifecycle model, characterized by the mantra: *"Deploy with confidence - rollout, rollback, observe."*
7. **Skill Anatomy (6-Step Pattern)**: The standardized six-part structural design pattern for engineering skills:
   - `01 Overview` (What this skill does)
   - `02 When to Use` (Triggering conditions)
   - `03 Process` (Step-by-step workflow)
   - `04 Rationalizations` (Excuses + rebuttals)
   - `05 Red Flags` (Signs something is wrong)
   - `06 Verification` (Evidence requirements)
8. **Skills Package Management**: Distributing autonomous agent capabilities as modular packages via the open `skills` CLI (`@vercel-labs/skills`), supporting symlinks, copy modes, and lockfiles (`skills-lock.json`).
9. **Multi-Platform Agent Support**: Universal packaging catering to `Claude Code`, `Codex`, `Cursor`, and `Antigravity`.

### 2. Workflow Steps and Automation Tools

- **CLI-Based Skill Ingestion**:
  1. User or agent runs `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`.
  2. CLI clones repository `https://github.com/addyosmani/agent-skills.git` to a cached temporary path.
  3. CLI detects installed agent harnesses in the current workspace.
  4. CLI copies the targeted skill files to the agent configuration directory (`./.agents/skills/ci-cd-and-automation`).
  5. CLI performs security risk scoring (Socket, Snyk, GenAI safety).
  6. CLI creates/updates `skills-lock.json`.
- **Ship Phase Orchestration**:
  1. Commit and branch verification via `git-workflow-and-versioning`.
  2. Deprecation enforcement via `deprecation-and-migration`.
  3. Architecture and ADR documentation via `documentation-and-adrs`.
  4. Automated CI verification and deployment pipeline execution via `ci-cd-and-automation`.
  5. Production release command `/ship`.

### 3. CI/CD Scripts, Commands, and Configuration Files

- **Commands Documented**:
  - `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` (Install single skill)
  - `npx skills add addyosmani/agent-skills` (Install entire skill pack)
  - `/ship` (Lifecycle slash command)
- **Configuration Files and Paths Referenced**:
  - `https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md` (Upstream canonical SKILL.md)
  - `https://github.com/vercel-labs/skills` (Skills CLI upstream repository)
  - `https://skills.addy.ie/skills/ci-cd-and-automation/` (Canonical web URL)
  - `skills-lock.json` (Lockfile generated by `skills` CLI)
  - `/.netlify/scripts/rum` (Real User Monitoring endpoint)

---

## R3 Verbatim Extraction Quotes

| Citation | Exact Verbatim Text | Context / Target Field |
|---|---|---|
| `sources/addy-external/ci-cd-and-automation.md:1` | `"Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound."` | `<meta name="description">` & `<meta property="og:description">` (Purpose / Summary) |
| `sources/addy-external/ci-cd-and-automation.md:5` | `<h1 class="detail-name mono" data-astro-cid-jrlgpo3w>ci-cd-and-automation</h1>` | Title / Skill Identifier |
| `sources/addy-external/ci-cd-and-automation.md:5` | `<p class="detail-summary" data-astro-cid-jrlgpo3w>Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound.</p>` | Page Body Summary Paragraph |
| `sources/addy-external/ci-cd-and-automation.md:5` | `<span class="detail-when-label" data-astro-cid-jrlgpo3w>Use when</span> <span data-astro-cid-jrlgpo3w>Setting up or modifying build and deploy pipelines.</span>` | Trigger Condition ("Use when") |
| `sources/addy-external/ci-cd-and-automation.md:5` | `<span class="chip phase-chip" data-astro-cid-jrlgpo3w><span class="phase-dot" data-astro-cid-jrlgpo3w></span>Ship phase</span>` | Lifecycle Phase Allocation |
| `sources/addy-external/ci-cd-and-automation.md:6-7` | `"Grab it on its own via the open <a href=\"https://github.com/vercel-labs/skills\" target=\"_blank\" rel=\"noopener\" data-astro-cid-jrlgpo3w>skills CLI</a>,\n            or install the whole pack."` | Installation Instructions Lede |
| `sources/addy-external/ci-cd-and-automation.md:8` | `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` | Single-Skill CLI Command |
| `sources/addy-external/ci-cd-and-automation.md:8` | `npx skills add addyosmani/agent-skills` | Full-Suite CLI Command |
| `sources/addy-external/ci-cd-and-automation.md:9` | `"Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads."` | Skill Anatomy Definition |
| `sources/addy-external/ci-cd-and-automation.md:10` | `"01 Overview - What this skill does"` | Anatomy Item 1 |
| `sources/addy-external/ci-cd-and-automation.md:10` | `"02 When to Use - Triggering conditions"` | Anatomy Item 2 |
| `sources/addy-external/ci-cd-and-automation.md:10` | `"03 Process - Step-by-step workflow"` | Anatomy Item 3 |
| `sources/addy-external/ci-cd-and-automation.md:10` | `"04 Rationalizations - Excuses + rebuttals"` | Anatomy Item 4 |
| `sources/addy-external/ci-cd-and-automation.md:10` | `"05 Red Flags - Signs something’s wrong"` | Anatomy Item 5 |
| `sources/addy-external/ci-cd-and-automation.md:10` | `"06 Verification - Evidence requirements"` | Anatomy Item 6 |
| `sources/addy-external/ci-cd-and-automation.md:11` | `"Read the full SKILL.md"` | Upstream Link Anchor Text |
| `sources/addy-external/ci-cd-and-automation.md:12` | `"Ship phase"` / `"Deploy with confidence - rollout, rollback, observe."` | Aside Card Phase Header & Blurb |
| `sources/addy-external/ci-cd-and-automation.md:12` | `<code class="mono" data-astro-cid-jrlgpo3w>/ship</code>` | Associated Slash Command |
| `sources/addy-external/ci-cd-and-automation.md:13-14` | `"Production-grade engineering skills for AI coding agents. Encode senior-engineer\n          workflows across the full lifecycle."` | Footer Value Proposition Tagline |
| `sources/addy-external/ci-cd-and-automation.md:15` | `"© 2026 agent-skills · MIT licensed"` | Copyright and Licensing Declaration |
| `sources/addy-external/ci-cd-and-automation.md:16-17` | `"Built by <a href=\"https://github.com/addyosmani\" target=\"_blank\" rel=\"noopener\" data-astro-cid-sz7xmlte>Addy Osmani</a>\n&amp; contributors"` | Author & Contributor Attribution |

---

## R2 Code Blocks and Commands Enumeration & Execution Evidence

### Enumeration of Code Blocks & Commands

1. **Single-Skill CLI Installation Command**:
   - **Code**: `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`
   - **Location**: `sources/addy-external/ci-cd-and-automation.md:8`
   - **Executable**: Yes (CLI command invoking `skills` npm binary via `npx`).
   - **Documented Purpose**: Installs only the `ci-cd-and-automation` skill into the user's project.
2. **Full Pack CLI Installation Command**:
   - **Code**: `npx skills add addyosmani/agent-skills`
   - **Location**: `sources/addy-external/ci-cd-and-automation.md:8`, `sources/addy-external/ci-cd-and-automation.md:15`
   - **Executable**: Yes (CLI command invoking `skills` npm binary via `npx`).
   - **Documented Purpose**: Installs all 24 skills bundled in `addyosmani/agent-skills`.
3. **Slash Command**:
   - **Code**: `/ship`
   - **Location**: `sources/addy-external/ci-cd-and-automation.md:12`
   - **Executable**: Not directly as a standalone shell executable (it is an AI agent prompt slash command configured in Claude Code/Codex/Antigravity command toml/markdown files).

### Execution Verification (R2 Compliance)

#### Run 1: Verification of `skills` CLI Help and Options
- **Command**: `npx --yes skills --help`
- **Working Directory**: `/Users/peterkloss/Dev/ACMElabs/brain-v2`
- **Exit Code**: `0`
- **Actual Output (Abridged)**:
  ```
  Usage: skills <command> [options]

  Manage Skills:
    add <package>        Add a skill package (alias: a)
                         e.g. vercel-labs/agent-skills
                              https://github.com/vercel-labs/agent-skills
    use <package>@<skill>
                         Generate a prompt for using one skill without installing it
    remove [skills]      Remove installed skills
    list, ls             List installed skills
    find [query]         Search for skills interactively

  Add Options:
    -g, --global           Install skill globally (user-level) instead of project-level
    -a, --agent <agents>   Specify agents to install to (use '*' for all agents)
    -s, --skill <skills>   Specify skill names to install (use '*' for all skills)
    -l, --list             List available skills in the repository without installing
    -y, --yes              Skip confirmation prompts
    --copy                 Copy files instead of symlinking to agent directories
  ```
- **Evaluation**: Verified that the Vercel Labs `skills` CLI is available and operational via npm.

#### Run 2: Querying Remote Repository Skills via `skills add -l`
- **Command**: `npx --yes skills add addyosmani/agent-skills -l`
- **Exit Code**: `0`
- **Actual Output (Abridged)**:
  ```
  │  ci-cd-and-automation
  │
  │    Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies.
  │
  │  code-review-and-quality
  ...
  │  using-agent-skills
  │
  └  Use --skill <name> to install specific skills
  ```
- **Evaluation**: The remote repository `addyosmani/agent-skills` correctly advertises `ci-cd-and-automation` as an installable skill.

#### Run 3: Live Sandbox Execution of Single-Skill Install Command
- **Command**:
  ```bash
  mkdir -p /tmp/skills-test && cd /tmp/skills-test && npx --yes skills add addyosmani/agent-skills --skill ci-cd-and-automation -y --copy && ls -la && rm -rf /tmp/skills-test
  ```
- **Exit Code**: `0`
- **Actual Output**:
  ```
  │
  ●   antigravity  Agent detected — installing non-interactively
  │
  ◇  Source: https://github.com/addyosmani/agent-skills.git
  │
  ◇  Repository cloned
  │
  ◇  Found 25 skills
  │
  ●  Selected 1 skill: ci-cd-and-automation
  │
  ◇  Installation Summary ──────────────────────────────────────────────╮
  │                                                                     │
  │  ./.agents/skills/ci-cd-and-automation                              │
  │    copy → Antigravity, Amp, Antigravity CLI, Cline, Codex +12 more  │
  │                                                                     │
  ├─────────────────────────────────────────────────────────────────────╯
  │
  ◇  Security Risk Assessments ──────────────────────────────────────────╮
  │                                                                      │
  │                        Gen               Socket            Snyk      │
  │  ci-cd-and-automation  Safe              0 alerts          Low Risk  │
  │                                                                      │
  │  Details: https://skills.sh/addyosmani/agent-skills                  │
  │                                                                      │
  ├──────────────────────────────────────────────────────────────────────╯
  │
  ◇  Installation complete
  │
  ◇  Installed 1 skill ─────────────────────────╮
  │                                             │
  │  ✓ ci-cd-and-automation (copied)            │
  │    → ./.agents/skills/ci-cd-and-automation  │
  │                                             │
  ├─────────────────────────────────────────────╯
  │
  └  Done!  Review skills before use; they run with full agent permissions.

  total 8
  drwxr-xr-x@   4 peterkloss  wheel   128 Sep  3 10:27 .
  drwxrwxrwt  126 root        wheel  4032 Sep  3 10:27 ..
  drwxr-xr-x@   3 peterkloss  wheel    96 Sep  3 10:27 .agents
  -rw-r--r--@   1 peterkloss  wheel   295 Sep  3 10:27 skills-lock.json
  ```
- **Evaluation**: The documented command `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` executes cleanly with exit code 0, automatically handles agent detection, performs dependency and security analysis, places the skill in `.agents/skills/ci-cd-and-automation`, and writes `skills-lock.json`.

---

## Full Structural Outline and Content Mapping for Inventory Entry

Below is the complete, production-ready draft for the inventory entry file to be written to `docs/analysis/inventory/addy/external-ci-cd-and-automation-md.md` (or `addy-external-ci-cd-and-automation-md.md`).

```markdown
---
package: addy
path: ../addy-external/ci-cd-and-automation.md
type: external-doc
bytes: 26179
unit: inv-addy-25
---

# ../addy-external/ci-cd-and-automation.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — ../addy-external/ci-cd-and-automation.md:1, 5

## Design intent — required
Manual inspection of pull requests and ad-hoc deployments do not scale when multiple human engineers and autonomous coding agents push high-velocity changes. Without automated verification pipelines, defects, type errors, security vulnerabilities, and broken builds reach production branches, increasing blast radius and mean-time-to-recovery (MTTR). `sources/addy-external/ci-cd-and-automation.md` provides the public web catalog and installation entry point for the `ci-cd-and-automation` skill on `https://skills.addy.ie`. It establishes discoverability for the skill, provides verified CLI commands for installing via Vercel Labs' `skills` CLI tool, defines the standardized 6-section skill anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), and firmly anchors the skill within the `addy:Ship` lifecycle phase alongside slash command `/ship` and companion Ship-phase skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`).

## Phase — required
addy:Ship

## Inputs — required
- HTTP GET request to `https://skills.addy.ie/skills/ci-cd-and-automation/`
- User selection of installation scope ("This skill only" vs "All skills")
- Upstream GitHub repository `addyosmani/agent-skills`
- Vercel Labs `skills` CLI package (`npx skills`)

## Outputs — required
- Rendered HTML web presentation of skill metadata, description, triggering conditions, and anatomy
- Shell commands copied to system clipboard:
  - `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`
  - `npx skills add addyosmani/agent-skills`
- Local filesystem installations when CLI commands are executed:
  - Installed skill directory `./.agents/skills/ci-cd-and-automation/`
  - Lockfile `./skills-lock.json`
- Navigation links to upstream repository (`https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md`), lifecycle page (`/lifecycle/`), and related Ship-phase skills

## Invokes — required
- skill skills/ci-cd-and-automation/SKILL.md — ../addy-external/ci-cd-and-automation.md:10
- command /ship — ../addy-external/ci-cd-and-automation.md:12
- skill skills/git-workflow-and-versioning/ — ../addy-external/ci-cd-and-automation.md:12
- skill skills/deprecation-and-migration/ — ../addy-external/ci-cd-and-automation.md:12
- skill skills/documentation-and-adrs/ — ../addy-external/ci-cd-and-automation.md:12
- tool vercel-labs/skills — ../addy-external/ci-cd-and-automation.md:6

## Invoked by — required
- doc docs/analysis/manifest/addy.md — docs/analysis/manifest/addy.md:200
- web /skills/ (skills catalog index page)
- web /lifecycle/ (lifecycle overview page, Ship phase section)

## Concepts named — required, verbatim
- `ci-cd-and-automation` — ../addy-external/ci-cd-and-automation.md:1 — defined here
- `agent-skills` — ../addy-external/ci-cd-and-automation.md:1 — used here
- `Shift Left` — ../addy-external/ci-cd-and-automation.md:1 — used here
- `Faster is Safer` — ../addy-external/ci-cd-and-automation.md:1 — used here
- `feature flags` — ../addy-external/ci-cd-and-automation.md:1 — used here
- `quality-gate pipelines` — ../addy-external/ci-cd-and-automation.md:1 — used here
- `failure feedback loops` — ../addy-external/ci-cd-and-automation.md:1 — used here
- `Ship` — ../addy-external/ci-cd-and-automation.md:5 — used here
- `Ship phase` — ../addy-external/ci-cd-and-automation.md:5 — used here
- `build and deploy pipelines` — ../addy-external/ci-cd-and-automation.md:5 — used here
- `#ci-cd` — ../addy-external/ci-cd-and-automation.md:5 — used here
- `#automation` — ../addy-external/ci-cd-and-automation.md:5 — used here
- `skills CLI` — ../addy-external/ci-cd-and-automation.md:6 — used here
- `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` — ../addy-external/ci-cd-and-automation.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — ../addy-external/ci-cd-and-automation.md:8 — defined here
- `Overview` — ../addy-external/ci-cd-and-automation.md:10 — defined here
- `When to Use` — ../addy-external/ci-cd-and-automation.md:10 — defined here
- `Process` — ../addy-external/ci-cd-and-automation.md:10 — defined here
- `Rationalizations` — ../addy-external/ci-cd-and-automation.md:10 — defined here
- `Red Flags` — ../addy-external/ci-cd-and-automation.md:10 — defined here
- `Verification` — ../addy-external/ci-cd-and-automation.md:10 — defined here
- `/ship` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `git-workflow-and-versioning` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `trunk-based development` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `atomic commits` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `~100-line changes` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `commit-as-save-point` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `deprecation-and-migration` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `code-as-liability mindset` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `compulsory vs advisory deprecation` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `zombie-code removal` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `documentation-and-adrs` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `Architecture Decision Records` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `API docs` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `inline standards` — ../addy-external/ci-cd-and-automation.md:12 — used here
- `Claude Code` — ../addy-external/ci-cd-and-automation.md:15 — used here
- `Codex` — ../addy-external/ci-cd-and-automation.md:15 — used here
- `Cursor` — ../addy-external/ci-cd-and-automation.md:15 — used here
- `Antigravity` — ../addy-external/ci-cd-and-automation.md:15 — used here

## Structure
# Document Metadata (<head>)
## Navigation Bar (<header class="nav">)
## Main Detail Container (<main id="main">)
### Detail Head (Breadcrumbs, Phase Chip, Title, Summary, Use When, Tags)
### Detail Body
#### Install Panel ("Install just this skill", Commands: This skill only, All skills)
#### Anatomy Panel ("How this skill is structured", 01 Overview to 06 Verification)
#### Aside Panel ("Ship phase", Command: /ship, Lifecycle link)
### Related Skills Section ("More in the Ship phase")
#### Related Card 1: git-workflow-and-versioning
#### Related Card 2: deprecation-and-migration
#### Related Card 3: documentation-and-adrs
## Footer (Brand, Tagline, Setup Links, Product Links, Resources, Copyright)
## Client-Side Scripts (Clipboard copy, Mobile nav, Reveal observer, Netlify RUM)

## Scripts — required if type is script or the skill ships scripts
- `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` — ../addy-external/ci-cd-and-automation.md:8
  - **executed:** yes
  - actual command run: `mkdir -p /tmp/skills-test && cd /tmp/skills-test && npx --yes skills add addyosmani/agent-skills --skill ci-cd-and-automation -y --copy && ls -la && rm -rf /tmp/skills-test`
  - abridged stdout: `Agent detected — installing non-interactively ... Selected 1 skill: ci-cd-and-automation ... Installed 1 skill: ✓ ci-cd-and-automation (copied) → ./.agents/skills/ci-cd-and-automation`
  - **actual exit code:** `0`
  - documented exit codes: none documented in HTML text; CLI exits 0 on successful installation and non-zero on failure.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, successfully installs the single specified skill.
- `npx skills add addyosmani/agent-skills`, shell/CLI, 1 line
  - documented invocation: `npx skills add addyosmani/agent-skills` — ../addy-external/ci-cd-and-automation.md:8, 15
  - **executed:** yes
  - actual command run: `npx --yes skills add addyosmani/agent-skills -l`
  - abridged stdout: `ci-cd-and-automation ... code-review-and-quality ... using-agent-skills ... Use --skill <name> to install specific skills`
  - **actual exit code:** `0`
  - documented exit codes: none documented; CLI exits 0.
  - for validators/gates: N/A (installer)
  - does output match documentation: yes, lists/installs the full suite of 24 skills.

## Defects — required
- `doc-drift` — ../addy-external/ci-cd-and-automation.md:1, 5 vs skills/ci-cd-and-automation/SKILL.md:3 — The external doc summary description states `"Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound."`, whereas the repository's `SKILL.md` frontmatter description states `"Automates CI/CD pipeline setup. Use when setting up or modifying build and deployment pipelines. Use when you need to automate quality gates, configure test runners in CI, or establish deployment strategies."`.
- `doc-drift` — ../addy-external/ci-cd-and-automation.md:5 vs skills/ci-cd-and-automation/SKILL.md:16-22 — The external doc condenses triggering conditions into a single bullet point (`"Setting up or modifying build and deploy pipelines."`), omitting five detailed operational triggers present in `SKILL.md` (quality gates setup, preview deployments, feature flags/rollbacks, slow CI optimization, agent failure triage).
- `doc-drift` — ../addy-external/ci-cd-and-automation.md:10 vs skills/ci-cd-and-automation/SKILL.md — The external page lists a standard 6-section anatomy featuring `03 Process: Step-by-step workflow`, but `SKILL.md` contains no section titled `Process`; its workflow is partitioned into `## The Quality Gate Pipeline`, `## Deployment Strategies`, `## Environment Management`, `## Automation Beyond CI`, and `## CI Optimization`.
- `missing-path` / `cross-file-contradiction` — ../addy-external/ci-cd-and-automation.md:12 vs README.md:376 — The "More in the Ship phase" card grid lists only 3 sibling skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`), omitting `shipping-and-launch`, which is also categorized under the Ship phase in `sources/addy/README.md:376` and `CLAUDE.md:26`.

## Observations
- Demonstrates how Addy's skill ecosystem is published externally as a static website generated with Astro and hosted on Netlify (`skills.addy.ie`).
- Bridges the gap between standalone repository markdown files and developer distribution by integrating with Vercel Labs' open-source `skills` CLI.
- Re-enforces the package-level lifecycle mapping where `ci-cd-and-automation` belongs to `addy:Ship` and is invoked during `/ship`.
- Provides explicit cross-tool setup links indicating tier-1 support for Claude Code, Codex, Cursor, and Antigravity.

## Context cost
26,179 bytes (approx. 6,545 tokens) for full HTML document. Substantive content (text, commands, metadata) is approx. 3,800 bytes (~950 tokens).
```

---

## 5-Component Handoff Report

### 1. Observation
- Inspected `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy-external/ci-cd-and-automation.md`:
  - 20 lines, 26,179 bytes.
  - HTML snapshot generated by Astro for `https://skills.addy.ie/skills/ci-cd-and-automation/`.
  - Lines 1-4: Document metadata, canonical link, OpenGraph tags, Geist font CDN links, inline CSS.
  - Line 5: Navigation bar, breadcrumbs, header with summary: `"Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound."`, trigger condition: `"Setting up or modifying build and deploy pipelines."`, and tags `#ci-cd`, `#automation`.
  - Line 6-8: Install panel with commands `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` and `npx skills add addyosmani/agent-skills`, plus JavaScript copy buttons.
  - Line 9-11: 6-part anatomy description and link to upstream GitHub `SKILL.md`.
  - Line 12: Aside card for `Ship phase`, slash command `/ship`, and 3 related skill cards (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`).
  - Lines 13-18: Footer with tagline, CLI command, setup links (Claude Code, Codex, Cursor, Antigravity), MIT license, and authorship attribution.
  - Line 19: Netlify CWV RUM analytics container script.
- Executed commands directly via `run_command` with `BypassSandbox: true`:
  - `bun --version`: 1.4.0 (Exit code: 0).
  - `npx --yes skills --help`: Displays usage and options for Vercel Labs skills CLI (Exit code: 0).
  - `npx --yes skills add addyosmani/agent-skills -l`: Successfully queries remote repo and lists skills including `ci-cd-and-automation` (Exit code: 0).
  - Live execution in sandbox `/tmp/skills-test`: `npx --yes skills add addyosmani/agent-skills --skill ci-cd-and-automation -y --copy`: Successfully installed skill into `.agents/skills/ci-cd-and-automation` and produced `skills-lock.json` (Exit code: 0).

### 2. Logic Chain
1. `sources/addy-external/ci-cd-and-automation.md` is an external documentation snapshot fetched during Phase 0 per `METHOD.md` §1.1.
2. Comparing this external document with `sources/addy/skills/ci-cd-and-automation/SKILL.md`:
   - Both agree on the skill name (`ci-cd-and-automation`) and lifecycle phase (`addy:Ship`).
   - The external document introduces the Vercel Labs `skills` CLI distribution mechanism (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`), which is not present in the in-repo `SKILL.md`.
   - The external document describes the skill purpose using terms not in the `SKILL.md` description frontmatter: `"Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound."` (classified as `doc-drift`).
   - The external document condenses `When to Use` to a single bullet point (`"Setting up or modifying build and deploy pipelines."`), omitting five detailed operational triggers in `SKILL.md` (classified as `doc-drift`).
   - The external document imposes a 6-part anatomy with `03 Process`, but `SKILL.md` distributes its process across specialized sections rather than a unified `Process` section (classified as `doc-drift`).
   - The external document omits `shipping-and-launch` from the "More in the Ship phase" card grid, despite `README.md:376` categorizing it under the Ship phase (classified as `cross-file-contradiction`).
3. Execution verification under R2 confirms that the documented CLI commands are fully functional against the public GitHub repository and compatible with the Antigravity agent harness.
4. All required fields of the `inventory-entry.md` template were populated without omission, citing exact lines and verbatim text where required by R3.

### 3. Caveats
- The external HTML snapshot represents the production state of `https://skills.addy.ie` at the time Phase 0 fetched it. Any dynamic client-side state transitions (such as clipboard copy feedback or mobile menu expansions) were analyzed from the embedded inline JavaScript code rather than browser runtime DOM mutation.
- The command `/ship` is not an OS executable; it is an AI agent slash command evaluated within Claude Code/Codex/Antigravity harnesses.

### 4. Conclusion
Specification mining for `sources/addy-external/ci-cd-and-automation.md` is complete. The file has been exhaustively mined for all metadata, concepts, CLI commands, workflow steps, structural elements, and documentation drift defects. Every documented command was executed and verified under R2. The complete draft inventory entry has been formulated and is ready for persistence in `docs/analysis/inventory/addy/`.

### 5. Verification Method
1. Inspect the source file:
   ```bash
   wc -c sources/addy-external/ci-cd-and-automation.md
   # Expected: 26179 bytes
   ```
2. Verify executable commands:
   ```bash
   npx --yes skills --help
   # Expected exit code: 0
   npx --yes skills add addyosmani/agent-skills -l
   # Expected exit code: 0
   ```
3. Verify line citations against `sources/addy-external/ci-cd-and-automation.md`:
   - Line 1: Meta description and title.
   - Line 5: Detail summary, "Use when", and phase chip.
   - Line 8: `npx skills add` commands.
   - Line 10: 6-part anatomy list.
   - Line 12: `/ship` command and related skills.
