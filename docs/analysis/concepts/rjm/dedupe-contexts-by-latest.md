---
package: rjm
name: dedupe_contexts_by_latest
slug: dedupe-contexts-by-latest
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# dedupe_contexts_by_latest

## Definition — verbatim
(used, not defined)

> "def dedupe_contexts_by_latest(contexts: list[dict[str, Any]]) -> list[dict[str, Any]]:" — scripts/pr_maintenance_rollup.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 125 | defined here | Helper keeping only the most recent status check run for each check name. |

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
`dedupe_contexts_by_latest` is a Python helper function identifier deduplicating check runs by check name and timestamp rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
