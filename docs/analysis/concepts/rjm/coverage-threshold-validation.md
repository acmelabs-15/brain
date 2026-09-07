---
package: rjm
name: Coverage Threshold Validation
slug: coverage-threshold-validation
kind: technique
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

# Coverage Threshold Validation

## Definition — verbatim
> "#### Step 4: Coverage Threshold Validation" — .claude/agents/qa.md:470

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 470 | defines | Step 4 of Pre-PR Quality Gate checking line and branch coverage metrics against required thresholds. |
| templates/agents/qa.shared.md | 460 | defines | Shared template definition for validating test coverage metrics against project thresholds. |

## Consumes
Coverage reports (lcov, cobertura, or summary reports) generated from CI test execution.

## Produces
Quantitative coverage pass/fail verdict against configured minimum percentages.

## When applied
Executed as the fourth step of the pre-PR quality gate.

## Sub-concepts
none

## Part of
pre-pr-quality-gate

## Implementation status
clean

## Design notes
The fourth validation step of the pre-PR quality gate, verifying that overall and modified code coverage meets or exceeds configured project thresholds. It ensures that newly written code maintains or raises test density standards, blocking PRs that regress test coverage across key packages.
