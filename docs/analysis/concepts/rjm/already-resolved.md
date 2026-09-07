---
package: rjm
name: ALREADY_RESOLVED
slug: already-resolved
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ALREADY_RESOLVED

## Definition — verbatim
(used, not defined)

> "If contains '✅ RESOLVED' → ALREADY_RESOLVED, skip" — scripts/incoherence.py:519

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 519 | defined here | Classification state indicating an incoherence issue was previously reconciled and should be skipped. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
An internal resolution parser classification state in `scripts/incoherence.py` indicating prior reconciliation rather than an independent lifecycle concept.
