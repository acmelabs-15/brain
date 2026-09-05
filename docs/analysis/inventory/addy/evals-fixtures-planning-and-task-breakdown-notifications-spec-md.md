---
package: addy
path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md
type: doc
bytes: 854
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md, sha256: 9705170691d53703e42a0494ead60b09c4d7aa0bd48444426ad8fe8ace6f87f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/planning-and-task-breakdown/notifications-spec.md

## Purpose — required, verbatim
> "# Notifications specification" — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:1

## Design intent — required
Provides a realistic feature specification describing opt-in task assignment and overdue email notifications. Outlines concrete requirements, verification criteria, and strict out-of-scope boundaries. Used as the input specification in eval case #1 of `planning-and-task-breakdown` to test whether an agent can decompose a complex specification into a sequence of small, verifiable vertical slice tasks without prematurely jumping into implementation code.

## Phase — required
none

## Inputs — required
Narrative context describing opt-in email notifications for task assignment and overdue triggers at evals/fixtures/planning-and-task-breakdown/notifications-spec.md:3-5.

## Outputs — required
Enumerates 6 functional requirements at evals/fixtures/planning-and-task-breakdown/notifications-spec.md:9-14, verification test scope at evals/fixtures/planning-and-task-breakdown/notifications-spec.md:16-17, and explicit out-of-scope negative boundaries at evals/fixtures/planning-and-task-breakdown/notifications-spec.md:18.

## Invokes — required
none

## Invoked by — required
"planning-and-task-breakdown" — evals/cases/planning-and-task-breakdown.json:34

## Concepts named — required, verbatim
- `Notifications specification` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:1 — defined here
- `boundary validation` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:9 — used here
- `Feature flag` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:14 — used here
- `integration tests` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:17 — used here

## Structure
- Document title: "# Notifications specification" — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:1
- User story and system background — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:3-5
- Requirements section — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:7-14
- Verification scope and out-of-scope boundaries — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:16-18

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplar concise specification with clear architectural constraints (job deduplication, adapter pattern, delivery status logging without message bodies, feature flags) and negative boundary definitions.

## Context cost
854 bytes, ~190 tokens.
