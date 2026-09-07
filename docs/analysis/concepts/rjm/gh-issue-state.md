---
package: rjm
name: gh_issue_state
slug: gh-issue-state
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# gh_issue_state

## Definition — verbatim
(used, not defined)

> "def gh_issue_state(" — scripts/validation/active_plan_closeout.py:103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 103 | defined here | Function querying GitHub CLI for the current state of a specified tracking issue. |

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
`gh_issue_state` is a Python helper function that retrieves GitHub issue states via the GitHub CLI rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
