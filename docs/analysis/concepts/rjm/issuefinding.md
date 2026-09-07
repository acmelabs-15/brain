---
package: rjm
name: IssueFinding
slug: issuefinding
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# IssueFinding

## Definition — verbatim
(used, not defined)

> "class IssueFinding:" — scripts/issue_triage.py:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 99 | defined here | Python dataclass capturing an individual triage finding with issue number, title, and rule violation reasons. |

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
`IssueFinding` is a Python dataclass identifier in `issue_triage.py` structuring triage issue violation records rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
