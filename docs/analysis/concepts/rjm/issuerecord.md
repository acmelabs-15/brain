---
package: rjm
name: IssueRecord
slug: issuerecord
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# IssueRecord

## Definition — verbatim
(used, not defined)

> "class IssueRecord:" — scripts/issue_triage.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 84 | defined here | Python frozen dataclass defining the subset of GitHub issue fields read by triage scanning rules. |

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
`IssueRecord` is a Python dataclass identifier representing GitHub issue metadata in `issue_triage.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
