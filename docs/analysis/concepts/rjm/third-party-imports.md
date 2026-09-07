---
package: rjm
name: third_party_imports
slug: third-party-imports
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# third_party_imports

## Definition — verbatim
(used, not defined)

> "def third_party_imports(" — scripts/validation/check_doc_interpreter_portability.py:340

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 340 | defined here | Function resolving third-party module imports for a specified script path. |
| scripts/validation/check_python3_entrypoints.py | 34 | defined here | Frozenset constant listing top-level third-party module import names. |

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
A Python helper function and dependency constant detecting third-party module imports in scripts, classified as name-only per D-023.
