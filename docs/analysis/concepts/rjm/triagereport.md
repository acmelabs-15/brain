---
package: rjm
name: TriageReport
slug: triagereport
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# TriageReport

## Definition — verbatim
(used, not defined)

> "class TriageReport:" — scripts/issue_triage.py:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 119 | defined here | Python dataclass aggregating triage scan findings across issues, including stale issues, missing labels, and duplicates. |

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
`TriageReport` is a Python dataclass identifier in `issue_triage.py` aggregating mechanical issue triage scan findings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
