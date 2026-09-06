---
package: addy
name: Optimistic updates
slug: optimistic-updates
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

# Optimistic updates

## Definition — verbatim
> "// Optimistic updates for perceived speed" — skills/frontend-ui-engineering/SKILL.md:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 272 | defined here | Demonstrates mutating local cache immediately on user action with rollback on mutation failure. |

## Consumes
User interaction, client mutation logic, cache query client.

## Produces
Instant visual state updates with automatic error rollback handling.

## When applied
When executing common user mutations where immediate perceived responsiveness is desired.

## Sub-concepts
none

## Part of
loading-and-transitions, frontend-ui-engineering

## Implementation status
clean

## Design notes
Optimistic updates update client-side state immediately upon user action before server confirmation arrives, caching previous state to roll back gracefully if the network request fails, delivering instant perceived responsiveness.
