---
package: rjm
name: VALID_PRIORITIES
slug: valid-priorities
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# VALID_PRIORITIES

## Definition — verbatim
(used, not defined)

> "VALID_PRIORITIES = (\"P0\", \"P1\", \"P2\", \"P3\")" — scripts/validation/check_dual_priority_labels.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_dual_priority_labels.py | 15 | used here | Quoted in docstrings referencing canonical priority label constants. |
| scripts/validation/validate_design_review.py | 23 | defined here | Constant set specifying valid priority values in design review frontmatter. |

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
A constant tuple/set specifying valid task and issue priority classifications, classified as name-only per D-023.
