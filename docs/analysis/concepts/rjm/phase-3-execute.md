---
package: rjm
name: PHASE 3: EXECUTE
slug: phase-3-execute
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

# PHASE 3: EXECUTE

## Definition — verbatim
(used, not defined)

> "PHASE 3: EXECUTE" — docs/diagrams/routing-flowchart.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 32 | used here | Third phase in the orchestrator main routing flow, scheduling serial and parallel execution. |

## Consumes
Assembled agent sequence from Phase 2 (Select).

## Produces
Scheduled serial execution queues, parallel execution groups, and individual agent output artifacts.

## When applied
Applied during orchestrator routing after the agent sequence has been constructed.

## Sub-concepts
serial-group, parallel-group

## Part of
orchestrator-routing-algorithm

## Implementation status
defects: missing-path

## Design notes
PHASE 3: EXECUTE is the operational execution stage of rjm's orchestrator routing pipeline. It determines execution strategies by testing agent pair compatibility, grouping mutually independent tasks into concurrent parallel groups while scheduling dependent steps into sequential serial queues that pass outputs forward.
