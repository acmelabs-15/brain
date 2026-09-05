---
package: addy
path: external/shipping-and-launch.md
type: external-doc
bytes: 26336
unit: inv-addy-29
deprecated: false
aliases: []
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/shipping-and-launch.md

## Purpose — required, verbatim
> "Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go." — external/shipping-and-launch.md:5

## Design intent — required
This external documentation page (`https://skills.addy.ie/skills/shipping-and-launch/`) provides a public web landing page and catalog entry for the `shipping-and-launch` skill within Addy Osmani's agent skills suite. It serves developers and autonomous agents browsing the public catalog by articulating the core purpose of production release preparation (pre-launch checklists, feature flag lifecycles, staged rollouts, rollback procedures, and observability setup), providing CLI installation syntax via the open `skills` CLI (`npx skills add`), presenting the standardized six-part skill anatomy, and contextualizing release operations within the Ship lifecycle phase alongside related skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`) and the `/ship` fan-out command. Without this external page, developers evaluating the skills suite on the web would lack a centralized entry point summarizing the release preparation workflow, installation instructions, and its explicit tie-in to parallel review personas and go/no-go release gates.

## Phase — required
addy:Ship — explicitly placed in the "Ship phase" — external/shipping-and-launch.md:5 and associated with the command "/ship" — external/shipping-and-launch.md:12.

## Inputs — required
As an external web documentation page, it takes no interactive runtime arguments. It documents triggers, commands, and links:
- Triggering condition: "Preparing to deploy to production." — external/shipping-and-launch.md:5
- CLI package target: "npx skills add addyosmani/agent-skills --skill shipping-and-launch" — external/shipping-and-launch.md:8
- Full package installation: "npx skills add addyosmani/agent-skills" — external/shipping-and-launch.md:8
- Source repository link: "https://github.com/addyosmani/agent-skills/blob/main/skills/shipping-and-launch/SKILL.md" — external/shipping-and-launch.md:10

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `shipping-and-launch` — external/shipping-and-launch.md:5 — defined here
- `Ship phase` — external/shipping-and-launch.md:5 — used here
- `/ship` — external/shipping-and-launch.md:5 — used here
- `Pre-launch checklists` — external/shipping-and-launch.md:5 — used here
- `feature-flag lifecycle` — external/shipping-and-launch.md:5 — used here
- `staged rollouts` — external/shipping-and-launch.md:5 — used here
- `rollback procedures` — external/shipping-and-launch.md:5 — used here
- `monitoring setup` — external/shipping-and-launch.md:5 — used here
- `review personas` — external/shipping-and-launch.md:5 — used here
- `go/no-go` — external/shipping-and-launch.md:5 — used here
- `launch` — external/shipping-and-launch.md:5 — used here
- `production` — external/shipping-and-launch.md:5 — used here
- `rollout` — external/shipping-and-launch.md:5 — used here
- `Install just this skill` — external/shipping-and-launch.md:5 — defined here
- `skills CLI` — external/shipping-and-launch.md:6 — used here
- `How this skill is structured` — external/shipping-and-launch.md:8 — defined here
- `anatomy` — external/shipping-and-launch.md:10 — defined here
- `Overview` — external/shipping-and-launch.md:10 — defined here
- `When to Use` — external/shipping-and-launch.md:10 — defined here
- `Process` — external/shipping-and-launch.md:10 — defined here
- `Rationalizations` — external/shipping-and-launch.md:10 — defined here
- `Red Flags` — external/shipping-and-launch.md:10 — defined here
- `Verification` — external/shipping-and-launch.md:10 — defined here
- `SKILL.md` — external/shipping-and-launch.md:10 — used here
- `Deploy with confidence - rollout, rollback, observe.` — external/shipping-and-launch.md:12 — used here
- `More in the Ship phase` — external/shipping-and-launch.md:12 — defined here
- `git-workflow-and-versioning` — external/shipping-and-launch.md:12 — used here
- `trunk-based development` — external/shipping-and-launch.md:12 — used here
- `atomic commits` — external/shipping-and-launch.md:12 — used here
- `~100-line changes` — external/shipping-and-launch.md:12 — used here
- `commit-as-save-point` — external/shipping-and-launch.md:12 — used here
- `ci-cd-and-automation` — external/shipping-and-launch.md:12 — used here
- `Shift Left` — external/shipping-and-launch.md:12 — used here
- `Faster is Safer` — external/shipping-and-launch.md:12 — used here
- `feature flags` — external/shipping-and-launch.md:12 — used here
- `quality-gate pipelines` — external/shipping-and-launch.md:12 — used here
- `deprecation-and-migration` — external/shipping-and-launch.md:12 — used here
- `code-as-liability mindset` — external/shipping-and-launch.md:12 — used here
- `compulsory vs advisory deprecation` — external/shipping-and-launch.md:12 — used here
- `zombie-code removal` — external/shipping-and-launch.md:12 — used here
- `Skills catalog` — external/shipping-and-launch.md:15 — used here
- `Tutorials` — external/shipping-and-launch.md:15 — used here
- `The lifecycle` — external/shipping-and-launch.md:15 — used here
- `Loop engineering` — external/shipping-and-launch.md:15 — used here
- `Teach &amp; share` — external/shipping-and-launch.md:15 — used here
- `How it compares` — external/shipping-and-launch.md:15 — used here
- `Getting started` — external/shipping-and-launch.md:15 — used here
- `Claude Code` — external/shipping-and-launch.md:15 — used here
- `Codex` — external/shipping-and-launch.md:15 — used here
- `Cursor` — external/shipping-and-launch.md:15 — used here
- `Antigravity` — external/shipping-and-launch.md:15 — used here
- `Evals framework` — external/shipping-and-launch.md:15 — used here

## Structure
- "shipping-and-launch" — external/shipping-and-launch.md:5
- "Install just this skill" — external/shipping-and-launch.md:5
- "How this skill is structured" — external/shipping-and-launch.md:8
- "Overview" — external/shipping-and-launch.md:10
- "When to Use" — external/shipping-and-launch.md:10
- "Process" — external/shipping-and-launch.md:10
- "Rationalizations" — external/shipping-and-launch.md:10
- "Red Flags" — external/shipping-and-launch.md:10
- "Verification" — external/shipping-and-launch.md:10
- "Ship phase" — external/shipping-and-launch.md:12
- "More in the Ship phase" — external/shipping-and-launch.md:12
- "Product" — external/shipping-and-launch.md:15
- "Setup" — external/shipping-and-launch.md:15
- "Resources" — external/shipping-and-launch.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — In external/shipping-and-launch.md:10, section 03 of the skill anatomy is defined as "Process" ("Step-by-step workflow") — external/shipping-and-launch.md:10, but the in-repo skill file skills/shipping-and-launch/SKILL.md contains no section named Process, instead structuring the workflow across sections including "## The Pre-Launch Checklist" — skills/shipping-and-launch/SKILL.md:20, "## Feature Flag Strategy" — skills/shipping-and-launch/SKILL.md:77, "## Staged Rollout" — skills/shipping-and-launch/SKILL.md:110, "## Monitoring and Observability" — skills/shipping-and-launch/SKILL.md:162, and "## Rollback Strategy" — skills/shipping-and-launch/SKILL.md:238.
- doc-drift — In external/shipping-and-launch.md:10, section 04 is labeled "Rationalizations" — external/shipping-and-launch.md:10, whereas the in-repo skill section heading is "## Common Rationalizations" — skills/shipping-and-launch/SKILL.md:273.
- doc-drift — The external documentation summary states "Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go." — external/shipping-and-launch.md:5, whereas the in-repo skill frontmatter description states "Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy." — skills/shipping-and-launch/SKILL.md:3; the external page conflates the single skill with the fan-out persona orchestration of the "/ship" — commands/ship.toml:6 command.
- orphan — external/shipping-and-launch.md is an external documentation snapshot fetched from skills.addy.ie that is not referenced or imported by any in-repo code or manifest entry point.

## Observations
- Standardized 6-part skill anatomy: The external documentation asserts that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/shipping-and-launch.md:9, decomposing skills into Overview, When to Use, Process, Rationalizations, Red Flags, and Verification.
- Granular CLI distribution: The page provides explicit CLI installation commands for both the standalone skill ("npx skills add addyosmani/agent-skills --skill shipping-and-launch" — external/shipping-and-launch.md:8) and the entire suite ("npx skills add addyosmani/agent-skills" — external/shipping-and-launch.md:8).
- Lifecycle command tie-in: Links the skill directly to the Ship lifecycle phase and the "/ship" — external/shipping-and-launch.md:12 command, framing release execution around the principle "Deploy with confidence - rollout, rollback, observe." — external/shipping-and-launch.md:12.
- Low token density: The file contains 26,336 bytes of Astro-generated HTML, inline SVGs, layout chrome, and Netlify RUM scripts, of which only a fraction contains actionable engineering guidance compared to the 10,137-byte markdown skill file `skills/shipping-and-launch/SKILL.md`.

## Context cost
26,336 bytes (external HTML document); loads no external files. Approximate tokens: ~6,500.
