---
package: addy
name: Measure-first
slug: measure-first
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Measure-first

## Definition — verbatim
> "Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection." — external/performance-optimization.md:5

## Also called — verbatim
> "Measure-first" — external/code-review-and-quality.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 12 | used here | Listed in performance-optimization card in related Review skills |
| external/performance-optimization.md | 5 | used here | Stated as the primary methodology for performance optimization |
| external/security-and-hardening.md | 12 | used here | Cited in performance-optimization card under Review skills |

## Consumes
Baseline performance metrics, real user monitoring data, profiler outputs, Core Web Vitals targets.

## Produces
Data-driven optimization priorities based on empirical bottlenecks rather than speculative guessing.

## When applied
Whenever evaluating application speed, investigating latency complaints, or modifying performance-critical code.

## Sub-concepts
`bundle-analysis`

## Part of
`performance-optimization`

## Implementation status
clean

## Design notes
The Measure-first pattern enforces empirical discipline in performance work, requiring developers and agents to establish baseline measurements through profiling and metrics before attempting optimizations, preventing premature and ineffective code churn.
