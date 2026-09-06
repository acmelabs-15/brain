---
package: addy
name: Visual
slug: visual
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Visual

## Definition — verbatim
> "### Visual" — references/accessibility-checklist.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/accessibility-checklist.md | 33 | defined here | Checklist section specifying contrast ratios, resizing tolerance, and flashing limits |

## Consumes
Color palettes, design tokens, typography styles, animation effects

## Produces
Visual styling that meets contrast minimums (4.5:1 normal, 3:1 large), scales to 200%, and does not flash

## When applied
When selecting colors, styling text and UI components, or testing visual presentations

## Sub-concepts
none

## Part of
accessibility-checklist

## Implementation status
clean

## Design notes
In addy, the Visual checklist standardizes optical accessibility criteria under WCAG 2.1 AA, ensuring legible contrast thresholds, multi-modal status indication beyond color alone, responsive 200% text magnification without layout breakage, and seizure prevention.
