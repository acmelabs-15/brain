---
package: addy
name: contrast
slug: contrast
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# contrast

## Definition — verbatim
> "Ensure sufficient contrast (4.5:1 for normal text, 3:1 for large text)" — skills/frontend-ui-engineering/SKILL.md:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 162 | used here | Specifies WCAG contrast ratio requirements for normal and large text against backgrounds. |

## Consumes
Foreground text colors, background colors, font size metrics.

## Produces
Accessible color pairings satisfying WCAG 2.1 AA legibility thresholds.

## When applied
When selecting or styling text and interactive element colors across interfaces.

## Sub-concepts
none

## Part of
frontend-ui-engineering, accessibility-checklist

## Implementation status
clean

## Design notes
Color contrast standards mandate minimum luminance ratios (4.5:1 for normal text, 3:1 for large text) to guarantee legibility for users with visual impairments, directly addressing common AI generation defects of low-contrast gray text.
