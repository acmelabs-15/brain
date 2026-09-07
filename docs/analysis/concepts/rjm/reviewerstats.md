---
package: rjm
name: ReviewerStats
slug: reviewerstats
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ReviewerStats

## Definition — verbatim
(used, not defined)

> "class ReviewerStats:" — scripts/update_reviewer_signal_stats.py:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 126 | defined here | Dataclass aggregating raw comment counts, PRs reviewed, and verified actionable counts per reviewer. |

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
`ReviewerStats` is an internal Python dataclass identifier in `scripts/update_reviewer_signal_stats.py` aggregating reviewer comment metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
