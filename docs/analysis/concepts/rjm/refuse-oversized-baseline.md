---
package: rjm
name: refuse_oversized_baseline
slug: refuse-oversized-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# refuse_oversized_baseline

## Definition — verbatim
(used, not defined)

> "refuse_oversized_baseline" — scripts/validation/portability_baseline.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 47 | used here | Imported from portability_baseline module for test baseline validation. |
| scripts/validation/check_vendor_portability.py | 89 | used here | Imported from portability_baseline to guard baseline file size during vendor portability checks. |
| scripts/validation/portability_baseline.py | 53 | defined here | Exported in __all__ as public baseline reviewability ceiling check. |

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
A validation guard function in `scripts/validation/portability_baseline.py` preventing oversized baseline diff evasion, classified as `name-only` per D-023.
