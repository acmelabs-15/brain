---
package: rjm
name: is_cache_fresh
slug: is-cache-fresh
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_cache_fresh

## Definition — verbatim
(used, not defined)

> "def is_cache_fresh(repo_root: Path, cache_path: Path | None = None) -> bool:" — scripts/test_selection/import_graph.py:253

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 253 | defined here | Predicate checking if the on-disk import graph cache exists and is newer than all Python sources and pyproject.toml. |

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
`is_cache_fresh` is a Python function identifier in `scripts/test_selection/import_graph.py` evaluating timestamp validity of the serialized test import graph rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
