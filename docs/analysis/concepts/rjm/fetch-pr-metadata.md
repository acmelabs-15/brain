---
package: rjm
name: fetch_pr_metadata
slug: fetch-pr-metadata
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/analyze_pr_failure.py, sha256: ec0ba314fcf793fbd994ee6e5a3ca52a376de12777ee978e1e6c78f19abfc21b}
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fetch_pr_metadata

## Definition — verbatim
(used, not defined)

> "Fetch core PR metadata via gh CLI." — scripts/analyze_pr_failure.py:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/analyze_pr_failure.py | 141 | defined here | Queries GitHub CLI for core pull request fields including numbers, labels, commits, and branch refs. |
| scripts/ci/build_ai_review_context.py | 73 | defined here | Retrieves pull request metadata via GitHub REST API with fallback to CLI view commands. |

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
`fetch_pr_metadata` is a function identifier fetching pull request attributes from GitHub APIs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
