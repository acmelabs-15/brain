---
package: rjm
name: decision metrics
slug: decision-metrics
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# decision metrics

## Definition — verbatim
> "- Separate informational metrics from decision metrics. A dashboard with 30" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 47 | defined here | Defined as the 1 to 3 critical metrics with pre-committed thresholds that govern forks in the road. |

## Consumes
Target initiative hypotheses and operational levers.

## Produces
Unambiguous binary or ternary branching decisions (proceed, pivot, rollback) when thresholds are crossed.

## When applied
Evaluated at pre-committed calendar dates to force binding evaluations of initiatives.

## Sub-concepts
none

## Part of
pre-committed-metrics-force-honest-evaluation

## Implementation status
defects: doc-drift

## Design notes
Decision metrics are the 1 to 3 focal metrics selected before an initiative begins that carry pre-committed thresholds and explicit consequences. They ensure that evaluations produce concrete, binding choices rather than indefinite observation.
