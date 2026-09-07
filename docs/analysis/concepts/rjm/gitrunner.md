---
package: rjm
name: GitRunner
slug: gitrunner
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# GitRunner

## Definition — verbatim
(used, not defined)

> "GitRunner = Callable[[list[str]], str]" — scripts/maintenance/_gc_remote.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_remote.py | 7 | defined here | Type alias for a callable executing git commands with argument lists and returning standard output strings. |
| scripts/maintenance/_gc_stale.py | 21 | defined here | Type alias for a callable executing git commands with argument lists and returning standard output strings. |

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
`GitRunner` is a Python type alias for git execution callables in maintenance scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
