---
package: addy
path: external/observability-and-instrumentation.md
type: external-doc
bytes: 26344
unit: inv-addy-26
deprecated: false
aliases: []
memo_inputs:
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/observability-and-instrumentation.md

## Purpose — required, verbatim
> "Instruments code so production behavior is visible and diagnosable. Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident." — external/observability-and-instrumentation.md:5

## Design intent — required
Serves as the public web catalog entry and documentation landing page on skills.addy.ie for Addy Osmani's `observability-and-instrumentation` skill in the Ship lifecycle phase. It addresses discoverability, developer onboarding, and modular installation by summarizing production telemetry practices (structured logging, RED metrics, OpenTelemetry tracing, symptom-based alerting), providing explicit triggering conditions ("Adding telemetry, or shipping anything that runs in production"), detailing copy-paste CLI installation commands via the open skills CLI (both for this individual skill and for the entire repository pack), outlining the standardized 6-section skill anatomy, and linking to related Ship-phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`). Without this external entry, developers and autonomous coding agents browsing the web catalog would lack an indexed reference to evaluate and selectively install the observability skill without cloning or navigating the full repository.

## Phase — required
addy:Ship

## Inputs — required
- Trigger condition: "Adding telemetry, or shipping anything that runs in production." — external/observability-and-instrumentation.md:5
- Upstream skill definition: "https://github.com/addyosmani/agent-skills/blob/main/skills/observability-and-instrumentation/SKILL.md" — external/observability-and-instrumentation.md:10

## Outputs — required
none

## Invokes — required
- skill git-workflow-and-versioning — external/observability-and-instrumentation.md:12
- skill ci-cd-and-automation — external/observability-and-instrumentation.md:12
- skill deprecation-and-migration — external/observability-and-instrumentation.md:12
- command /ship — external/observability-and-instrumentation.md:12
- doc SKILL.md — external/observability-and-instrumentation.md:11

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `observability-and-instrumentation` — external/observability-and-instrumentation.md:5 — defined here
- `Ship` — external/observability-and-instrumentation.md:5 — used here
- `Ship phase` — external/observability-and-instrumentation.md:5 — used here
- `Structured logging` — external/observability-and-instrumentation.md:5 — used here
- `RED metrics` — external/observability-and-instrumentation.md:5 — used here
- `OpenTelemetry tracing` — external/observability-and-instrumentation.md:5 — used here
- `symptom-based alerting` — external/observability-and-instrumentation.md:5 — used here
- `telemetry` — external/observability-and-instrumentation.md:5 — used here
- `observability` — external/observability-and-instrumentation.md:5 — used here
- `production` — external/observability-and-instrumentation.md:5 — used here
- `skills CLI` — external/observability-and-instrumentation.md:6 — used here
- `Overview` — external/observability-and-instrumentation.md:10 — used here
- `When to Use` — external/observability-and-instrumentation.md:10 — used here
- `Process` — external/observability-and-instrumentation.md:10 — used here
- `Rationalizations` — external/observability-and-instrumentation.md:10 — used here
- `Red Flags` — external/observability-and-instrumentation.md:10 — used here
- `Verification` — external/observability-and-instrumentation.md:10 — used here
- `SKILL.md` — external/observability-and-instrumentation.md:11 — used here
- `/ship` — external/observability-and-instrumentation.md:12 — used here
- `git-workflow-and-versioning` — external/observability-and-instrumentation.md:12 — used here
- `trunk-based development` — external/observability-and-instrumentation.md:12 — used here
- `atomic commits` — external/observability-and-instrumentation.md:12 — used here
- `commit-as-save-point` — external/observability-and-instrumentation.md:12 — used here
- `ci-cd-and-automation` — external/observability-and-instrumentation.md:12 — used here
- `shift left` — external/observability-and-instrumentation.md:12 — used here
- `faster is safer` — external/observability-and-instrumentation.md:12 — used here
- `feature flags` — external/observability-and-instrumentation.md:12 — used here
- `quality-gate pipelines` — external/observability-and-instrumentation.md:12 — used here
- `deprecation-and-migration` — external/observability-and-instrumentation.md:12 — used here
- `code-as-liability mindset` — external/observability-and-instrumentation.md:12 — used here
- `compulsory vs advisory deprecation` — external/observability-and-instrumentation.md:12 — used here
- `zombie-code removal` — external/observability-and-instrumentation.md:12 — used here
- `AI coding agents` — external/observability-and-instrumentation.md:13 — used here
- `senior-engineer` — external/observability-and-instrumentation.md:13 — used here
- `lifecycle` — external/observability-and-instrumentation.md:14 — used here

## Structure
- # observability-and-instrumentation
- ## Install just this skill
- ## How this skill is structured
  - 01 Overview
  - 02 When to Use
  - 03 Process
  - 04 Rationalizations
  - 05 Red Flags
  - 06 Verification
- ### Ship phase
- ## More in the Ship phase
  - ### git-workflow-and-versioning
  - ### ci-cd-and-automation
  - ### deprecation-and-migration
- ### Product
- ### Setup
- ### Resources

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: In external/observability-and-instrumentation.md:5, description states "Instruments code so production behavior is visible and diagnosable. Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident." — external/observability-and-instrumentation.md:5, whereas in-repo skill frontmatter description states "Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting." — skills/observability-and-instrumentation/SKILL.md:3.
- doc-drift: In external/observability-and-instrumentation.md:9, the page claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/observability-and-instrumentation.md:9 with section 04 listed as "Rationalizations" — external/observability-and-instrumentation.md:10, whereas skills/observability-and-instrumentation/SKILL.md:166 headings use "## Common Rationalizations" — skills/observability-and-instrumentation/SKILL.md:166.
- doc-drift: In external/observability-and-instrumentation.md:12, the sidebar associates this skill with the lifecycle command "/ship" — external/observability-and-instrumentation.md:12, but commands/ship.toml:4 explicitly directs "Invoke the shipping-and-launch skill." — commands/ship.toml:4 and does not invoke observability-and-instrumentation.
- orphan: external/observability-and-instrumentation.md is an external documentation snapshot not invoked or linked by any in-repo code or manifest entry point.

## Observations
- Standalone and bundle CLI installation commands: "npx skills add addyosmani/agent-skills --skill observability-and-instrumentation" — external/observability-and-instrumentation.md:8 and "npx skills add addyosmani/agent-skills" — external/observability-and-instrumentation.md:8.
- The page presents a standardized 6-section anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification) under "How this skill is structured", describing skills as "a workflow the agent follows, not a doc it reads." — external/observability-and-instrumentation.md:9.
- The page links to related Ship-phase skills "git-workflow-and-versioning" — external/observability-and-instrumentation.md:12, "ci-cd-and-automation" — external/observability-and-instrumentation.md:12, and "deprecation-and-migration" — external/observability-and-instrumentation.md:12.
- Mentions target ecosystem and developer role: "Production-grade engineering skills for AI coding agents. Encode senior-engineer" — external/observability-and-instrumentation.md:13 and "workflows across the full lifecycle." — external/observability-and-instrumentation.md:14.
- Snapshotted from "https://skills.addy.ie/skills/observability-and-instrumentation/" — external/observability-and-instrumentation.md:1 and contains Astro site framework markup with scoped component identifiers.

## Context cost
26344 bytes (~6586 tokens), 0 loaded dependencies. Static web documentation snapshot not intended for agent execution context.
