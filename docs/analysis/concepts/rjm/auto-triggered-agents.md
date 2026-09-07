---
package: rjm
name: Auto-triggered agents
slug: auto-triggered-agents
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

# Auto-triggered agents

## Definition — verbatim
> "Agents fire based on context, not manual invocation." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 62 | defined here | Defined as an agent execution pattern where agents activate automatically from environment context rather than manual invocation. |

## Consumes
Environmental context events, code changes, feature flag introduction, or release milestones.

## Produces
Automated agent invocations and specialized subtask executions.

## When applied
Applied when lifecycle triggers occur, such as post-code changes, feature flag introduction, or launch milestones.

## Sub-concepts
none

## Part of
context-optimizer

## Implementation status
defects: missing-path

## Design notes
An agent dispatch pattern that decouples agent activation from manual operator commands, allowing specialized agents to monitor contextual triggers (like code modifications or flag definitions) and fire autonomously.
