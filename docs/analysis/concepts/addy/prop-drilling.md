---
package: addy
name: prop drilling
slug: prop-drilling
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

# prop drilling

## Definition — verbatim
> "**Avoid prop drilling deeper than 3 levels.** If you're passing props through components that don't use them, introduce context or restructure the component tree." — skills/frontend-ui-engineering/SKILL.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 114 | defined here | Architectural anti-pattern constrained to at most 3 levels before requiring context or tree restructuring |

## Consumes
Component hierarchy passing unused props through intermediate layers.

## Produces
Refactoring trigger to introduce context or restructure component composition.

## When applied
When passing props through intermediate components that do not consume them.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
An architectural code smell in component-based UI engineering where data is passed down through several intermediate layers that do not consume it. Addy caps prop drilling at 3 levels, mandating React context or tree restructuring beyond that threshold.
