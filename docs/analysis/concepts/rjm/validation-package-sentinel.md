---
package: rjm
name: _VALIDATION_PACKAGE_SENTINEL
slug: validation-package-sentinel
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _VALIDATION_PACKAGE_SENTINEL

## Definition — verbatim
(used, not defined)

> "_VALIDATION_PACKAGE_SENTINEL = _PROJECT_ROOT /" — scripts/validation/check_skill_portability.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 51 | defined here | Constant Path to sentinel file used to determine whether to insert repository root into sys.path. |

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
defects: doc-drift, orphan

## Design notes
A module-level constant identifier in `check_skill_portability.py`, classified as name-only per D-023.
