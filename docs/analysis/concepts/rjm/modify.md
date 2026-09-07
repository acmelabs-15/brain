---
package: rjm
name: Modify
slug: modify
kind: technique
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

# Modify

## Definition — verbatim
> "UPDATE existing skill | Refinement to existing pattern" — .claude/skills/retrospective/references/diagnosis-and-actions.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 118 | defined here | Action classification category defined as updating an existing skill when refining an established pattern. |

## Consumes
Retrospective learnings and execution evidence that expand, clarify, or correct existing skills.

## Produces
Proposed modifications and updated text for an existing skill identifier.

## When applied
Applied during Phase 3 (Action Classification) when an identified learning refines an established pattern.

## Sub-concepts
none

## Part of
action-classification, decide-what-to-do

## Implementation status
clean

## Design notes
Modify is an action classification category instructing agents to update and refine existing skill definitions or memory entities rather than creating duplicate skills when an established pattern requires enhancement.
