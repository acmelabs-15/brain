---
package: addy
name: Content
slug: content
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

# Content

## Definition — verbatim
> "### Content" — references/accessibility-checklist.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/accessibility-checklist.md | 48 | defined here | Checklist section specifying document language, titles, touch targets, and empty states |

## Consumes
Document metadata, page templates, interactive links, touch elements

## Produces
Accessible page shells with declared language, descriptive titles, distinguishable links, and 44x44px touch targets

## When applied
When structuring page layouts, navigation elements, touch interfaces, and document headers

## Sub-concepts
none

## Part of
accessibility-checklist

## Implementation status
clean

## Design notes
In addy, the Content checklist provides baseline document and touch accessibility standards, mandating document language declarations, descriptive page titles, distinguished hyperlink text, minimum 44x44px mobile touch targets, and helpful empty states.
