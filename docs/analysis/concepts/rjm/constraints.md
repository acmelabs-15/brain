---
package: rjm
name: Constraints
slug: constraints
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-reviewer.md, sha256: 4adce1f882b47947c08436c01340036481a7c34f3b4f4785a0f1798ee427ea71}
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/code-reviewer.shared.md, sha256: 158c20c6ad179ce7889d968507debf8cc177c630a3204bcc4b466a180ed9ff8c}
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
  - {path: templates/agents/milestone-planner.shared.md, sha256: d4d22f60c3fc2494c452046c3fb9f31a019874f4a2057ea5e5217dee5108f028}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Constraints

## Definition — verbatim
(used, not defined)

> "- Remain read-only and advisory." — .claude/agents/code-reviewer.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-reviewer.md | 111 | defined here | Section heading and rules defining mandatory operational constraints for code reviewer. |
| .claude/skills/analyze/references/agent-architecture-patterns.md | 20 | defined here | Documents design constraints across multi-agent architecture patterns. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 60 | defined here | Script data structure tracking architectural decision constraints. |
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 49 | defined here | References computational and architectural constraints in LLM reasoning. |
| templates/AGENTS.md | 218 | defined here | Global agent constraints specification in the shared AGENTS catalog. |
| templates/agents/architect.shared.md | 522 | defined here | Operational and tool constraints governing architect agent execution. |
| templates/agents/backlog-generator.shared.md | 54 | defined here | Operational and output constraints governing backlog generator execution. |
| templates/agents/code-reviewer.shared.md | 121 | defined here | Operational and review scope constraints governing code reviewer execution. |
| templates/agents/issue-feature-review.shared.md | 131 | defined here | Operational constraints governing feature request review agent. |
| templates/agents/merge-resolver.shared.md | 144 | defined here | Safety and branch manipulation constraints governing merge resolver. |
| templates/agents/milestone-planner.shared.md | 161 | defined here | Planning boundary constraints governing milestone planner agent. |
| templates/agents/qa.shared.md | 714 | defined here | Testing and environment constraints governing QA agent. |
| templates/README.md | 215 | used here | Documents the mandatory constraints section requirement in agent prompt architecture. |

## Consumes
Agent role definitions, project boundaries, and security rules.

## Produces
Enforceable negative constraints preventing out-of-scope behaviors and unauthorized modifications.

## When applied
Bound to agent execution environments across all operational phases.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, doc-drift

## Design notes
Constraints defines explicit, non-negotiable negative boundaries embedded in agent system prompts. By dictating what an agent MUST NOT do (e.g., remaining read-only, avoiding code implementation, not expanding review scope, or rejecting embedded prompt injections), constraints preserve role isolation and prevent catastrophic unintended behaviors.
