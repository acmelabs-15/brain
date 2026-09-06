---
package: addy
name: Typography
slug: typography
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

# Typography

## Definition — verbatim
> "### Typography" — skills/frontend-ui-engineering/SKILL.md:145
> "Respect the type hierarchy:" — skills/frontend-ui-engineering/SKILL.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 145 | defined here | Design system section establishing rules for respecting type hierarchy and heading levels without skipping. |

## Consumes
Design system tokens, typography scales, semantic HTML heading tags (h1, h2, h3, body, small).

## Produces
Structured, semantic typographic hierarchy in user interface components.

## When applied
When implementing page typography, heading structures, and text styling in frontend components.

## Sub-concepts
type-hierarchy

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
In addy, Typography enforces strict semantic hierarchy (one h1 per page, sequential h2/h3 nesting, standard body and small tags) and prohibits skipping heading levels or applying heading styles to non-heading content, preventing visual and accessibility incoherence.
