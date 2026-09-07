---
package: rjm
name: Reasoning Protocol
slug: reasoning-protocol
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reasoning Protocol

## Definition — verbatim
> "Before flagging any issue, work through these in order:" — .claude/agents/code-reviewer.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 58 | defined here | Step-by-step reasoning sequence for verifying issues against callers and rules before reporting. |
| .claude/agents/code-simplifier.md | 16 | defined here | Step-by-step reasoning protocol for verifying behavior before proposing simplifications. |
| .claude/agents/comment-analyzer.md | 14 | defined here | Step-by-step reasoning protocol for verifying comment accuracy and synchronization. |
| .claude/agents/critic.md | 26 | defined here | Step-by-step reasoning protocol for stress-testing plan completeness and risks. |
| .claude/agents/orchestrator.md | 27 | defined here | Step-by-step reasoning protocol for evaluating subagent routing and delegation. |
| src/claude/orchestrator.md | 27 | defined here | Step-by-step reasoning protocol for orchestrator routing decisions. |
| templates/agents/code-reviewer.shared.md | 68 | defined here | Step-by-step reasoning sequence in code reviewer shared template. |
| templates/agents/code-simplifier.shared.md | 25 | defined here | Step-by-step reasoning sequence in code simplifier shared template. |
| templates/agents/comment-analyzer.shared.md | 25 | defined here | Step-by-step reasoning sequence in comment analyzer shared template. |
| templates/agents/critic.shared.md | 30 | defined here | Step-by-step reasoning sequence in critic shared template. |
| templates/agents/orchestrator.shared.md | 54 | defined here | Step-by-step reasoning sequence in orchestrator shared template. |

## Consumes
Candidate defects, code diffs, proposed refactorings, or planning decisions.

## Produces
Validated conclusions supported by empirical caller checks, rule citations, and behavioral impact analysis.

## When applied
Applied systematically prior to proposing modifications, flagging defects, or completing review passes.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, doc-drift

## Design notes
Reasoning Protocol enforces structured, step-by-step causal deduction across agent roles. Rather than jumping directly to conclusions or recommendations, agents must systematically analyze what code or plans do, trace behavior through real callers, verify existing helpers to avoid duplication, and confirm measurable user impact before submitting findings.
