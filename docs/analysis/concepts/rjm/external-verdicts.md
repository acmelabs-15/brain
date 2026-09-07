---
package: rjm
name: EXTERNAL_VERDICTS
slug: external-verdicts
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

# EXTERNAL_VERDICTS

## Definition — verbatim
(used, not defined)

> "EXTERNAL_VERDICTS = {\"FAIL_JUDGE_ERRORS\"}" — scripts/eval/software_engineering_library_activation_gate.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/software_engineering_library_activation_gate.py | 35 | defined here | Set constant defining external measurement failure verdicts that do not increment activation failure streaks. |

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
`EXTERNAL_VERDICTS` is an internal set constant in `software_engineering_library_activation_gate.py` categorizing external evaluation errors rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
