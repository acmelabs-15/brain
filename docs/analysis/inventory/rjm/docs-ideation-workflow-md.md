---
package: rjm
path: docs/ideation-workflow.md
type: doc
bytes: 10262
unit: inv-rjm-192
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/ideation-workflow.md, sha256: 8df520e79e6fc7e5095a990cca774d92fb140580232c66ccb046cbece318b96f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/ideation-workflow.md

## Purpose — required, verbatim
> "The Ideation Workflow transforms vague feature ideas into actionable implementation plans." — docs/ideation-workflow.md:5

## Design intent — required
Establishes an upstream ideation lifecycle that converts unstructured requests, package URLs, or incomplete issue descriptions into fully validated, architected, and vetted implementation specifications before entering formal `/spec` command execution.

## Phase — required
none

## Inputs — required
- "Package/library URLs" — docs/ideation-workflow.md:11
- "Vague scope language" — docs/ideation-workflow.md:12
- "Incomplete GitHub issues" — docs/ideation-workflow.md:13
- "Exploratory requests" — docs/ideation-workflow.md:14
- "Early-stage ideas" — docs/ideation-workflow.md:15

## Outputs — required
- ".agents/analysis/ideation-[topic].md" — docs/ideation-workflow.md:117
- ".agents/analysis/ideation-[topic]-validation.md" — docs/ideation-workflow.md:140
- ".agents/roadmap/epic-[topic].md" — docs/ideation-workflow.md:150
- ".agents/planning/prd-[topic].md" — docs/ideation-workflow.md:151
- ".agents/planning/tasks-[topic].md" — docs/ideation-workflow.md:152
- ".agents/planning/implementation-plan-[topic].md" — docs/ideation-workflow.md:197
- ".agents/roadmap/backlog.md" — docs/ideation-workflow.md:137

## Invokes — required
- doc task-classification-guide.md — docs/ideation-workflow.md:270
- file orchestrator.md — docs/ideation-workflow.md:271
- file analyst.md — docs/ideation-workflow.md:272

## Invoked by — required
- doc README.md — README.md:545
- doc getting-started.md — docs/getting-started.md:119
- doc when-to-use.md — docs/when-to-use.md:34
- doc project-structure.md — docs/project-structure.md:24

## Concepts named — required, verbatim
`Ideation Workflow` — docs/ideation-workflow.md:1 — defined here
`Research & Discovery` — docs/ideation-workflow.md:43 — defined here
`Validation & Consensus` — docs/ideation-workflow.md:51 — defined here
`Epic & PRD Creation` — docs/ideation-workflow.md:63 — defined here
`Implementation Plan Review` — docs/ideation-workflow.md:75 — defined here
`Work Breakdown Structure` — docs/ideation-workflow.md:5 — used here
`ROOT agent` — docs/ideation-workflow.md:31 — used here

## Structure
# Ideation Workflow — docs/ideation-workflow.md:1
## Overview — docs/ideation-workflow.md:3
## When to Use — docs/ideation-workflow.md:7
### Example Triggers — docs/ideation-workflow.md:17
## Workflow Phases — docs/ideation-workflow.md:29
## Phase Details — docs/ideation-workflow.md:89
### Phase 1: Research & Discovery — docs/ideation-workflow.md:91
### Phase 2: Validation & Consensus — docs/ideation-workflow.md:121
### Phase 3: Epic & PRD Creation — docs/ideation-workflow.md:144
### Phase 4: Implementation Plan Review — docs/ideation-workflow.md:179
## Agent Sequence — docs/ideation-workflow.md:201
## Artifacts Summary — docs/ideation-workflow.md:212
## Exit Points — docs/ideation-workflow.md:223
## Example: DotNet.ReproducibleBuilds — docs/ideation-workflow.md:234
## Related Documents — docs/ideation-workflow.md:268

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines a comprehensive pre-lifecycle funnel coordinating 11 distinct agent roles (analyst, high-level-advisor, independent-thinker, critic, roadmap, explainer, task-decomposer, architect, devops, security, qa) under orchestrator ROOT control.
- Explicitly models three branching outcomes from Phase 2 validation: Proceed (continue to epic/PRD creation), Defer (write to backlog with reactivation triggers), or Reject (document rationale and notify user).
- In Phase 4, enables parallel execution of architect, devops, security, and qa for multi-perspective implementation plan review.

## Context cost
10262 bytes, ~2500 tokens. Standalone workflow documentation.
