---
package: rjm
name: purge_bytecode
slug: purge-bytecode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# purge_bytecode

## Definition — verbatim
(used, not defined)

> "def purge_bytecode(root: Path) -> None:" — scripts/testing/mutation_workspace.py:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 30 | used here | Imported to delete Python cache directories before test execution in mutation runs. |
| scripts/testing/mutation_workspace.py | 81 | defined here | Defines utility function deleting all `__pycache__` directories below a target path. |

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
A Python utility function identifier that removes cached bytecode directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
