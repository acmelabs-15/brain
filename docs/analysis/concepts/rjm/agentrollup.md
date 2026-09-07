---
package: rjm
name: AgentRollup
slug: agentrollup
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/eval_run_rollup.py, sha256: 753a8fee7f7e9c6e8be84160aadeb914cc92a954b39e96c482c0214f422821ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AgentRollup

## Definition — verbatim
(used, not defined)

> "class AgentRollup:" — scripts/eval/_run_rollup_core.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_rollup_core.py | 79 | defined here | Dataclass representing aggregated performance metrics and cost totals for a single agent. |
| scripts/eval/eval_run_rollup.py | 31 | used here | Imported and re-exported as part of the public rollup interface. |

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
AgentRollup is a Python dataclass encapsulating per-agent aggregated metrics for evaluation reporting rather than a lifecycle concept.
