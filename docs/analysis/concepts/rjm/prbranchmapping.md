---
package: rjm
name: PRBranchMapping
slug: prbranchmapping
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PRBranchMapping

## Definition — verbatim
(used, not defined)

> "class PRBranchMapping:" — scripts/pr_branch_mapping.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 77 | defined here | Dataclass representing the aggregate collection of PRBranchEntry records and the current active session state. |

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
`PRBranchMapping` is a Python dataclass identifier representing the full collection of PR branch records and session state rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
