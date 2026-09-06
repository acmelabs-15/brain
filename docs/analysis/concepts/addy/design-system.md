---
package: addy
name: design system
slug: design-system
kind: reference
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

# design system

## Definition — verbatim
(used, not defined)
> "This means real design system adherence, proper accessibility, thoughtful interaction patterns, and no generic \"AI aesthetic.\"" — skills/frontend-ui-engineering/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 10 | used here | Stated as a core requirement for building production-quality UI rather than generic AI output |

## Consumes
Design tokens, typography hierarchy, spacing scale, component libraries.

## Produces
Consistent, accessible visual interfaces adhering to established brand standards.

## When applied
Throughout frontend component development and styling in the Build phase.

## Sub-concepts
spacing-scale

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
In addy's frontend engineering discipline, adhering to a project's existing design system is essential to avoid the generic "AI aesthetic." It provides the canonical tokens, spacing, colors, and components that ground agent-generated UI in real production standards.
