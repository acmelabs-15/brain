---
package: addy
name: performance budget
slug: performance-budget
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

# performance budget

## Definition — verbatim
(used, not defined)
> "A concrete guard is added after verification using a synthetic performance budget or field monitoring tied to the measured user-facing metric" — evals/cases/performance-optimization.json:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/performance-optimization.json | 49 | used here | Cited as an approved concrete mechanism for establishing a performance regression guard. |

## Consumes
Target performance thresholds, asset size limits, or timing boundaries.

## Produces
Automated build or CI gate that rejects artifacts or pull requests exceeding defined limits.

## When applied
Configured in CI pipelines or deployment checks after establishing performance baselines.

## Sub-concepts
none

## Part of
regression-guard, performance-optimization

## Implementation status
clean

## Design notes
A `performance budget` establishes explicit, non-negotiable boundaries on metrics such as bundle size, network payload, or page load timings. It translates abstract performance goals into actionable gate conditions that prevent code bloat before deployment. Without a performance budget, incremental changes slowly degrade application speed without triggering visible build failures.
