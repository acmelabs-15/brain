---
package: rjm
name: documented_contracts
slug: documented-contracts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# documented_contracts

## Definition — verbatim
(used, not defined)

> "def documented_contracts(path: Path) -> list[str]:" — scripts/validation/check_skill_contract_tests.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 79 | defined here | Extracts documented exit codes when a skill file also invokes an executable script. |

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
A contract extraction helper function in `scripts/validation/check_skill_contract_tests.py`, classified as `name-only` per D-023.
