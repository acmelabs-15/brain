---
package: rjm
name: evaluate_thresholds
slug: evaluate-thresholds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# evaluate_thresholds

## Definition — verbatim
(used, not defined)

> "def evaluate_thresholds(state: dict[str, Any], threshold: int) -> dict[str, Any]:" — scripts/eval/software_engineering_library_activation_gate.py:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 128 | defined here | Function evaluating whether any moved references have reached the consecutive failure threshold and generating the threshold report. |

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
`evaluate_thresholds` is a Python function identifier in `software_engineering_library_activation_gate.py` computing rollback threshold status rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
