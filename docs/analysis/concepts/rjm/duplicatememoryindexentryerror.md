---
package: rjm
name: DuplicateMemoryIndexEntryError
slug: duplicatememoryindexentryerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DuplicateMemoryIndexEntryError

## Definition — verbatim
(used, not defined)

> "class DuplicateMemoryIndexEntryError(ValueError):" — scripts/update_memory_index_tokens.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 43 | defined here | Custom exception raised when duplicate memory index rows cannot be safely deduplicated. |

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
A Python exception class identifier raised during memory index deduplication rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
