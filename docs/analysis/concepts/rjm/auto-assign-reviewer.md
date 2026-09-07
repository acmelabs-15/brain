---
package: rjm
name: auto-assign-reviewer
slug: auto-assign-reviewer
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# auto-assign-reviewer

## Definition — verbatim
(used, not defined)
> "- `auto-assign-reviewer`" — .agents/metrics/workflow-coalescing.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 48 | used here | Listed as an automated PR workflow tracked in coalescing metrics. |

## Consumes
CODEOWNERS declarations, modified file paths, and author identity.

## Produces
Reviewer assignments on pull requests.

## When applied
Triggered on PR opening to automatically route reviews to domain owners.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
auto-assign-reviewer is an automated workflow that assigns code reviewers to PRs based on file ownership and change complexity, subject to coalescing when PRs undergo rapid updates.
