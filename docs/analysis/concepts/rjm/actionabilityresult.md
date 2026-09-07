---
package: rjm
name: ActionabilityResult
slug: actionabilityresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ActionabilityResult

## Definition — verbatim
(used, not defined)

> "class ActionabilityResult:" — scripts/update_reviewer_signal_stats.py:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 116 | defined here | Dataclass storing the numeric actionability score, decision reasons, and actionability boolean for a comment. |

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
`ActionabilityResult` is an internal Python dataclass identifier in `scripts/update_reviewer_signal_stats.py` storing heuristic scoring outputs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
