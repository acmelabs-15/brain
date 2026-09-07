---
package: rjm
name: no-linked-issue
slug: no-linked-issue
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# no-linked-issue

## Definition — verbatim
(used, not defined)

> "no-linked-issue a stale PR that closes nothing, so issue state can" — scripts/report_pr_supersession.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 24 | defined here | Flagging reason indicating a stale pull request lacking linked issues to evaluate for closure. |

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
`no-linked-issue` is a pull request supersession finding reason string identifying stale unlinked pull requests rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
