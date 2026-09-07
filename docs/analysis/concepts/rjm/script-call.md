---
package: rjm
name: SCRIPT_CALL
slug: script-call
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SCRIPT_CALL

## Definition — verbatim
(used, not defined)

> "SCRIPT_CALL = re.compile" — scripts/validation/check_skill_contract_tests.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 59 | defined here | Compiled regex detecting command invocations for python, bash, sh, or pwsh scripts in skill text. |

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
defects: orphan

## Design notes
A compiled regular expression constant in `scripts/validation/check_skill_contract_tests.py` matching script invocations, classified as `name-only` per D-023.
