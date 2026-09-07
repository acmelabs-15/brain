---
package: rjm
name: _locked_append
slug: locked-append
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _locked_append

## Definition — verbatim
(used, not defined)

> "def _locked_append(path: str | os.PathLike[str], text: str) -> None:" — scripts/update_reviewer_signal_stats.py:401

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 401 | defined here | Function appending text to a file using an advisory file lock to prevent concurrent write corruption. |

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
`_locked_append` is an internal Python utility function identifier in `scripts/update_reviewer_signal_stats.py` providing file-locking primitives rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
