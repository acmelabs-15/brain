---
package: rjm
name: _memory_cache
slug: memory-cache
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _memory_cache

## Definition — verbatim
(used, not defined)

> "_memory_cache: dict[str, dict[str, Any]] = {}" — scripts/traceability/traceability_cache.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/traceability_cache.py | 26 | defined here | Module-level in-memory dictionary storing parsed spec data by cache key. |

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
A module-level in-memory cache dictionary variable rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
