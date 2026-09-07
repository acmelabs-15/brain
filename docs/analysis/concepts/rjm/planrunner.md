---
package: rjm
name: PlanRunner
slug: planrunner
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PlanRunner

## Definition — verbatim
(used, not defined)

> "PlanRunner: cost + scope estimation. DESIGN-004 §5.3a." — scripts/eval/_plan_runner.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 28 | defined here | Component for cost and plan execution estimation. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 61 | defined here | Task row specifying creation of PlanRunner.build_plan() and cost estimation. |
| scripts/eval/_plan_runner.py | 1 | defined here | Module docstring defining PlanRunner purpose and scope. |
| scripts/eval/eval-agent-vs-baseline.py | 6 | used here | Referenced in evaluation pipeline flow diagram. |

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
defects: doc-drift, exit-code-mismatch, missing-path, script-bug

## Design notes
PlanRunner is a Python component class identifier calculating evaluation run scope and estimated API execution cost, classified as name-only per D-023.
