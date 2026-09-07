---
package: rjm
name: _validate_jobs_are_runnable
slug: validate-jobs-are-runnable
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_jobs_are_runnable

## Definition — verbatim
(used, not defined)

> "def _validate_jobs_are_runnable(self, file_path: Path, jobs: dict[str, Any]) -> None:" — scripts/validate_workflows.py:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 120 | defined here | Method confirming each job in a workflow specifies runs-on or uses so it can be dispatched. |

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
`_validate_jobs_are_runnable` is an internal Python method identifier ensuring workflow jobs declare execution runners or reusable targets rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
