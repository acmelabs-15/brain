---
package: rjm
name: Proactive handover at ~80% context
slug: proactive-handover-at-80-context
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Proactive handover at ~80% context

## Definition — verbatim
> "**Proactive handover at ~80% context**: Outgoing agent writes all undocumented context, decisions, working memory to dedicated file. New agent reads that file. No chat history re-reading." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 17 | defined here | Defined as an operational handover pattern triggering state offloading when context reaches roughly 80%. |

## Consumes
Active session memory, undocumented decisions, and unpersisted context nearing token limits.

## Produces
Dedicated handover file summarizing essential context for successor agent execution.

## When applied
Triggered proactively when an agent's context usage reaches approximately 80% of window capacity.

## Sub-concepts
none

## Part of
context-optimization

## Implementation status
clean

## Design notes
A context management discipline in rjm where agents proactively summarize undocumented findings into a handover artifact at 80% context, allowing fresh successor instances to proceed cleanly without context degradation.
