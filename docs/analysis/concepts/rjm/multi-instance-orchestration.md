---
package: rjm
name: Multi-instance orchestration
slug: multi-instance-orchestration
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

# Multi-instance orchestration

## Definition — verbatim
> "**Multi-instance orchestration**: Separate CC instances per domain (frontend, backend, DB). All log to central memory bank. Cross-instance reads fetch only relevant logs, not full history." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 15 | defined here | Defined as an architectural pattern for segregating agent instances across domains to avoid quadratic cost growth. |

## Consumes
System architecture domain boundaries and centralized memory logging storage.

## Produces
Decoupled per-domain agent sessions communicating via structured memory logs rather than shared chat history.

## When applied
Applied when a project involves multiple technical stacks or domains (frontend, backend, database) where unified context would exceed token budgets.

## Sub-concepts
none

## Part of
context-optimization

## Implementation status
clean

## Design notes
An architectural scaling pattern in rjm that assigns dedicated Claude Code agent instances to separate architectural domains, mitigating quadratic context growth by replacing shared conversation histories with selective reads from a centralized memory bank.
