---
package: rjm
name: orchestrator routing algorithm
slug: orchestrator-routing-algorithm
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# orchestrator routing algorithm

## Definition — verbatim
(used, not defined)

> "This document provides a visual representation of the orchestrator routing algorithm." — docs/diagrams/routing-flowchart.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 5 | used here | Algorithmic routing model visually depicted through sequential decision flowcharts. |

## Consumes
Incoming user tasks, classification triggers, complexity thresholds, and agent risk profiles.

## Produces
Assembled specialist agent sequences, concurrency groupings, and synthesized responses.

## When applied
Applied at the start of orchestrator-routed user sessions to determine execution architecture.

## Sub-concepts
phase-2-select, phase-3-execute, phase-4-synthesize

## Part of
orchestrator

## Implementation status
defects: missing-path

## Design notes
The orchestrator routing algorithm is the core dispatch logic of rjm's orchestrator. It processes tasks through four consecutive phases: Classify (identifying task type, complexity, risk), Select (picking primary and mandatory agents), Execute (scheduling serial queues and parallel groups), and Synthesize (resolving conflicting findings and packaging final output).
