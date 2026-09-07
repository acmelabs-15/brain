---
package: rjm
name: run_act
slug: run-act
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# run_act

## Definition — verbatim
(used, not defined)

> "def run_act(self, workflow_path: Path) -> bool:" — scripts/validate_workflows.py:559

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 559 | defined here | Invokes the external act utility to validate local GitHub Actions workflow execution when act is installed. |

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
`run_act` is a Python method identifier in `validate_workflows.py` wrapping the external act CLI tool rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
