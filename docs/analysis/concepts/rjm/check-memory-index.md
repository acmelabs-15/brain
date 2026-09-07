---
package: rjm
name: check_memory_index
slug: check-memory-index
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_memory_index

## Definition — verbatim
(used, not defined)

> "def check_memory_index(index_path: Path, memories_dir: Path) -> list[str]:" — scripts/update_memory_index_tokens.py:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 127 | defined here | Defines validation function detecting drifted memory token counts without writing changes. |

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
A Python verification function identifier checking memory index token counts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
