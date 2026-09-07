---
package: rjm
name: validate_workflow_size
slug: validate-workflow-size
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_workflow_size

## Definition — verbatim
(used, not defined)

> "def validate_workflow_size(self, file_path: Path) -> None:" — scripts/validate_workflows.py:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 202 | defined here | Validates that workflow files do not exceed 100 non-comment code lines per ADR-006 thin orchestration recommendations. |

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
`validate_workflow_size` is a Python method identifier in `validate_workflows.py` that validates workflow line counts against thin orchestration guidelines rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
