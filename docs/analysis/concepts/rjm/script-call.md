---
package: rjm
name: SCRIPT_CALL
slug: script-call
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
