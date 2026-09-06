---
package: addy
name: "profiling workflows"
slug: profiling-workflows
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# profiling workflows

## Definition — verbatim
(used, not defined)

> "Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection." — external/performance-optimization.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/performance-optimization.md | 5 | used here | Identified as a core component of the measure-first approach in the performance optimization catalog summary. |

## Consumes
Running application instances, synthetic or real user traffic, and profiler instrumentation.

## Produces
CPU flamecharts, memory allocation profiles, network waterfall charts, and hotspot identification.

## When applied
Used during performance reviews when bottlenecks are suspected or Core Web Vitals need improvement.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
defects: doc-drift

## Design notes
Profiling workflows enforce empirical measurement before code changes. Rather than guessing why an application is slow, agents must collect profiler data (CPU, memory, bundle, or database) to isolate the precise bottleneck.
