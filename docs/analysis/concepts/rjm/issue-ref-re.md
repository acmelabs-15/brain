---
package: rjm
name: ISSUE_REF_RE
slug: issue-ref-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ISSUE_REF_RE

## Definition — verbatim
(used, not defined)

> "ISSUE_REF_RE = re.compile(" — scripts/validation/active_plan_closeout.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 21 | defined here | Compiled regular expression matching issue numbers from markdown issue citations or GitHub URLs. |

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
`ISSUE_REF_RE` is a Python module regex pattern in `active_plan_closeout.py` extracting issue numbers from markdown text rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
