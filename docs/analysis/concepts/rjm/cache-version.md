---
package: rjm
name: CACHE_VERSION
slug: cache-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CACHE_VERSION

## Definition — verbatim
(used, not defined)

> "CACHE_VERSION = 3" — scripts/test_selection/import_graph.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 25 | defined here | Module constant defining the current schema version of the serialized import graph cache. |

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
`CACHE_VERSION` is an integer constant in `scripts/test_selection/import_graph.py` defining the schema version for serialized import graph caches rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
