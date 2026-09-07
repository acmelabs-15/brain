---
package: rjm
name: Relevant
slug: relevant
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

# Relevant

## Definition — verbatim
> "Applies to actual execution scenarios | Has trigger condition" — .claude/skills/retrospective/references/diagnosis-and-actions.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 155 | defined here | SMART validation criterion requiring that a skill applies to actual execution scenarios and defines a trigger condition. |

## Consumes
Candidate skill statements and realistic workflow execution scenarios.

## Produces
Validation check determining whether a proposed learning applies to real operational scenarios and includes an explicit trigger.

## When applied
Applied during Phase 3 (SMART Validation) of retrospective workflows.

## Sub-concepts
none

## Part of
smart-validation, decide-what-to-do

## Implementation status
clean

## Design notes
Relevant is a SMART validation gate ensuring that candidate learnings directly apply to actual operational execution scenarios and specify clear trigger conditions under which future agents should invoke them.
