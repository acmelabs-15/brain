---
package: rjm
name: DECISION_KEEP
slug: decision-keep
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

# DECISION_KEEP

## Definition — verbatim
(used, not defined)

> "DECISION_KEEP = \"KEEP_PIN\"" — scripts/eval/_model_sweep_core.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 70 | defined here | Constant identifier defining the string literal "KEEP_PIN" representing the sweep decision to retain an agent model pin. |

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
DECISION_KEEP is a Python string constant identifier binding the KEEP_PIN verdict symbol in the model sweep evaluation module rather than a lifecycle concept, classified as name-only per D-023.
