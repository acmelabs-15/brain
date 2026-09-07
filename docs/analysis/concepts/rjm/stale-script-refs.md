---
package: rjm
name: stale_script_refs
slug: stale-script-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# stale_script_refs

## Definition — verbatim
(used, not defined)

> "from stale_script_refs import HISTORICAL_ROOTS, load_allowlist" — scripts/validation/check_adr_links.py:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 100 | used here | Imported as module providing shared HISTORICAL_ROOTS and load_allowlist. |
| scripts/validation/check_citation_freshness.py | 16 | used here | Cited in docstring for its authoritative HISTORICAL_ROOTS definition. |

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
defects: missing-path, doc-drift

## Design notes
`stale_script_refs` is the Python module name for the stale script reference validation tool rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
