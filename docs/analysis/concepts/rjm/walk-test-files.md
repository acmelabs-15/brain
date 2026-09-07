---
package: rjm
name: _walk_test_files
slug: walk-test-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _walk_test_files

## Definition — verbatim
(used, not defined)

> "def _walk_test_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_duplicate_test_helpers.py:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_duplicate_test_helpers.py | 118 | defined here | Fallback directory walker collecting test files in non-git environments. |

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
_walk_test_files is an internal Python helper function identifier walking test directories rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
