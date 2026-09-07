---
package: rjm
name: SKILLS_SUBDIR
slug: skills-subdir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SKILLS_SUBDIR

## Definition — verbatim
(used, not defined)

> "SKILLS_SUBDIR = Path" — scripts/validation/check_rule_activation_coverage.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 79 | defined here | Path constant defining the skills directory relative to the repository root. |

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
`SKILLS_SUBDIR` is a Python path constant designating the relative filesystem directory where agent skills reside, classified as `kind: name-only` per D-023.
