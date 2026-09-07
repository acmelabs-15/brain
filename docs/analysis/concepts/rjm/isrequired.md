---
package: rjm
name: isRequired
slug: isrequired
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

# isRequired

## Definition — verbatim
(used, not defined)

> "The key insight: a check name's required status is the OR of all isRequired" — scripts/github_core/checks_rollup.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/checks_rollup.py | 7 | used here | Referenced in module docstring explaining that check required status is computed as the logical OR of isRequired flags. |

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
A GitHub API property on check runs and commit status contexts indicating required status under branch protection rules, classified as name-only per D-023.
