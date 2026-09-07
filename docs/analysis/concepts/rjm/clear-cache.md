---
package: rjm
name: clear_cache
slug: clear-cache
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# clear_cache

## Definition — verbatim
(used, not defined)

> "def clear_cache() -> None:" — scripts/traceability/traceability_cache.py:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/traceability_cache.py | 112 | defined here | Defines function resetting in-memory dictionary and unlinking cached JSON files on disk. |
| scripts/traceability/update_spec_references.py | 35 | used here | Imported to invalidate traceability cache after modifying specification references. |

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
defects: other, script-bug, orphan

## Design notes
A Python utility function identifier for cache eviction rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
