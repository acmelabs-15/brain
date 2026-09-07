---
package: rjm
name: validate_permissions
slug: validate-permissions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_permissions

## Definition — verbatim
(used, not defined)

> "def validate_permissions(self, file_path: Path, content: dict[str, Any]) -> None:" — scripts/validate_workflows.py:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 226 | defined here | Validates that top-level or per-job permissions are explicitly declared across GitHub Actions workflow files to enforce least-privilege security. |

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
`validate_permissions` is a Python method identifier in `validate_workflows.py` enforcing workflow permission declarations rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
