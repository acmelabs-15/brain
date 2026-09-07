---
package: rjm
name: linked_issue_states
slug: linked-issue-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# linked_issue_states

## Definition — verbatim
(used, not defined)

> "def linked_issue_states(pull_request: dict[str, Any]) -> tuple[list[int], list[int]]:" — scripts/report_pr_supersession.py:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 114 | defined here | Helper function partitioning linked closing issue references into lists of closed and open issue numbers. |

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
defects: missing-path

## Design notes
`linked_issue_states` is a Python function identifier extracting linked issue state numbers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
