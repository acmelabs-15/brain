---
package: rjm
name: PARALLEL GROUP
slug: parallel-group
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

# PARALLEL GROUP

## Definition — verbatim
(used, not defined)

> "PARALLEL[PARALLEL GROUP<br/>Execute agents<br/>concurrently]" — docs/diagrams/routing-flowchart.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/diagrams/routing-flowchart.md | 38 | used here | Execution strategy branch scheduling mutually independent agents for concurrent execution. |

## Consumes
Independent agents in the selected sequence that share no upstream-downstream data dependencies.

## Produces
Concurrent subagent execution jobs yielding independent analytical or verification reports.

## When applied
Applied during Phase 3 (Execute) when the orchestrator determines that two or more agents can safely execute simultaneously.

## Sub-concepts
none

## Part of
phase-3-execute

## Implementation status
defects: missing-path

## Design notes
PARALLEL GROUP is an orchestrator execution strategy in rjm that runs independent subagents concurrently. By identifying agents whose inputs do not depend on sibling agent outputs, the orchestrator reduces total wall-clock time while maintaining thorough multi-perspective coverage.
