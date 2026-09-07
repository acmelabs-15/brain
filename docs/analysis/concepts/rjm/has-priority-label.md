---
package: rjm
name: has_priority_label
slug: has-priority-label
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# has_priority_label

## Definition — verbatim
(used, not defined)

> "True when any label starts with ``priority:``." — scripts/issue_triage.py:239

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 238 | defined here | Helper function returning whether an issue has any label prefixed with priority:. |

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
`has_priority_label` is an internal Python helper function in `scripts/issue_triage.py` for evaluating issue label prefixes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
