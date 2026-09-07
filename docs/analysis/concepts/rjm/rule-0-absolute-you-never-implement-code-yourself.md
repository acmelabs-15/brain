---
package: rjm
name: RULE 0 (ABSOLUTE): You NEVER implement code yourself
slug: rule-0-absolute-you-never-implement-code-yourself
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RULE 0 (ABSOLUTE): You NEVER implement code yourself

## Definition — verbatim
> "RULE 0 (ABSOLUTE): You NEVER implement code yourself" — .claude/skills/planner/scripts/executor.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 57 | defined here | Primary coordinator rule prohibiting coordinating agents from directly writing or modifying implementation code. |

## Consumes
Implementation tasks, bugs, and function modifications.

## Produces
Delegation actions to specialized agents (@agent-developer, @agent-debugger).

## When applied
Applied whenever an executing coordinator agent is about to write a function, fix a bug, or modify source files.

## Sub-concepts
none

## Part of
execution-rules

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
Rule 0 enforces strict separation of concerns between coordinator/planner agents and executor agents. By forbidding coordinating agents from writing code directly, it preserves their strategic context and ensures all implementation work undergoes specialized role execution and validation.
