---
package: addy
name: Container
slug: container
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

# Container

## Definition — verbatim
> "// Container: handles data" — skills/frontend-ui-engineering/SKILL.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 80 | defined here | Architectural pattern designating components responsible for data fetching, loading, error, and empty states |

## Consumes
Data hooks, remote APIs, loading and error states.

## Produces
Encapsulated data-fetching logic delegating rendering to presentational components.

## When applied
When connecting remote data queries and side effects to UI views.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Component architecture pattern separating data acquisition and state management from rendering logic. A container component handles queries, loading skeletons, error boundaries, and empty states, passing pure data down to presentation components.
