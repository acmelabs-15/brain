---
package: addy
name: Checkpoint
slug: checkpoint
kind: gate
package_phase: addy:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Checkpoint

## Definition — verbatim
(used, not defined)

> "3. Verification checkpoints occur after every 2-3 tasks" — skills/planning-and-task-breakdown/SKILL.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/planning-and-task-breakdown/SKILL.md | 106 | defined here | Defined as an ordering and verification gate scheduled every 2-3 tasks to validate system integrity |

## Consumes
Sequenced task lists, completed task outputs, test suite results.

## Produces
Explicit verification milestones and human review gates within the task list target.

## When applied
Scheduled after every 2 to 3 completed implementation tasks during plan execution.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
Checkpoints are periodic verification gates integrated into task plans to ensure that accumulated changes remain stable and functional. Requiring full test runs, build checks, and human consultation every 2-3 tasks prevents agents from compounding unnoticed errors or drifting from user expectations across long autonomous execution runs.
