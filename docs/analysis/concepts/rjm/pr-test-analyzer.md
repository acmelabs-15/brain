---
package: rjm
name: pr-test-analyzer
slug: pr-test-analyzer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md, sha256: f92484a428624acb2a63ba01debe7986e783a7eb8a6a26e15e352b126f2d3202}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pr-test-analyzer

## Definition — verbatim
(used, not defined)
> "Use this agent when you need to review a pull request for test coverage quality and completeness." — docs/agent-catalog.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/001-pr-60-review-gap-analysis.md | 23 | used here | Review agent deployed to audit test coverage quality and completeness in PR-60. |
| docs/agent-catalog.md | 37 | used here | Catalog entry describing the PR test analyzer agent role and invocation criteria. |

## Consumes
Pull request code changes, test suites, test execution results, and edge-case requirements.

## Produces
Test coverage audit reports evaluating behavioral test completeness, assertion validity, and edge-case testing gaps.

## When applied
Invoked after a PR is created or updated to verify that newly added or modified functionality is backed by comprehensive tests.

## Sub-concepts
none

## Part of
pr-review-toolkit

## Implementation status
clean

## Design notes
A specialized review agent persona that analyzes test coverage quality on pull requests, distinguishing genuine behavioral test assertions from superficial syntax-only or AST checks.
