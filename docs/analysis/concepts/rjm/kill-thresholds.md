---
package: rjm
name: KILL_THRESHOLDS
slug: kill-thresholds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KILL_THRESHOLDS

## Definition — verbatim
(used, not defined)

> "KILL_THRESHOLDS: Final[dict[KillCriterion, int]] = {" — scripts/metrics/kill_criteria.py:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/metrics/kill_criteria.py | 99 | defined here | Dictionary mapping each kill criterion to its numeric firing threshold. |

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
KILL_THRESHOLDS is a code constant mapping kill criteria identifiers to numeric limits rather than an independent lifecycle concept.
