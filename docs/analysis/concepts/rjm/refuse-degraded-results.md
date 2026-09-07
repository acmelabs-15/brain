---
package: rjm
name: refuse_degraded_results
slug: refuse-degraded-results
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# refuse_degraded_results

## Definition — verbatim
(used, not defined)

> "def refuse_degraded_results(results: list[ModelResult]) -> None:" — scripts/eval/_model_sweep_core.py:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 153 | defined here | Function rejecting model sweep runs containing errored or degraded fixture outcomes. |

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
refuse_degraded_results is a Python validation function in _model_sweep_core.py checking error counts in model reports rather than an SDLC lifecycle concept, classified as name-only per D-023.
