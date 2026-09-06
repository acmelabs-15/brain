---
package: addy
name: WCAG 2.1 AA
slug: wcag-2-1-aa
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# WCAG 2.1 AA

## Definition — verbatim
> "Quick reference for WCAG 2.1 AA compliance. Use alongside the `frontend-ui-engineering` skill." — references/accessibility-checklist.md:3

## Also called — verbatim
> "## Accessibility (WCAG 2.1 AA)" — skills/frontend-ui-engineering/SKILL.md:165

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/frontend-ui-engineering.md | 5 | used here | Summarized on the frontend-ui-engineering catalog page as a primary skill requirement. |
| README.md | 254 | used here | Listed in the skills table as an integral component of frontend-ui-engineering. |
| references/accessibility-checklist.md | 3 | used here | Identifies the standard governing the entire accessibility checklist reference document. |
| skills/frontend-ui-engineering/SKILL.md | 165 | used here | Section header establishing mandatory accessibility standards for all user-facing UI. |

## Consumes
UI component markup, styles, interactions, focus states, and color palettes.

## Produces
Accessible, compliant web interfaces satisfying perceivable, operable, understandable, and robust criteria.

## When applied
> "Every component must meet these standards:" — skills/frontend-ui-engineering/SKILL.md:167

## Sub-concepts
none

## Part of
accessibility-checklist, frontend-ui-engineering

## Implementation status
defects: missing-path

## Design notes
Web Content Accessibility Guidelines 2.1 Level AA serves as the non-negotiable benchmark for all user interface development in Addy. It mandates color contrast, keyboard navigability, semantic ARIA roles, and screen-reader compatibility.
