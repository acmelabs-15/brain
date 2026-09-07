---
package: matt
name: teaching decision
slug: teaching-decision
kind: technique
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

# teaching decision

## Definition — verbatim
> "Every teaching decision (what to teach next, which resources to surface, which exercises to design) should trace back to this document." — skills/productivity/teach/MISSION-FORMAT.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/MISSION-FORMAT.md | 3 | defines | Defines the pedagogical decisions (what to teach next, resources to surface, exercise design) grounded in MISSION.md. |

## Consumes
`MISSION.md`, current learning records, and learner state.

## Produces
Pedagogical choices regarding lesson progression, resource selection, and interactive exercise design.

## When applied
Applied throughout teaching sessions whenever the agent determines the next instructional step or selects learning material.

## Sub-concepts
none

## Part of
teach

## Implementation status
clean

## Design notes
A teaching decision represents any pedagogical choice made by the agent—determining next topic, selecting resources, or designing exercises. The package requires all such decisions to be anchored in MISSION.md, ensuring that learning activities remain tightly coupled to the user's real-world outcome rather than arbitrary curriculum progression.
