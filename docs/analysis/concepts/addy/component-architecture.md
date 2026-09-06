---
package: addy
name: Component architecture
slug: component-architecture
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

# Component architecture

## Definition — verbatim
> "## Component Architecture" — skills/frontend-ui-engineering/SKILL.md:20
> "Colocate everything related to a component:" — skills/frontend-ui-engineering/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/frontend-ui-engineering.md | 5 | used here | Listed as the first core capability on the frontend-ui-engineering catalog page. |
| skills/frontend-ui-engineering/SKILL.md | 20 | defined here | Main section establishing file structure, colocation, and composition patterns. |

## Consumes
UI design specifications, wireframes, and component requirements.

## Produces
Colocated, modular component directories containing code, tests, styles, and types.

## When applied
> "- Building new UI components or pages" — skills/frontend-ui-engineering/SKILL.md:14

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Structural engineering pattern for organizing user interfaces into self-contained, colocated modules where markup, styles, unit tests, and type declarations live together. This ensures maintainability, isolation, and safe refactoring.
