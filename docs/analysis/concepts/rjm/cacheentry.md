---
package: rjm
name: CacheEntry
slug: cacheentry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CacheEntry

## Definition — verbatim
(used, not defined)

> "A cached classification result with hit tracking." — scripts/llm_classification/cache.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/cache.py | 16 | defined here | Dataclass holding a cached classification result and its hit count. |

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
clean

## Design notes
`CacheEntry` is an internal Python dataclass representing a cached result with access counters rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
