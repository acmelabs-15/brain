---
package: rjm
name: diff_uncovered
slug: diff-uncovered
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# diff_uncovered

## Definition — verbatim
(used, not defined)

> "def diff_uncovered(current: set[str], baseline: set[str]) -> tuple[set[str], set[str]]:" — scripts/validation/check_rule_activation_coverage.py:333

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 333 | defined here | Function comparing current uncovered artifact sets against baseline sets to find new regressions and resolved items. |

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
A Python function identifier computing regression diffs between current uncovered artifacts and baseline sets rather than an agent lifecycle concept.
