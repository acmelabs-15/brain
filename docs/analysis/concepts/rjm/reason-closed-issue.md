---
package: rjm
name: REASON_CLOSED_ISSUE
slug: reason-closed-issue
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REASON_CLOSED_ISSUE

## Definition — verbatim
(used, not defined)

> "REASON_CLOSED_ISSUE = \"closed-linked-issue\"" — scripts/report_pr_supersession.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 73 | defined here | Constant defining the string identifier for closed linked issue supersession findings. |

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
`REASON_CLOSED_ISSUE` is a Python constant identifier binding the closed linked issue reason string rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
