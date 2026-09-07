---
package: rjm
name: requested_reviewers
slug: requested-reviewers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/assign_bot_reviewer.py, sha256: 16383cb10afb0de419d0af21fc4c6eae32b02146e40224606224d23cabe6f1fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# requested_reviewers

## Definition — verbatim
(used, not defined)

> "``POST /repos/{owner}/{repo}/pulls/{number}/requested_reviewers`` needs exactly" — .github/scripts/assign_bot_reviewer.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/assign_bot_reviewer.py | 10 | used here | GitHub REST API endpoint path cited for assigning automated bot reviewers to pull requests. |

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
requested_reviewers is a GitHub REST API endpoint path and payload parameter rather than an agent lifecycle concept.
