---
package: rjm
name: _build_agent_rollups
slug: build-agent-rollups
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _build_agent_rollups

## Definition — verbatim
(used, not defined)

> "def _build_agent_rollups(tallies: Iterable[RunTally]) -> dict[str, AgentRollup]:" — scripts/eval/_run_rollup_core.py:279

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_rollup_core.py | 279 | defined here | Aggregates individual RunTally instances into per-agent AgentRollup summary objects. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
_build_agent_rollups is an internal aggregation function accumulating run metrics by agent rather than a lifecycle concept.
