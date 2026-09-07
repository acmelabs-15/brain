---
package: rjm
name: get_derivative_prs
slug: get-derivative-prs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_derivative_prs

## Definition — verbatim
(used, not defined)

> "def get_derivative_prs(prs: list[dict[str, Any]]) -> list[dict[str, Any]]:" — .github/scripts/invoke_pr_maintenance.py:248

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 248 | defined here | Function detecting PRs targeting non-protected branches to build stacked PR maps. |

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
defects: internal-contradiction, orphan

## Design notes
get_derivative_prs is a helper function identifier that identifies pull requests targeting non-protected branches rather than an SDLC lifecycle concept, classified as name-only per D-023.
