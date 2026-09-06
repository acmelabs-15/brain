---
package: addy
name: responsive design
slug: responsive-design
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: skills/frontend-ui-engineering/SKILL.md, sha256: 2b74ac4862be3902ec918dceac9366a6fe83b9e003601c0deaf6be09c1766aca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# responsive design

## Definition — verbatim
> "## Responsive Design" — skills/frontend-ui-engineering/SKILL.md:242
> "Design for mobile first, then expand:" — skills/frontend-ui-engineering/SKILL.md:244

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/frontend-ui-engineering.md | 5 | used here | Highlighted as an essential capability for creating production UI in the catalog. |
| skills/frontend-ui-engineering/SKILL.md | 242 | defined here | Dedicated section mandating mobile-first design and standard breakpoint usage. |

## Consumes
Viewports, device screen sizes, container queries, and fluid layout rules.

## Produces
Fluid, mobile-first responsive layouts that adapt cleanly across device dimensions.

## When applied
> "Design for mobile first, then expand:" — skills/frontend-ui-engineering/SKILL.md:244

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
A mobile-first design methodology requiring UI layouts to be constructed starting from constrained mobile viewports and scaling upward via breakpoints, preventing horizontal overflow and awkward desktop-only assumptions.
