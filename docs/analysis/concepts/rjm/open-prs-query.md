---
package: rjm
name: _OPEN_PRS_QUERY
slug: open-prs-query
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _OPEN_PRS_QUERY

## Definition — verbatim
(used, not defined)

> "_OPEN_PRS_QUERY = " — .github/scripts/invoke_pr_maintenance.py:60

## Also called — verbatim
`OPEN_PRS_QUERY` — scripts/report_pr_supersession.py:77

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 60 | defined here | GraphQL query string fetching open PRs with review decisions, threads, and status checks. |
| scripts/report_pr_supersession.py | 77 | defined here | GraphQL query string fetching open PRs with closing issue references for supersession checks. |

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
defects: internal-contradiction, missing-path, orphan

## Design notes
_OPEN_PRS_QUERY is a constant identifier holding a GitHub GraphQL query string rather than an SDLC lifecycle concept, classified as name-only per D-023.
