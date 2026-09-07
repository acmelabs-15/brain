---
package: rjm
name: architect
slug: architect
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
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: .github/copilot-instructions.md, sha256: f0e44ddeda2012c7ead9451c1d8dc93a0ff2e05f4b7edaf49eed4c75bee4bad6}
  - {path: CLAUDE.md, sha256: 9a1e9abfb2f67110d986b795a47dcc54656dc365beb6384002f7ca9f628f6372}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# architect

## Definition — verbatim
> "Maintains architectural coherence and technical governance" — .agents/AGENT-SYSTEM.md:470

## Also called — verbatim
> "PR review focused on architectural design, system structure, and ADR conformance" — .claude/skills/review/references/architect.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 466 | defined here | Agent catalog entry detailing ADR authorship, system boundaries, and design governance. |
| .agents/analysis/adr-045-feasibility-analysis.md | 231 | used here | Feasibility analysis listing architect role in framework extraction. |
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 99 | used here | Model assignment table routing architect tasks to high-capability models. |
| .agents/architecture/ADR-069-context-corpus-is-the-product.md | 5 | used here | Architectural record establishing context corpus design principles. |
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 303 | used here | Policy documentation establishing architectural review requirements. |
| .agents/metrics/baseline-report.md | 101 | used here | Performance metric baseline tracking architect execution duration. |
| .agents/metrics/dashboard-template.md | 30 | used here | Metric dashboard tracking architect invocations and ADR production. |
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 223 | used here | Requirements specification referencing architect review role. |
| .claude/skills/adr-review/SKILL.md | 83 | used here | ADR review skill routing structural evaluation to architect. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 51 | used here | CVA reference noting architect role in commonality and variability analysis. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 309 | used here | Validation script verifying architect review in CVA pipelines. |
| .claude/skills/cva-analysis/SKILL.md | 285 | used here | CVA skill routing domain abstraction models to architect. |
| .claude/skills/pre-mortem/SKILL.md | 320 | used here | Pre-mortem skill routing architectural failure risk assessments to architect. |
| .claude/skills/review/references/architect.md | 2 | defined here | Frontmatter declaration of the architect PR review task specification. |
| .claude/skills/review/SKILL.md | 29 | used here | PR review routing table mapping architectural design reviews to architect. |
| .github/copilot-instructions.md | 22 | used here | GitHub Copilot prompt routing structural decisions and ADRs to architect. |
| CLAUDE.md | 11 | used here | System instructions designating architect for system design decisions. |
| docs/agent-catalog.md | 17 | used here | Catalog summary detailing ADR authoring, system boundaries, and design guidance. |
| README.md | 57 | defined here | Agent roster listing architect as a core development persona. |
| src/claude/AGENTS.md | 151 | used here | Claude Code agent catalog mapping architect capabilities. |
| templates/AGENTS.md | 169 | used here | Shared agent catalog template defining architect specifications. |
| templates/agents/analyst.shared.md | 286 | used here | Analyst agent handoff guidance routing structural findings to architect. |
| templates/agents/devops.shared.md | 271 | used here | DevOps agent coordinating on infrastructure architecture with architect. |
| templates/README.md | 13 | used here | Template documentation detailing architect responsibilities. |

## Consumes
Design questions, technical change requests, system boundary proposals, cross-cutting concerns.

## Produces
Architectural Decision Records in `.agents/architecture/ADR-NNN-*.md`, design guidance, architectural impact analyses.

## When applied
Applied when introducing new dependencies, changing system boundaries, or making cross-cutting technical decisions requiring ADR documentation.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
The architectural governance persona responsible for overall structural integrity, design pattern adherence, and ADR curation across the repository. By evaluating cross-cutting dependencies, managing system interfaces, and documenting trade-offs in formal ADRs, the architect prevents architectural erosion and ensures long-term system maintainability.
