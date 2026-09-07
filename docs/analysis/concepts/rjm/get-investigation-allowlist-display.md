---
package: rjm
name: get_investigation_allowlist_display
slug: get-investigation-allowlist-display
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_investigation_allowlist_display

## Definition — verbatim
(used, not defined)

> "def get_investigation_allowlist_display() -> list[str]:" — scripts/modules/investigation_allowlist.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 31 | defined here | Defines function returning human-readable allowed path patterns for error display. |
| scripts/validation/test_investigation_eligibility.py | 26 | used here | Imported to populate allowed paths list in the investigation eligibility report. |

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
A Python helper function identifier returning human-readable allowed paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
