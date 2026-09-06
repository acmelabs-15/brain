---
package: addy
name: Cumulative Layout Shift
slug: cumulative-layout-shift
kind: technique
package_phase: addy:Review
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Cumulative Layout Shift

## Definition — verbatim
> "| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | ≤ 0.25 | > 0.25 |" — skills/performance-optimization/SKILL.md:28

## Also called — verbatim
`CLS` — skills/performance-optimization/SKILL.md:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 21 | used here | Full metric name in the Core Web Vitals targets table with target <= 0.1 |
| skills/performance-optimization/SKILL.md | 28 | defines | Core Web Vitals metric quantifying unexpected layout movements during page lifetime |

## Consumes
Viewport coordinate changes of visible elements between frames

## Produces
Cumulative score quantifying layout disruption

## When applied
When auditing visual stability, CSS layout rendering, and asset sizing

## Sub-concepts
none

## Part of
core-web-vitals-targets

## Implementation status
clean

## Design notes
Full name for the Core Web Vital quantifying visual stability, ensuring user interactions are not disrupted by unexpected layout movements.
