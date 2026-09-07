---
package: rjm
name: fetch_base_distance
slug: fetch-base-distance
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# fetch_base_distance

## Definition — verbatim
(used, not defined)

> "def fetch_base_distance(owner: str, repo: str, base: str, head: str) -> int | None:" — scripts/report_pr_supersession.py:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 268 | defined here | GitHub REST compare query function calculating the commit distance between a PR head and base branch. |

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
`fetch_base_distance` is a Python API query function identifier measuring commit distance behind base branch rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
