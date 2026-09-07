---
package: rjm
name: _CACHE_DIR
slug: cache-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _CACHE_DIR

## Definition — verbatim
(used, not defined)

> "_CACHE_DIR = Path(__file__).resolve().parent.parent.parent" — scripts/traceability/traceability_cache.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/traceability_cache.py | 28 | defined here | Constant defining persistent disk directory path for traceability JSON cache files. |

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
A filesystem path constant identifier for disk caching rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
