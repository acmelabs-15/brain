---
package: addy
name: spacing scale
slug: spacing-scale
kind: pattern
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

# spacing scale

## Definition — verbatim
> "Use a consistent spacing scale. Don't invent values:" — skills/frontend-ui-engineering/SKILL.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 135 | defined here | Layout standard mandating fixed incremental values (e.g. 0.25rem increments) for all margin, padding, and gaps |

## Consumes
Project spacing tokens or predefined increments (e.g., 0.25rem / 4px scale).

## Produces
Harmonious layout rhythm, consistent padding and margin values across components.

## When applied
When setting padding, margins, gaps, and component dimensions.

## Sub-concepts
none

## Part of
design-system-adherence

## Implementation status
clean

## Design notes
A disciplined design system standard enforcing consistent mathematical increments (such as 0.25rem / 4px steps) for all padding, margins, and layout gaps. It forbids arbitrary pixel values to maintain consistent visual rhythm and scanability across interfaces.
