---
package: addy
name: type hierarchy
slug: type-hierarchy
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

# type hierarchy

## Definition — verbatim
> "Respect the type hierarchy:" — skills/frontend-ui-engineering/SKILL.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 147 | defined here | Directs engineers to adhere to structured heading and text tiers (h1 to small) without skipping levels. |

## Consumes
HTML heading elements (h1-h3), paragraph and small tags, design system typographic scales.

## Produces
Semantically ordered heading structure providing clear visual and document outline structure.

## When applied
When designing and coding interface typography to ensure semantic order and screen-reader navigable headings.

## Sub-concepts
none

## Part of
typography, frontend-ui-engineering

## Implementation status
clean

## Design notes
The type hierarchy guideline maps semantic HTML tags directly to content roles (h1 for page title, h2 for section title, h3 for subsection title, body for default text, small for secondary text), ensuring document outlines remain accessible and coherent.
