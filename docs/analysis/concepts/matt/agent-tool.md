---
package: matt
name: Agent tool
slug: agent-tool
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent tool

## Definition — verbatim
(used, not defined)
> "spawn 3+ sub-agents in parallel using the Agent tool" — external/codebase-design.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 56 | used here | Identifies Claude Code's platform mechanism for spawning parallel sub-agents in DESIGN-IT-TWICE.md. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
A platform-specific tool identifier in Claude Code used for dispatching sub-agents, cataloged as `kind: name-only` per D-023 rather than an active development lifecycle concept.
