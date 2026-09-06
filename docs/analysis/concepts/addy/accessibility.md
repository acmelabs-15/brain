---
package: addy
name: accessibility
slug: accessibility
kind: checklist
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

# accessibility

## Definition — verbatim
(used, not defined)
> "This means real design system adherence, proper accessibility, thoughtful interaction patterns, and no generic \"AI aesthetic.\"" — skills/frontend-ui-engineering/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 10 | used here | Highlighted as an essential quality pillar alongside design system adherence for production UIs |

## Consumes
UI requirements, semantic HTML elements, WCAG 2.1 AA checklist.

## Produces
Accessible web interfaces navigable via keyboard and screen readers.

## When applied
During UI component design, markup selection, keyboard interaction handling, and verification.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
A non-negotiable engineering discipline in addy requiring web interfaces to meet WCAG 2.1 AA standards. It ensures interactive components support full keyboard navigation, ARIA semantics, focus management, and sufficient contrast rather than treating accessibility as an afterthought.
