---
package: rjm
name: closed-linked-issue
slug: closed-linked-issue
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# closed-linked-issue

## Definition — verbatim
(used, not defined)

> "closed-linked-issue a linked issue is already CLOSED while the PR is" — scripts/report_pr_supersession.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 18 | defined here | Flagging reason indicating a pull request whose linked issue was already closed on the base branch. |

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
`closed-linked-issue` is a pull request supersession finding reason string identifying closed linked issues rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
