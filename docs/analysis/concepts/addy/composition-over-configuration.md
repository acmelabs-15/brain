---
package: addy
name: composition over configuration
slug: composition-over-configuration
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

# composition over configuration

## Definition — verbatim
> "**Prefer composition over configuration:**" — skills/frontend-ui-engineering/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 38 | defined here | Core component design principle favoring compound composable elements over monolithic prop bags |

## Consumes
Discrete UI subcomponents (headers, bodies, footers, containers).

## Produces
Flexible, readable compound components with clean JSX APIs.

## When applied
When designing React/UI component interfaces and prop APIs.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Component design principle advocating for composable sub-elements (e.g., `<Card><CardHeader/><CardBody/></Card>`) over monolithic components with bloated prop configurations (e.g., `<Card headerVariant="..." bodyPadding="..." />`). It enables greater layout flexibility and avoids fragile configuration matrices.
