---
package: rjm
name: group_checks_by_name
slug: group-checks-by-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/checks_rollup.py, sha256: dede2391ab079ee5be7c7e9964ab3de3308368ecaf137ec632ffb7af4c0759a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# group_checks_by_name

## Definition — verbatim
(used, not defined)

> "def group_checks_by_name(" — scripts/github_core/checks_rollup.py:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/checks_rollup.py | 87 | defined here | Groups checks by check name and computes the logical OR of isRequired across check rows. |

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
clean

## Design notes
A helper function organizing check lists by check name and computing aggregate required status, classified as name-only per D-023.
