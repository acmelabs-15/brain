---
package: addy
name: Presentation
slug: presentation
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

# Presentation

## Definition — verbatim
> "// Presentation: handles rendering" — skills/frontend-ui-engineering/SKILL.md:91

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 91 | defined here | Architectural pattern designating stateless or pure rendering components driven exclusively by props |

## Consumes
Props, data structures, event handler callbacks.

## Produces
Pure visual markup and semantic HTML structure without direct side effects.

## When applied
When writing stateless, reusable UI components focused strictly on layout and rendering.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Component architectural pattern for presentational components that focus exclusively on markup, styles, and rendering props. Keeping presentation free from data-fetching and side effects ensures high reusability and ease of automated visual testing.
