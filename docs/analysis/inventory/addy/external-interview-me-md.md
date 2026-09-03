---
package: addy
path: ../addy-external/interview-me.md
type: external-doc
bytes: 24935
unit: inv-addy-34
---

# ../addy-external/interview-me.md

## Purpose — required, verbatim
> "Extracts what the user actually wants instead of what they think they should want, through a one-question-at-a-time interview until ~95% confidence about the underlying intent." — ../addy-external/interview-me.md:1, 5

Additional triggering purpose:
> "The ask is underspecified, or you invoke \"interview me\" / \"grill me\"." — ../addy-external/interview-me.md:5

Sidebar summary:
> "Clarify what to build before a line of code is written." — ../addy-external/interview-me.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/interview-me.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/interview-me/`, the public web documentation and distribution landing page for Addy Osmani's `interview-me` skill. Built with Astro and deployed on Netlify with Core Web Vitals (CWV) telemetry, its design intent is public discoverability, package distribution via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill interview-me`), lifecycle phase categorization (binding the skill to the `addy:Define` phase), and onboarding developers and AI agents into conversational requirements discovery. It addresses the fundamental software engineering problem where what users ask for ("build me X") differs from what they actually want, establishing an incremental one-question-at-a-time interview cadence with attached hypotheses until ~95% confidence in the underlying intent is reached. It standardizes a universal 6-part skill anatomy (`Overview`, `When to Use`, `Process`, `Rationalizations`, `Red Flags`, `Verification`), provides cross-skill discovery for sibling Define-phase skills (`idea-refine` and `spec-driven-development`), and links directly to the canonical GitHub repository source (`skills/interview-me/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` through web search or external references would lack an accessible overview of the interview workflow, CLI installation commands, and direct links to the full skill specification before cloning the entire repository.

## Phase — required
addy:Define

## Inputs — required
- Web client HTTP GET request to canonical URL `https://skills.addy.ie/skills/interview-me/` — ../addy-external/interview-me.md:1
- User trigger / prerequisite condition: `"The ask is underspecified, or you invoke \"interview me\" / \"grill me\"."` — ../addy-external/interview-me.md:5
- Upstream skill specification from `skills/interview-me/SKILL.md` consumed at site build time — ../addy-external/interview-me.md:1, 5, 10, 11
- Sibling skills in Define phase referenced: `idea-refine`, `spec-driven-development` — ../addy-external/interview-me.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/interview-me.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono via Google Fonts CDN (`fonts.googleapis.com`, `fonts.gstatic.com`) — ../addy-external/interview-me.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/interview-me.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/interview-me.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/interview-me.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/interview-me.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill interview-me`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Define-phase skills: `idea-refine`, `spec-driven-development` (`/spec`) — ../addy-external/interview-me.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/interview-me/SKILL.md` — ../addy-external/interview-me.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/interview-me.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/interview-me.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/interview-me.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/interview-me.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/interview-me.md:15
  - Author GitHub profile: `https://github.com/addyosmani` — ../addy-external/interview-me.md:16
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/interview-me.md:5, 12, 15
  - Sitemap: `/sitemap-index.xml` — ../addy-external/interview-me.md:1
  - Favicon: `/favicon.svg` — ../addy-external/interview-me.md:1
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle (`.copied` class for 1,600ms) — ../addy-external/interview-me.md:8
  - Mobile navigation drawer toggle script updating `aria-expanded` and toggling `.open` — ../addy-external/interview-me.md:5
  - IntersectionObserver scroll reveal effects (`.reveal` adding `.in`) — ../addy-external/interview-me.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission (`/.netlify/scripts/rum`) — ../addy-external/interview-me.md:19
- Files produced: none (static web documentation snapshot)

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill interview-me — ../addy-external/interview-me.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/interview-me.md:8, 15
- command /spec — ../addy-external/interview-me.md:12
- skill skills/interview-me/SKILL.md — ../addy-external/interview-me.md:10-11
- skill skills/idea-refine/SKILL.md — ../addy-external/interview-me.md:12
- skill skills/spec-driven-development/SKILL.md — ../addy-external/interview-me.md:12
- doc README.md — ../addy-external/interview-me.md:5, 15
- doc CONTRIBUTING.md — ../addy-external/interview-me.md:15
- directory evals — ../addy-external/interview-me.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/interview-me.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/interview-me.md:5, 15
- external-link https://addyosmani.com — ../addy-external/interview-me.md:15
- external-link https://github.com/addyosmani — ../addy-external/interview-me.md:16
- script /.netlify/scripts/rum — ../addy-external/interview-me.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:210`. Not linked or invoked by any file in `sources/addy/`. Also referenced in `docs/analysis/inventory/addy/skills-interview-me-skill-md.md:54` as an external documentation companion.)*

## Concepts named — required, verbatim
- `interview-me` — ../addy-external/interview-me.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/interview-me.md:1, 5, 8, 12, 15 — used here
- `one-question-at-a-time interview` — ../addy-external/interview-me.md:1, 5 — defined here
- `~95% confidence` — ../addy-external/interview-me.md:1, 5 — defined here
- `underlying intent` — ../addy-external/interview-me.md:1, 5 — defined here
- `The ask is underspecified` — ../addy-external/interview-me.md:5 — defined here
- `interview me` — ../addy-external/interview-me.md:5 — defined here
- `grill me` — ../addy-external/interview-me.md:5 — defined here
- `requirements` — ../addy-external/interview-me.md:5 — used here
- `discovery` — ../addy-external/interview-me.md:5 — used here
- `Geist` — ../addy-external/interview-me.md:1 — used here
- `Geist Mono` — ../addy-external/interview-me.md:1 — used here
- `Skills` — ../addy-external/interview-me.md:5, 15 — used here
- `Docs` — ../addy-external/interview-me.md:5, 15 — used here
- `Tutorials` — ../addy-external/interview-me.md:5, 15 — used here
- `Lifecycle` — ../addy-external/interview-me.md:5, 12, 15 — used here
- `Loops` — ../addy-external/interview-me.md:5, 15 — used here
- `Teach` — ../addy-external/interview-me.md:5, 15 — used here
- `Compare` — ../addy-external/interview-me.md:5, 15 — used here
- `Define` — ../addy-external/interview-me.md:5, 12 — defined here
- `Define phase` — ../addy-external/interview-me.md:5, 12 — defined here
- `skills CLI` — ../addy-external/interview-me.md:6 — used here
- `This skill only` — ../addy-external/interview-me.md:8 — defined here
- `All skills` — ../addy-external/interview-me.md:8 — defined here
- `How this skill is structured` — ../addy-external/interview-me.md:8 — defined here
- `Every skill follows the same anatomy` — ../addy-external/interview-me.md:9 — defined here
- `Overview` — ../addy-external/interview-me.md:10 — defined here
- `When to Use` — ../addy-external/interview-me.md:10 — defined here
- `Process` — ../addy-external/interview-me.md:10 — defined here
- `Rationalizations` — ../addy-external/interview-me.md:10 — defined here
- `Red Flags` — ../addy-external/interview-me.md:10 — defined here
- `Verification` — ../addy-external/interview-me.md:10 — defined here
- `SKILL.md` — ../addy-external/interview-me.md:10-11 — used here
- `Command` — ../addy-external/interview-me.md:12 — used here
- `/spec` — ../addy-external/interview-me.md:12 — used here
- `More in the Define phase` — ../addy-external/interview-me.md:12 — used here
- `idea-refine` — ../addy-external/interview-me.md:12 — used here
- `spec-driven-development` — ../addy-external/interview-me.md:12 — used here
- `PRD` — ../addy-external/interview-me.md:12 — used here
- `divergent/convergent thinking` — ../addy-external/interview-me.md:12 — used here
- `Claude Code` — ../addy-external/interview-me.md:15 — used here
- `Codex` — ../addy-external/interview-me.md:15 — used here
- `Cursor` — ../addy-external/interview-me.md:15 — used here
- `Antigravity` — ../addy-external/interview-me.md:15 — used here
- `Evals framework` — ../addy-external/interview-me.md:15 — used here
- `MIT licensed` — ../addy-external/interview-me.md:15 — used here

## Structure
The file is structured as a compiled Astro HTML document with the following semantic sections:
1. `head` metadata and stylesheets (lines 1-5):
   - Title (`interview-me - agent-skills`), meta description, Open Graph / Twitter metadata, canonical URL
   - Google Fonts links (`Geist`, `Geist Mono`)
   - Stylesheets (`compare.BYu2_sXs.css`, `_slug_.sGV3LZnA.css`) and inline component styles (`.cmd`, `.skill-card`)
2. `header.nav` (line 5):
   - Brand mark and logo linking to `/`
   - Primary navigation bar (`Skills`, `Docs`, `Tutorials`, `Lifecycle`, `Loops`, `Teach`, `Compare`)
   - GitHub repository icon link
   - Call-to-action button (`Get started` -> `/docs/getting-started/`)
   - Mobile navigation drawer and toggle script
3. `main#main` / `article.detail` (lines 5-12):
   - Breadcrumb navigation (`Skills / Define`)
   - Header top: `Define phase` chip (no slash command badge at top of page)
   - Skill heading: `h1.detail-name` (`interview-me`)
   - Summary paragraph: one-question-at-a-time interview until ~95% confidence
   - Trigger condition: `Use when The ask is underspecified, or you invoke "interview me" / "grill me".`
   - Tags: `#requirements`, `#discovery`
   - Panel `Install just this skill`:
     - Command block 1: `npx skills add addyosmani/agent-skills --skill interview-me`
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
     - Define phase overview card (`Clarify what to build before a line of code is written.`)
     - Command mapping row (`Command /spec`)
     - Link to full lifecycle (`/lifecycle/`)
   - Related skills grid (`section.detail-related`):
     - `idea-refine`
     - `spec-driven-development` (`/spec`)
4. `footer.footer` (lines 13-18):
   - Tagline and full package command (`npx skills add addyosmani/agent-skills`)
   - Product, Setup, and Resources navigation link columns
   - Copyright (`© 2026 agent-skills · MIT licensed`) and author attribution
   - Scroll reveal `IntersectionObserver` script
5. Telemetry (line 19):
   - Netlify Real User Monitoring (RUM) script tag (`/.netlify/scripts/rum`)

## Scripts — required if type is script or the skill ships scripts
The file itself is an external HTML document and contains two documented CLI installation commands and several embedded client-side JavaScript modules:

1. **Documented CLI Command: Modular Skill Installation**
   - Path: inline documentation at `../addy-external/interview-me.md:8`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills --skill interview-me` — `../addy-external/interview-me.md:8`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill interview-me -y --copy` (in isolated temp directory)
   - Actual exit code: `0`
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Selected 1 skill: interview-me ... Installed 1 skill: ✓ interview-me (copied) → ./.agents/skills/interview-me`
   - Output match claim: yes, downloads and installs `skills/interview-me/SKILL.md` (14,359 bytes).

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at `../addy-external/interview-me.md:8, 15`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills` — `../addy-external/interview-me.md:8, 15`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills -l`
   - Actual exit code: `0`
   - Actual stdout (abridged): Enumerated all 25 skills in `addyosmani/agent-skills`, including `interview-me` with its full description.
   - Output match claim: yes, lists full pack including `interview-me`.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at `../addy-external/interview-me.md:5`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on mobile menu toggle click
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at `../addy-external/interview-me.md:8`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on clicking copy button for CLI commands
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at `../addy-external/interview-me.md:18`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: `/.netlify/scripts/rum` referenced at `../addy-external/interview-me.md:19`
   - Language: JavaScript, 1 line script tag
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- `doc-drift` — `../addy-external/interview-me.md:1, 5` vs `sources/addy/skills/interview-me/SKILL.md:3, 10`: The external documentation summarizes skill purpose as `"Extracts what the user actually wants instead of what they think they should want, through a one-question-at-a-time interview until ~95% confidence about the underlying intent."`, which condenses the detailed operational description in `SKILL.md:3` and omits the self-policing trigger `"when you catch yourself silently filling in ambiguous requirements before any plan, spec, or code exists"`.
- `doc-drift` — `../addy-external/interview-me.md:5` vs `sources/addy/skills/interview-me/SKILL.md:3, 18-36`: The external page reduces triggering conditions to `"The ask is underspecified, or you invoke \"interview me\" / \"grill me\"."`, omitting multiple triggers documented in `SKILL.md:3, 20-25` (`"are we sure?"`, `"stress-test my thinking"`, missing who/why/success/constraint parameters) and completely omitting the explicit "When NOT to use" list from `SKILL.md:30-36` (unambiguous bugs, complete specs, urgent production outages, direct information requests).
- `doc-drift` — `../addy-external/interview-me.md:8-10` vs `sources/addy/skills/interview-me/SKILL.md:34-37`: The external documentation completely omits the critical `Loading Constraints` section defined in `SKILL.md:34-37` which strictly mandates: `"This skill needs a live, responsive user. Do not invoke in non-interactive contexts like CI pipelines, scheduled runs, /loop, or autonomous-loop. If you're in one of those and the ask is underspecified, flag that as a blocker for the user instead of guessing."`
- `doc-drift` — `../addy-external/interview-me.md:9-10` vs `sources/addy/skills/interview-me/SKILL.md:38-133`: The external page reduces the skill's operational mechanism to a generic anatomy bullet `03 Process — Step-by-step workflow`, whereas `SKILL.md` defines a precise 5-step operational protocol under `## The Process`: `### Step 1: Hypothesize, with a confidence number` (lines 40-52), `### Step 2: Ask one question at a time, each with a guess attached` (lines 53-78), `### Step 3: Listen for "want vs. should want"` (lines 79-93), `### Step 4: Restate intent in the user's own words` (lines 94-112), and `### Step 5: Confirm — explicit yes, not "whatever you think"` (lines 113-123), terminating with a checkable stopping rule in `### The 95% Confidence Stop` (lines 124-133). The external page completely omits these step titles, the `HYPOTHESIS:` / `CONFIDENCE:` formatting, the `Q:` / `GUESS:` cadence, the intent restatement schema, and the predictive stopping heuristic.
- `doc-drift` — `../addy-external/interview-me.md:12` vs `sources/addy/commands/spec.toml:1-17`, `sources/addy/.claude/commands/spec.md:1-18`, and `sources/addy/skills/interview-me/SKILL.md`: The external page sidebar displays `Command /spec` under the `Define phase` card accompanying `interview-me`. In the repository, `/spec` executes `spec-driven-development` exclusively (invoking the skill in `commands/spec.toml:4` and `.claude/commands/spec.md:5`); `interview-me` has NO dedicated slash command or TOML command configuration. While `interview-me` lacks a command badge next to its title (unlike `/review` or `/ship`), displaying `Command /spec` in the phase sidebar creates confusion as to whether `/spec` runs `interview-me`.
- `doc-drift` — `../addy-external/interview-me.md:8` vs `sources/addy/README.md:46-65` and `sources/addy/skills/interview-me/SKILL.md`: While `README.md:46-59` and `interview-me.md:8, 15` both document Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill interview-me`), the external page promotes isolated single-skill installation without disclosing the packaging trade-off documented in `README.md:61-65` (where per-skill CLI installation copies only `skills/<name>/` and isolates the skill from repository-level shared references). Furthermore, `sources/addy/skills/interview-me/SKILL.md` itself contains no installation instructions, and repository agent configs (`CLAUDE.md`, `AGENTS.md`) configure skills via in-repo paths rather than the CLI.
- `doc-drift` — `../addy-external/interview-me.md:15` vs `sources/addy/docs/`: Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all resolve to `/docs/getting-started/` on the external site. In the repository, platform-specific setup documents exist for `docs/codex-setup.md`, `docs/cursor-setup.md`, and `docs/antigravity-setup.md`, while Claude Code is documented in `docs/getting-started.md` and repository root `CLAUDE.md`. Collapsing all four platform links to `/docs/getting-started/` obscures the existence of the dedicated per-tool guides in `docs/`.
- `doc-drift` — `../addy-external/interview-me.md:12` vs `sources/addy/README.md:353-356, 361` and `sources/addy/skills/interview-me/SKILL.md:14`: The external page displays only `idea-refine` and `spec-driven-development` under "More in the Define phase", omitting `constraint-driven-development` which is cataloged under Define in `README.md:356`. Additionally, `SKILL.md:14` refers to `doubt-driven-development` as one of "The other Define-phase skills", even though `README.md:361` and `CLAUDE.md:23` classify `doubt-driven-development` under Build; the external page reflects neither `constraint-driven-development` nor `doubt-driven-development` in its Define phase navigation grid.
- `doc-drift` — `../addy-external/interview-me.md:1-20`: File is stored with a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% minified HTML markup (`<!DOCTYPE html><html...`).
- `internal-contradiction` — `../addy-external/interview-me.md:9` vs `../addy-external/interview-me.md:11`: The web page asserts that skills follow an anatomy that is "a workflow the agent follows, not a doc it reads", but immediately provides a primary call-to-action button labeled "Read the full SKILL.md".
- `missing-path` — `../addy-external/interview-me.md:1, 5, 12, 15, 19`: Web server-relative internal links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not exist on disk in the local workspace.
- `orphan` — `../addy-external/interview-me.md:1-20`: File is an external documentation snapshot brought into scope solely via METHOD.md §1.1; it is not referenced, imported, or invoked by any source file in `sources/addy/`.

## Observations
- **Architectural Role in Ecosystem**: This page represents the public catalog face of the `Define` phase requirements discovery gate. It presents the conversational extraction technique designed to uncover authentic user intent before plans or specifications are drafted.
- **Hypothesis-Attached Questioning Cadence**: The page highlights the core philosophy of a one-question-at-a-time interview. In the underlying skill (`SKILL.md`), this is enforced via explicit `Q:` and `GUESS:` pairs, preventing cognitive overload and prompting faster user correction.
- **Stopping Heuristic (~95% Confidence)**: The summary directly advertises the ~95% confidence stopping rule, operationalized in `SKILL.md` as the agent's ability to predict the user's reaction to the next three potential questions, with an explicit fallback to halt if confidence plateaus.
- **Command Parity**: Unlike `spec-driven-development` (`/spec`), `interview-me` is a pure skill workflow without a slash command trigger. The presence of `Command /spec` in the sidebar belongs to the Define phase container rather than the skill itself.
- **Define Phase Clustering**: The external landing page explicitly clusters Define-stage skills in its sidebar and related grid: `idea-refine` and `spec-driven-development`.
- **Cross-Reference to In-Repo Inventory**: The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-interview-me-skill-md.md` under unit `inv-addy-18`.

## Context cost
- File size: 24,935 bytes (~6,250 tokens).
- When combined with upstream target `skills/interview-me/SKILL.md` (14,359 bytes, ~3,700 tokens), total related context is ~39,294 bytes (~9,950 tokens).
