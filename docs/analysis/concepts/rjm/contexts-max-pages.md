---
package: rjm
name: _CONTEXTS_MAX_PAGES
slug: contexts-max-pages
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _CONTEXTS_MAX_PAGES

## Definition — verbatim
(used, not defined)

> "_CONTEXTS_MAX_PAGES = 50" — scripts/pr_maintenance_rollup.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 19 | defined here | Constant setting maximum pagination depth for status check contexts. |

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
`_CONTEXTS_MAX_PAGES` is an internal Python constant bounding pagination iterations when fetching PR status check contexts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
