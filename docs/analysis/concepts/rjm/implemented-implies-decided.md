---
package: rjm
name: implemented-implies-decided
slug: implemented-implies-decided
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# implemented-implies-decided

## Definition — verbatim
(used, not defined)

> "A check called `implemented-implies-decided` (`implemented: true` with" — scripts/validation/check_adr_lifecycle.py:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 85 | used here | Named validation check that was removed from the ADR lifecycle gate because ADR-073 and ADR-098 permit proposed implementations. |

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
A proposed validation rule identifier that was removed from ADR lifecycle validation per ADR-098, classified as `name-only` per D-023 because it is a check name rather than an active development lifecycle concept.
