---
package: rjm
name: _reflog_text
slug: reflog-text
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _reflog_text

## Definition — verbatim
(used, not defined)

> "def _reflog_text(log: Path) -> str | None:" — scripts/maintenance/_gc_anchors.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 61 | defined here | Helper function reading reflog text while handling regular file validation and OS errors. |

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
Internal helper function reading reflog file contents safely into memory, classified as name-only per D-023.
