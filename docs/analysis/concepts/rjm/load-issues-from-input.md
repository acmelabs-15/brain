---
package: rjm
name: load_issues_from_input
slug: load-issues-from-input
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_issues_from_input

## Definition — verbatim
(used, not defined)

> "Read prefetched issues from a JSON file." — scripts/issue_triage.py:688

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 687 | defined here | Function loading prefetched GitHub issue JSON records from a local input file. |

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
`load_issues_from_input` is a file parsing helper in `scripts/issue_triage.py` for loading offline issue fixtures rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
