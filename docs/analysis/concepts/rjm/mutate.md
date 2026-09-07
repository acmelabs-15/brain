---
package: rjm
name: mutate
slug: mutate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# mutate

## Definition — verbatim
(used, not defined)

> "def mutate(path: Path, old: str, new: str, mutation_name: str) -> bytes:" — scripts/mutation_test_proc_group.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mutation_test_proc_group.py | 77 | defined here | Defines helper function substituting text in a target source file and returning original bytes. |

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
A Python helper function identifier applying targeted string mutations to files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
