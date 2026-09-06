---
package: addy
name: Global store
slug: global-store
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

# Global store

## Definition — verbatim
> "Global store (Zustand, Redux)    → Complex client state shared app-wide" — skills/frontend-ui-engineering/SKILL.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/frontend-ui-engineering/SKILL.md | 111 | defined here | Highest tier of client state management for complex state shared across disparate application modules |

## Consumes
Complex multi-module application state and shared action dispatchers.

## Produces
Centralized state store accessible by arbitrary components throughout the application tree.

## When applied
When complex client-side state must be accessed and mutated across distant branches of the component tree.

## Sub-concepts
none

## Part of
frontend-ui-engineering

## Implementation status
clean

## Design notes
The apex tier of the client state hierarchy reserved for complex, application-wide data that cannot be managed cleanly with local state or URL parameters. It should be used sparingly to avoid unnecessary coupling across components.
