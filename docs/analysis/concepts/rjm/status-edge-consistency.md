---
package: rjm
name: status-edge-consistency
slug: status-edge-consistency
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# status-edge-consistency

## Definition — verbatim
(used, not defined)

> "    \"status-edge-consistency\": 0" — scripts/validation/adr_lifecycle_baseline.json:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 12 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 74 | defined here | Documented in check listing as requiring status superseded if and only if a superseded-by edge resolves. |

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
`status-edge-consistency` is a check name and baseline configuration key verifying that an ADR has status superseded if and only if a superseded-by edge resolves rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
