---
package: addy
path: references/definition-of-done.md
type: doc
bytes: 3798
unit: inv-addy-34
deprecated: false
aliases: []
memo_inputs:
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# references/definition-of-done.md

## Purpose — required, verbatim
> "A standing, project-wide bar that every change must clear before it counts as done." — references/definition-of-done.md:3

## Design intent — required
Establishes a static, project-wide quality floor that every code change and feature increment must satisfy before being declared complete, deliberately contrasting it with variable per-task acceptance criteria. It defines verification requirements across correctness, code quality, architectural integration, documentation, and ship-readiness, serving as the terminal quality gate for task breakdown, incremental implementation, and production launch workflows.

## Phase — required
cross-phase

## Inputs — required
Candidate code changes, test suites, task acceptance criteria, runtime verification logs, documentation updates, and pull requests.

## Outputs — required
none

## Invokes — required
- skill planning-and-task-breakdown — references/definition-of-done.md:3
- skill incremental-implementation — references/definition-of-done.md:3
- skill shipping-and-launch — references/definition-of-done.md:3
- skill code-review-and-quality — references/definition-of-done.md:35
- skill code-simplification — references/definition-of-done.md:35
- skill documentation-and-adrs — references/definition-of-done.md:44
- skill security-and-hardening — references/definition-of-done.md:48
- skill observability-and-instrumentation — references/definition-of-done.md:49

## Invoked by — required
- doc README.md — README.md:307
- doc docs/getting-started.md — docs/getting-started.md:137
- skill skills/using-agent-skills — skills/using-agent-skills/SKILL.md:114
- skill skills/planning-and-task-breakdown — skills/planning-and-task-breakdown/SKILL.md:257
- skill skills/incremental-implementation — skills/incremental-implementation/SKILL.md:249
- skill skills/shipping-and-launch — skills/shipping-and-launch/SKILL.md:268

## Concepts named — required, verbatim
- `Definition of Done` — references/definition-of-done.md:1 — defined here
- `Acceptance Criteria` — references/definition-of-done.md:3, 7, 22, 66 — defined here
- `planning-and-task-breakdown` — references/definition-of-done.md:3 — used here
- `incremental-implementation` — references/definition-of-done.md:3 — used here
- `shipping-and-launch` — references/definition-of-done.md:3, 50, 57 — used here
- `Correctness` — references/definition-of-done.md:21, 55 — defined here
- `Quality` — references/definition-of-done.md:28, 55 — defined here
- `Integration` — references/definition-of-done.md:37, 56 — defined here
- `Documentation` — references/definition-of-done.md:42, 56 — defined here
- `Ship-readiness` — references/definition-of-done.md:47 — defined here
- `code-review-and-quality` — references/definition-of-done.md:35 — used here
- `code-simplification` — references/definition-of-done.md:35 — used here
- `documentation-and-adrs` — references/definition-of-done.md:44 — used here
- `security-and-hardening` — references/definition-of-done.md:48 — used here
- `observability-and-instrumentation` — references/definition-of-done.md:49 — used here
- `Red Flags` — references/definition-of-done.md:61 — defined here

## Structure
- # Definition of Done
- ## Definition of Done vs. Acceptance Criteria
- ## The Standing Checklist
- ### Correctness
- ### Quality
- ### Integration
- ### Documentation
- ### Ship-readiness
- ## How to Apply
- ## Red Flags

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit separation of concerns: Acceptance Criteria answer "did we build the right thing?" for a specific task, while Definition of Done answers "is this finished to our standard?" across the whole project.
- Tiered scope application: per-task checks apply Correctness and Quality; per-feature checks add Integration and Documentation; per-release checks require the full checklist plus deployment gates from `shipping-and-launch`.

## Context cost
3798 bytes, ~950 tokens. Compact standing checklist designed to be referenced as a completion gate across multiple lifecycle skills.
