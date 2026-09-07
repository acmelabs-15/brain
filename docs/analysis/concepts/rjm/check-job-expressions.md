---
package: rjm
name: _check_job_expressions
slug: check-job-expressions
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _check_job_expressions

## Definition — verbatim
(used, not defined)

> "def _check_job_expressions(self, file_path: Path, job_name: str, job: dict[str, Any]) -> None:" — scripts/validate_workflows.py:394

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 394 | defined here | Iterates through steps of a workflow job to detect unsafe expressions in run blocks and propagate taint from GITHUB_OUTPUT writers. |

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
`_check_job_expressions` is an internal Python helper method in `validate_workflows.py` analyzing step expressions in a workflow job rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
