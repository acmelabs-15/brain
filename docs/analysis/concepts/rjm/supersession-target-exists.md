---
package: rjm
name: supersession-target-exists
slug: supersession-target-exists
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# supersession-target-exists

## Definition — verbatim
(used, not defined)

> "    \"supersession-target-exists\": 0," — scripts/validation/adr_lifecycle_baseline.json:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 9 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 32 | defined here | Cited in module docstring as closing broken supersession target defects. |

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
`supersession-target-exists` is a check name and baseline configuration key verifying that superseded ADR identifiers resolve to existing files without self-supersession rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
