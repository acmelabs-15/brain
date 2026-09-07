---
package: rjm
name: Hook Feedback
slug: hook-feedback
kind: pattern
package_phase: rjm:cross-phase
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

# Hook Feedback

## Definition — verbatim
> "A PreToolUse hook can block a tool call and return a reason on stderr." — .claude/agents/orchestrator.md:328

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 326 | defined here | Specifies protocols for interpreting and responding to tool execution denials from PreToolUse hooks. |
| src/claude/orchestrator.md | 326 | defined here | Specifies protocols for interpreting and responding to tool execution denials from PreToolUse hooks. |
| templates/agents/orchestrator.shared.md | 336 | defined here | Specifies protocols for interpreting and responding to tool execution denials from PreToolUse hooks. |

## Consumes
PreToolUse hook stderr error reasons, blocked tool call indicators.

## Produces
Single policy-preserving adjustment or transparent user escalation.

## When applied
Triggered whenever a harness PreToolUse hook intercepts and blocks an agent's tool call.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
Hook Feedback establishes clear behavioral guardrails when automated enforcement hooks intercept tool usage. By treating hook rejections as policy feedback rather than authorization, limiting adjustments to a single attempt, and forbidding blind retries or `--force` workarounds, it eliminates thrashing loops and maintains security boundaries.
