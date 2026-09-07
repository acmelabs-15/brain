---
package: rjm
name: diff_against_baseline
slug: diff-against-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# diff_against_baseline

## Definition — verbatim
(used, not defined)

> "def diff_against_baseline(" — scripts/validation/check_doc_interpreter_portability.py:459

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 459 | defined here | Compares detected offenses against baseline records to compute regressions and improvements. |
| scripts/validation/check_skill_md_exec_portability.py | 348 | defined here | Computes baseline diffs for execution portability violations. |
| scripts/validation/check_skill_md_portability.py | 730 | defined here | Calculates regressions and improvements against markdown portability baselines. |
| scripts/validation/check_skill_portability.py | 247 | defined here | Calculates baseline diffs for vendor portability violations in skills. |
| scripts/validation/portability_common.py | 45 | defined here | Shared baseline comparison utility function used across portability checks. |

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
defects: doc-drift, orphan, other

## Design notes
A Python baseline comparison utility function implemented across portability checks to track ratchet progress, classified as name-only per D-023.
