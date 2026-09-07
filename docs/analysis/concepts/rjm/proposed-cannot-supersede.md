---
package: rjm
name: proposed-cannot-supersede
slug: proposed-cannot-supersede
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# proposed-cannot-supersede

## Definition — verbatim
(used, not defined)

> "    \"proposed-cannot-supersede\": 0," — scripts/validation/adr_lifecycle_baseline.json:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/adr_lifecycle_baseline.json | 10 | defined here | Per-check ADR lifecycle violation ceiling set to 0 in baseline JSON. |
| scripts/validation/check_adr_lifecycle.py | 72 | defined here | Documented in check listing as preventing proposed records from declaring supersedes. |

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
`proposed-cannot-supersede` is a check name and baseline configuration key verifying that proposed ADRs do not declare superseding relationships rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
