---
package: rjm
name: execute_moves
slug: execute-moves
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# execute_moves

## Definition — verbatim
(used, not defined)

> "def execute_moves(" — scripts/restructure_memories.py:367

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 367 | defined here | Executes directory creation and file relocation on disk according to the planned moves. |

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
`execute_moves` is an internal Python migration function that performs disk directory creation and file relocation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
