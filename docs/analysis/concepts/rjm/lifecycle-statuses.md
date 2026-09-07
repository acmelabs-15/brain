---
package: rjm
name: LIFECYCLE_STATUSES
slug: lifecycle-statuses
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# LIFECYCLE_STATUSES

## Definition — verbatim
(used, not defined)

> "LIFECYCLE_STATUSES: frozenset[str] = frozenset(" — scripts/validation/check_adr_lifecycle.py:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 154 | defined here | Frozenset constant defining the five valid ADR lifecycle status enum values. |

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
A Python frozenset constant identifier enumerating the allowable ADR lifecycle status strings from ADR-073, classified as `name-only` per D-023 because it is a code identifier rather than a development lifecycle concept.
