---
package: addy
name: Largest Contentful Paint
slug: largest-contentful-paint
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

# Largest Contentful Paint

## Definition — verbatim
> "| **LCP** (Largest Contentful Paint) | ≤ 2.5s | ≤ 4.0s | > 4.0s |" — skills/performance-optimization/SKILL.md:26

## Also called — verbatim
`LCP` — skills/performance-optimization/SKILL.md:26

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 19 | used here | Core Web Vitals target table row specifying <= 2.5s as the good threshold for Largest Contentful Paint |
| skills/performance-optimization/SKILL.md | 26 | defines | Primary Core Web Vitals target table defining the <= 2.5s threshold for perceived loading speed |

## Consumes
Render timing of the largest above-the-fold image, video poster, or text block

## Produces
Quantitative page loading performance metric (seconds)

## When applied
When evaluating page load performance, optimizing hero images/fonts, or gating releases

## Sub-concepts
none

## Part of
core-web-vitals-targets

## Implementation status
clean

## Design notes
A Core Web Vital metric measuring perceived loading speed by marking the render time of the largest visual element in the viewport. Addy sets a strict target of <= 2.5s, achieved via image optimization, font preloading, and critical resource prioritization.
