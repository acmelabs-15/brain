---
package: addy
name: content-visibility: auto
slug: content-visibility-auto
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

# content-visibility: auto

## Definition — verbatim
> "- [ ] Off-screen sections use `content-visibility: auto` with `contain-intrinsic-size` to skip layout/paint of non-visible areas" — references/performance-checklist.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 84 | used here | Recommended CSS property to bypass layout and rendering calculations for off-screen page sections |

## Consumes
Off-screen DOM subtrees, long-form page sections

## Produces
Skipped layout and painting work for elements outside the viewport

## When applied
In long or complex web pages containing large below-the-fold content sections

## Sub-concepts
none

## Part of
frontend-checklist

## Implementation status
clean

## Design notes
A CSS rendering performance optimization that instructs the browser engine to skip layout, painting, and rendering work for off-screen elements until they approach the viewport, dramatically reducing initial DOM rendering time.
