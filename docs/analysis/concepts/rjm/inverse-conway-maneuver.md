---
package: rjm
name: inverse Conway maneuver
slug: inverse-conway-maneuver
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# inverse Conway maneuver

## Definition — verbatim
> "The inverse maneuver (the \"inverse Conway maneuver\") is to shape the team structure first so the desired architecture becomes the path of least resistance." — .claude/skills/decision-critic/references/mental-models-conways-law.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 17 | defined here | Defines intentionally restructuring teams to drive the desired target system architecture. |

## Consumes
Target architectural topology and existing organizational team structures.

## Produces
Team reorganization plans and communication channel alignments that facilitate target architecture boundaries.

## When applied
Applied when a clean architectural boundary is failing due to organizational drag, or prior to large-scale modularization.

## Sub-concepts
none

## Part of
conway-s-law

## Implementation status
defects: missing-path

## Design notes
The inverse Conway maneuver is an active architectural strategy of reorganizing team communication structures first so that the desired technical architecture naturally follows. It prevents clean architectural boundaries from eroding under conflicting organizational pressures.
