---
package: rjm
name: PHASE 2: SELECT
slug: phase-2-select
kind: phase
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

# PHASE 2: SELECT

## Definition — verbatim
(used, not defined)

> "PHASE 2: SELECT" — docs/diagrams/routing-flowchart.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 23 | used here | Second phase in the orchestrator main routing flow, selecting primary and mandatory agents. |

## Consumes
Task type, complexity classification, and risk level from Phase 1 (Classify).

## Produces
Selected primary agent, ordered agent sequence, and mandatory guardrail agent additions.

## When applied
Applied during orchestrator routing immediately following task classification.

## Sub-concepts
none

## Part of
orchestrator-routing-algorithm

## Implementation status
defects: missing-path

## Design notes
PHASE 2: SELECT is the agent selection stage of rjm's orchestrator routing pipeline. It consumes the task classification and risk metrics to choose the primary specialist agent, build the complete agent sequence from sequence maps, and append mandatory guardrails (such as security or QA) before execution begins.
