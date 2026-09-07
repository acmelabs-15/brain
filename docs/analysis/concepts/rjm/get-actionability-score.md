---
package: rjm
name: get_actionability_score
slug: get-actionability-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_actionability_score

## Definition — verbatim
(used, not defined)

> "def get_actionability_score(" — scripts/update_reviewer_signal_stats.py:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 250 | defined here | Function evaluating comment actionability using pattern heuristics with optional LLM classification fallback. |

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
`get_actionability_score` is a Python scoring function identifier in `scripts/update_reviewer_signal_stats.py` calculating comment quality rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
