---
package: addy
name: Task Sizing Guidelines
slug: task-sizing-guidelines
kind: reference
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

# Task Sizing Guidelines

## Definition — verbatim
> "If a task is L or larger, it should be broken into smaller tasks. An agent performs best on S and M tasks." — skills/planning-and-task-breakdown/SKILL.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/planning-and-task-breakdown/SKILL.md | 125 | defined here | Establishes scope thresholds (XS through XL) to bound agent task complexity |

## Consumes
Proposed task descriptions, estimated file impact counts, anticipated session durations.

## Produces
Right-sized tasks categorized as XS (1 file), S (1-2 files), or M (3-5 files), triggering further breakdown for tasks estimated at L (5-8 files) or XL (8+ files).

## When applied
During task definition and breakdown before committing tasks to the plan document or task list target.

## Sub-concepts
none

## Part of
planning-and-task-breakdown

## Implementation status
clean

## Design notes
Task sizing guidelines establish concrete scope boundaries tailored to coding agent attention spans and context windows. Tasks exceeding medium scope (touching more than 5 files or requiring multiple focused hours) are split into smaller units, mitigating context exhaustion and lowering regression risk during implementation.
