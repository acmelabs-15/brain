---
package: rjm
name: fetch_merged_prs
slug: fetch-merged-prs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fetch_merged_prs

## Definition — verbatim
(used, not defined)

> "def fetch_merged_prs(limit: int, repo: str | None = None) -> list[dict[str, object]]:" — scripts/maintenance/detect_orphan_commits.py:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 105 | defined here | Helper querying recently merged pull requests via the GitHub CLI. |

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
fetch_merged_prs is a Python helper function in detect_orphan_commits.py querying merged PRs via the GitHub CLI rather than an SDLC lifecycle concept, classified as name-only per D-023.
