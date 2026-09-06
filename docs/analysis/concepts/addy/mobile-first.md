---
package: addy
name: mobile first
slug: mobile-first
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

# mobile first

## Definition — verbatim
> "Design for mobile first, then expand:" — skills/frontend-ui-engineering/SKILL.md:244

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 244 | defined here | Core responsive design principle directing interfaces to be built for mobile viewports before expanding. |

## Consumes
Component layout specifications, viewport constraints.

## Produces
Responsive CSS and layout structures defaulting to single-column mobile views and expanding at media breakpoints.

## When applied
At the inception of frontend component styling and layout construction.

## Sub-concepts
breakpoints

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Mobile-first design requires implementing baseline layouts for the smallest viewports first and progressively adding layout complexity at wider breakpoints, avoiding the costly retrofitting required when designing for desktop-only layouts.
