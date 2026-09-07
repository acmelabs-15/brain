---
package: rjm
name: MIN_GROUP_SIZE
slug: min-group-size
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MIN_GROUP_SIZE

## Definition — verbatim
(used, not defined)

> "MIN_GROUP_SIZE = 3" — scripts/restructure_memories.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 26 | defined here | Constant defining the minimum file threshold (3) required to create a separate topic subdirectory. |

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
`MIN_GROUP_SIZE` is a Python integer constant identifier defining minimum subdirectory grouping size rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
