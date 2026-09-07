---
package: rjm
name: PLANNING PHASE
slug: planning-phase
kind: phase
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PLANNING PHASE

## Definition — verbatim
> "PLANNING PHASE: Step-based planning with forced reflection pauses." — .claude/skills/planner/scripts/planner.py:5

## Also called — verbatim
"PLANNING PHASE (steps 1-N)" — .claude/skills/planner/SKILL.md:106

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/planner.py | 5 | defined here | Defined in docstring as step-based planning workflow with forced reflection pauses. |
| .claude/skills/planner/SKILL.md | 106 | defined here | Outlined as the initial phase in the planning process overview diagram. |

## Consumes
Problem statements, project goals, existing codebase architecture, and plan file path.

## Produces
Complete implementation plan documents with architecture models, decision logs, and testable milestones.

## When applied
Triggered when planning multi-step engineering tasks, features, or significant refactorings before code changes occur.

## Sub-concepts
step-1-checklist, step-2-evaluate-first, step-2-decide, step-2-decision-classification, step-2-rejected, step-2-architecture, planning-context-verification

## Part of
planner

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
The initial phase of the planner workflow where an agent methodically discovers constraints, evaluates approaches, classifies architectural decisions, and drafts milestones with forced pauses to prevent premature implementation.
