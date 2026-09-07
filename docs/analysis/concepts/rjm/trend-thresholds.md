---
package: rjm
name: TREND_THRESHOLDS
slug: trend-thresholds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TREND_THRESHOLDS

## Definition — verbatim
(used, not defined)

> "TREND_THRESHOLDS: dict[str, float] = {" — scripts/update_reviewer_signal_stats.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 69 | defined here | Dictionary mapping trend directions (improving, declining) to delta thresholds. |

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
A configuration dictionary constant identifier setting performance trend thresholds rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
