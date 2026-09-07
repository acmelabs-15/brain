---
package: rjm
name: _MODULE_DOCSTRING_RE
slug: module-docstring-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _MODULE_DOCSTRING_RE

## Definition — verbatim
(used, not defined)

> "_MODULE_DOCSTRING_RE: re.Pattern[str] = re.compile(" — scripts/validation/check_canonical_citations.py:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 82 | defined here | Fallback regex pattern extracting module docstrings when AST parsing fails on syntax errors. |

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
`_MODULE_DOCSTRING_RE` is an internal Python regex pattern identifier in `check_canonical_citations.py` extracting docstrings from unparseable files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
