---
package: matt
name: Constraints
slug: constraints
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/MISSION-FORMAT.md, sha256: 8cacbb3c0644d3ae0ea4965564797099401a6930a23f7cf462918576587f2418}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Constraints

## Definition — verbatim
> "Time, budget, prior commitments, learning preferences, anything that bounds the approach" — skills/productivity/teach/MISSION-FORMAT.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/MISSION-FORMAT.md | 18 | defines | Section heading and template specification defining external boundaries and limitations in MISSION.md. |

## Consumes
Learner time availability, budget constraints, scheduling commitments, and learning preferences.

## Produces
The `## Constraints` section of `MISSION.md`.

## When applied
Defined at workspace creation to shape lesson length, resource recommendations, and community options.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
The boundary-defining section of MISSION.md that captures real-world limitations—such as time budget, hardware access, or learning preferences—preventing the agent from proposing unrealistic study plans or unaffordable resources.
