---
package: rjm
name: get_cache_stats
slug: get-cache-stats
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_cache_stats

## Definition — verbatim
(used, not defined)

> "def get_cache_stats() -> dict[str, Any]:" — scripts/traceability/traceability_cache.py:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/traceability_cache.py | 124 | defined here | Defines diagnostic function returning entry counts and directory path for the cache. |

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
defects: other

## Design notes
A Python diagnostic function identifier inspecting cache metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
