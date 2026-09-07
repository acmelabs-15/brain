---
package: rjm
name: adr_lifecycle_baseline.json
slug: adr-lifecycle-baseline-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# adr_lifecycle_baseline.json

## Definition — verbatim
(used, not defined)

> "`adr_lifecycle_baseline.json` and passes; only a RISE in a check's count fails." — scripts/validation/check_adr_lifecycle.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 61 | used here | Baseline JSON file tracking known violation counts across ADR lifecycle checks to support ratcheted enforcement. |

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
A JSON baseline data file name used to store ratchet debt counts for ADR validation checks, classified as `name-only` per D-023 because it is a file name rather than a development lifecycle concept.
