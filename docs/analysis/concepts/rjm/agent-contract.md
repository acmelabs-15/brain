---
package: rjm
name: Agent Contract
slug: agent-contract
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: .claude/agents/comment-analyzer.md, sha256: be14b44b239e3c4e96cea9b3999ddecf9202d3609fd442d96f24e8c9255b34fa}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Contract

## Definition — verbatim
> "This agent runs on an explicit diff, pull request, or named file set, or on the repository's current working changes when scope is omitted. Outputs: findings per the Output Shape above." — .claude/agents/code-reviewer.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 137 | defined here | Interface contract defining code reviewer input scope, pre-completion quality gates, and standardized failure modes. |
| .claude/agents/code-simplifier.md | 100 | defined here | Interface contract defining code simplifier scope, quality gates, and handoff protocols. |
| .claude/agents/comment-analyzer.md | 94 | defined here | Interface contract defining comment analyzer scope, quality gates, and handoff protocols. |
| templates/agents/code-reviewer.shared.md | 147 | defined here | Template section defining code reviewer contract specifications. |
| templates/agents/code-simplifier.shared.md | 109 | defined here | Template section defining code simplifier contract specifications. |
| templates/agents/comment-analyzer.shared.md | 105 | defined here | Template section defining comment analyzer contract specifications. |

## Consumes
Agent input specifications, quality gate conditions, and failure definitions.

## Produces
Standardized execution behavior, enforceable quality gates, and uniform return statuses ([COMPLETE], [BLOCKED], [NEEDS_DECOMPOSITION], [SECURITY_FLAG]).

## When applied
Governs the execution, verification, and handoff lifecycle of specialized agents.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Agent Contract formalizes the interface specification of specialized agents, defining expected inputs, strict quality gates that must pass prior to completion, failure modes, and handoff protocols. This turns subagent execution into predictable, composable units that orchestrators can reliably chain and validate.
