---
package: rjm
name: Pre-PR Validation Report
slug: pre-pr-validation-report
kind: artifact
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pre-PR Validation Report

## Definition — verbatim
> "### Pre-PR Validation Report" — .claude/agents/qa.md:526

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 526 | defines | Structured report format required from QA detailing gate outcomes, confidence scores, and verdicts. |
| templates/agents/qa.shared.md | 488 | defines | Shared template definition for structured pre-PR quality gate validation report. |

## Consumes
Results from all five pre-PR quality gate steps (CI tests, fail-safe patterns, alignment, coverage, PR description).

## Produces
Markdown report detailing summary, test results, coverage metrics, fail-safe checks, and final verdict.

## When applied
Generated at the conclusion of the Pre-PR Quality Gate verification process.

## Sub-concepts
verdict-decision-logic, qa-report-length-bounds

## Part of
pre-pr-quality-gate

## Implementation status
clean

## Design notes
The formal deliverable produced by the QA agent summarizing the results of the pre-PR quality gate. It provides downstream orchestrators and human reviewers with an auditable synthesis of test execution, coverage metrics, and defensive checks, establishing a single authoritative artifact for PR approval decisions.
