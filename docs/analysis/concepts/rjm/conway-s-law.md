---
package: rjm
name: Conway's Law
slug: conway-s-law
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Conway's Law

## Definition — verbatim
> "# Conway's Law" — .claude/skills/decision-critic/references/mental-models-conways-law.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 7 | defined here | Dedicated reference guide defining Conway's Law and its decision critic application. |
| .claude/skills/decision-critic/SKILL.md | 99 | used here | Catalogs Conway's Law as a reference to apply when a diff crosses a module boundary. |
| .claude/skills/review/references/architect.md | 50 | used here | Instructs architect reviewers to verify that proposed module boundaries align with communication structures. |
| scripts/eval/eval-agents.py | 161 | used here | Evaluation scenario asserting that Conway's Law alignment is necessary but insufficient for service splits. |

## Consumes
Architectural component boundaries, service split proposals, and organizational communication structures.

## Produces
Architectural boundary evaluations and recommendations for organizational-architectural alignment.

## When applied
Applied whenever an architectural decision or diff crosses module or team boundaries.

## Sub-concepts
inverse-conway-maneuver

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
Conway's Law asserts that system architectures inevitably mirror the communication structures of the organizations that design them. Within rjm, it ensures that architects do not design theoretical service boundaries that cannot be sustained across real organizational seams.
