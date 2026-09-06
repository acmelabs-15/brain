---
package: addy
name: Skeleton loading
slug: skeleton-loading
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

# Skeleton loading

## Definition — verbatim
> "// Skeleton loading (not spinners for content)" — skills/frontend-ui-engineering/SKILL.md:261

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 261 | defined here | Prescribes placeholder skeleton components over spinners for content loading. |

## Consumes
Component layout geometry, pending asynchronous query state.

## Produces
Pulsing wireframe placeholder UI indicating pending content shape.

## When applied
While initial page or component content data is loading.

## Sub-concepts
none

## Part of
loading-and-transitions, frontend-ui-engineering

## Implementation status
clean

## Design notes
Skeleton loading renders pulsing content-shaped placeholders during data fetch, preserving layout stability (preventing cumulative layout shift) and improving perceived performance compared to generic spinners.
