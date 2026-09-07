---
package: rjm
name: qa
slug: qa
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: .claude/skills/merge-resolver/SKILL.md, sha256: 88f9d20e41d105ded6fc9244d9035c51fb0130fbaf4c9cb430d8fbe1840a90b1}
  - {path: .claude/skills/metrics/collect_metrics.py, sha256: aae715e460693787e19570b0a4b426f67d52e990a4a8781448708151603286c5}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# qa

## Definition — verbatim
> "Verifies implementation works correctly for users" — .agents/AGENT-SYSTEM.md:382

## Also called — verbatim
> "Quality assurance specialist who verifies implementations work correctly for real users, not just passing tests." — .claude/agents/qa.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 378 | defined here | Agent catalog entry detailing testing philosophy, risk-tiered coverage targets, and verification workflows. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Model assignment table routing QA verification to high-capability models. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 13 | used here | Context corpus documentation establishing QA verification boundaries. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 5 | used here | Consolidated PR review summary recording QA verification verdicts. |
| .agents/metrics/baseline-report.md | 104 | used here | Telemetry baseline reporting QA agent test coverage metrics and duration. |
| .agents/metrics/dashboard-template.md | 33 | used here | Metric dashboard tracking QA agent activity and test pass rates. |
| .claude/agents/qa.md | 2 | defined here | Frontmatter declaration of the QA specialist agent persona. |
| .claude/skills/merge-resolver/SKILL.md | 307 | used here | Merge resolver coordination referencing test verification under QA. |
| .claude/skills/metrics/collect_metrics.py | 23 | used here | Metrics collection script tracking QA verification runs. |
| .claude/skills/review/SKILL.md | 29 | used here | PR review routing table mapping test coverage and regression checks to QA. |
| docs/agent-catalog.md | 38 | used here | Catalog summary detailing test strategy, coverage validation, and user scenario testing. |
| docs/agent-metrics.md | 225 | used here | Agent metrics documentation reporting QA verification performance trends. |
| docs/architecture.md | 190 | used here | Architecture diagram documenting QA verification gate in PR review flow. |
| docs/getting-started.md | 77 | defined here | Quick start guide introducing QA agent role in development lifecycle. |
| README.md | 57 | defined here | Agent roster listing QA as a core specialized persona. |
| scripts/eval/eval-reviewer-asymmetry.py | 9 | used here | Evaluation harness measuring reviewer asymmetry between QA and implementer. |
| src/claude/AGENTS.md | 159 | used here | Claude Code agent catalog mapping QA specialist capabilities. |
| templates/AGENTS.md | 173 | used here | Shared agent catalog template defining QA specifications. |
| templates/agents/code-simplifier.shared.md | 33 | used here | Code simplification agent preserving test coverage verified by QA. |
| templates/agents/debug.shared.md | 79 | used here | Debugging agent collaborating on regression tests with QA. |
| templates/agents/devops.shared.md | 270 | used here | DevOps agent coordinating with QA on automated CI test runs. |
| templates/README.md | 47 | used here | Template documentation outlining QA verification responsibilities. |

## Consumes
Implemented code changes, acceptance criteria, test requirements, task definitions.

## Produces
Test strategies in `.agents/qa/NNN-*-test-strategy.md`, test reports in `.agents/qa/NNN-*-test-report.md`, coverage analyses with risk-tier classifications.

## When applied
Applied immediately following implementation changes to verify user-facing behavior, check edge cases, and enforce risk-tiered test coverage.

## Sub-concepts
testing-philosophy, coverage-targets-by-risk-tier

## Part of
multi-agent-orchestration-system, quality-gates

## Implementation status
clean

## Design notes
The quality verification specialist enforcing empirical validation of all code deliverables. Operating under reviewer asymmetry in an isolated session, the QA agent evaluates implementations against user confidence rather than mere unit test passage, enforcing risk-tiered test coverage targets (100% security-critical, 80% business logic, 60-70% read-only) before approving pull requests.
