---
package: rjm
name: task-decomposer
slug: task-decomposer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-046-planning-agent-rename.md, sha256: 4aa83f97ec94c728eb5b073562a55bf21866880e747688943abecacb6c5cd0fa}
  - {path: .claude/agents/task-decomposer.md, sha256: 77c119399a75aaa6cb1f1a7eabca8ae1f247444a0bf718d3e7c44e370d5cad1f}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: src/claude/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/agents/backlog-generator.shared.md, sha256: 6b606259b2157e57f67018fe9fce8572735b914fde5ffdc3dc1cafac6d2a9c1e}
  - {path: templates/agents/task-decomposer.shared.md, sha256: 4cef5914186ac35333086895d078b2c1b310c5a7586b11ee78ce4de0c39e851b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# task-decomposer

## Definition — verbatim
> "Creates atomic tasks with acceptance criteria from milestones" — .agents/AGENT-SYSTEM.md:120

## Also called — verbatim
> "Atomic task breakdown" — README.md:410

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 116 | defined here | Agent catalog entry defining inputs, outputs, specialization, and delegation rules. |
| .agents/architecture/ADR-046-planning-agent-rename.md | 41 | defined here | Architectural decision establishing task-decomposer as standard agent name for task breakdown. |
| .claude/agents/task-decomposer.md | 2 | defined here | Frontmatter declaration of the task decomposition specialist agent. |
| .claude/agents/task-decomposer.md | 9 | defined here | Agent prompt heading defining core identity and decomposition responsibilities. |
| docs/agent-catalog.md | 45 | used here | Agent catalog reference outlining atomic task decomposition capabilities. |
| README.md | 410 | defined here | Table entry documenting role for atomic task breakdown and sizing. |
| src/claude/AGENTS.md | 143 | used here | Agent roster entry mapping task-decomposer in coordination flows. |
| templates/AGENTS.md | 181 | used here | Shared agent catalog template defining task decomposition specialist. |
| templates/agents/backlog-generator.shared.md | 50 | used here | Backlog generator agent delegating task sizing and breakdown. |
| templates/agents/task-decomposer.shared.md | 52 | defined here | Shared template specification defining task decomposer responsibilities. |

## Consumes
Milestone definitions from milestone-planner, PRD requirements, epic scopes.

## Produces
Atomic task specifications (TASK-NNN), acceptance criteria, complexity estimates (XS/S/M/L/XL), dependency graphs.

## When applied
Applied after PRD or milestone creation to break work into assignable, estimable, implementation-ready units.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
Specialized agent responsible for decomposing high-level milestones and PRDs into atomic, estimable work units (TASK-NNN) with clear done criteria. By enforcing the 10% Threshold Rule (reconciling task sum estimates against epic bounds) and mapping dependency graphs, task-decomposer prevents scope inflation and prepares unambiguous assignments for implementer agents.
