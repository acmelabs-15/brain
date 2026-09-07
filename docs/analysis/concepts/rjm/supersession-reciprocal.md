---
package: rjm
name: supersession-reciprocal
slug: supersession-reciprocal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# supersession-reciprocal

## Definition — verbatim
(used, not defined)

> "    \"supersession-reciprocal\": 0," — scripts/validation/adr_lifecycle_baseline.json:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 8 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 69 | defined here | Documented in check listing as enforcing bidirectional supersession reciprocity and cycle absence. |

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
`supersession-reciprocal` is a check name and baseline configuration key enforcing bidirectional consistency and cycle absence in ADR supersession graphs rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
