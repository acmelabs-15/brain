---
package: addy
name: contain-intrinsic-size
slug: contain-intrinsic-size
kind: technique
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

# contain-intrinsic-size

## Definition — verbatim
> "- [ ] Off-screen sections use `content-visibility: auto` with `contain-intrinsic-size` to skip layout/paint of non-visible areas" — references/performance-checklist.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 84 | used here | Required companion CSS property alongside content-visibility to provide estimated dimensions and avoid scroll jumps |

## Consumes
Layout dimensions of deferred off-screen containers

## Produces
Placeholder intrinsic sizing that stabilizes scrollbars and prevents layout shift

## When applied
Whenever applying `content-visibility: auto` to off-screen elements

## Sub-concepts
none

## Part of
frontend-checklist

## Implementation status
clean

## Design notes
A companion CSS property used with `content-visibility: auto` to define a placeholder width and height for unrendered elements, ensuring accurate scrollbar sizing and preventing Cumulative Layout Shift when elements scroll into view.
