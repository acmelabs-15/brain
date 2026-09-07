---
package: rjm
name: fetch_open_pull_requests
slug: fetch-open-pull-requests
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fetch_open_pull_requests

## Definition — verbatim
(used, not defined)

> "def fetch_open_pull_requests(owner: str, repo: str, limit: int) -> list[dict[str, Any]]:" — scripts/report_pr_supersession.py:244

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 244 | defined here | GitHub GraphQL API query function fetching open pull request nodes with closing issue references. |

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
defects: missing-path

## Design notes
`fetch_open_pull_requests` is a Python API query function identifier fetching pull request lists rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
