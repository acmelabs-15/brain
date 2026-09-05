---
package: addy
path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md
type: doc
bytes: 854
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md, sha256: 9705170691d53703e42a0494ead60b09c4d7aa0bd48444426ad8fe8ace6f87f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/planning-and-task-breakdown/notifications-spec.md

## Purpose — required, verbatim
> "Users can opt into email notifications when a task is assigned or becomes overdue." — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:3-4

## Design intent — required
Provides a complete functional specification for task email notifications (opt-in preferences, job publication from assignment and overdue events, deduplication, provider adapter delivery, privacy constraint against storing message bodies, and feature flagging). Acts as the input document fixture for evaluating `planning-and-task-breakdown` on breaking a specification into ordered, small, verifiable vertical slices in `tasks/plan.md`.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config planning-and-task-breakdown — evals/cases/planning-and-task-breakdown.json:34

## Concepts named — required, verbatim
- `Notifications specification` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:1 — defined here
- `boundary validation` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:9 — used here
- `provider adapter` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:12 — used here
- `Feature flag` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:14 — used here

## Structure
- "# Notifications specification" — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:1
- "Requirements:" — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Realistic feature specification incorporating boundary validation, deduplication, async job queueing, privacy safeguards, and feature flagging.

## Context cost
854 bytes, ~213 tokens.
