---
package: rjm
name: detect_linked_pr_status
slug: detect-linked-pr-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# detect_linked_pr_status

## Definition — verbatim
(used, not defined)

> "Return a reason when a linked PR has merged or closed (state can advance)." — scripts/issue_triage.py:274

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 273 | defined here | Function inspecting linked pull request states to identify issues ready to advance status. |

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
`detect_linked_pr_status` is an internal Python triage function in `scripts/issue_triage.py` for tracking cross-referenced pull request completion rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
