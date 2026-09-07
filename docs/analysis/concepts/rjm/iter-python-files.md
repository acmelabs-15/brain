---
package: rjm
name: _iter_python_files
slug: iter-python-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _iter_python_files

## Definition — verbatim
(used, not defined)

> "def _iter_python_files(roots: Iterable[Path]) -> Iterable[Path]:" — scripts/validation/check_canonical_citations.py:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 109 | defined here | Generator function yielding all non-cache Python source files under target directory roots. |

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
`_iter_python_files` is an internal Python generator function identifier in `check_canonical_citations.py` walking directories for python scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
