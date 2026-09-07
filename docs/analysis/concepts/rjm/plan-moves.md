---
package: rjm
name: plan_moves
slug: plan-moves
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# plan_moves

## Definition — verbatim
(used, not defined)

> "def plan_moves(memories_dir: Path) -> dict[str, list[str]]:" — scripts/restructure_memories.py:310

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/restructure_memories.py | 310 | defined here | Computes target category subdirectories for memory files, grouping small sets into general. |

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
`plan_moves` is an internal Python migration script function that groups markdown memories into topic subdirectories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
