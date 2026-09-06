---
package: addy
name: Frontend Checklist
slug: frontend-checklist
kind: checklist
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

# Frontend Checklist

## Definition — verbatim
(used, not defined)
> "## Frontend Checklist" — references/performance-checklist.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 9 | defines | Section heading and checklist outlining frontend performance optimizations across images, JavaScript, CSS, fonts, network, and rendering |

## Consumes
Frontend code, UI bundles, styles, font assets, and DOM rendering logic

## Produces
Systematic verification across client-side asset delivery and runtime execution

## When applied
During UI implementation, bundle analysis, frontend code reviews, and pre-launch audits

## Sub-concepts
none

## Part of
performance-checklist

## Implementation status
clean

## Design notes
A structured audit checklist organizing client-side optimization rules across six critical dimensions: image compression/loading, JavaScript execution/scheduling, critical CSS delivery, font subsetting/display, network protocols, and DOM rendering efficiency.
