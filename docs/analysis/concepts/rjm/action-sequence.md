---
package: rjm
name: Action Sequence
slug: action-sequence
kind: template
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

# Action Sequence

## Definition — verbatim
> "## Action Sequence" — .claude/skills/retrospective/references/diagnosis-and-actions.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 188 | defined here | Defines the template structure for sequencing action items based on technical dependencies and blocking relationships. |

## Consumes
Prioritized retrospective action items and their execution prerequisites.

## Produces
An ordered action plan table specifying sequence order, action description, dependencies (`Depends On`), and downstream blockers (`Blocks`).

## When applied
Applied during Phase 3 (Dependency Ordering) of retrospective workflows.

## Sub-concepts
none

## Part of
dependency-ordering, decide-what-to-do

## Implementation status
clean

## Design notes
Action Sequence provides a structured dependency ordering template ensuring retrospective action items are executed in strict sequential order based on prerequisites and blocking relationships.
