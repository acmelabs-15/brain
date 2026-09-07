---
package: rjm
name: update_line
slug: update-line
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# update_line

## Definition — verbatim
(used, not defined)

> "def update_line(line: str, memories_dir: Path) -> str:" — scripts/update_memory_index_tokens.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 47 | defined here | Defines function updating token count annotations for all memory links in a line. |

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
A Python helper function identifier updating token annotations within a single line rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
