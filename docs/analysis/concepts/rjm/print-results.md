---
package: rjm
name: print_results
slug: print-results
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# print_results

## Definition — verbatim
(used, not defined)

> "def print_results(self) -> None:" — scripts/validate_workflows.py:578

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 578 | defined here | Method printing workflow validation warnings, errors, and summary status to standard output. |
| scripts/validation/pr_description.py | 1020 | defined here | Function printing PR description validation issues and mapping critical severity counts to exit codes. |

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
clean in scripts/validate_workflows.py; defects: doc-drift in scripts/validation/pr_description.py

## Design notes
`print_results` is a Python function and method identifier implemented in `validate_workflows.py` and `pr_description.py` to format validation diagnostics and return exit codes rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
