---
package: addy
name: Core Web Vitals Targets
slug: core-web-vitals-targets
kind: reference
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Core Web Vitals Targets

## Definition — verbatim
> "| Metric | Good | Needs Work | Poor |" — references/performance-checklist.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 7 | defines | Table of contents entry and reference section defining quantitative thresholds (Good, Needs Work, Poor) for LCP, INP, and CLS |

## Consumes
Synthetic audit metrics (Lighthouse) and RUM field telemetry (web-vitals, CrUX)

## Produces
Evaluation criteria classifying page performance into Good, Needs Work, or Poor tiers

## When applied
When measuring baseline performance, evaluating optimization impact, or enforcing release quality gates

## Sub-concepts
largest-contentful-paint, interaction-to-next-paint, cumulative-layout-shift

## Part of
performance-checklist

## Implementation status
clean

## Design notes
Objective performance standards based on Google's Core Web Vitals metrics, establishing explicit numeric thresholds for loading performance (LCP <= 2.5s), interactivity responsiveness (INP <= 200ms), and visual stability (CLS <= 0.1).
