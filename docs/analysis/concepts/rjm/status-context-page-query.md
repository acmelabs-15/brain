---
package: rjm
name: _STATUS_CONTEXT_PAGE_QUERY
slug: status-context-page-query
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _STATUS_CONTEXT_PAGE_QUERY

## Definition — verbatim
(used, not defined)

> "_STATUS_CONTEXT_PAGE_QUERY" — scripts/pr_maintenance_rollup.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 25 | defined here | GraphQL query string for paginating PR commit statusCheckRollup contexts. |

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
`_STATUS_CONTEXT_PAGE_QUERY` is an internal constant holding a GraphQL query string for paginating PR commit status check contexts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
