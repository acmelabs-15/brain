---
package: rjm
name: _has_path_reference
slug: has-path-reference
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _has_path_reference

## Definition — verbatim
(used, not defined)

> "def _has_path_reference(text: str) -> bool:" — scripts/validation/check_canonical_citations.py:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 178 | defined here | Checks whether text contains at least one path-like citation satisfying mirror rules. |

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
`_has_path_reference` is an internal Python helper function identifier in `check_canonical_citations.py` verifying path pattern presence rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
