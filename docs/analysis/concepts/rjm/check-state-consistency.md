---
package: rjm
name: check_state_consistency
slug: check-state-consistency
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_state_consistency

## Definition — verbatim
(used, not defined)

> "Return a reason string when the issue's state label is inconsistent." — scripts/issue_triage.py:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 256 | defined here | Function checking issue state consistency such as unassigned Doing work or empty Planning bodies. |

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
`check_state_consistency` is an internal Python validation function in `scripts/issue_triage.py` checking GitHub issue state and assignee alignment rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
