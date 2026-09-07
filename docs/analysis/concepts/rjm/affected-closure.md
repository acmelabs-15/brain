---
package: rjm
name: affected_closure
slug: affected-closure
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# affected_closure

## Definition — verbatim
(used, not defined)

> "def affected_closure(" — scripts/test_selection/import_graph.py:334

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 334 | defined here | Function computing the set of all files transitively importing any changed file plus the changed files. |

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
`affected_closure` is a Python function identifier in `scripts/test_selection/import_graph.py` computing transitive dependency closures across an inverted import graph rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
