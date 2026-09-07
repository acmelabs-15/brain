---
package: rjm
name: collapse_duplicate_rows
slug: collapse-duplicate-rows
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# collapse_duplicate_rows

## Definition — verbatim
(used, not defined)

> "def collapse_duplicate_rows(lines: list[str]) -> tuple[list[str], bool]:" — scripts/update_memory_index_tokens.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 96 | defined here | Defines function collapsing identical rows introduced during git union merges. |

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
A Python utility function identifier deduplicating merged index rows rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
