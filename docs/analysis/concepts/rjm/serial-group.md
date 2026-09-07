---
package: rjm
name: SERIAL GROUP
slug: serial-group
kind: pattern
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

# SERIAL GROUP

## Definition — verbatim
(used, not defined)

> "SERIAL[SERIAL GROUP<br/>Execute one by<br/>one, passing<br/>outputs forward]" — docs/diagrams/routing-flowchart.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 37 | used here | Execution strategy branch scheduling dependent agents to execute one by one, passing outputs forward. |

## Consumes
Dependent agents in the selected sequence where downstream agents require prior findings or generated artifacts.

## Produces
Ordered sequential agent execution pipeline with accumulated context passed forward.

## When applied
Applied during Phase 3 (Execute) when agent tasks have direct data or logical dependencies.

## Sub-concepts
none

## Part of
phase-3-execute

## Implementation status
defects: missing-path

## Design notes
SERIAL GROUP is an orchestrator execution strategy in rjm that arranges dependent agents into a strictly ordered pipeline. Each agent executes to completion and hands its output forward as input context to the next specialist, preventing concurrency conflicts when tasks require progressive refinement.
