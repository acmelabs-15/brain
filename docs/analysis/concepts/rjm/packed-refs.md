---
package: rjm
name: packed-refs
slug: packed-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# packed-refs

## Definition — verbatim
(used, not defined)

> "Repair blank-line corruption in git packed-refs files." — scripts/maintenance/repair_packed_refs.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 2 | used here | Git repository internal storage file for packed references targeted for repair. |

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
packed-refs is a standard Git repository metadata file storing reference mappings rather than an SDLC lifecycle concept, classified as name-only per D-023.
