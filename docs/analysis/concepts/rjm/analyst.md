---
package: rjm
name: analyst
slug: analyst
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# analyst

## Definition — verbatim
> "Research and investigation specialist" — .agents/AGENT-SYSTEM.md:505

## Also called — verbatim
> "PR review focused on code quality, impact analysis, and maintainability" — .claude/skills/review/references/analyst.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 501 | defined here | Agent catalog entry detailing root cause analysis, API research, and RICE feature scoring. |
| .agents/analysis/adr-045-feasibility-analysis.md | 232 | used here | Feasibility analysis listing analyst role in evaluating framework extraction. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Model assignment table routing analyst research to appropriate model tiers. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 11 | used here | Context corpus documentation establishing boundary definitions for analyst research. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 303 | used here | Policy documentation establishing analyst review requirements. |
| .agents/metrics/baseline-report.md | 34 | used here | Performance metric baseline tracking analyst execution metrics. |
| .agents/metrics/dashboard-template.md | 29 | used here | Metric dashboard tracking analyst invocations and report output volume. |
| .claude/skills/adr-review/SKILL.md | 87 | used here | ADR review skill routing impact analysis and research to analyst. |
| .claude/skills/review/references/analyst.md | 2 | defined here | Frontmatter declaration of the analyst PR review task specification. |
| .claude/skills/review/SKILL.md | 4 | used here | PR review routing table mapping code quality and impact analysis to analyst. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 156 | used here | Reference schema documenting analyst research inputs to specifications. |
| .github/copilot-instructions.md | 21 | used here | GitHub Copilot prompt routing investigation and research tasks to analyst. |
| CLAUDE.md | 11 | used here | System instructions designating analyst for research and investigation tasks. |
| docs/agent-catalog.md | 16 | used here | Catalog summary detailing investigation, root cause findings, and RICE scoring. |
| docs/agent-metrics.md | 58 | used here | Agent metrics documentation reporting analyst invocation trends. |
| README.md | 57 | defined here | Agent roster listing analyst as a core development persona. |
| src/claude/AGENTS.md | 150 | used here | Claude Code agent catalog mapping analyst specialist capabilities. |
| templates/AGENTS.md | 168 | used here | Shared agent catalog template defining analyst specifications. |
| templates/agents/debug.shared.md | 78 | used here | Debugging agent coordinating with analyst on root cause investigations. |
| templates/README.md | 12 | used here | Template documentation detailing analyst responsibilities. |

## Consumes
Problem statements, bug reports, feature requests, research topics, API documentation.

## Produces
Analysis reports in `.agents/analysis/`, root cause findings, requirements documentation, feature evaluation with RICE scoring.

## When applied
Applied during initial discovery, root cause investigation, feature request triage, and feasibility analyses prior to planning.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
The dedicated investigation and research specialist in rjm. By conducting root cause analyses, evaluating external API dependencies, assessing feature requests with quantitative RICE scoring, and preparing structured problem definitions, the analyst eliminates ambiguity before milestone planning and architecture design take place.
