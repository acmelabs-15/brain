---
package: rjm
name: stale-base
slug: stale-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# stale-base

## Definition — verbatim
(used, not defined)

> "stale-base the PR is at least --stale-base commits behind its" — scripts/report_pr_supersession.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 21 | defined here | Flagging reason indicating a pull request that has fallen behind the base branch by at least the configured commit threshold. |

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
`stale-base` is a pull request supersession finding reason string identifying commits behind base ref rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
