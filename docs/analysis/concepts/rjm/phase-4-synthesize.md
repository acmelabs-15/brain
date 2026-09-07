---
package: rjm
name: PHASE 4: SYNTHESIZE
slug: phase-4-synthesize
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

# PHASE 4: SYNTHESIZE

## Definition — verbatim
(used, not defined)

> "PHASE 4: SYNTHESIZE" — docs/diagrams/routing-flowchart.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 41 | used here | Terminal phase in the orchestrator main routing flow, collecting outputs and resolving conflicts. |

## Consumes
Agent outputs, recommendations, and execution artifacts produced in Phase 3 (Execute).

## Produces
Unified response artifact, conflict detection records, and final delivered result.

## When applied
Applied as the concluding phase of orchestrator routing once all executed agent tasks complete.

## Sub-concepts
none

## Part of
orchestrator-routing-algorithm

## Implementation status
defects: missing-path

## Design notes
PHASE 4: SYNTHESIZE is the concluding stage of rjm's orchestrator routing pipeline. It collects outputs from all executed agents, scans for contradictory recommendations or findings, resolves conflicts using the system hierarchy of authority (security > architect > critic > escalation), and delivers a unified result to the user.
