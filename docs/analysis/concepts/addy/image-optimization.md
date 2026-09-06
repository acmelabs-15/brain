---
package: addy
name: Image Optimization
slug: image-optimization
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Image Optimization

## Definition — verbatim
(used, not defined)

> "#### Missing Image Optimization (Frontend)" — skills/performance-optimization/SKILL.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 204 | defined here | Outlined as a frontend performance technique combining modern formats, responsive art direction, and sizing |

## Consumes
Frontend markup, unoptimized static image assets, responsive design breakpoints.

## Produces
Responsive picture elements with modern image formats (AVIF/WebP), responsive `srcset`/`sizes`, explicit dimensions, and priority/lazy loading hints.

## When applied
When auditing frontend performance, Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift), or page weight.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
Image optimization in addy balances visual quality and network transfer costs using modern formats (AVIF, WebP), explicit dimensional attributes to eliminate layout shifts, and responsive image syntax (`<picture>`, `srcset`, `sizes`). Optimizing above-the-fold hero images directly improves LCP while lazy loading below-the-fold images preserves initial bandwidth.
