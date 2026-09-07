---
package: rjm
name: FILE_CEILING_BYTES
slug: file-ceiling-bytes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# FILE_CEILING_BYTES

## Definition — verbatim
(used, not defined)

> "FILE_CEILING_BYTES: dict[str, int] = {" — scripts/validate_workspace_budget.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workspace_budget.py | 47 | defined here | Dictionary mapping oversized workspace files to non-regression ratchet ceilings excluded from the shared budget pool. |

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
`FILE_CEILING_BYTES` is a Python module constant in `validate_workspace_budget.py` specifying per-file size overrides rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
