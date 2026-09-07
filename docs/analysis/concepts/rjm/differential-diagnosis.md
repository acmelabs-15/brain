---
package: rjm
name: differential diagnosis
slug: differential-diagnosis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# differential diagnosis

## Definition — verbatim
> "THE SYSTEM SHALL include the actual deltas (signed, with CI), an honest interpretation of whether the agent demonstrably outperforms baseline on this corpus, a minimum detectable effect size given the fixture count, a differential diagnosis if delta is near zero, and a recommendation among {graduate-to-CI, keep-as-audit, scrap} selected by the decision criteria below with the evidence supporting it," — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:211

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 211 | defines | Mandates structured evaluation of four distinct root causes when prompt evaluation delta is near zero. |

## Consumes
Paired bootstrap confidence intervals, per-fixture pass rates, baseline prompt details.

## Produces
Evidence-based attribution across four root causes (agent adds no value, baseline too specific, corpus too easy, corpus too hard).

## When applied
When eval report 95% confidence interval spans zero or delta is near zero.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An analytical technique mandating structured root-cause attribution when an eval shows negligible difference between agent and baseline, distinguishing between flawed tests, ceiling/floor effects, and genuine lack of agent value.
