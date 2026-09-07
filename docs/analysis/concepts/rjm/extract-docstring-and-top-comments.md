---
package: rjm
name: _extract_docstring_and_top_comments
slug: extract-docstring-and-top-comments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _extract_docstring_and_top_comments

## Definition — verbatim
(used, not defined)

> "def _extract_docstring_and_top_comments(source: str) -> str:" — scripts/validation/check_canonical_citations.py:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 118 | defined here | Extracts top-of-file comments and module docstrings from source code for heuristic analysis. |

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
`_extract_docstring_and_top_comments` is an internal Python helper function identifier in `check_canonical_citations.py` extracting documentation text blocks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
