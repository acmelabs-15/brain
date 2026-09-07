---
package: rjm
name: Two-Phase Verification
slug: two-phase-verification
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

# Two-Phase Verification

## Definition — verbatim
> "## Two-Phase Verification" — .claude/agents/qa.md:601

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 601 | defines | Two-stage verification strategy dividing validation into fast checks (<30s) and deep checks (1-5m). |
| templates/agents/qa.shared.md | 562 | defines | Shared template definition for two-phase verification splitting fast static checks from deep integration tests. |

## Consumes
Target changeset and full test harness.

## Produces
Phased test results with early exit on fast check failure before incurring expensive deep check costs.

## When applied
Applied during QA test execution to optimize latency and compute resources.

## Sub-concepts
none

## Part of
qa

## Implementation status
clean

## Design notes
A cost- and latency-optimization technique dividing verification into fast checks (lint, unit tests, formatting under 30s) and deep checks (integration tests, fail-safe pattern analysis, end-to-end tests taking 1-5 minutes). It enables rapid fail-fast feedback on basic syntax and logic bugs before committing expensive resources to end-to-end test suites.
