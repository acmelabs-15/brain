---
package: rjm
name: Paired bootstrap
slug: paired-bootstrap
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Paired bootstrap

## Definition — verbatim
> "Paired bootstrap: resample fixture ids with replacement at each iteration," — scripts/eval/_report_aggregator.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_aggregator.py | 10 | used here | Explains the resampling technique used to compute non-parametric confidence intervals on prompt recall deltas. |

## Consumes
Per-fixture assertion pass and fail outcomes across evaluated prompt variants.

## Produces
Non-parametric 95% confidence interval bounds on signed recall deltas.

## When applied
Applied during evaluation report aggregation when assessing prompt performance deltas.

## Sub-concepts
none

## Part of
reportaggregator

## Implementation status
clean

## Design notes
Paired bootstrap is a statistical resampling technique used in rjm prompt evaluations to compute empirical 95% confidence intervals without normal distribution assumptions, preventing random evaluation noise from masquerading as meaningful agent performance gains.
