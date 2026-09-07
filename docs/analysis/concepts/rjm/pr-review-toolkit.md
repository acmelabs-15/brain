---
package: rjm
name: pr-review-toolkit
slug: pr-review-toolkit
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md, sha256: f92484a428624acb2a63ba01debe7986e783a7eb8a6a26e15e352b126f2d3202}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pr-review-toolkit

## Definition — verbatim
(used, not defined)
> "pr-review-toolkit agents (code-reviewer, silent-failure-hunter, pr-test-analyzer)" — .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md | 5 | used here | Multi-agent review suite attributed as author of the PR-60 gap analysis document. |

## Consumes
Pull request diffs, codebase files, workflow definitions, and test files.

## Produces
Comprehensive multi-agent code review reports, categorized defect matrices, and remediation recommendations.

## When applied
Applied during pull request review to run specialized parallel reviews focusing on code quality, silent failures, and test coverage.

## Sub-concepts
code-reviewer, silent-failure-hunter, pr-test-analyzer

## Part of
none

## Implementation status
defects: missing-path (broken relative link to session 27 log)

## Design notes
A multi-agent pull request review toolkit pattern that coordinates specialized review agents (code-reviewer, silent-failure-hunter, and pr-test-analyzer) to conduct concurrent audits of code changes across distinct quality axes.
