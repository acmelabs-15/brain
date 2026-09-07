---
package: rjm
name: detect_duplicates
slug: detect-duplicates
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# detect_duplicates

## Definition — verbatim
(used, not defined)

> "Return candidate duplicate pairs whose title similarity >= ``threshold``." — scripts/issue_triage.py:318

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 315 | defined here | Function detecting potential duplicate issue pairs using title token similarity comparison against a threshold. |

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
`detect_duplicates` is an internal Python search function in `scripts/issue_triage.py` for calculating pairwise title similarity between backlog issues rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
