---
package: rjm
name: classify_pull_request
slug: classify-pull-request
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# classify_pull_request

## Definition — verbatim
(used, not defined)

> "def classify_pull_request(" — scripts/report_pr_supersession.py:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 138 | defined here | Core classification function mapping PR payload and base distance into a structured Finding. |

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
`classify_pull_request` is a Python evaluation function identifier analyzing PR metadata and distances rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
