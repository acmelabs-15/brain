---
package: addy
path: external/documentation-and-adrs.md
type: external-doc
bytes: 26223
unit: inv-addy-14
aliases: []
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/documentation-and-adrs.md

## Purpose — required, verbatim
> "Records decisions and documentation. Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." — external/documentation-and-adrs.md:1, 5

Additional triggering purpose:
> "Making architectural decisions, changing APIs, or shipping features." — external/documentation-and-adrs.md:5

Sidebar summary:
> "Deploy with confidence - rollout, rollback, observe." — external/documentation-and-adrs.md:12

Global package tagline:
> "Production-grade engineering skills for AI coding agents. Encode senior-engineer workflows across the full lifecycle." — external/documentation-and-adrs.md:13-14

## Design intent — required
The external documentation page at `https://skills.addy.ie/skills/documentation-and-adrs/` serves as the public web catalog landing page, distribution portal, and architectural overview for Addy Osmani's `documentation-and-adrs` skill within the `agent-skills` ecosystem. Built with Astro and deployed on Netlify, its design intent is public discovery, package distribution via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill documentation-and-adrs`), lifecycle phase classification (positioning the skill in the `addy:Ship` phase alongside `/ship`), and establishing expectations for architectural recording (Architecture Decision Records, API documentation, and inline documentation standards that capture the "why" behind technical choices). It provides concise triggering guidance ("Making architectural decisions, changing APIs, or shipping features."), codifies a standardized 6-part skill anatomy, and establishes cross-skill navigation to related Ship phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration`) while linking directly to the canonical repository source on GitHub (`skills/documentation-and-adrs/SKILL.md`). Without this page, developers and agent creators discovering `agent-skills` on the web would lack an accessible entry point outlining decision-documentation practices, CLI installation snippets, and the skill's place in the deployment and shipping lifecycle prior to reading raw markdown in the source repository.

## Phase — required
addy:Ship

(Rendered as `Ship` in breadcrumb at `external/documentation-and-adrs.md:5`, and as `Ship phase` in the phase chip and sidebar at `external/documentation-and-adrs.md:5, 12`. Aligns with `CLAUDE.md:26`, `README.md:280, 374`, and `skills/using-agent-skills/SKILL.md:190`).

## Inputs — required
- User or agent intent to discover, evaluate, or install documentation and ADR skills via web browser or CLI (`npx skills add addyosmani/agent-skills --skill documentation-and-adrs` or full pack) — external/documentation-and-adrs.md:8
- Upstream skill definition file on GitHub: `https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md` — external/documentation-and-adrs.md:10
- Triggering conditions / Use-when context: "Making architectural decisions, changing APIs, or shipping features." — external/documentation-and-adrs.md:5
- Static stylesheet assets: `/_astro/compare.BYu2_sXs.css` (line 1), `/_astro/_slug_.sGV3LZnA.css` (line 5) — external/documentation-and-adrs.md:1, 5
- External web fonts: Google Fonts Geist and Geist Mono — external/documentation-and-adrs.md:1
- Netlify Real User Monitoring (RUM) analytics tracking script: `/.netlify/scripts/rum` — external/documentation-and-adrs.md:19
- Sibling skills in Ship phase referenced: `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` — external/documentation-and-adrs.md:12
- User interactions: clipboard copy clicks on CLI installation command blocks, mobile navigation menu toggle, hyperlinks to related skills, docs, and external links — external/documentation-and-adrs.md:5, 8, 12, 15

## Outputs — required
- Rendered HTML page with Open Graph and Twitter Card metadata for social sharing and search indexing — external/documentation-and-adrs.md:1, 5
- Copyable terminal CLI installation commands for clipboard or shell execution:
  - `npx skills add addyosmani/agent-skills --skill documentation-and-adrs` — external/documentation-and-adrs.md:8
  - `npx skills add addyosmani/agent-skills` — external/documentation-and-adrs.md:8, 15
- Phase-clustered recommendations for sibling Ship-phase skills: `git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration` — external/documentation-and-adrs.md:12
- Direct hyperlink to canonical repository source: `https://github.com/addyosmani/agent-skills/blob/main/skills/documentation-and-adrs/SKILL.md` — external/documentation-and-adrs.md:10
- Standardized 6-part skill anatomy layout (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification) — external/documentation-and-adrs.md:10
- Hyperlinks to documentation sections (`/skills/`, `/docs/getting-started/`, `/tutorials/`, `/lifecycle/`, `/loops/`, `/teach/`, `/compare/`), GitHub repo, contributing guide, and evals framework — external/documentation-and-adrs.md:5, 12, 15
- Netlify Real User Monitoring (RUM) telemetry beacon transmission (`/.netlify/scripts/rum`) — external/documentation-and-adrs.md:19
- none for disk files (pure web documentation reference)

## Invokes — required
- command /ship — external/documentation-and-adrs.md:12
- skill git-workflow-and-versioning — external/documentation-and-adrs.md:12
- skill ci-cd-and-automation — external/documentation-and-adrs.md:12
- skill deprecation-and-migration — external/documentation-and-adrs.md:12
- file skills/documentation-and-adrs/SKILL.md — external/documentation-and-adrs.md:10
- doc CONTRIBUTING.md — external/documentation-and-adrs.md:15
- doc evals — external/documentation-and-adrs.md:15
- doc lifecycle — external/documentation-and-adrs.md:5
- doc tutorials — external/documentation-and-adrs.md:5
- doc loops — external/documentation-and-adrs.md:5
- doc teach — external/documentation-and-adrs.md:5
- doc compare — external/documentation-and-adrs.md:5
- script /.netlify/scripts/rum — external/documentation-and-adrs.md:19

## Invoked by — required
orphan — This static external HTML snapshot (`external/documentation-and-adrs.md`) is a frozen web documentation snapshot of `https://skills.addy.ie/skills/documentation-and-adrs/` brought into scope via METHOD.md §1.1. No in-scope repository file in `sources/addy` links to or loads this static external HTML snapshot file directly.

## Concepts named — required, verbatim
- `documentation-and-adrs` — external/documentation-and-adrs.md:1, 5, 8, 10 — defined here
- `agent-skills` — external/documentation-and-adrs.md:1, 5, 8, 10, 15 — used here
- `Geist` — external/documentation-and-adrs.md:1 — used here
- `Geist Mono` — external/documentation-and-adrs.md:1 — used here
- `Architecture Decision Records` — external/documentation-and-adrs.md:1, 5 — defined here
- `API docs` — external/documentation-and-adrs.md:1, 5 — defined here
- `inline documentation standards` — external/documentation-and-adrs.md:1, 5 — defined here
- `adr` — external/documentation-and-adrs.md:5 — defined here
- `documentation` — external/documentation-and-adrs.md:1, 5 — defined here
- `Skills` — external/documentation-and-adrs.md:5, 15 — used here
- `Docs` — external/documentation-and-adrs.md:5, 15 — used here
- `Tutorials` — external/documentation-and-adrs.md:5, 15 — used here
- `Lifecycle` — external/documentation-and-adrs.md:5, 12, 15 — used here
- `Loops` — external/documentation-and-adrs.md:5, 15 — used here
- `Teach` — external/documentation-and-adrs.md:5, 15 — used here
- `Compare` — external/documentation-and-adrs.md:5, 15 — used here
- `Ship` — external/documentation-and-adrs.md:5, 12 — defined here
- `Ship phase` — external/documentation-and-adrs.md:5, 12 — defined here
- `Use when` — external/documentation-and-adrs.md:5 — defined here
- `#documentation` — external/documentation-and-adrs.md:5 — defined here
- `#adr` — external/documentation-and-adrs.md:5 — defined here
- `Install just this skill` — external/documentation-and-adrs.md:5 — defined here
- `skills CLI` — external/documentation-and-adrs.md:6 — used here
- `This skill only` — external/documentation-and-adrs.md:8 — defined here
- `All skills` — external/documentation-and-adrs.md:8 — defined here
- `npx skills add addyosmani/agent-skills --skill documentation-and-adrs` — external/documentation-and-adrs.md:8 — defined here
- `npx skills add addyosmani/agent-skills` — external/documentation-and-adrs.md:8, 15 — defined here
- `How this skill is structured` — external/documentation-and-adrs.md:8 — defined here
- `Every skill follows the same anatomy` — external/documentation-and-adrs.md:9 — defined here
- `anatomy` — external/documentation-and-adrs.md:9, 10 — defined here
- `Overview` — external/documentation-and-adrs.md:10 — defined here
- `When to Use` — external/documentation-and-adrs.md:10 — defined here
- `Process` — external/documentation-and-adrs.md:10 — defined here
- `Rationalizations` — external/documentation-and-adrs.md:10 — defined here
- `Red Flags` — external/documentation-and-adrs.md:10 — defined here
- `Verification` — external/documentation-and-adrs.md:10 — defined here
- `SKILL.md` — external/documentation-and-adrs.md:10, 11 — used here
- `Read the full SKILL.md` — external/documentation-and-adrs.md:11 — used here
- `Command` — external/documentation-and-adrs.md:8, 12 — defined here
- `/ship` — external/documentation-and-adrs.md:12 — defined here
- `See the full lifecycle` — external/documentation-and-adrs.md:12 — used here
- `More in the Ship phase` — external/documentation-and-adrs.md:12 — defined here
- `git-workflow-and-versioning` — external/documentation-and-adrs.md:12 — used here
- `trunk-based development` — external/documentation-and-adrs.md:12 — used here
- `atomic commits` — external/documentation-and-adrs.md:12 — used here
- `~100-line changes` — external/documentation-and-adrs.md:12 — used here
- `commit-as-save-point` — external/documentation-and-adrs.md:12 — used here
- `ci-cd-and-automation` — external/documentation-and-adrs.md:12 — used here
- `Shift Left` — external/documentation-and-adrs.md:12 — used here
- `Faster is Safer` — external/documentation-and-adrs.md:12 — used here
- `feature flags` — external/documentation-and-adrs.md:12 — used here
- `quality-gate pipelines` — external/documentation-and-adrs.md:12 — used here
- `deprecation-and-migration` — external/documentation-and-adrs.md:12 — used here
- `code-as-liability mindset` — external/documentation-and-adrs.md:12 — used here
- `compulsory vs advisory deprecation` — external/documentation-and-adrs.md:12 — used here
- `zombie-code removal` — external/documentation-and-adrs.md:12 — used here
- `Production-grade engineering skills for AI coding agents` — external/documentation-and-adrs.md:13 — used here
- `full lifecycle` — external/documentation-and-adrs.md:12, 14 — used here
- `Skills catalog` — external/documentation-and-adrs.md:15 — used here
- `The lifecycle` — external/documentation-and-adrs.md:15 — used here
- `Loop engineering` — external/documentation-and-adrs.md:15 — used here
- `Teach &amp; share` — external/documentation-and-adrs.md:15 — used here
- `How it compares` — external/documentation-and-adrs.md:15 — used here
- `Getting started` — external/documentation-and-adrs.md:15 — used here
- `Claude Code` — external/documentation-and-adrs.md:15 — used here
- `Codex` — external/documentation-and-adrs.md:15 — used here
- `Cursor` — external/documentation-and-adrs.md:15 — used here
- `Antigravity` — external/documentation-and-adrs.md:15 — used here
- `Contributing` — external/documentation-and-adrs.md:15 — used here
- `Evals framework` — external/documentation-and-adrs.md:15 — used here
- `addyosmani.com` — external/documentation-and-adrs.md:15 — used here
- `MIT licensed` — external/documentation-and-adrs.md:15 — used here
- `Addy Osmani` — external/documentation-and-adrs.md:16 — used here

## Structure
- `documentation-and-adrs` (H1 — line 5)
- `Install just this skill` (H2 — line 5)
- `How this skill is structured` (H2 — line 8)
- `Ship phase` (H3 — line 12)
- `More in the Ship phase` (H2 — line 12)
  - `git-workflow-and-versioning` (H3 — line 12)
  - `ci-cd-and-automation` (H3 — line 12)
  - `deprecation-and-migration` (H3 — line 12)
- `Product` (H3 — line 15)
- `Setup` (H3 — line 15)
- `Resources` (H3 — line 15)

## Scripts — required if type is script or the skill ships scripts
The file itself is an external HTML document and contains two documented CLI installation commands and several embedded client-side JavaScript modules:

1. **Documented CLI Command: Modular Skill Installation**
   - Path: inline documentation at external/documentation-and-adrs.md:8
   - Language: Shell / Node CLI (@vercel-labs/skills)
   - Documented invocation: npx skills add addyosmani/agent-skills --skill documentation-and-adrs — external/documentation-and-adrs.md:8
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills --skill documentation-and-adrs -y --copy` (in isolated temp directory)
   - Actual exit code: 0
   - Actual stdout (abridged): `Agent detected — installing non-interactively ... Selected 1 skill: documentation-and-adrs ... Installed 1 skill: ✓ documentation-and-adrs (copied) → ./.agents/skills/documentation-and-adrs ... Done!`
   - Output match claim: yes, clones repository and installs `skills/documentation-and-adrs/SKILL.md`.

2. **Documented CLI Command: Full Pack Installation**
   - Path: inline documentation at external/documentation-and-adrs.md:8, 15
   - Language: Shell / Node CLI (@vercel-labs/skills)
   - Documented invocation: npx skills add addyosmani/agent-skills — external/documentation-and-adrs.md:8, 15
   - **Executed**: yes
   - Actual command run: `bunx --yes skills add addyosmani/agent-skills -l`
   - Actual exit code: 0
   - Actual stdout (abridged): Listed all 25 skills from addyosmani/agent-skills, including documentation-and-adrs with summary description.
   - Output match claim: yes, lists full pack including documentation-and-adrs.

3. **Client-side UI Script: Mobile Navigation Drawer**
   - Path: inline module script at external/documentation-and-adrs.md:5
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on mobile menu toggle click
   - **Executed**: no (browser DOM UI module)

4. **Client-side UI Script: Clipboard Copy Interaction**
   - Path: inline module script at external/documentation-and-adrs.md:8
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on clicking copy button for CLI commands
   - **Executed**: no (browser DOM UI module)

5. **Client-side UI Script: IntersectionObserver Reveal Animations**
   - Path: inline module script at external/documentation-and-adrs.md:18
   - Language: Client-side ES Module JavaScript, 1 line
   - Documented invocation: Executed by browser on DOMContentLoaded / viewport scroll
   - **Executed**: no (browser DOM UI module)

6. **External Tracking Script: Netlify RUM Telemetry**
   - Path: /.netlify/scripts/rum referenced at external/documentation-and-adrs.md:19
   - Language: JavaScript, 1 line script tag
   - Documented invocation: Loaded asynchronously by browser in production deployment
   - **Executed**: no (external production analytics beacon)

## Defects — required
- doc-drift · external/documentation-and-adrs.md:12 vs sources/addy/.claude/commands/ship.md:5, 37 · External page pairs documentation-and-adrs with Command /ship in the sidebar card, but /ship specifically invokes shipping-and-launch (.claude/commands/ship.md:5) and commands/ship.toml:4. While /ship Phase B mentions verifying documentation directly (.claude/commands/ship.md:37), there is no dedicated slash command for documentation-and-adrs, nor does /ship invoke the documentation-and-adrs skill.
- doc-drift · external/documentation-and-adrs.md:10 vs sources/addy/skills/documentation-and-adrs/SKILL.md:8-289 · The external page asserts a standardized 6-section skill anatomy (01 Overview, 02 When to Use, 03 Process, 04 Rationalizations, 05 Red Flags, 06 Verification), but sources/addy/skills/documentation-and-adrs/SKILL.md does not have a "Process" section; instead it organizes its guidance by artifact and practice ("Architecture Decision Records (ADRs)", "Inline Documentation", "API Documentation", "README Structure", "Changelog Maintenance", "Documentation for Agents"), and titles its rationalizations section "Common Rationalizations" (line 259) rather than "Rationalizations".
- doc-drift · external/documentation-and-adrs.md:5 vs sources/addy/skills/documentation-and-adrs/SKILL.md:3, 12-22 · The external page condenses "Use when" to a single clause ("Making architectural decisions, changing APIs, or shipping features."), omitting several operational trigger contexts documented in SKILL.md:14-20 (such as choosing between competing approaches, onboarding new team members or agents, repeatedly explaining the same concept) as well as the negative boundary constraint ("When NOT to use: Don't document obvious code. Don't add comments that restate what the code already says. Don't write docs for throwaway prototypes." at SKILL.md:21).
- doc-drift · external/documentation-and-adrs.md:12 vs sources/addy/README.md:374-377 · The related skills grid displays only 3 skills in the Ship phase (git-workflow-and-versioning, ci-cd-and-automation, deprecation-and-migration), omitting shipping-and-launch and observability-and-instrumentation which are also cataloged under Ship in repository documentation (README.md:375, 377 and CLAUDE.md:26).
- doc-drift · external/documentation-and-adrs.md:6, 8 vs sources/addy/README.md:1-400 · The external page documents skill installation via Vercel's skills CLI (npx skills add addyosmani/agent-skills --skill documentation-and-adrs), which is not documented in repository root documentation (README.md, CLAUDE.md, AGENTS.md).
- doc-drift · external/documentation-and-adrs.md:15 vs sources/addy/docs/ · Footer setup links for "Claude Code", "Codex", "Cursor", and "Antigravity" all navigate to generic /docs/getting-started/ rather than specific setup documents (docs/claude-code-setup.md, docs/codex-setup.md, docs/cursor-setup.md, docs/antigravity-setup.md).
- doc-drift · external/documentation-and-adrs.md:1-20 · File is stored with a .md markdown extension in sources/addy-external/ and the manifest, but contains 100% minified HTML markup (<!DOCTYPE html><html...).
- missing-path · external/documentation-and-adrs.md:1, 5, 12, 15, 19 · Web server-relative internal links (/skills/, /docs/getting-started/, /tutorials/, /lifecycle/, /loops/, /teach/, /compare/, /_astro/..., /.netlify/...) do not exist on disk in the local workspace.
- internal-contradiction · external/documentation-and-adrs.md:9, 11 · Line 9 asserts that skill anatomy is "a workflow the agent follows, not a doc it reads", but line 11 immediately presents a primary CTA button stating "Read the full SKILL.md".
- orphan · external/documentation-and-adrs.md:1 · No in-scope repository file in sources/addy invokes, links to, or references this external documentation URL (https://skills.addy.ie/skills/documentation-and-adrs/) or its snapshot file. Brought into scope exclusively via METHOD.md §1.1.
- other · external/documentation-and-adrs.md:1-20 · Heavy packaging overhead: 26,223 bytes of compiled Astro HTML markup, CSS stylesheets, navigation chrome, and Netlify telemetry, with less than 1,500 bytes (~6%) dedicated to skill-specific description and metadata.

## Observations
- **Decision-Centric Philosophy**: The page emphasizes capturing the "why" behind decisions rather than merely documenting code syntax ("Records decisions and documentation. Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase.").
- **Related Ship Skills Cluster**: Cross-links to `git-workflow-and-versioning`, `ci-cd-and-automation`, and `deprecation-and-migration` under "More in the Ship phase", cementing documentation as part of the release/shipping lifecycle gate.
- **Cross-Reference to In-Repo Inventory**: The corresponding in-repo skill was inventoried in `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md` (unit inv-addy-36).
- **Vercel Skills CLI Distribution**: Provides immediate copy-paste CLI installation commands for both isolated skill installation and the entire `agent-skills` repository via `npx skills add`.
- **Multi-Agent Setup Guidance**: Directly links setup entry points for 4 major coding agent environments: Claude Code, Codex, Cursor, and Antigravity.

## Context cost
- File size: 26,223 bytes (~6,555 tokens).
- Pure static HTML documentation page snapshot; 0 static context cost in agent system prompts during skill execution because it is an external documentation artifact, not loaded into the agent context window at runtime. If paired with upstream repository skill `skills/documentation-and-adrs/SKILL.md` (9,782 bytes, ~2,445 tokens), total composite size is 36,005 bytes (~9,000 tokens).
