---
package: rjm
name: is_index_file
slug: is-index-file
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_index_file

## Definition — verbatim
(used, not defined)

> "def is_index_file(name: str) -> bool:" — scripts/restructure_memories.py:285

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 285 | defined here | Helper function checking whether a memory filename ends with '-index' to preserve it at the top level. |

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
defects: script-bug

## Design notes
`is_index_file` is a Python helper function identifier checking memory index filename patterns rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
