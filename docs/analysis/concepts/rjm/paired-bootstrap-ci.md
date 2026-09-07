---
package: rjm
name: Paired-bootstrap CI
slug: paired-bootstrap-ci
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Paired-bootstrap CI

## Definition — verbatim
> "Paired-bootstrap CI (n=10000 resamples, 95% CI) on signed recall delta (agent minus baseline)" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:274

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 274 | used here | Specified as the statistical technique used by ReportAggregator to compute confidence bounds on prompt recall delta. |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 61 | defined here | Mandated under AC-2 as a required field in `REPORT.md` and `report.json`. |
| scripts/eval/_model_sweep_core.py | 207 | defined here | Implemented as the `paired_bootstrap_ci` function performing 10,000 resamples to evaluate candidate models against defaults. |

## Consumes
Paired fixture performance vectors between candidate and baseline prompts evaluated across identical fixture corpuses.

## Produces
The 95% confidence interval (lower bound, upper bound) on the signed performance delta.

## When applied
Computed during evaluation report aggregation to evaluate whether a prompt modification yields statistically significant improvements.

## Sub-concepts
none

## Part of
reportaggregator, report

## Implementation status
clean

## Design notes
`Paired-bootstrap CI` is the non-parametric statistical validation technique in rjm used to evaluate prompt modifications. By running 10,000 paired resamplings with replacement on per-fixture differences, it calculates a 95% confidence interval on the recall delta without relying on normal distribution assumptions, preventing premature promotion of prompt changes that lack statistical significance.
