---
package: addy
path: external/shipping-and-launch.md
type: external-doc
bytes: 26336
unit: inv-addy-29
aliases: []
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# external/shipping-and-launch.md

## Purpose — required, verbatim
> "Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go." — external/shipping-and-launch.md:5

## Design intent — required
This external documentation page (`https://skills.addy.ie/skills/shipping-and-launch/`) serves as the public web catalog landing page for the `shipping-and-launch` skill in Addy Osmani's agent skills library. Hosted on skills.addy.ie, it summarizes the skill's role in preparing production launches (checklists, feature flags, staged rollouts, rollbacks, and monitoring), provides triggering guidance ("Preparing to deploy to production."), outlines the 6-part standardized skill anatomy, provides copyable CLI installation commands via `npx skills add`, and situates the skill in the Ship lifecycle phase alongside the `/ship` command and related Ship skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`). Without this page, web visitors and autonomous agents browsing the public catalog would lack web discoverability, an overview of the skill's structure and prerequisites, and direct links to the canonical GitHub source repository (`skills/shipping-and-launch/SKILL.md`).

## Phase — required
addy:Ship
> "Ship phase" — external/shipping-and-launch.md:5

## Inputs — required
Static web page inputs:
- HTTP GET requests to `https://skills.addy.ie/skills/shipping-and-launch/`
- Build-time content from `skills/shipping-and-launch/SKILL.md` and Astro layout templates.
- Trigger condition documented on page: "Preparing to deploy to production." — external/shipping-and-launch.md:5
No CLI parameters or runtime arguments are consumed by this static HTML document.

## Outputs — required
Static web presentation:
- Rendered HTML document displaying skill summary, triggers, CLI installation commands (`npx skills add addyosmani/agent-skills --skill shipping-and-launch`), 6-part skill anatomy, and navigation links to related Ship skills and the GitHub source file (`https://github.com/addyosmani/agent-skills/blob/main/skills/shipping-and-launch/SKILL.md`).
Produces no repository artifacts, files, or commits directly.

## Invokes — required
- command /ship — external/shipping-and-launch.md:5, 12
- skill git-workflow-and-versioning — external/shipping-and-launch.md:12
- skill ci-cd-and-automation — external/shipping-and-launch.md:12
- skill deprecation-and-migration — external/shipping-and-launch.md:12
- file skills/shipping-and-launch/SKILL.md — external/shipping-and-launch.md:10

## Invoked by — required
orphan (external documentation page published at `https://skills.addy.ie/skills/shipping-and-launch/`; not invoked or referenced by any file within `sources/addy/`)

## Concepts named — required, verbatim
- `shipping-and-launch` — external/shipping-and-launch.md:1 — defined here
- `Pre-launch checklists` — external/shipping-and-launch.md:1 — defined here
- `feature-flag lifecycle` — external/shipping-and-launch.md:1 — defined here
- `staged rollouts` — external/shipping-and-launch.md:1 — defined here
- `rollback procedures` — external/shipping-and-launch.md:1 — defined here
- `monitoring setup` — external/shipping-and-launch.md:1 — defined here
- `review personas` — external/shipping-and-launch.md:1 — defined here
- `go/no-go` — external/shipping-and-launch.md:1 — defined here
- `Ship phase` — external/shipping-and-launch.md:5 — used here
- `/ship` — external/shipping-and-launch.md:5 — used here
- `skills CLI` — external/shipping-and-launch.md:6 — used here
- `How this skill is structured` — external/shipping-and-launch.md:8 — defined here
- `anatomy` — external/shipping-and-launch.md:9 — defined here
- `Overview` — external/shipping-and-launch.md:10 — defined here
- `When to Use` — external/shipping-and-launch.md:10 — defined here
- `Process` — external/shipping-and-launch.md:10 — defined here
- `Rationalizations` — external/shipping-and-launch.md:10 — defined here
- `Red Flags` — external/shipping-and-launch.md:10 — defined here
- `Verification` — external/shipping-and-launch.md:10 — defined here
- `SKILL.md` — external/shipping-and-launch.md:11 — used here
- `/ship` — external/shipping-and-launch.md:12 — used here
- `Ship phase` — external/shipping-and-launch.md:12 — used here
- `git-workflow-and-versioning` — external/shipping-and-launch.md:12 — used here
- `trunk-based development` — external/shipping-and-launch.md:12 — used here
- `atomic commits` — external/shipping-and-launch.md:12 — used here
- `commit-as-save-point` — external/shipping-and-launch.md:12 — used here
- `~100-line changes` — external/shipping-and-launch.md:12 — used here
- `ci-cd-and-automation` — external/shipping-and-launch.md:12 — used here
- `Shift Left` — external/shipping-and-launch.md:12 — used here
- `Faster is Safer` — external/shipping-and-launch.md:12 — used here
- `feature flags` — external/shipping-and-launch.md:12 — used here
- `quality-gate pipelines` — external/shipping-and-launch.md:12 — used here
- `deprecation-and-migration` — external/shipping-and-launch.md:12 — used here
- `code-as-liability mindset` — external/shipping-and-launch.md:12 — used here
- `compulsory vs advisory deprecation` — external/shipping-and-launch.md:12 — used here
- `zombie-code removal` — external/shipping-and-launch.md:12 — used here
- `Claude Code` — external/shipping-and-launch.md:15 — used here
- `Codex` — external/shipping-and-launch.md:15 — used here
- `Cursor` — external/shipping-and-launch.md:15 — used here
- `Antigravity` — external/shipping-and-launch.md:15 — used here
- `Evals framework` — external/shipping-and-launch.md:15 — used here

## Structure
- "shipping-and-launch" — external/shipping-and-launch.md:5
- "Install just this skill" — external/shipping-and-launch.md:5
- "How this skill is structured" — external/shipping-and-launch.md:8
- "Ship phase" — external/shipping-and-launch.md:12
- "More in the Ship phase" — external/shipping-and-launch.md:12
- "Product" — external/shipping-and-launch.md:15
- "Setup" — external/shipping-and-launch.md:15
- "Resources" — external/shipping-and-launch.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/shipping-and-launch.md:5 — The webpage summary appends slash-command orchestration and persona fanout ("Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go." — external/shipping-and-launch.md:5), whereas the repository skill description ("Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." — skills/shipping-and-launch/SKILL.md:3) combines a concise summary sentence with broader triggering criteria.
- doc-drift — external/shipping-and-launch.md:5 — The page condenses the skill's triggering criteria in the "Use when" block to "Preparing to deploy to production." — external/shipping-and-launch.md:5, omitting the explicit trigger conditions defined in the repository ("Deploying a feature to production for the first time" — skills/shipping-and-launch/SKILL.md:14; "Releasing a significant change to users" — skills/shipping-and-launch/SKILL.md:15; "Migrating data or infrastructure" — skills/shipping-and-launch/SKILL.md:16; "Opening a beta or early access program" — skills/shipping-and-launch/SKILL.md:17; "Any deployment that carries risk (all of them)" — skills/shipping-and-launch/SKILL.md:18).
- doc-drift — external/shipping-and-launch.md:10 — The page displays a generic 6-part skill anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/shipping-and-launch.md:9; "Process" — external/shipping-and-launch.md:10; "Rationalizations" — external/shipping-and-launch.md:10; "Red Flags" — external/shipping-and-launch.md:10; "Verification" — external/shipping-and-launch.md:10), but skills/shipping-and-launch/SKILL.md does not follow this anatomy: it has no "Process" section, providing instead five operational sections ("The Pre-Launch Checklist" — skills/shipping-and-launch/SKILL.md:20; "Feature Flag Strategy" — skills/shipping-and-launch/SKILL.md:77; "Staged Rollout" — skills/shipping-and-launch/SKILL.md:110; "Monitoring and Observability" — skills/shipping-and-launch/SKILL.md:162; "Rollback Strategy" — skills/shipping-and-launch/SKILL.md:238) and a cross-reference section ("See Also" — skills/shipping-and-launch/SKILL.md:266).
- orphan — external/shipping-and-launch.md:1 — External documentation page snapshot is not directly referenced or invoked by any source file in sources/addy/.

## Observations
- Generated via Astro static site generator (`data-astro-cid-*` attributes) and hosted at `https://skills.addy.ie/skills/shipping-and-launch/`.
- Provides CLI installation commands for the single skill: "npx skills add addyosmani/agent-skills --skill shipping-and-launch" — external/shipping-and-launch.md:8 and complete pack: "npx skills add addyosmani/agent-skills" — external/shipping-and-launch.md:8.
- Includes client-side interactive clipboard copying script for the `skills CLI` installation snippet.
- Embeds Netlify RUM analytics script (`netlify-rum-container`) and links to external Geist / Geist Mono web fonts.
- Features cross-harness navigation in the footer linking to getting started guides for `Claude Code`, `Codex`, `Cursor`, and `Antigravity`.
- Places the skill under the Ship phase with command "/ship" — external/shipping-and-launch.md:12, and links to related Ship skills: git-workflow-and-versioning, ci-cd-and-automation, and deprecation-and-migration ("More in the Ship phase" — external/shipping-and-launch.md:12).
- States the Ship phase intent: "Deploy with confidence - rollout, rollback, observe." — external/shipping-and-launch.md:12.
- Outlines skill triggering condition: "Preparing to deploy to production." — external/shipping-and-launch.md:5.
- Tagged with `#launch`, `#production`, `#rollout` in header.
- Footer slogan: "Production-grade engineering skills for AI coding agents. Encode senior-engineer" — external/shipping-and-launch.md:13 "workflows across the full lifecycle." — external/shipping-and-launch.md:14.
- Context cost observation: As an Astro-rendered HTML file (26,336 bytes), the vast majority of tokens comprise UI boilerplate, CSS styles, SVGs, and client scripts rather than actionable documentation.

## Context cost
- File size: 26,336 bytes (~6,584 tokens).
- Linked files: `skills/shipping-and-launch/SKILL.md` (10,137 bytes), `commands/ship.toml` (4,712 bytes), `skills/git-workflow-and-versioning/SKILL.md` (14,063 bytes), `skills/ci-cd-and-automation/SKILL.md` (11,332 bytes), and `skills/deprecation-and-migration/SKILL.md` (12,516 bytes). Total with directly referenced files: 79,096 bytes (~19,774 tokens).
