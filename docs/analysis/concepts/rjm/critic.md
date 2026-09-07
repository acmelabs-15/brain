---
package: rjm
name: critic
slug: critic
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# critic

## Definition — verbatim
> "Validates plans before implementation begins" — .agents/AGENT-SYSTEM.md:347

## Also called — verbatim
> "Constructive reviewer who stress-tests plans before implementation, validates completeness, identifies gaps, catches ambiguity." — .claude/agents/critic.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 343 | defined here | Agent catalog entry defining plan validation, risk identification, and review triggers. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Model assignment table mapping critic to high-capability models. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 12 | used here | Context corpus documentation establishing critic review boundaries. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 303 | used here | Policy documentation establishing mandatory critic review gates. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 5 | used here | Consolidated PR review summary recording critic findings. |
| .agents/metrics/dashboard-template.md | 35 | used here | Performance metric template tracking critic activity and verdict trends. |
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 18 | used here | Retrospective analysis documenting critic role in gate enforcement. |
| .claude/agents/critic.md | 2 | defined here | Frontmatter declaration of the critic agent persona. |
| .claude/skills/adr-review/SKILL.md | 84 | used here | ADR review skill routing plan critique to critic agent. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 57 | used here | Research methodology skill incorporating critic review into research plans. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 297 | used here | Reference schema documenting critic validation for specification artifacts. |
| .github/copilot-instructions.md | 24 | used here | GitHub Copilot prompt routing plan reviews to critic. |
| docs/agent-catalog.md | 22 | used here | Catalog summary detailing plan review and scope validation capabilities. |
| docs/architecture.md | 190 | used here | Architecture diagram documenting critic validation gate in development pipeline. |
| README.md | 122 | defined here | System overview describing critic as a core quality gate agent. |
| scripts/eval/eval-reviewer-asymmetry.py | 9 | used here | Evaluation script testing reviewer asymmetry between critic and planning agents. |
| src/claude/AGENTS.md | 152 | used here | Claude Code agent roster mapping critic role and responsibilities. |
| templates/AGENTS.md | 172 | used here | Shared agent catalog template defining critic specifications. |
| templates/agents/analyst.shared.md | 289 | used here | Analyst agent handoff guidance routing plans to critic. |
| templates/agents/task-decomposer.shared.md | 199 | used here | Task decomposer handoff recommendations routing task breakdowns to critic. |
| templates/README.md | 46 | used here | Template documentation outlining critic review responsibilities. |

## Consumes
Planning artifacts (PRDs, task breakdowns, architecture proposals), acceptance criteria, business objectives.

## Produces
Critique reports in `.agents/critique/`, approval/rejection verdicts with rationale, specific improvement recommendations.

## When applied
Applied after planning artifacts are generated and before code implementation begins, validating completeness and risk mitigation.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system, quality-gates

## Implementation status
clean

## Design notes
A core quality gate persona providing adversarial pre-implementation review. Operating in fresh context to avoid author confirmation bias, the critic stress-tests plans, identifies unstated assumptions, checks requirement completeness, and issues explicit GO / REVISE verdicts, preventing flawed or ambiguous designs from consuming implementation resources.
