---
package: rjm
name: implementer
slug: implementer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
  - {path: templates/agents/comment-analyzer.shared.md, sha256: edcee882ed36961652791afd7a6fa09620e7d6753248bbe30f9d0bd35ce86296}
  - {path: templates/agents/debug.shared.md, sha256: efd8f04f4ef4c478b8d44833ef5850ac72e9121fddea1bfdbca8e6238c40cd2d}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# implementer

## Definition — verbatim
> "Writes production-quality code following established patterns" — .agents/AGENT-SYSTEM.md:198

## Also called — verbatim
> "Execution-focused engineering expert who implements approved plans with production-quality code." — .claude/agents/implementer.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 194 | defined here | Agent catalog entry defining inputs, outputs, coding standards, and security coverage gates. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 124 | used here | Model assignment table routing implementer tasks to high-capability models. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 15 | used here | Architectural record establishing implementer context boundaries and file scopes. |
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 107 | used here | Implementation guidelines for handling stale contract test suites. |
| .agents/metrics/baseline-report.md | 33 | used here | Performance metrics baseline reporting implementer execution duration and pass rates. |
| .agents/metrics/dashboard-template.md | 31 | used here | Metric dashboard tracking implementer activity and throughput trends. |
| .claude/agents/implementer.md | 2 | defined here | Frontmatter declaration of the implementation specialist agent persona. |
| .github/copilot-instructions.md | 23 | used here | GitHub Copilot prompt routing coding tasks to implementer persona. |
| CLAUDE.md | 11 | used here | System instructions designating implementer for code modification tasks. |
| docs/agent-catalog.md | 28 | used here | Catalog summary detailing code generation and TDD capabilities. |
| docs/autonomous-issue-development.md | 128 | used here | Autonomous development workflow routing assigned tasks to implementer. |
| README.md | 57 | defined here | Agent roster defining implementer as a core development role. |
| scripts/eval/eval-reviewer-asymmetry.py | 9 | used here | Evaluation script testing reviewer asymmetry between implementer and QA agents. |
| src/claude/AGENTS.md | 158 | used here | Claude Code agent catalog mapping implementer capabilities. |
| templates/AGENTS.md | 171 | used here | Shared agent catalog template defining implementer specifications. |
| templates/agents/analyst.shared.md | 288 | used here | Analyst handoff guidance routing approved implementations. |
| templates/agents/code-simplifier.shared.md | 33 | used here | Code simplification agent reviewing implementer code outputs. |
| templates/agents/comment-analyzer.shared.md | 23 | used here | Comment analysis agent inspecting code written by implementer. |
| templates/agents/debug.shared.md | 77 | used here | Debug agent collaborating on bug fixes with implementer. |
| templates/agents/devops.shared.md | 269 | used here | DevOps coordination during build script and pipeline modifications. |
| templates/agents/qa.shared.md | 733 | used here | QA verification routing receiving completed code from implementer. |
| templates/agents/task-decomposer.shared.md | 200 | used here | Task decomposer handoff recommendations targeting implementer. |
| templates/README.md | 14 | used here | Template catalog summary detailing developer implementation responsibilities. |

## Consumes
Task specifications with acceptance criteria (TASK-NNN), architectural design decisions, steering files.

## Produces
Production-quality code, unit tests, documentation updates, atomic git commits with conventional messages.

## When applied
Applied during standard development and quick fix flows to write new code for defined tasks, fix bugs, or perform guided refactorings.

## Sub-concepts
solid-principles, security-critical-coverage

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
The primary execution-focused engineering persona in rjm responsible for turning approved task plans into production code. Operating under single-tier worker constraints without delegation authority, the implementer adheres to strict test-driven development, enforces 100% test coverage on security-critical paths, and hands off code to independent adversarial reviewers (QA and critic) to overcome author confirmation bias.
