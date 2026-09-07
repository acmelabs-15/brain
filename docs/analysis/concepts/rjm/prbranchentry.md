---
package: rjm
name: PRBranchEntry
slug: prbranchentry
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# PRBranchEntry

## Definition — verbatim
(used, not defined)

> "class PRBranchEntry:" — scripts/pr_branch_mapping.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_branch_mapping.py | 57 | defined here | Dataclass representing a mapping entry between a pull request number, git branch, timestamp, status, and session ID. |

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
`PRBranchEntry` is a Python dataclass identifier representing an individual PR-to-branch record rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
