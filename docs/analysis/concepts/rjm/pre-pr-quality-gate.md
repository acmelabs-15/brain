---
package: rjm
name: Pre-PR Quality Gate
slug: pre-pr-quality-gate
kind: gate
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

# Pre-PR Quality Gate

## Definition — verbatim
> "## Pre-PR Quality Gate (MANDATORY)" — .claude/agents/qa.md:366

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 366 | defines | Mandatory gate run by QA before PR creation to validate quality gates and return an APPROVED or BLOCKED verdict. |
| templates/agents/qa.shared.md | 356 | defines | Shared template definition for the mandatory pre-PR verification gate returning an APPROVED or BLOCKED verdict. |

## Consumes
Working branch with implementation code, completed test suite, and PR description.

## Produces
Pre-PR validation report with APPROVED or BLOCKED verdict and confidence score.

## When applied
Verbatim: "**Trigger**: Orchestrator routes to QA before PR creation."

## Sub-concepts
ci-environment-test-validation, fail-safe-pattern-verification, test-implementation-alignment, coverage-threshold-validation, pr-description-validation, verdict-decision-logic

## Part of
qa

## Implementation status
clean

## Design notes
A mandatory quality control gate executed by the QA agent before pull request creation. It enforces a strict five-step verification protocol (CI environment tests, fail-safe patterns, test-implementation alignment, coverage thresholds, and PR description completeness) to prevent broken, unaligned, or untested changes from reaching review or main branch merges.
