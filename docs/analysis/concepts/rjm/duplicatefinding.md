---
package: rjm
name: DuplicateFinding
slug: duplicatefinding
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# DuplicateFinding

## Definition — verbatim
(used, not defined)

> "class DuplicateFinding:" — scripts/issue_triage.py:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 108 | defined here | Python dataclass capturing candidate duplicate issue pairs with titles and similarity scores. |

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
`DuplicateFinding` is a Python dataclass identifier in `issue_triage.py` encapsulating duplicate issue detection results rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
