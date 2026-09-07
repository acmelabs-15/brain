---
package: rjm
name: ExecutionPlan
slug: executionplan
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ExecutionPlan

## Definition — verbatim
> "Output of `PlanRunner.build_plan()`. Used by both dry-run and live paths." — scripts/eval/_eval_agent_types.py:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 168 | defined here | Specified as the dataclass returned by `build_plan()` detailing planned calls, tokens, and cost. |
| scripts/eval/_eval_agent_types.py | 203 | defined here | Defined as the canonical dataclass capturing execution fixtures, variants, call counts, and cost projections. |
| scripts/eval/_plan_runner.py | 12 | used here | Imported and instantiated by `PlanRunner.build_plan()`. |
| scripts/eval/eval-agent-vs-baseline.py | 53 | used here | Imported and utilized to display plan metrics on dry runs and guide live execution. |

## Consumes
List of test fixtures, model identifier, run count, variants tuple, and token pricing rates.

## Produces
Summary of planned API calls, estimated input/output tokens, estimated cost in USD, and pricing timestamp.

## When applied
Constructed during pre-flight evaluation planning before executing any model API requests.

## Sub-concepts
none

## Part of
eval-agent-vs-baseline

## Implementation status
clean

## Design notes
`ExecutionPlan` is the pre-flight estimation and planning artifact in rjm's evaluation harness. Constructed by `PlanRunner.build_plan()`, it calculates total API call volume, heuristic token consumption, and projected financial cost against published provider rates. It powers the dry-run CLI mode and ensures live runs execute against audited bounds.
