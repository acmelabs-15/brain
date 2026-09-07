---
package: rjm
name: collect_distances
slug: collect-distances
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# collect_distances

## Definition — verbatim
(used, not defined)

> "def collect_distances(owner: str, repo: str, prs: list[dict[str, Any]]) -> dict[int, int | None]:" — scripts/report_pr_supersession.py:287

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 287 | defined here | Batch helper function mapping PR numbers to their base branch commit distance. |

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
`collect_distances` is a Python helper function identifier mapping PR numbers to base commit distances rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
