---
package: rjm
name: Workflow-Based
slug: workflow-based
kind: pattern
package_phase: rjm:Phase 0: Skill Triage
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/init_skill.py, sha256: 7f9eceac1dd1780fb8c052d8a694477ef10cc5754a07ef0b8a7a2131abee35c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Workflow-Based

## Definition — verbatim
> "### 1. Workflow-Based (multi-step processes)" — .claude/skills/skillforge/scripts/init_skill.py:214

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/init_skill.py | 214 | defined here | Defined in PATTERNS_GUIDE as the skill organization pattern for multi-step processes with sequential phases and verification gates. |

## Consumes
Multi-phase execution requirements, sequential workflow steps, and intermediate verification gates.

## Produces
Scaffolded skill organized into ordered phases with explicit phase-level verification gates.

## When applied
Used when designing skills for multi-step processes such as build pipelines, deployment flows, or review processes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
One of four architectural skill organization patterns defined in SkillForge. It models complex multi-step procedures as sequential phases separated by explicit verification criteria, ensuring that an agent cannot progress through a pipeline without satisfying intermediate quality gates.
