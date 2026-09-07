---
package: rjm
name: _collect_issues
slug: collect-issues
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _collect_issues

## Definition — verbatim
(used, not defined)

> "def _collect_issues(" — scripts/review_memory_export_security.py:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/review_memory_export_security.py | 150 | defined here | Iterates through sensitive pattern categories to aggregate detected security issues and total match counts. |

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
`_collect_issues` is an internal aggregation function in a memory export security script rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
