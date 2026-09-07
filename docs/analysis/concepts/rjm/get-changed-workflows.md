---
package: rjm
name: get_changed_workflows
slug: get-changed-workflows
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# get_changed_workflows

## Definition — verbatim
(used, not defined)

> "def get_changed_workflows(self) -> list[Path]:" — scripts/validate_workflows.py:513

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 513 | defined here | Queries git status via subprocess to locate workflow and action files modified or untracked in the working tree. |

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
`get_changed_workflows` is a Python method identifier in `validate_workflows.py` discovering changed workflow files via git diff and ls-files rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
