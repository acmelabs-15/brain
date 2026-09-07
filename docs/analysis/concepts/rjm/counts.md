---
package: rjm
name: counts
slug: counts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# counts

## Definition — verbatim
(used, not defined)

> "  \"counts\": {" — scripts/validation/adr_lifecycle_baseline.json:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 4 | defined here | JSON schema dictionary key mapping ADR lifecycle check names to allowed violation count ceilings. |

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
`counts` is a JSON schema object key mapping ADR lifecycle check names to allowed violation count ceilings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
