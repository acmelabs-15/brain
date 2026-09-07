---
package: rjm
name: dual-format shim
slug: dual-format-shim
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# dual-format shim

## Definition — verbatim
> "a dual-format shim (reads both" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 85 | defined here | Mechanism shipped in PR #2293 to parse both camelCase and snake_case hook payload fields. |

## Consumes
Hook payload JSON dictionaries from heterogeneous Copilot CLI event-casing models.

## Produces
Normalized hook argument structures containing consistent `tool_name` and `tool_input` bindings regardless of incoming casing.

## When applied
Executed upon receipt of tool-use events in the Copilot CLI hook adapter runtime.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
clean

## Design notes
The `dual-format shim` is a defensive payload parser created after Incident 2 (#2290). Because Copilot CLI emits camelCase event keys with raw JSON string arguments, but PascalCase event keys with snake_case parsed dictionaries, the dual-format shim accepts both formats to ensure hooks execute reliably without crashing.
