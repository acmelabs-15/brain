---
package: rjm
name: milestone-planner
slug: milestone-planner
kind: role
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-046-planning-agent-rename.md, sha256: 4aa83f97ec94c728eb5b073562a55bf21866880e747688943abecacb6c5cd0fa}
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/metrics/dashboard-template.md, sha256: 645d599ed5100a968188f22d7ccd8e43df7fb8eea23c2b79d608804b1dc17103}
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# milestone-planner

## Definition — verbatim
> "Creates milestones and work packages from epics and PRDs" — .agents/AGENT-SYSTEM.md:85

## Also called — verbatim
> "planner" — .agents/architecture/ADR-046-planning-agent-rename.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 81 | defined here | Agent catalog entry detailing role, specialization, inputs, and outputs. |
| .agents/architecture/ADR-046-planning-agent-rename.md | 40 | defined here | Decision table entry renaming planner to milestone-planner. |
| .agents/metrics/baseline-report.md | 102 | used here | Agent metrics baseline tracking milestone planning efficiency. |
| .agents/metrics/dashboard-template.md | 36 | used here | Metric dashboard tracking milestone planning frequency and latency. |
| .claude/skills/pre-mortem/SKILL.md | 319 | used here | Guidance on handing off pre-mortem findings to milestone-planner. |
| docs/agent-catalog.md | 33 | used here | Catalog entry documenting role, inputs, outputs, and routing guidance. |
| README.md | 263 | defined here | Usage example demonstrating milestone planning workflow. |
| src/claude/AGENTS.md | 142 | used here | Core planning agent roster listing milestone-planner. |
| templates/AGENTS.md | 170 | used here | Distribution template listing milestone-planner for Claude Code. |
| templates/agents/analyst.shared.md | 287 | used here | Handoff guidance referencing milestone-planner as a recipient. |
| templates/agents/qa.shared.md | 110 | used here | Context integration referencing milestone-planner work packages. |
| templates/agents/task-decomposer.shared.md | 51 | used here | Coordination note specifying handoff from milestone-planner. |
| templates/README.md | 46 | used here | Catalog summary detailing planning agent responsibilities. |

## Consumes
Epic or PRD document, technical constraints, business requirements.

## Produces
Milestone definitions with goals, work packages with dependencies, and impact analysis requests to specialists.

## When applied
Applied when breaking down epics into implementable milestones, creating project roadmaps, and mapping work dependencies.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Milestone-planner bridges high-level product strategy (epics and PRDs) and granular engineering execution. Renamed from planner in ADR-046 to reflect its specific action-object scope, it sequences work packages, analyzes cross-cutting dependencies, and establishes milestone-level acceptance criteria before tasks are decomposed into atomic units.
