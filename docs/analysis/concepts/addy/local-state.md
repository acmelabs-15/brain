---
package: addy
name: Local state
slug: local-state
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

# Local state

## Definition — verbatim
> "Local state (useState)           → Component-specific UI state" — skills/frontend-ui-engineering/SKILL.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 106 | defined here | First tier in the state management hierarchy for component-specific UI state |

## Consumes
Component-level user interactions (toggles, input buffers, open/close status).

## Produces
Component-scoped state variables and updater functions.

## When applied
When UI state affects only a single component and does not need to be shared.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
The baseline tier in addy's state management hierarchy, designating state that is scoped strictly within a single component. Keeping ephemeral state local prevents unnecessary global re-renders and reduces architectural complexity.
