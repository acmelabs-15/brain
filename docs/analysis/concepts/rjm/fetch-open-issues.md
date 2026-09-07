---
package: rjm
name: fetch_open_issues
slug: fetch-open-issues
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fetch_open_issues

## Definition — verbatim
(used, not defined)

> "Fetch open issues via the gh CLI." — scripts/issue_triage.py:488

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 485 | defined here | Function querying GitHub repository open issues using the gh command-line tool. |

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
`fetch_open_issues` is a Python CLI wrapper function in `scripts/issue_triage.py` for fetching open issues from GitHub rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
