---
package: rjm
name: _apply_attribute
slug: apply-attribute
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _apply_attribute

## Definition — verbatim
(used, not defined)

> "def _apply_attribute(worktree: Worktree, line: str) -> None:" — scripts/maintenance/_gc_parse.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 35 | defined here | Private helper function parsing individual git porcelain attribute lines and applying them to a Worktree record. |

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
`_apply_attribute` is an internal Python helper function identifier in `_gc_parse.py` for porcelain attribute parsing rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
