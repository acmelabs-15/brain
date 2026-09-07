---
package: rjm
name: REASON_NO_ISSUE
slug: reason-no-issue
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# REASON_NO_ISSUE

## Definition — verbatim
(used, not defined)

> "REASON_NO_ISSUE = \"no-linked-issue\"" — scripts/report_pr_supersession.py:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 74 | defined here | Constant defining the string identifier for unlinked stale PR supersession findings. |

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
`REASON_NO_ISSUE` is a Python constant identifier binding the unlinked stale PR reason string rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
