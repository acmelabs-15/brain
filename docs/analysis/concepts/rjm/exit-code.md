---
package: rjm
name: EXIT_CODE
slug: exit-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXIT_CODE

## Definition — verbatim
(used, not defined)

> "EXIT_CODE = re.compile" — scripts/validation/check_skill_contract_tests.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 56 | defined here | Compiled regex matching documented exit-code semantics in SKILL.md documentation. |

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
A compiled regular expression constant in `scripts/validation/check_skill_contract_tests.py` matching exit codes in documentation, classified as `name-only` per D-023.
