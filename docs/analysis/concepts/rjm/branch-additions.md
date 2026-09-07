---
package: rjm
name: branch_additions
slug: branch-additions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# branch_additions

## Definition — verbatim
(used, not defined)

> "def branch_additions(repo_root: Path, base: str = \"origin/main\") -> list[str]:" — scripts/validation/check_colocated_skill_tests.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_colocated_skill_tests.py | 116 | defined here | Helper function returning file paths added on a git branch relative to a base reference. |

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
A Python helper function identifier in `check_colocated_skill_tests.py` querying git branch diff additions, classified as `name-only` per D-023.
