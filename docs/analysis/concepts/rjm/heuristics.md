---
package: rjm
name: HEURISTICS
slug: heuristics
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# HEURISTICS

## Definition — verbatim
(used, not defined)

> "HEURISTICS: dict[str, float | int] = {" — scripts/update_reviewer_signal_stats.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 56 | defined here | Dictionary mapping comment classification labels to numerical actionability score weights. |

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
A configuration dictionary constant identifier defining scoring heuristic weights rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
