---
package: rjm
name: find_priority_labels
slug: find-priority-labels
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_priority_labels

## Definition — verbatim
(used, not defined)

> "def find_priority_labels(label_names: list[str]) -> list[str]:" — scripts/validation/check_dual_priority_labels.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_dual_priority_labels.py | 56 | defined here | Helper function extracting and sorting priority labels from a label list. |

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
A Python parsing helper in `check_dual_priority_labels.py` extracting priority labels from label names, classified as name-only per D-023.
