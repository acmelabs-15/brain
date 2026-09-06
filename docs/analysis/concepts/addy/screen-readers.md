---
package: addy
name: Screen Readers
slug: screen-readers
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

# Screen Readers

## Definition — verbatim
> "### Screen Readers" — references/accessibility-checklist.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/accessibility-checklist.md | 24 | defined here | Checklist section establishing verification rules for non-visual assistive technology |

## Consumes
UI component markup, image assets, form inputs, dynamic content regions

## Produces
Accessible DOM tree with descriptive text alternatives, programmatic form labels, and heading structure

## When applied
When building, styling, or auditing user interface components for accessibility compliance

## Sub-concepts
none

## Part of
accessibility-checklist

## Implementation status
clean

## Design notes
In addy, the Screen Readers checklist defines essential markup and semantic requirements ensuring non-visual software (VoiceOver, NVDA, JAWS, Orca) can accurately convey visual interfaces, including image alt attributes, input labels, descriptive button text, and heading hierarchies.
