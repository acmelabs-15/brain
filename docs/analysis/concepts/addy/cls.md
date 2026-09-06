---
package: addy
name: CLS
slug: cls
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

# CLS

## Definition — verbatim
> "| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | ≤ 0.25 | > 0.25 |" — skills/performance-optimization/SKILL.md:28

## Also called — verbatim
`Cumulative Layout Shift` — skills/performance-optimization/SKILL.md:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 21 | used here | Listed in Core Web Vitals table establishing <= 0.1 as the good threshold for visual stability |
| skills/performance-optimization/SKILL.md | 28 | defines | Core Web Vitals target defining visual stability threshold of <= 0.1 |

## Consumes
Unprompted DOM layout shifts, dynamically injected banners, images/iframes without dimension attributes

## Produces
Layout instability score (unitless decimal)

## When applied
When verifying UI layout stability, font loading behaviors, and image/ad containers

## Sub-concepts
none

## Part of
core-web-vitals-targets

## Implementation status
clean

## Design notes
The acronym for Cumulative Layout Shift, measuring visual stability on web pages. Addy targets CLS <= 0.1, prevented by explicit width/height dimensions on media, reserved space for dynamic embeds, and font fallback override metrics.
