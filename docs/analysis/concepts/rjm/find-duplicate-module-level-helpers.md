---
package: rjm
name: find_duplicate_module_level_helpers
slug: find-duplicate-module-level-helpers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_duplicate_module_level_helpers

## Definition — verbatim
(used, not defined)

> "def find_duplicate_module_level_helpers(repo_root: Path) -> list[tuple[Path, str, int, int]]:" — scripts/validation/check_duplicate_test_helpers.py:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_duplicate_test_helpers.py | 131 | defined here | Parses ASTs of test files to identify repeated module-level function definitions. |

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
find_duplicate_module_level_helpers is a Python AST analysis function identifier scanning for duplicate test helper definitions rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
