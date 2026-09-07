---
package: rjm
name: EXIT_DUAL
slug: exit-dual
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# EXIT_DUAL

## Definition — verbatim
(used, not defined)

> "EXIT_DUAL = 1" — scripts/validation/check_dual_priority_labels.py:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_dual_priority_labels.py | 51 | defined here | Exit code constant returned when an issue has conflicting multiple priority labels. |

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
defects: orphan

## Design notes
A script exit code constant in `check_dual_priority_labels.py` indicating dual priority label violations, classified as name-only per D-023.
