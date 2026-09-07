---
package: rjm
name: RULES_SUBDIR
slug: rules-subdir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# RULES_SUBDIR

## Definition — verbatim
(used, not defined)

> "RULES_SUBDIR = Path" — scripts/validation/check_rule_activation_coverage.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 78 | defined here | Path constant defining the prompt rules directory relative to the repository root. |

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
`RULES_SUBDIR` is a Python path constant designating the relative filesystem directory where prompt rules reside, classified as `kind: name-only` per D-023.
