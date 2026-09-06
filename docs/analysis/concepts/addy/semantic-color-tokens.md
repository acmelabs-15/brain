---
package: addy
name: semantic color tokens
slug: semantic-color-tokens
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

# semantic color tokens

## Definition — verbatim
> "Use semantic color tokens: `text-primary`, `bg-surface`, `border-default`" — skills/frontend-ui-engineering/SKILL.md:161

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 161 | defined here | Mandates using intentional design system tokens instead of hardcoded hex values for colors. |

## Consumes
Design system color tokens, CSS custom properties or theme configuration.

## Produces
Themed, maintainable color styling across UI components.

## When applied
Whenever applying text, background, or border colors to interface elements.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Semantic color tokens abstract underlying palette values into purposeful role-based aliases (e.g. text-primary, bg-surface, border-default), preventing fragmented ad-hoc hex styling and facilitating global theming and dark mode support.
