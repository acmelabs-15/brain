---
package: rjm
name: check_scenario_pass
slug: check-scenario-pass
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_scenario_pass

## Definition — verbatim
(used, not defined)

> "Verdicts are uppercased before comparison; `check_scenario_pass` does an" — scripts/eval/eval-prompt-change.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-prompt-change.py | 55 | defined here | Documented in verdict matching contract as the function performing exact matching against expected verdict. |

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
defects: missing-path

## Design notes
A Python helper function in `eval-prompt-change.py` verifying whether an LLM judge verdict matches expected verdict and reason substrings, classified as name-only per D-023.
