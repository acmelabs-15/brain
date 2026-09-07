---
package: rjm
name: fetch_pr_comments
slug: fetch-pr-comments
kind: name-only
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fetch_pr_comments

## Definition — verbatim
(used, not defined)

> "Fetch issue-level comments on the PR." — scripts/analyze_pr_failure.py:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/analyze_pr_failure.py | 177 | defined here | Fetches issue comments from GitHub API to analyze communication patterns and author involvement. |

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
defects: exit-code-mismatch, orphan

## Design notes
`fetch_pr_comments` is a function identifier in `analyze_pr_failure.py` retrieving issue-level pull request comments rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
