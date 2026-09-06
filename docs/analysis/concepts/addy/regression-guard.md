---
package: addy
name: regression guard
slug: regression-guard
kind: gate
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# regression guard

## Definition — verbatim
(used, not defined)
> "A measured baseline, an identified bottleneck, a targeted fix, a verified improvement, and a regression guard" — evals/cases/performance-optimization.json:41

## Also called — verbatim
"concrete guard" — evals/cases/performance-optimization.json:49

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/performance-optimization.json | 41 | used here | Specified as the concluding deliverable in performance optimization workflow evals. |

## Consumes
Verified post-fix performance metrics and agreed performance thresholds.

## Produces
An automated CI check, synthetic budget assertion, or production alert preventing performance degradation.

## When applied
Installed immediately after verifying an optimization fix to lock in the improvement.

## Sub-concepts
performance-budget, field-monitoring

## Part of
performance-optimization

## Implementation status
clean

## Design notes
A `regression guard` ensures that hard-won performance optimizations remain permanent. Addy mandates that every optimization concludes with a mechanism—such as a CI budget test or an alert threshold—that fails if subsequent changes reintroduce latency or overhead. Without regression guards, software entropy and subsequent feature commits inevitably erode performance improvements over time.
