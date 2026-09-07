---
package: rjm
name: Activation Profile
slug: activation-profile
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: .claude/agents/backlog-generator.md, sha256: 76e6ab2663aeeb7c99c249359046cf1f39819159cef4324c4e2add00f0077b46}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Activation Profile

## Definition — verbatim
> "Keywords and summon prompt" — .claude/agents/AGENTS.md:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 203 | defines | Listed in agent file structure table as a required section defining keywords and summon prompt. |
| .claude/agents/backlog-generator.md | 45 | defines | Section heading specifying trigger keywords and summon prompt for proactive backlog discovery. |
| .claude/agents/security.md | 76 | defines | Section heading specifying trigger keywords and summon prompt for security auditing and vulnerability scanning. |
| .claude/agents/task-decomposer.md | 34 | defines | Section heading specifying trigger keywords and summon prompt for breaking plans into atomic tasks. |
| templates/AGENTS.md | 215 | defines | Required section in template schema specifying activation keywords and summon prompts. |
| templates/agents/architect.shared.md | 35 | defines | Section heading specifying trigger keywords and summon prompt for architecture design and ADR governance. |
| templates/agents/backlog-generator.shared.md | 35 | defines | Section heading specifying trigger keywords and summon prompt for shared backlog generator template. |
| templates/agents/code-reviewer.shared.md | 27 | defines | Section heading specifying trigger keywords and summon prompt for shared code reviewer template. |
| templates/agents/devops.shared.md | 21 | defines | Section heading specifying trigger keywords and summon prompt for CI/CD and deployment operations. |
| templates/agents/independent-thinker.shared.md | 43 | defines | Section heading specifying trigger keywords and summon prompt for assumption challenge and red teaming. |
| templates/agents/negotiation.shared.md | 42 | defines | Section heading specifying trigger keywords and summon prompt for multi-agent compromise and conflict resolution. |
| templates/agents/task-decomposer.shared.md | 37 | defines | Section heading specifying trigger keywords and summon prompt for shared task decomposition template. |

## Consumes
Subagent role definitions, domain keywords, and target operational triggers.

## Produces
Standardized activation metadata enabling orchestrators and users to correctly summon the subagent.

## When applied
Mandatory section defined within every Claude Code agent and shared agent template file.

## Sub-concepts
none

## Part of
agent-catalog

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Activation Profile is a mandatory structural section in rjm agent definitions that provides explicit trigger keywords and a ready-to-use summon prompt. It enables the orchestrator or developer to invoke specialized subagents with precise context, defined constraints, and appropriate persona framing.
