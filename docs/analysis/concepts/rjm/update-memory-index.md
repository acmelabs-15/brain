---
package: rjm
name: update_memory_index
slug: update-memory-index
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# update_memory_index

## Definition — verbatim
(used, not defined)

> "def update_memory_index(index_path: Path, memories_dir: Path) -> bool:" — scripts/update_memory_index_tokens.py:160

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 160 | defined here | Defines function updating token count annotations across the entire memory index file. |

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
defects: missing-path, other

## Design notes
A Python utility function identifier synchronizing memory index token counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
