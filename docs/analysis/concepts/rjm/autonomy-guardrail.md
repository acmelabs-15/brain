---
package: rjm
name: Autonomy Guardrail
slug: autonomy-guardrail
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Autonomy Guardrail

## Definition — verbatim
> "This agent is advisory and read-only. It never edits code, stages changes, approves a pull request, or merges." — .claude/agents/code-reviewer.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 40 | defined here | Guardrail restricting code reviewer to read-only advisory operations without git staging or approvals. |
| .claude/agents/critic.md | 12 | defined here | Guardrail restricting critic agent to advisory reviews without modifying planning files. |
| .claude/agents/dependency-auditor.md | 10 | defined here | Guardrail restricting dependency auditor to vulnerability audits without modifying dependencies. |
| .claude/agents/implementer.md | 14 | used here | References autonomy guardrail preventing implementer from exceeding plan scope. |
| .claude/agents/orchestrator.md | 12 | used here | References autonomy guardrails governing delegation and subagent invocation. |
| .claude/agents/qa.md | 13 | used here | References autonomy guardrails restricting QA testing scope. |
| .claude/agents/security.md | 52 | used here | References autonomy guardrails restricting security audits to read-only inspection. |
| .claude/skills/autoplan/SKILL.md | 172 | used here | References autonomy guardrails governing autonomous plan generation. |
| AGENTS.md | 26 | defined here | Root agent architecture document defining autonomy boundaries across all roles. |
| src/claude/orchestrator.md | 12 | used here | Source orchestrator definition referencing subagent autonomy constraints. |
| templates/agents/code-reviewer.shared.md | 50 | defined here | Template specification defining code reviewer autonomy restrictions. |
| templates/agents/critic.shared.md | 16 | defined here | Template specification defining critic agent autonomy restrictions. |
| templates/agents/dependency-auditor.shared.md | 16 | defined here | Template specification defining dependency auditor autonomy restrictions. |
| templates/agents/implementer.shared.md | 23 | used here | Template specification referencing implementer execution boundaries. |
| templates/agents/orchestrator.shared.md | 25 | used here | Template specification referencing orchestrator supervisory boundaries. |
| templates/agents/qa.shared.md | 16 | used here | Template specification referencing QA testing boundaries. |
| templates/agents/security.shared.md | 27 | used here | Template specification referencing security audit boundaries. |

## Consumes
Agent role specifications, tool configurations, and delegation contracts.

## Produces
Enforced operational constraints preventing unauthorized code edits, file mutations, or premature approvals.

## When applied
Enforced continuously across all specialized subagent invocations.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, doc-drift

## Design notes
Autonomy Guardrail establishes strict operational boundaries for autonomous agents, preventing runaway execution or accidental modification of critical resources. For advisory and evaluation personas (such as code-reviewer, critic, and dependency-auditor), it explicitly restricts capabilities to read-only analysis, prohibiting unauthorized file edits, git staging, or PR approvals without orchestrator and human oversight.
