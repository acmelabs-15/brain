---
package: rjm
name: Exact native events
slug: exact-native-events
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Exact native events

## Definition — verbatim
> "### Exact native events" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 87 | defined here | Subsection header cataloging the 14 official native hook events supported by GitHub Copilot CLI. |

## Consumes
Agent lifecycle triggers and host execution states.

## Produces
Enumerated list of valid native hook event names and compatibility aliases.

## When applied
Referenced when registering hooks to ensure accurate event names and appropriate casing.

## Sub-concepts
matchers

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
The definitive inventory of native hook events supported by Copilot CLI, documenting event naming conventions, PascalCase aliases, and payload structures across agent execution phases.
