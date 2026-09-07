---
package: rjm
name: refuse_undiffable_baseline
slug: refuse-undiffable-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# refuse_undiffable_baseline

## Definition — verbatim
(used, not defined)

> "`refuse_undiffable_baseline` guards it separately. Refs #4244." — scripts/validation/portability_floor.py:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 49 | used here | Imported from portability_baseline to ensure test baseline files remain diffable in git. |
| scripts/validation/check_vendor_portability.py | 91 | used here | Imported from portability_baseline to ensure vendor baselines remain diffable. |
| scripts/validation/portability_baseline.py | 55 | defined here | Exported in __all__ as public git diff attribute verification check. |
| scripts/validation/portability_floor.py | 132 | used here | Referenced in docstring explaining protection against unreviewable binary baseline diffs. |

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
A validation guard function in `scripts/validation/portability_baseline.py` verifying diffability of baseline files in git, classified as `name-only` per D-023.
