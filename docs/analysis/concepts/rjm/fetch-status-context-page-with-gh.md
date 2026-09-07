---
package: rjm
name: fetch_status_context_page_with_gh
slug: fetch-status-context-page-with-gh
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fetch_status_context_page_with_gh

## Definition — verbatim
(used, not defined)

> "def fetch_status_context_page_with_gh(" — scripts/pr_maintenance_rollup.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 79 | defined here | Helper function querying GitHub CLI wrapper for status check context pages. |

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
`fetch_status_context_page_with_gh` is a Python helper function identifier wrapping the `gh` CLI to paginate status check contexts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
