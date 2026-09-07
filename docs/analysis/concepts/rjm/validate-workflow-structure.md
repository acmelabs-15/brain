---
package: rjm
name: validate_workflow_structure
slug: validate-workflow-structure
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_workflow_structure

## Definition — verbatim
(used, not defined)

> "def validate_workflow_structure(self, file_path: Path, content: dict[str, Any]) -> None:" — scripts/validate_workflows.py:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 101 | defined here | Method verifying required workflow structure including 'name', trigger 'on', and non-empty 'jobs'. |

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
`validate_workflow_structure` is a Python method identifier validating top-level GitHub Actions workflow keys and job mappings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
