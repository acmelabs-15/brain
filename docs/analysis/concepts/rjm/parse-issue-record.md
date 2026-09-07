---
package: rjm
name: parse_issue_record
slug: parse-issue-record
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# parse_issue_record

## Definition — verbatim
(used, not defined)

> "def parse_issue_record(raw: dict[str, Any]) -> IssueRecord:" — scripts/issue_triage.py:193

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 193 | defined here | Python helper function constructing an IssueRecord instance from a raw GitHub JSON dictionary. |

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
`parse_issue_record` is a Python dictionary parsing helper function in `issue_triage.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
