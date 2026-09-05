---
package: addy
path: external/shipping-and-launch.md
type: doc
bytes: 26336
unit: inv-addy-29
aliases: []
memo_inputs:
  - {path: external/shipping-and-launch.md, sha256: 2de2a9605ba35fdb44278a40fe3b6caa8ca83bb2f272bc4451138e91f3c4374c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/shipping-and-launch.md

## Purpose — required, verbatim
> "Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go." — external/shipping-and-launch.md:5

## Design intent — required
Web documentation and catalog landing page hosted at `https://skills.addy.ie/skills/shipping-and-launch/` serving as the public discovery and reference entry point for the `shipping-and-launch` skill. It provides developers and autonomous AI coding agents with a structured overview of production release preparation, highlighting pre-launch checklists, feature-flag lifecycles, staged rollouts, rollback procedures, and monitoring setup. It details installation commands via the `skills` CLI (`npx skills add addyosmani/agent-skills --skill shipping-and-launch`), aligns the skill with the `Ship` lifecycle phase and `/ship` orchestration command, outlines the standardized six-part skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), links to the canonical `SKILL.md` source on GitHub, and cross-references peer Ship-phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`). Without this page, agents and engineers browsing the web catalog would lack indexed documentation for production launch workflows, package installation instructions, and lifecycle phase positioning.

## Phase — required
addy:Ship

## Inputs — required
- Triggering condition: "Preparing to deploy to production." — external/shipping-and-launch.md:5
- Source repository changes, production environment configurations, release checklists, and rollback plans for the system being deployed.

## Outputs — required
- Installation command for this skill: `npx skills add addyosmani/agent-skills --skill shipping-and-launch` — external/shipping-and-launch.md:8
- Installation command for all skills: `npx skills add addyosmani/agent-skills` — external/shipping-and-launch.md:8
- Web guidance and checklist references for production deployment readiness, feature flags, staged rollouts, monitoring, and go/no-go decision synthesis.

## Invokes — required
- skill shipping-and-launch — external/shipping-and-launch.md:5
- doc SKILL.md — external/shipping-and-launch.md:11
- command /ship — external/shipping-and-launch.md:12
- skill git-workflow-and-versioning — external/shipping-and-launch.md:12
- skill ci-cd-and-automation — external/shipping-and-launch.md:12
- skill deprecation-and-migration — external/shipping-and-launch.md:12
- doc CONTRIBUTING.md — external/shipping-and-launch.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `shipping-and-launch` — external/shipping-and-launch.md:5 — defined here
- `Pre-launch checklists` — external/shipping-and-launch.md:5 — defined here
- `feature-flag lifecycle` — external/shipping-and-launch.md:5 — defined here
- `staged rollouts` — external/shipping-and-launch.md:5 — defined here
- `rollback procedures` — external/shipping-and-launch.md:5 — defined here
- `monitoring setup` — external/shipping-and-launch.md:5 — defined here
- `/ship` — external/shipping-and-launch.md:5, 12 — used here
- `review personas` — external/shipping-and-launch.md:5 — used here
- `go/no-go` — external/shipping-and-launch.md:5 — used here
- `Ship phase` — external/shipping-and-launch.md:5, 12 — used here
- `skills CLI` — external/shipping-and-launch.md:6 — used here
- `anatomy` — external/shipping-and-launch.md:9 — defined here
- `Overview` — external/shipping-and-launch.md:10 — defined here
- `When to Use` — external/shipping-and-launch.md:10 — defined here
- `Process` — external/shipping-and-launch.md:10 — defined here
- `Rationalizations` — external/shipping-and-launch.md:10 — defined here
- `Red Flags` — external/shipping-and-launch.md:10 — defined here
- `Verification` — external/shipping-and-launch.md:10 — defined here
- `SKILL.md` — external/shipping-and-launch.md:11 — used here
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
- `code-as-liability` — external/shipping-and-launch.md:12 — used here
- `compulsory vs advisory deprecation` — external/shipping-and-launch.md:12 — used here
- `zombie-code removal` — external/shipping-and-launch.md:12 — used here
- `Loop engineering` — external/shipping-and-launch.md:15 — used here
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
- doc-drift · external/shipping-and-launch.md:5: External catalog summary states "Prepares production launches. Pre-launch checklists, feature-flag lifecycle, staged rollouts, rollback procedures, and monitoring setup. Run via /ship to fan out review personas, then merge into a go/no-go.", whereas the repository skill description in skills/shipping-and-launch/SKILL.md:3 states "Prepares production launches. Use when preparing to deploy to production. Use when you need a pre-launch checklist, when setting up monitoring, when planning a staged rollout, or when you need a rollback strategy.", omitting mention of /ship, parallel personas, and go/no-go synthesis.
- doc-drift · external/shipping-and-launch.md:10: External anatomy outlines a standardized 6-section structure (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), but skills/shipping-and-launch/SKILL.md lacks a "Process" section and instead specifies domain-specific sections (The Pre-Launch Checklist, Feature Flag Strategy, Staged Rollout, Monitoring and Observability, Rollback Strategy, See Also) and titles its rationalizations section "Common Rationalizations".
- doc-drift · external/shipping-and-launch.md:5: External card associates the skill directly with command /ship and describes persona fan-out, but commands/ship.toml executes persona subagents (code-reviewer, security-auditor, test-engineer) and produces the go/no-go decision directly, treating shipping-and-launch as invoked background context rather than the executor.
- orphan · external/shipping-and-launch.md:1: External web documentation snapshot hosted on skills.addy.ie is not linked or referenced by any repository file.

## Observations
Static HTML snapshot rendered by Astro (`data-astro-cid-*`) from `https://skills.addy.ie/skills/shipping-and-launch/`. Exemplifies Addy's web distribution format for agent skills, integrating the `skills` CLI installer (`npx skills add addyosmani/agent-skills --skill shipping-and-launch`), discoverability tags (`#launch`, `#production`, `#rollout`), Ship lifecycle command mapping (`/ship`), related skill links (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`), and documentation links to the GitHub repository source.

## Context cost
26336 bytes, approximately ~6584 tokens for this HTML snapshot. References `skills/shipping-and-launch/SKILL.md` (10137 bytes, ~2534 tokens) and related ship skills.
