---
package: addy
path: ../addy-external/security-and-hardening.md
type: external-doc
bytes: 26475
unit: inv-addy-31
---

# ../addy-external/security-and-hardening.md

## Purpose — required, verbatim
> "Hardens code against vulnerabilities. OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and a three-tier boundary system for any feature that accepts untrusted data." — ../addy-external/security-and-hardening.md:1, 5

Additional triggering purpose:
> "Handling user input, auth, data storage, or external integrations." — ../addy-external/security-and-hardening.md:5

Sidebar summary:
> "Quality, security and performance gates before merge." — ../addy-external/security-and-hardening.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — ../addy-external/security-and-hardening.md:13-14

## Design intent — required
This file is the Phase 0 external documentation snapshot of `https://skills.addy.ie/skills/security-and-hardening/`, the public web documentation, catalog, and distribution landing page for Addy Osmani's `security-and-hardening` skill. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via Vercel's open `skills` CLI (`npx skills add addyosmani/agent-skills --skill security-and-hardening`), lifecycle phase categorization (assigning the skill to the `addy:Review` phase), and communicating security engineering constraints for agent workflows (hardening against vulnerabilities; OWASP Top 10 prevention; auth patterns; secrets management; dependency auditing; and a three-tier boundary system for any feature that accepts untrusted data). It provides concise triggering guidance ("Handling user input, auth, data storage, or external integrations."), standardizes a 6-part skill anatomy, presents intra-phase discovery for sibling skills in the Review phase (`code-review-and-quality` with `/review`, `code-simplification` with `/code-simplify`, and `performance-optimization` with `/webperf`), and links directly to the canonical GitHub repository source (`skills/security-and-hardening/SKILL.md`). In the sidebar, it associates the Review phase with the `/review` slash command, reflecting that while `security-and-hardening` lacks a standalone slash command, it operates as a specialized security audit gate within the pre-merge review lifecycle. Without this landing page, developers discovering `agent-skills` on the web would lack an accessible entry point to evaluate the skill's scope, installation commands, anatomy breakdown, and lifecycle placement prior to inspecting raw markdown files in the repository.

## Phase — required
addy:Review

## Inputs — required
- Web client HTTP GET request to `https://skills.addy.ie/skills/security-and-hardening/` — ../addy-external/security-and-hardening.md:1
- User trigger / prerequisite condition: "Handling user input, auth, data storage, or external integrations." — ../addy-external/security-and-hardening.md:5
- Upstream skill specification from `skills/security-and-hardening/SKILL.md` consumed at site build time — ../addy-external/security-and-hardening.md:1, 5, 10, 11
- Sibling skills in Review phase referenced: `code-review-and-quality`, `code-simplification`, `performance-optimization` — ../addy-external/security-and-hardening.md:12
- Local stylesheet assets: `/_astro/compare.BYu2_sXs.css`, `/_astro/_slug_.sGV3LZnA.css` — ../addy-external/security-and-hardening.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — ../addy-external/security-and-hardening.md:1
- External tracking script: `/.netlify/scripts/rum` — ../addy-external/security-and-hardening.md:19
- Skills CLI package manager: `https://github.com/vercel-labs/skills` — ../addy-external/security-and-hardening.md:6

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — ../addy-external/security-and-hardening.md:1, 5
- Copyable terminal CLI installation commands — ../addy-external/security-and-hardening.md:8, 15:
  - `npx skills add addyosmani/agent-skills --skill security-and-hardening`
  - `npx skills add addyosmani/agent-skills`
- Phase-clustered recommendations for sibling Review-phase skills — ../addy-external/security-and-hardening.md:12:
  - `code-review-and-quality` (`/review`)
  - `code-simplification` (`/code-simplify`)
  - `performance-optimization` (`/webperf`)
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/security-and-hardening/SKILL.md` — ../addy-external/security-and-hardening.md:10-11
- Hyperlinks to:
  - Upstream GitHub repository: `https://github.com/addyosmani/agent-skills` — ../addy-external/security-and-hardening.md:5, 15
  - Vercel skills CLI repository: `https://github.com/vercel-labs/skills` — ../addy-external/security-and-hardening.md:6
  - Upstream contributing guide: `https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md` — ../addy-external/security-and-hardening.md:15
  - Evals framework: `https://github.com/addyosmani/agent-skills/tree/main/evals` — ../addy-external/security-and-hardening.md:15
  - Author personal website: `https://addyosmani.com` — ../addy-external/security-and-hardening.md:15
  - Author GitHub profile: `https://github.com/addyosmani` — ../addy-external/security-and-hardening.md:16
  - Internal documentation and lifecycle links: `/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/` — ../addy-external/security-and-hardening.md:5, 12, 15
- Interactive client-side UI behaviors:
  - Clipboard copy interaction for CLI commands with fallback textarea execution and visual toggle — ../addy-external/security-and-hardening.md:8
  - Mobile navigation drawer toggle — ../addy-external/security-and-hardening.md:5
  - IntersectionObserver scroll reveal effects — ../addy-external/security-and-hardening.md:18
  - Netlify Real User Monitoring (RUM) beacon transmission — ../addy-external/security-and-hardening.md:19

## Invokes — required
- cli npx skills add addyosmani/agent-skills --skill security-and-hardening — ../addy-external/security-and-hardening.md:8
- cli npx skills add addyosmani/agent-skills — ../addy-external/security-and-hardening.md:8, 15
- skill skills/security-and-hardening/SKILL.md — ../addy-external/security-and-hardening.md:10-11
- skill skills/code-review-and-quality/SKILL.md — ../addy-external/security-and-hardening.md:12
- skill skills/code-simplification/SKILL.md — ../addy-external/security-and-hardening.md:12
- skill skills/performance-optimization/SKILL.md — ../addy-external/security-and-hardening.md:12
- command /review — ../addy-external/security-and-hardening.md:12
- command /code-simplify — ../addy-external/security-and-hardening.md:12
- command /webperf — ../addy-external/security-and-hardening.md:12
- doc CONTRIBUTING.md — ../addy-external/security-and-hardening.md:15
- directory evals — ../addy-external/security-and-hardening.md:15
- external-link https://github.com/vercel-labs/skills — ../addy-external/security-and-hardening.md:6
- external-link https://github.com/addyosmani/agent-skills — ../addy-external/security-and-hardening.md:5, 15
- external-link https://addyosmani.com — ../addy-external/security-and-hardening.md:15
- external-link https://github.com/addyosmani — ../addy-external/security-and-hardening.md:16
- script /.netlify/scripts/rum — ../addy-external/security-and-hardening.md:19

## Invoked by — required
orphan

*(Note: Brought into scope exclusively via METHOD.md §1.1 and listed in `docs/analysis/manifest/addy.md:207`. Not linked or invoked by any file in `sources/addy/`. Also referenced in `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md` as external documentation companion.)*

## Concepts named — required, verbatim
- `security-and-hardening` — ../addy-external/security-and-hardening.md:1, 5, 8, 10 — defined here
- `agent-skills` — ../addy-external/security-and-hardening.md:1, 5, 8, 12, 15 — used here
- `Geist` — ../addy-external/security-and-hardening.md:1 — used here
- `Geist Mono` — ../addy-external/security-and-hardening.md:1 — used here
- `Hardens code` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `vulnerabilities` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `OWASP Top 10` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `OWASP Top 10 prevention` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `auth patterns` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `secrets management` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `dependency auditing` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `three-tier boundary system` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `untrusted data` — ../addy-external/security-and-hardening.md:1, 5 — defined here
- `user input` — ../addy-external/security-and-hardening.md:5 — defined here
- `auth` — ../addy-external/security-and-hardening.md:5 — defined here
- `data storage` — ../addy-external/security-and-hardening.md:5 — defined here
- `external integrations` — ../addy-external/security-and-hardening.md:5 — defined here
- `Skills` — ../addy-external/security-and-hardening.md:5, 15 — used here
- `Docs` — ../addy-external/security-and-hardening.md:5, 15 — used here
- `Tutorials` — ../addy-external/security-and-hardening.md:5, 15 — used here
- `Lifecycle` — ../addy-external/security-and-hardening.md:5, 12, 15 — used here
- `Loops` — ../addy-external/security-and-hardening.md:5, 15 — used here
- `Teach` — ../addy-external/security-and-hardening.md:5, 15 — used here
- `Compare` — ../addy-external/security-and-hardening.md:5, 15 — used here
- `Review` — ../addy-external/security-and-hardening.md:5, 12 — defined here
- `Review phase` — ../addy-external/security-and-hardening.md:5, 12 — defined here
- `security` — ../addy-external/security-and-hardening.md:5, 12 — defined here
- `hardening` — ../addy-external/security-and-hardening.md:5, 12 — defined here
- `skills CLI` — ../addy-external/security-and-hardening.md:6 — used here
- `This skill only` — ../addy-external/security-and-hardening.md:8 — defined here
- `All skills` — ../addy-external/security-and-hardening.md:8 — defined here
- `How this skill is structured` — ../addy-external/security-and-hardening.md:8 — defined here
- `Every skill follows the same anatomy` — ../addy-external/security-and-hardening.md:9 — defined here
- `Overview` — ../addy-external/security-and-hardening.md:10 — defined here
- `When to Use` — ../addy-external/security-and-hardening.md:10 — defined here
- `Process` — ../addy-external/security-and-hardening.md:10 — defined here
- `Rationalizations` — ../addy-external/security-and-hardening.md:10 — defined here
- `Red Flags` — ../addy-external/security-and-hardening.md:10 — defined here
- `Verification` — ../addy-external/security-and-hardening.md:10 — defined here
- `SKILL.md` — ../addy-external/security-and-hardening.md:10-11 — used here
- `/review` — ../addy-external/security-and-hardening.md:12 — used here
- `Quality, security and performance gates before merge` — ../addy-external/security-and-hardening.md:12 — defined here
- `code-review-and-quality` — ../addy-external/security-and-hardening.md:12 — used here
- `five-axis review` — ../addy-external/security-and-hardening.md:12 — used here
- `~100-line change sizing` — ../addy-external/security-and-hardening.md:12 — used here
- `severity labels` — ../addy-external/security-and-hardening.md:12 — used here
- `review-speed norms` — ../addy-external/security-and-hardening.md:12 — used here
- `code-simplification` — ../addy-external/security-and-hardening.md:12 — used here
- `/code-simplify` — ../addy-external/security-and-hardening.md:12 — used here
- `Chesterton’s Fence` — ../addy-external/security-and-hardening.md:12 — used here
- `the Rule of 500` — ../addy-external/security-and-hardening.md:12 — used here
- `refactoring` — ../addy-external/security-and-hardening.md:12 — used here
- `performance-optimization` — ../addy-external/security-and-hardening.md:12 — used here
- `/webperf` — ../addy-external/security-and-hardening.md:12 — used here
- `Measure-first` — ../addy-external/security-and-hardening.md:12 — used here
- `Core Web Vitals` — ../addy-external/security-and-hardening.md:12 — used here
- `web-vitals` — ../addy-external/security-and-hardening.md:12 — used here
- `profiling` — ../addy-external/security-and-hardening.md:12 — used here
- `bundle analysis` — ../addy-external/security-and-hardening.md:12 — used here
- `N+1 fixes` — ../addy-external/security-and-hardening.md:12 — used here
- `Claude Code` — ../addy-external/security-and-hardening.md:15 — used here
- `Codex` — ../addy-external/security-and-hardening.md:15 — used here
- `Cursor` — ../addy-external/security-and-hardening.md:15 — used here
- `Antigravity` — ../addy-external/security-and-hardening.md:15 — used here
- `Evals framework` — ../addy-external/security-and-hardening.md:15 — used here
- `MIT licensed` — ../addy-external/security-and-hardening.md:15 — used here

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
   - Breadcrumb navigation (`Skills / Review`)
   - Header top: `Review phase` chip
   - Skill heading: `h1.detail-name` (`security-and-hardening`)
   - Detail summary: hardening against vulnerabilities, OWASP Top 10, auth patterns, secrets management, dependency auditing, three-tier boundary system
   - Trigger condition: `Use when Handling user input, auth, data storage, or external integrations.`
   - Tags: `#security`, `#hardening`
   - Panel `Install just this skill`:
     - Command block 1: `npx skills add addyosmani/agent-skills --skill security-and-hardening`
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
     - Review phase overview card (`Quality, security and performance gates before merge.`)
     - Command mapping row (`/review`)
     - Link to full lifecycle (`/lifecycle/`)
   - Related skills grid (`section.detail-related`):
     - `code-review-and-quality` (`/review`)
     - `code-simplification` (`/code-simplify`)
     - `performance-optimization` (`/webperf`)
4. `footer.footer` (lines 13-18)
   - Product, Setup, Resources navigation links
   - Full package install command (`npx skills add addyosmani/agent-skills`)
   - Copyright and license information (`© 2026 agent-skills · MIT licensed`)
   - Author credit (`Built by Addy Osmani & contributors`)
   - Scroll reveal `IntersectionObserver` script
5. Telemetry (line 19)
   - Netlify Real User Monitoring (RUM) script tag

## Scripts — required if type is script or the skill ships scripts
The file itself is an external HTML document and contains two documented CLI installation commands and several embedded client-side JavaScript modules:

1. **Documented CLI Command: Modular Skill Installation**
   - Path: inline documentation at `../addy-external/security-and-hardening.md:8`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills --skill security-and-hardening` — `../addy-external/security-and-hardening.md:8`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill security-and-hardening -y --copy` (in isolated temp directory)
   - Actual exit code: `0`
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Selected 1 skill: security-and-hardening ... Installed 1 skill: ✓ security-and-hardening (copied) → ./.agents/skills/security-and-hardening`
   - Documented exit codes vs actual code exit paths: CLI tool exits 0 on successful clone and copy; exits 1 on invalid argument or network failure.
   - For validators/gates: Not a gate; package installation CLI.
   - Output match claim: yes, clones repository and installs `skills/security-and-hardening/SKILL.md`.

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at `../addy-external/security-and-hardening.md:8, 15`
   - Language: Shell / Node CLI (`@vercel-labs/skills`)
   - Documented invocation: `npx skills add addyosmani/agent-skills` — `../addy-external/security-and-hardening.md:8, 15`
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills -l`
   - Actual exit code: `0`
   - Actual stdout (abridged): Listed all 25 skills from `addyosmani/agent-skills`, outputting description: `Hardens code against vulnerabilities. Use when handling user input, authentication, data storage, or external integrations. Use when building any feature that accepts untrusted data, manages user sessions, or interacts with third-party services. Use when auditing dependencies for known vulnerabilities, triaging package-manager audit findings, or assessing supply-chain risk in a new package. Use when personal data or privacy compliance (GDPR, CCPA) is involved.`
   - Documented exit codes vs actual code exit paths: CLI exits 0 on listing skills; exits 1 on network error.
   - For validators/gates: Not a gate; package listing CLI.
   - Output match claim: yes, lists full pack including `security-and-hardening`.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at `../addy-external/security-and-hardening.md:5`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on mobile menu toggle click
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at `../addy-external/security-and-hardening.md:8`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on clicking copy button for CLI commands
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at `../addy-external/security-and-hardening.md:18`
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: `/.netlify/scripts/rum` referenced at `../addy-external/security-and-hardening.md:19`
   - Language: JavaScript, 1 line script tag
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- `doc-drift` — `../addy-external/security-and-hardening.md:1, 5` vs `sources/addy/skills/security-and-hardening/SKILL.md:10`: The external documentation summarizes purpose as `"Hardens code against vulnerabilities. OWASP Top 10 prevention, auth patterns, secrets management, dependency auditing, and a three-tier boundary system for any feature that accepts untrusted data."`, omitting the core architectural axiom from `SKILL.md:10` that `"Security isn't a phase — it's a constraint on every line of code that touches user data, authentication, or external systems."`
- `doc-drift` — `../addy-external/security-and-hardening.md:5, 12` vs `sources/addy/skills/security-and-hardening/SKILL.md:10`: The external landing page categorizes the skill into the `"Review phase"`, directly contradicting `SKILL.md:10`'s explicit principle that security must not be treated as an isolated lifecycle phase.
- `doc-drift` — `../addy-external/security-and-hardening.md:5` vs `sources/addy/skills/security-and-hardening/SKILL.md:14-20`: The external page condenses the triggering conditions into a single summary line `"Handling user input, auth, data storage, or external integrations."`, omitting three other explicit triggers documented in `SKILL.md` (features accepting untrusted data / user sessions, auditing dependencies / triaging audit findings, and handling personal data or privacy compliance for GDPR/CCPA).
- `doc-drift` — `../addy-external/security-and-hardening.md:9-10` vs `sources/addy/skills/security-and-hardening/SKILL.md`: The external page claims every skill follows a 6-part anatomy including `03 Process — Step-by-step workflow`, but `SKILL.md` contains no section titled `Process`, structuring its procedural instructions across specialized domain sections (`Threat Model First`, `Boundaries & Discretion`, `OWASP Top 10 Prevention Patterns`, `Input Validation Patterns`, `Triaging Dependency Audit Results`, `Rate Limiting`, `Secrets Management`, `Data Privacy & Compliance`, `Securing AI / LLM Features`, `Security Review Checklist`).
- `doc-drift` — `../addy-external/security-and-hardening.md:10` vs `sources/addy/skills/security-and-hardening/SKILL.md:453`: The external page lists item 04 of the anatomy as `"Rationalizations"`, whereas `SKILL.md:453` titles the section `"Common Rationalizations"`.
- `doc-drift` — `../addy-external/security-and-hardening.md:12` vs `sources/addy/skills/security-and-hardening/SKILL.md`: The external sidebar maps the Review phase to `/review`, but `SKILL.md` contains no mention of `/review`, and the repository ships no dedicated `/security` command, creating ambiguity over whether `/review` invokes this skill directly.
- `doc-drift` — `../addy-external/security-and-hardening.md:6, 8` vs `sources/addy/README.md:1-400`: The external page documents skill installation via Vercel's `skills CLI` (`npx skills add addyosmani/agent-skills --skill security-and-hardening`), which is completely absent from repository root documentation (`README.md`, `CLAUDE.md`).
- `doc-drift` — `../addy-external/security-and-hardening.md:15` vs `sources/addy/docs/`: Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all link to `/docs/getting-started/` rather than their specific setup documents (`docs/claude-code-setup.md`, `docs/codex-setup.md`, `docs/cursor-setup.md`, `docs/gemini-cli-setup.md`).
- `doc-drift` — `../addy-external/security-and-hardening.md:1-20`: File is stored with a `.md` markdown extension in `sources/addy-external/` and the manifest, but contains 100% minified HTML markup (`<!DOCTYPE html><html...`).
- `missing-path` — `../addy-external/security-and-hardening.md:1, 5, 12, 15, 19`: Web server-relative internal links (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`, `/_astro/...`, `/.netlify/...`) do not exist on disk in the local workspace.
- `orphan` — `../addy-external/security-and-hardening.md:1-20`: File is an external documentation snapshot brought into scope solely via METHOD.md §1.1; it is not referenced, imported, or invoked by any source file in `sources/addy/`.

## Observations
- **Architectural Role in Ecosystem**: This page represents the public catalog face of the security hardening and pre-merge review gate in the Addy Osmani agent skills ecosystem. It provides the web-based gateway for developers installing the skill via the open `skills` CLI.
- **Review Phase Asymmetry**: Unlike its sibling skills in the Review phase (`code-review-and-quality` with `/review`, `code-simplification` with `/code-simplify`, and `performance-optimization` with `/webperf`), `security-and-hardening` has no slash command badge in its header, only inheriting `/review` in the sidebar card. This confirms repository structure where no dedicated `/security` slash command exists.
- **Conceptual Tension with SKILL.md**: The external catalog's rigid lifecycle phase taxonomy forces `security-and-hardening` into `addy:Review`, highlighting the tension with the author's primary doctrine that security is a cross-cutting constraint across all phases rather than an isolated review step.
- **10 Discovered Features & 5 Edge Cases**:
  - *Features*: (1) Review phase mapping, (2) Standalone skill CLI installation, (3) Full pack CLI installation, (4) Interactive clipboard copy with textarea fallback, (5) Standardized 6-part anatomy formulation, (6) Canonical source code hyperlink to GitHub, (7) Review phase sibling recommendation grid, (8) Mobile navigation drawer toggle, (9) Viewport scroll reveal animations, (10) Netlify RUM performance beacon.
  - *Edge Cases*: (1) Insecure context / blocked clipboard API falls back to textarea execCommand, (2) Browser lacking IntersectionObserver reveals all content immediately, (3) Missing DOM elements safely bypassed via optional chaining, (4) Isolated installation via `npx skills add` does not copy referenced external checklist files (`references/security-checklist.md`), (5) Local relative routes on flat snapshot files produce 404s outside an HTTP server.
- **Cross-Reference to In-Repo Inventory**: The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-security-and-hardening-skill-md.md` under unit `inv-addy-17`.

## Context cost
- File size: 26,475 bytes (~7,400 tokens).
- When combined with upstream target `skills/security-and-hardening/SKILL.md` (24,192 bytes, ~6,800 tokens) and companion reference `references/security-checklist.md` (7,330 bytes, ~2,000 tokens), total related security context is ~57,997 bytes (~16,200 tokens).
