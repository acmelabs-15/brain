---
package: rjm
name: CI Environment Test Validation
slug: ci-environment-test-validation
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

# CI Environment Test Validation

## Definition — verbatim
> "#### Step 1: CI Environment Test Validation" — .claude/agents/qa.md:376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 376 | defines | Step 1 of the Pre-PR Quality Gate executing tests in a CI-equivalent environment. |
| templates/agents/qa.shared.md | 366 | defines | Shared template definition for Step 1 CI-equivalent test execution and validation. |

## Consumes
Test scripts, clean git worktree or container matching CI configuration.

## Produces
Test execution logs, pass/fail counts, and execution exit codes.

## When applied
Executed as the first step of the pre-PR quality gate validation pipeline.

## Sub-concepts
none

## Part of
pre-pr-quality-gate

## Implementation status
clean

## Design notes
The first step of the pre-PR quality gate, ensuring that all automated test suites pass within an environment that replicates CI runtime conditions. By running full test suites outside the developer's local environment quirks, it detects environment-specific discrepancies and prevents CI build failures prior to pull request submission.
