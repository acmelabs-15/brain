---
package: rjm
name: get_reviewer_signal_stats
slug: get-reviewer-signal-stats
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_reviewer_signal_stats

## Definition — verbatim
(used, not defined)

> "def get_reviewer_signal_stats(" — scripts/update_reviewer_signal_stats.py:420

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 420 | defined here | Function computing overall and rolling 30-day signal rates and trends for all reviewers. |

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
`get_reviewer_signal_stats` is a Python aggregation function identifier in `scripts/update_reviewer_signal_stats.py` computing reviewer metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
