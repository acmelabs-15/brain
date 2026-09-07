---
package: rjm
name: _tracked_test_files
slug: tracked-test-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _tracked_test_files

## Definition — verbatim
(used, not defined)

> "def _tracked_test_files(repo_root: Path) -> list[Path]:" — scripts/validation/check_duplicate_test_helpers.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_duplicate_test_helpers.py | 64 | defined here | Discovers test files to scan using git ls-files or filesystem walking. |
| scripts/validation/check_test_tree_writes.py | 205 | defined here | Discovers tracked test files matching test naming patterns via git ls-files. |

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
defects: other

## Design notes
_tracked_test_files is an internal Python helper function identifier discovering test files rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
