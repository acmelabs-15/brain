---
package: rjm
name: is_colocated_skill_test
slug: is-colocated-skill-test
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_colocated_skill_test

## Definition — verbatim
(used, not defined)

> "def is_colocated_skill_test(path: str) -> bool:" — scripts/validation/check_colocated_skill_tests.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_colocated_skill_tests.py | 30 | defined here | Function checking if a file path represents a Python test located inside a shipped skill directory. |

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
A Python function identifier in `check_colocated_skill_tests.py` identifying test files inside shipped skill trees, classified as `name-only` per D-023.
