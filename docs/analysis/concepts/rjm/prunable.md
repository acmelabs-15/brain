---
package: rjm
name: prunable
slug: prunable
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# prunable

## Definition — verbatim
(used, not defined)

> "``prunable`` is the line that matters most." — scripts/maintenance/_gc_parse.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 9 | used here | Documented in module docstring as the git porcelain attribute indicating a missing working tree with human-readable reason. |

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
`prunable` is a Git porcelain attribute line identifier emitted by `git worktree list --porcelain` rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
