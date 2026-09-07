---
package: rjm
name: Quality Metrics
slug: quality-metrics
kind: pattern
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

# Quality Metrics

## Definition — verbatim
> "All test reports MUST include quantified metrics:" — .claude/agents/qa.md:218

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 216 | defined here | Mandates including quantified metrics (line coverage, branch coverage, pass rate, flaky count, duration) in test reports. |
| templates/agents/qa.shared.md | 206 | defined here | Mandates including quantified metrics (line coverage, branch coverage, pass rate, flaky count, duration) in test reports. |

## Consumes
Test runner outputs, coverage instrumentation data, execution timing logs.

## Produces
Quantified QA report metrics table detailing line/branch coverage percentages and pass rates.

## When applied
Included in every formal test report and pre-PR validation summary.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path, doc-drift

## Design notes
Quality Metrics require empirical quantification in test reporting. By tracking line coverage, branch coverage, pass rates, flaky test counts, and run duration, they provide objective benchmarks over time, preventing degradation in test suite health and coverage depth.
