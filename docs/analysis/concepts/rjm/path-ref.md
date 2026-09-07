---
package: rjm
name: _PATH_REF
slug: path-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _PATH_REF

## Definition — verbatim
(used, not defined)

> "_PATH_REF: re.Pattern[str] = re.compile(" — scripts/validation/check_canonical_citations.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 64 | defined here | Compiled regular expression matching repository-relative path patterns in docstrings. |

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
`_PATH_REF` is an internal Python regex pattern identifier in `check_canonical_citations.py` verifying path references in docstrings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
