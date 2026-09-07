---
package: rjm
name: Validation Protocol
slug: validation-protocol
kind: gate
package_phase: rjm:QA
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_pr_churn.py, sha256: 027d16099d7ba9d03cbd30f7d78b433c82c8b84c715a4ae795f1547b21008f84}
  - {path: scripts/eval/analyze-pr-churn.py, sha256: caa76d02bf3e72c1e40110bd99569504f7e255f07b16ae36304f42a651c507e5}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Validation Protocol

## Definition — verbatim
> "When orchestrator requests pre-PR validation:" — templates/agents/qa.shared.md:364

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_pr_churn.py | 73 | defined here | Commit churn bucket classifying pre-PR validation, compliance, and protocol verification commits. |
| scripts/eval/analyze-pr-churn.py | 7 | used here | Analyzed in PR cohorts to measure the proportion of commit churn spent on validation protocols. |
| templates/agents/qa.shared.md | 362 | defined here | Section heading and core procedural gate executed by QA prior to pull request creation. |

## Consumes
Implementation diff, test suites, coverage reports, and pre-PR validation request from the orchestrator.

## Produces
Pre-PR validation report containing test execution results, fail-safe verification, alignment findings, and an APPROVED or BLOCKED verdict.

## When applied
Triggered when the orchestrator routes to the QA agent for mandatory quality gate verification prior to PR creation.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path

## Design notes
`Validation Protocol` is the mandatory quality gate executed by the QA agent before a pull request can be opened. It requires four sequential steps: CI-environment test execution, fail-safe pattern verification, test-implementation alignment checks, and coverage threshold validation, mechanically preventing regressions from reaching code review.
