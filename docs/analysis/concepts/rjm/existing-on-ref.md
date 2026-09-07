---
package: rjm
name: existing_on_ref
slug: existing-on-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# existing_on_ref

## Definition — verbatim
(used, not defined)

> "def existing_on_ref(repo_root: Path, ref: str = \"HEAD\") -> set[str]:" — scripts/validation/check_colocated_skill_tests.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_colocated_skill_tests.py | 57 | defined here | Helper function returning tracked paths existing on a git reference to support legacy test tolerance. |

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
A Python helper function identifier in `check_colocated_skill_tests.py` querying pre-existing tracked files on a git ref, classified as `name-only` per D-023.
