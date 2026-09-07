---
package: rjm
name: portability_baseline
slug: portability-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# portability_baseline

## Definition — verbatim
(used, not defined)

> "`portability_baseline` decides whether a replacement baseline may be written." — scripts/validation/portability_floor.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 38 | used here | Cited in comment explaining sys.path setup for importing portability baseline modules. |
| scripts/validation/check_vendor_portability.py | 80 | used here | Cited in comment explaining import requirements for portability floor dependencies. |
| scripts/validation/portability_floor.py | 3 | used here | Cited in module docstring explaining separation of replacement decision logic from predecessor reading. |

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
A validation module identifier in `scripts/validation/portability_baseline.py` managing baseline artifact lifecycles, classified as `name-only` per D-023.
