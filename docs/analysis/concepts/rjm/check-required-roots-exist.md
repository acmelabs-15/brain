---
package: rjm
name: _check_required_roots_exist
slug: check-required-roots-exist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _check_required_roots_exist

## Definition — verbatim
(used, not defined)

> "def _check_required_roots_exist(root: Path) -> int | None:" — scripts/validation/check_skill_md_portability.py:1363

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 1363 | defined here | Verifies the existence of all required plugin skills roots and extra scan roots before scanning proceeds. |

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
defects: doc-drift

## Design notes
`_check_required_roots_exist` is an internal Python validation helper identifier checking directory existence rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
