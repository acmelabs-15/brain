---
package: rjm
name: staged_additions
slug: staged-additions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# staged_additions

## Definition — verbatim
(used, not defined)

> "def staged_additions(repo_root: Path) -> list[str]:" — scripts/validation/check_colocated_skill_tests.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_colocated_skill_tests.py | 101 | defined here | Helper function returning file paths staged as additions in git for pre-commit validation. |

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
A Python helper function identifier in `check_colocated_skill_tests.py` inspecting git index additions, classified as `name-only` per D-023.
