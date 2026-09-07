---
package: rjm
name: Timely
slug: timely
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Timely

## Definition — verbatim
> "Clear when to apply | Has context/timing" — .claude/skills/retrospective/references/diagnosis-and-actions.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 156 | defined here | SMART validation criterion requiring that a skill has clear context and timing indicating when to apply. |

## Consumes
Candidate skill statements and execution timing context.

## Produces
Validation check determining whether a statement clearly specifies the timing and context for its application.

## When applied
Applied during Phase 3 (SMART Validation) before saving retrospective learnings.

## Sub-concepts
none

## Part of
smart-validation, decide-what-to-do

## Implementation status
clean

## Design notes
Timely is a SMART validation criterion requiring candidate skills and learnings to define precise temporal boundaries and execution contexts so agents know exactly when in the lifecycle to apply them.
