---
package: rjm
name: EXIT_UNRESOLVED
slug: exit-unresolved
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXIT_UNRESOLVED

## Definition — verbatim
(used, not defined)

> "EXIT_UNRESOLVED = 1" — scripts/validation/check_skill_memory_references.py:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 93 | defined here | Constant defining the process exit code (1) when unresolved memory references are detected. |

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
defects: doc-drift

## Design notes
`EXIT_UNRESOLVED` is a Python exit code constant identifier signaling validation failure rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
