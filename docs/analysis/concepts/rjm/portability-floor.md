---
package: rjm
name: portability_floor
slug: portability-floor
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# portability_floor

## Definition — verbatim
(used, not defined)

> "Reading the predecessor is its own concern and lives in `portability_floor`." — scripts/validation/portability_baseline.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 38 | used here | Cited in comment regarding absolute package path imports for portability floor module. |
| scripts/validation/check_vendor_portability.py | 80 | used here | Cited in comment explaining import paths for portability floor. |
| scripts/validation/portability_baseline.py | 14 | used here | Cited in docstring explaining separation of predecessor reading concerns into portability_floor. |
| scripts/validation/portability_git.py | 3 | used here | Cited in docstring explaining split between git history blob reading and baseline interpretation. |

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
A validation module identifier in `scripts/validation/portability_floor.py` managing historical baseline evidence retrieval, classified as `name-only` per D-023.
