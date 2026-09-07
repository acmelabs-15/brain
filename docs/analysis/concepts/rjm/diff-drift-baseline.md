---
package: rjm
name: diff_drift_baseline
slug: diff-drift-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# diff_drift_baseline

## Definition — verbatim
(used, not defined)

> "def diff_drift_baseline(" — scripts/validation/check_skill_md_drift.py:353

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_drift.py | 353 | defined here | Function comparing current drift counts against baseline to identify regressions and improvements. |

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
defects: doc-drift

## Design notes
An internal calculation function computing diffs between drift measurements and baseline counts rather than an agent lifecycle concept.
