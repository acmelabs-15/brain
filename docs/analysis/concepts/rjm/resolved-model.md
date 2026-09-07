---
package: rjm
name: resolved model
slug: resolved-model
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval_runtime_parity.py, sha256: b82cb3ba9712885b31d0393a91be3a2c390ebeb27c3759d1f2c8f61c5a8d281f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolved model

## Definition — verbatim
(used, not defined)

> "its non-interactive prompt flag. Reports keep runtime events, resolved model" — scripts/eval/eval_runtime_parity.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_runtime_parity.py | 6 | defined here | Evaluation report attribute recording the underlying model identifier chosen by the CLI runtime. |

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
defects: script-bug

## Design notes
A runtime reporting property in `eval_runtime_parity.py` capturing the concrete LLM model identifier resolved during execution, classified as name-only per D-023.
