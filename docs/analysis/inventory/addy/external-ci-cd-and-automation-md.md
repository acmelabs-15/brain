---
package: addy
path: external/ci-cd-and-automation.md
type: doc
bytes: 26179
unit: inv-addy-14
aliases: []
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/ci-cd-and-automation.md

## Purpose — required, verbatim
> "Automates CI/CD pipeline setup. Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops - automate the gates so speed and safety compound." — external/ci-cd-and-automation.md:5

## Design intent — required
Web documentation and catalog page hosted at `skills.addy.ie/skills/ci-cd-and-automation/` serving as the public discovery and reference portal for the `ci-cd-and-automation` skill. It provides developers and autonomous AI coding agents with a structured overview of automated CI/CD pipeline capabilities, emphasizing foundational engineering principles (Shift Left, Faster is Safer, feature flags, quality-gate pipelines, and failure feedback loops to compound speed and safety). It provides installation commands via the `skills` CLI (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`), places the skill within the `Ship` lifecycle phase under the `/ship` command, outlines the standardized six-part skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), links to the canonical `SKILL.md` on GitHub, and provides cross-references to peer Ship-phase skills (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`). Without this page, agents and engineers discovering skills through the web portal would lack an indexed catalog entry for CI/CD automation, quick installation commands, and lifecycle phase alignment.

## Phase — required
addy:Ship

## Inputs — required
- Triggering condition: "Setting up or modifying build and deploy pipelines." — external/ci-cd-and-automation.md:5
- Source repository code, build configurations, test suites, and CI/CD workflow definitions to be automated.

## Outputs — required
- Installation command for this skill: `npx skills add addyosmani/agent-skills --skill ci-cd-and-automation` — external/ci-cd-and-automation.md:8
- Installation command for full pack: `npx skills add addyosmani/agent-skills` — external/ci-cd-and-automation.md:8
- Automated CI/CD pipeline setup guidance: quality gates, test runner configurations, and deployment strategies.

## Invokes — required
- skill ci-cd-and-automation — external/ci-cd-and-automation.md:5
- doc SKILL.md — external/ci-cd-and-automation.md:11
- command /ship — external/ci-cd-and-automation.md:12
- skill git-workflow-and-versioning — external/ci-cd-and-automation.md:12
- skill deprecation-and-migration — external/ci-cd-and-automation.md:12
- skill documentation-and-adrs — external/ci-cd-and-automation.md:12
- doc CONTRIBUTING.md — external/ci-cd-and-automation.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Shift Left` — external/ci-cd-and-automation.md:5 — used here
- `Faster is Safer` — external/ci-cd-and-automation.md:5 — used here
- `feature flags` — external/ci-cd-and-automation.md:5 — used here
- `quality-gate pipelines` — external/ci-cd-and-automation.md:5 — used here
- `failure feedback loops` — external/ci-cd-and-automation.md:5 — used here
- `Ship phase` — external/ci-cd-and-automation.md:5, 12 — used here
- `skills CLI` — external/ci-cd-and-automation.md:6 — used here
- `anatomy` — external/ci-cd-and-automation.md:9 — defined here
- `Overview` — external/ci-cd-and-automation.md:10 — defined here
- `When to Use` — external/ci-cd-and-automation.md:10 — defined here
- `Process` — external/ci-cd-and-automation.md:10 — defined here
- `Rationalizations` — external/ci-cd-and-automation.md:10 — defined here
- `Red Flags` — external/ci-cd-and-automation.md:10 — defined here
- `Verification` — external/ci-cd-and-automation.md:10 — defined here
- `SKILL.md` — external/ci-cd-and-automation.md:11 — used here
- `/ship` — external/ci-cd-and-automation.md:12 — used here
- `trunk-based development` — external/ci-cd-and-automation.md:12 — used here
- `atomic commits` — external/ci-cd-and-automation.md:12 — used here
- `commit-as-save-point` — external/ci-cd-and-automation.md:12 — used here
- `code-as-liability` — external/ci-cd-and-automation.md:12 — used here
- `compulsory vs advisory deprecation` — external/ci-cd-and-automation.md:12 — used here
- `zombie-code removal` — external/ci-cd-and-automation.md:12 — used here
- `Architecture Decision Records` — external/ci-cd-and-automation.md:12 — used here
- `Loop engineering` — external/ci-cd-and-automation.md:15 — used here
- `Evals framework` — external/ci-cd-and-automation.md:15 — used here

## Structure
- ci-cd-and-automation — external/ci-cd-and-automation.md:5
- Install just this skill — external/ci-cd-and-automation.md:5
- How this skill is structured — external/ci-cd-and-automation.md:8
- Ship phase — external/ci-cd-and-automation.md:12
- More in the Ship phase — external/ci-cd-and-automation.md:12
- Product — external/ci-cd-and-automation.md:15
- Setup — external/ci-cd-and-automation.md:15
- Resources — external/ci-cd-and-automation.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/ci-cd-and-automation.md:10 · Anatomy section asserts the skill follows a generic 6-section structure (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), whereas the actual SKILL.md (skills/ci-cd-and-automation/SKILL.md) contains specialized sections (The Quality Gate Pipeline, GitHub Actions Configuration, Deployment Strategies, Failure Feedback Loops, Configuration Templates, CI Optimization) and titles its rationalizations section "Common Rationalizations" instead of "Rationalizations".
- doc-drift · external/ci-cd-and-automation.md:5 · External page simplifies triggering conditions to "Setting up or modifying build and deploy pipelines", omitting specific triggers from skills/ci-cd-and-automation/SKILL.md:3, 18-22 such as automating quality gates, configuring CI test runners, adding/modifying automated checks, and debugging CI failures.
- orphan · external/ci-cd-and-automation.md:1 · External documentation snapshot is published on skills.addy.ie but is not referenced or linked from any repository file.

## Observations
Static web snapshot generated by Astro (`data-astro-cid-*`) from `https://skills.addy.ie/skills/ci-cd-and-automation/`. Demonstrates Addy's external documentation format for agent skills, standardizing public skill discovery around the `npx skills` CLI (`npx skills add addyosmani/agent-skills --skill ci-cd-and-automation`), visual tag taxonomy (`#ci-cd`, `#automation`), lifecycle phase integration (`Ship` / `/ship`), related skill cross-promotion (`git-workflow-and-versioning`, `deprecation-and-migration`, `documentation-and-adrs`), and repository linkage to `SKILL.md`, `CONTRIBUTING.md`, and `evals`.

## Context cost
26,179 bytes (approx. 6,545 tokens) for this HTML document snapshot. When referenced as documentation, links to `skills/ci-cd-and-automation/SKILL.md` (11,332 bytes, ~2,800 tokens), `skills/git-workflow-and-versioning/SKILL.md`, `skills/deprecation-and-migration/SKILL.md`, and `skills/documentation-and-adrs/SKILL.md`.
