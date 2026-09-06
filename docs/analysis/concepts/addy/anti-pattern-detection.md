---
package: addy
name: "anti-pattern detection"
slug: anti-pattern-detection
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

# anti-pattern detection

## Definition — verbatim
(used, not defined)

> "Measure-first approach - Core Web Vitals targets, profiling workflows, bundle analysis, and anti-pattern detection." — external/performance-optimization.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/performance-optimization.md | 5 | used here | Listed as an automated analysis technique in the performance optimization catalog overview. |

## Consumes
Source code ASTs, ORM query patterns, component render paths, and bundle imports.

## Produces
Flagged code violations such as N+1 queries, layout thrashing, and unnecessary dependency bloat.

## When applied
Run during the Review phase or automated audits via /webperf.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
defects: doc-drift

## Design notes
Detects well-known architectural and performance anti-patterns before they reach production. In Addy's toolkit, this catches recurring issues like unindexed lookups and oversized client bundles during review.
