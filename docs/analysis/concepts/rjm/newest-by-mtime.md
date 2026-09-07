---
package: rjm
name: _newest_by_mtime
slug: newest-by-mtime
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _newest_by_mtime

## Definition — verbatim
(used, not defined)

> "def _newest_by_mtime(candidates: list[Path]) -> Path | None:" — scripts/hook_utilities/utilities.py:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/hook_utilities/utilities.py | 188 | defined here | Helper function returning newest candidate file by modification timestamp while skipping stat errors. |

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
A private Python helper function identifier resolving files by mtime rather than an agent lifecycle concept.
