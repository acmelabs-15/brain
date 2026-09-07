---
package: rjm
name: _memory_link_targets
slug: memory-link-targets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _memory_link_targets

## Definition — verbatim
(used, not defined)

> "def _memory_link_targets(line: str) -> list[str]:" — scripts/update_memory_index_tokens.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 92 | defined here | Helper function returning all memory markdown file target paths found in a line. |

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
A Python internal helper function identifier extracting link targets from a line rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
