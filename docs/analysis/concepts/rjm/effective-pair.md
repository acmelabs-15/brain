---
package: rjm
name: _effective_pair
slug: effective-pair
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _effective_pair

## Definition — verbatim
(used, not defined)

> ":func:`_effective_pair` twice, once for here and once for what a sibling" — scripts/validation/check_repo_health.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 28 | defined here | Referenced in module docstring explaining resolution of effective Git configuration scopes. |

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
`_effective_pair` is a Python helper function in `check_repo_health.py` determining the effective Git configuration scope and value according to Git precedence, classified as `kind: name-only` per D-023.
