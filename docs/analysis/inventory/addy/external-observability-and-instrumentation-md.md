---
package: addy
path: external/observability-and-instrumentation.md
type: doc
bytes: 26344
unit: inv-addy-26
aliases: []
memo_inputs:
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/observability-and-instrumentation.md

## Purpose — required, verbatim
> "Instruments code so production behavior is visible and diagnosable. Structured logging, RED metrics, OpenTelemetry tracing, and symptom-based alerting - instrument as you build, not after an incident." — external/observability-and-instrumentation.md:5

## Design intent — required
Web documentation and catalog page hosted at `skills.addy.ie/skills/observability-and-instrumentation/` serving as the public discovery and reference portal for the `observability-and-instrumentation` skill. It provides developers and autonomous AI coding agents with a structured overview of observability engineering principles (structured logging, RED metrics, OpenTelemetry distributed tracing, and symptom-based alerting—instrumenting as you build rather than after an incident). It provides CLI installation commands via the `skills` CLI (`npx skills add addyosmani/agent-skills --skill observability-and-instrumentation`), places the skill within the `Ship` lifecycle phase under the `/ship` command, outlines the standardized six-part skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), links to the canonical `SKILL.md` on GitHub, and provides cross-references to peer Ship-phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`). Without this page, agents and engineers discovering skills through the web portal would lack an indexed catalog entry for observability and instrumentation, quick installation commands, and lifecycle phase alignment.

## Phase — required
addy:Ship

## Inputs — required
- Triggering condition: "Adding telemetry, or shipping anything that runs in production." — external/observability-and-instrumentation.md:5
- Source repository code, application services, endpoints, background jobs, and external integrations requiring telemetry.

## Outputs — required
- Installation command for this skill: `npx skills add addyosmani/agent-skills --skill observability-and-instrumentation` — external/observability-and-instrumentation.md:8
- Installation command for full pack: `npx skills add addyosmani/agent-skills` — external/observability-and-instrumentation.md:8
- Observability and instrumentation guidance: structured logging, RED metrics, OpenTelemetry distributed tracing, and symptom-based alerting workflows.

## Invokes — required
- skill observability-and-instrumentation — external/observability-and-instrumentation.md:5
- doc SKILL.md — external/observability-and-instrumentation.md:11
- command /ship — external/observability-and-instrumentation.md:12
- skill git-workflow-and-versioning — external/observability-and-instrumentation.md:12
- skill ci-cd-and-automation — external/observability-and-instrumentation.md:12
- skill deprecation-and-migration — external/observability-and-instrumentation.md:12
- doc CONTRIBUTING.md — external/observability-and-instrumentation.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Structured logging` — external/observability-and-instrumentation.md:1, 5 — used here
- `RED metrics` — external/observability-and-instrumentation.md:1, 5 — used here
- `OpenTelemetry tracing` — external/observability-and-instrumentation.md:1, 5 — used here
- `symptom-based alerting` — external/observability-and-instrumentation.md:1, 5 — used here
- `Ship phase` — external/observability-and-instrumentation.md:5, 12 — used here
- `skills CLI` — external/observability-and-instrumentation.md:6 — used here
- `anatomy` — external/observability-and-instrumentation.md:9 — defined here
- `Overview` — external/observability-and-instrumentation.md:10 — defined here
- `When to Use` — external/observability-and-instrumentation.md:10 — defined here
- `Process` — external/observability-and-instrumentation.md:10 — defined here
- `Rationalizations` — external/observability-and-instrumentation.md:10 — defined here
- `Red Flags` — external/observability-and-instrumentation.md:10 — defined here
- `Verification` — external/observability-and-instrumentation.md:10 — defined here
- `SKILL.md` — external/observability-and-instrumentation.md:10, 11 — used here
- `/ship` — external/observability-and-instrumentation.md:12 — used here
- `trunk-based development` — external/observability-and-instrumentation.md:12 — used here
- `atomic commits` — external/observability-and-instrumentation.md:12 — used here
- `commit-as-save-point` — external/observability-and-instrumentation.md:12 — used here
- `Shift Left` — external/observability-and-instrumentation.md:12 — used here
- `Faster is Safer` — external/observability-and-instrumentation.md:12 — used here
- `feature flags` — external/observability-and-instrumentation.md:12 — used here
- `quality-gate pipelines` — external/observability-and-instrumentation.md:12 — used here
- `Code-as-liability` — external/observability-and-instrumentation.md:12 — used here
- `compulsory vs advisory deprecation` — external/observability-and-instrumentation.md:12 — used here
- `zombie-code removal` — external/observability-and-instrumentation.md:12 — used here
- `Loop engineering` — external/observability-and-instrumentation.md:15 — used here
- `Evals framework` — external/observability-and-instrumentation.md:15 — used here

## Structure
- `observability-and-instrumentation` — external/observability-and-instrumentation.md:5
- `Install just this skill` — external/observability-and-instrumentation.md:5
- `How this skill is structured` — external/observability-and-instrumentation.md:8
- `Ship phase` — external/observability-and-instrumentation.md:12
- `More in the Ship phase` — external/observability-and-instrumentation.md:12
- `Product` — external/observability-and-instrumentation.md:15
- `Setup` — external/observability-and-instrumentation.md:15
- `Resources` — external/observability-and-instrumentation.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/observability-and-instrumentation.md:10 · Anatomy section asserts the skill follows a generic 6-section structure (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), whereas the actual SKILL.md (skills/observability-and-instrumentation/SKILL.md) structures its process into 7 numbered subsections (Define "working" before instrumenting, Pick the right signal for each question, Structured logging, Metrics, Distributed tracing, Alerting, Verify the telemetry itself) and titles its rationalizations section "Common Rationalizations" rather than "Rationalizations".
- doc-drift · external/observability-and-instrumentation.md:5 · External page simplifies triggering conditions to "Adding telemetry, or shipping anything that runs in production.", omitting specific triggers and negative boundaries from skills/observability-and-instrumentation/SKILL.md:3, 14-23 (such as adding services/endpoints/jobs, reviewing PRs with I/O/retries/queues, investigating post-incidents, and explicit "NOT for" delegations to debugging-and-error-recovery, performance-optimization, and shipping-and-launch).
- orphan · external/observability-and-instrumentation.md:1 · External documentation snapshot is published on skills.addy.ie but is not referenced or linked from any repository file.

## Observations
Static web snapshot generated by Astro (`data-astro-cid-*`) from `https://skills.addy.ie/skills/observability-and-instrumentation/`. Demonstrates Addy's external documentation format for agent skills, standardizing public skill discovery around the `npx skills` CLI (`npx skills add addyosmani/agent-skills --skill observability-and-instrumentation`), visual tag taxonomy (`#observability`, `#production`), lifecycle phase integration (`Ship` / `/ship`), related skill cross-promotion (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`), and repository linkage to `SKILL.md`, `CONTRIBUTING.md`, and `evals`.

## Context cost
26,344 bytes (approx. 6,586 tokens) for this HTML document snapshot. When referenced as documentation, links to `skills/observability-and-instrumentation/SKILL.md` (11,053 bytes, ~2,760 tokens), `references/observability-checklist.md` (3,446 bytes, ~860 tokens), `skills/git-workflow-and-versioning/SKILL.md`, `skills/ci-cd-and-automation/SKILL.md`, and `skills/deprecation-and-migration/SKILL.md`.
