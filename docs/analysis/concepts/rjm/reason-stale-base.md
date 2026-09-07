---
package: rjm
name: REASON_STALE_BASE
slug: reason-stale-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REASON_STALE_BASE

## Definition — verbatim
(used, not defined)

> "REASON_STALE_BASE = \"stale-base\"" — scripts/report_pr_supersession.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 75 | defined here | Constant defining the string identifier for stale base distance supersession findings. |

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
`REASON_STALE_BASE` is a Python constant identifier binding the stale base distance reason string rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
