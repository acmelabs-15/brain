---
package: addy
name: bottleneck
slug: bottleneck
kind: pattern
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

# bottleneck

## Definition — verbatim
(used, not defined)
> "A measured baseline, an identified bottleneck, a targeted fix, a verified improvement, and a regression guard" — evals/cases/performance-optimization.json:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/performance-optimization.json | 41 | used here | Named as the target of optimization in expected behavioral evaluation output. |

## Consumes
Profiling traces, flame graphs, execution timelines, and query logs.

## Produces
The isolated subsystem, function, or query accounting for the dominant share of latency or resource consumption.

## When applied
Identified through measurement analysis after establishing a baseline and before proposing fixes.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
In Addy's performance engineering workflow, identifying the true `bottleneck` prevents shotgun optimization. Guided by profiling data rather than developer intuition, the process isolates the single constraint that limits overall system throughput or responsiveness. Without locating the empirical bottleneck, optimization efforts waste time modifying code that contributes negligibly to total execution time.
