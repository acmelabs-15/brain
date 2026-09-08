---
package: rjm
name: Skill inheritance
slug: skill-inheritance
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Skill inheritance

## Definition — verbatim
> "**Skill inheritance is harness-specific.** The Claude Code incident behind this note found that workers did not inherit the skills active in the parent session; it does not establish the same behavior in other harnesses. Where a worker does not inherit, naming the skill file costs less context than pasting its body into the prompt." — templates/agents/orchestrator.shared.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/orchestrator.shared.md | 166 | defines | Documents cross-harness behavioral differences in subagent skill inheritance and context-efficient workarounds. |

## Consumes
Subagent delegation requests requiring specific skill capabilities.

## Produces
Context-efficient delegation prompts referencing skill files by path rather than embedding whole skill bodies.

## When applied
Applied when delegating tasks to subagents that require active skill context across varying agent harnesses.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
An orchestration reliability pattern recognizing that worker subagents do not automatically inherit parent session skills across different agent harnesses. To prevent context window exhaustion from inlining full skill bodies into delegation messages, orchestrators are directed to cite skill file paths explicitly so workers load only what they require.
