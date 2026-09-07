---
package: rjm
name: _unwrap
slug: unwrap
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _unwrap

## Definition — verbatim
(used, not defined)

> "def _unwrap(raw: str, awaited: list[str] | None = None) -> str:" — scripts/validation/check_shipped_skill_routes.py:259

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 259 | defined here | Strips balanced wrappers and trailing punctuation from a captured skill name. |

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
A private helper function in `scripts/validation/check_shipped_skill_routes.py` for stripping wrapper delimiters, classified as `name-only` per D-023.
