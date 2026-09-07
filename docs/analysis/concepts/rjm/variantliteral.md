---
package: rjm
name: VariantLiteral
slug: variantliteral
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VariantLiteral

## Definition — verbatim
(used, not defined)

> "VariantLiteral = Literal[\"agent\", \"baseline\", \"skill\"]" — scripts/eval/_eval_agent_types.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_agent_types.py | 26 | defined here | Type alias defining evaluation delivery variants comparing agent, baseline, and skill forms. |
| scripts/eval/_plan_runner.py | 12 | used here | Imported type annotation used in planning and cost estimation routines. |
| scripts/eval/eval-agent-vs-baseline.py | 46 | used here | Imported type annotation used in evaluation execution and report aggregation. |

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
defects: exit-code-mismatch, script-bug

## Design notes
A Python typing Literal alias in `_eval_agent_types.py` constraining evaluated delivery form-factor variants, classified as `name-only` per D-023.
