---
package: rjm
name: Execution Planning
slug: execution-planning
kind: phase
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Execution Planning

## Definition — verbatim
> "Step 1: Execution Planning (analyze plan, detect reconciliation)" — .claude/skills/planner/scripts/executor.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/scripts/executor.py | 6 | defined here | First step of the seven-phase execution workflow responsible for plan analysis and reconciliation detection. |

## Consumes
Approved plan file, milestone definitions, and user thoughts.

## Produces
Milestone inventory, target file mappings, parallelization analysis, task tracking setup, and reconciliation signals.

## When applied
Applied at the start of plan execution before any milestone implementation commences.

## Sub-concepts
reconciliation-triggers, todowrite, dependency-analysis

## Part of
executor

## Implementation status
defects: missing-path, internal-contradiction, exit-code-mismatch

## Design notes
Execution Planning serves as the initial phase of plan execution, analyzing the structure of an approved plan before code is touched. It inventories milestones, calculates dependencies, sets up task tracking, and determines whether previous partial work necessitates a reconciliation phase.
