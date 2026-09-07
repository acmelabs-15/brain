---
package: rjm
name: IMPROVE_EXISTING
slug: improve-existing
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# IMPROVE_EXISTING

## Definition — verbatim
> "| **IMPROVE_EXISTING** | Match 50-79% | Loads skill and enters enhancement mode |" — .claude/skills/skillforge/references/phase0-triage.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase0-triage.md | 55 | defined here | Decision action row specifying condition (match 50-79%) and transition to enhancement mode. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 10 | defined here | Docstring bullet defining the triage action when an existing skill is close but needs enhancement. |
| .claude/skills/skillforge/SKILL.md | 84 | defined here | Process overview diagram step enumerating triage routing outcomes. |

## Consumes
Triage match score between 50% and 79% against an existing skill.

## Produces
Transition into skill enhancement mode to update and expand the existing skill definition.

## When applied
Applied during Phase 0 triage when a capability is closely related to an existing skill but requires extension.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, script-bug, missing-path

## Design notes
IMPROVE_EXISTING routes requests with partial skill overlap (50-79%) into an iterative enhancement workflow rather than allowing fork-like duplicate creation. In rjm, this consolidates capability within established skills and maintains high cohesion.
