---
package: rjm
name: _check_pinned
slug: check-pinned
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _check_pinned

## Definition — verbatim
(used, not defined)

> "def _check_pinned(self, file_path: Path, where: str, uses: object) -> None:" — scripts/validate_workflows.py:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 166 | defined here | Helper method validating that a 'uses' directive points to a local path or a 40-hex commit SHA. |

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
`_check_pinned` is an internal Python helper method identifier verifying that an action reference uses a 40-hex SHA or local path rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
