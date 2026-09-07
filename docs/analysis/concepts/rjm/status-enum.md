---
package: rjm
name: status-enum
slug: status-enum
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# status-enum

## Definition — verbatim
(used, not defined)

> "    \"status-enum\": 0," — scripts/validation/adr_lifecycle_baseline.json:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 7 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 68 | defined here | Documented in check listing as verifying status is one of the five lifecycle values. |

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
`status-enum` is a check name and baseline configuration key verifying that an ADR status value belongs to the allowed lifecycle status enum rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
