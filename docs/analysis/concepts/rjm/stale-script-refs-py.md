---
package: rjm
name: stale_script_refs.py
slug: stale-script-refs-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# stale_script_refs.py

## Definition — verbatim
(used, not defined)

> "# The historical roots in scripts/validation/stale_script_refs.py HISTORICAL_ROOTS" — scripts/validation/check_adr_links_baseline.txt:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 31 | used here | Baseline comment noting that historical roots defined in stale_script_refs.py are exempt from link tracking. |
| scripts/validation/check_adr_links.py | 97 | used here | Import comment citing stale_script_refs.py for shared HISTORICAL_ROOTS constant. |

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
`stale_script_refs.py` is a validation script file name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
