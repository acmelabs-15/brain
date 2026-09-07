---
package: rjm
name: update_serena_memory
slug: update-serena-memory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# update_serena_memory

## Definition — verbatim
(used, not defined)

> "def update_serena_memory(" — scripts/update_reviewer_signal_stats.py:503

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 503 | defined here | Function rewriting the cumulative per-reviewer performance table in Serena memory file. |

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
`update_serena_memory` is a Python utility function identifier in `scripts/update_reviewer_signal_stats.py` serializing statistics to persistent memory rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
