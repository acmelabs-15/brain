---
package: rjm
name: _staged_warning
slug: staged-warning
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _staged_warning

## Definition — verbatim
(used, not defined)

> "def _staged_warning(admin: Path, head: str | None, main_path: str) -> str:" — scripts/maintenance/_gc_reasons.py:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 153 | defined here | Private helper generating a warning and command sequence to recover uncommitted staged content from an orphaned index. |

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
`_staged_warning` is an internal Python function identifier formatting index recovery commands rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
