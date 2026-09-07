---
package: rjm
name: SignalStats
slug: signalstats
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# SignalStats

## Definition — verbatim
(used, not defined)

> "class SignalStats:" — scripts/update_reviewer_signal_stats.py:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 137 | defined here | Dataclass storing computed reviewer signal rate, trend direction, and rolling 30-day activity statistics. |

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
`SignalStats` is an internal Python dataclass identifier in `scripts/update_reviewer_signal_stats.py` storing calculated reviewer quality metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
