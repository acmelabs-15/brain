---
package: rjm
name: is_historical_path
slug: is-historical-path
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_historical_path

## Definition — verbatim
(used, not defined)

> "def is_historical_path(path: str) -> bool:" — scripts/validation/check_adr_links.py:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 196 | defined here | Helper function returning whether a path sits in a history-only root that is never repaired. |
| scripts/validation/stale_script_refs.py | 68 | defined here | Helper function determining whether a documentation path belongs to an exempt historical directory. |

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
defects: doc-drift, missing-path

## Design notes
`is_historical_path` is a Python helper function identifier in repository validation scripts filtering out historical directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
