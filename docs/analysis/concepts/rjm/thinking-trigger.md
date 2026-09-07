---
package: rjm
name: Thinking trigger
slug: thinking-trigger
kind: pattern
package_phase: rjm:coordinator
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Thinking trigger

## Definition — verbatim
> "**Thinking trigger:** Multi-step routing decisions require explicit reasoning. Trivial single-step tasks (direct answer, no delegation needed) do not." — .claude/agents/orchestrator.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 31 | defined here | Reasoning guideline mandating explicit thinking for multi-step routing decisions. |
| src/claude/orchestrator.md | 31 | defined here | Directive requiring step-by-step reasoning before task routing. |
| templates/agents/orchestrator.shared.md | 58 | defined here | Template rule specifying when explicit reasoning must precede delegation. |

## Consumes
Task complexity assessment and routing alternatives.

## Produces
Explicit step-by-step reasoning logs prior to emitting subagent delegations.

## When applied
Triggered whenever a task involves multiple steps, ambiguity, or irreversible actions.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Thinking trigger is an architectural prompt directive governing the orchestrator's cognitive resource allocation. By requiring deep internal reasoning only for complex, multi-step routing choices while bypassing it for trivial single-step queries, it optimizes latency without sacrificing routing accuracy on high-risk tasks.
