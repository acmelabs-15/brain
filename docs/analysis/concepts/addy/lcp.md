---
package: addy
name: LCP
slug: lcp
kind: reference
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# LCP

## Definition — verbatim
> "**LCP** (Largest Contentful Paint) | ≤ 2.5s | ≤ 4.0s | > 4.0s |" — skills/performance-optimization/SKILL.md:26

## Also called — verbatim
"Largest Contentful Paint" — references/performance-checklist.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/performance-optimization.json | 22 | used here | Used in trigger prompt evaluating skill invocation for Core Web Vitals optimization. |
| references/performance-checklist.md | 19 | used here | Listed in Core Web Vitals targets table with thresholds (Good ≤ 2.5s, Poor > 4.0s). |
| skills/performance-optimization/SKILL.md | 26 | defined here | Defined in Core Web Vitals targets table with explicit quantitative performance boundaries. |

## Consumes
Browser performance traces, lab Lighthouse audits, or Field Real User Monitoring (RUM).

## Produces
A measured render timing metric indicating when the primary visual content finishes loading.

## When applied
Evaluated during web performance audits and pre-launch verification against the ≤ 2.5s threshold.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
`LCP` (Largest Contentful Paint) is a standardized Core Web Vital measuring perceived loading performance by tracking when the main content of a webpage is likely loaded. Addy incorporates LCP into performance checklists with explicit good (≤ 2.5s) and poor (> 4.0s) thresholds to provide an objective, evidence-based target for frontend optimization. Without tracking LCP, optimization efforts risk focusing on non-critical micro-optimizations that do not improve user-perceived speed.
