---
package: addy
name: Design System Adherence
slug: design-system-adherence
kind: checklist
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

# Design System Adherence

## Definition — verbatim
> "## Design System Adherence" — skills/frontend-ui-engineering/SKILL.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 116 | defined here | Major engineering section governing design token compliance, layout consistency, and anti-AI aesthetic rules |

## Consumes
Design tokens, color palettes, typography scale, spacing scales, border radii standards.

## Produces
UIs that strictly adhere to project tokens without arbitrary or hardcoded aesthetic values.

## When applied
When styling components, selecting layouts, choosing color tokens, and applying typography.

## Sub-concepts
spacing-scale

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
Engineering discipline requiring all UI styling and layout to strictly follow the project's established design tokens and scales. It prevents arbitrary styling choices, maintains visual coherence across the application, and actively eliminates generic generative AI aesthetic patterns.
