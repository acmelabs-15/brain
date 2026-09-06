---
package: matt
name: wayfinder:map
slug: wayfinder-map
kind: artifact
package_phase: matt:Wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/setup-matt-pocock-skills.md, sha256: 82b75b3fb87a505e180f800fe63bd1e5735c24f407dab635115d7bcdadeaca58}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# wayfinder:map

## Definition — verbatim
> "The map is a single issue on this repo's issue tracker, labelled `wayfinder:map`, the canonical artifact. Its tickets are child issues of the map." — skills/engineering/wayfinder/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 16 | defined here | Defines Decision ticket as a child Issue of a wayfinder:map holding an open question. |
| external/prototype.md | 66 | used here | Describes linking prototype assets back into wayfinder:map decision tickets. |
| external/setup-matt-pocock-skills.md | 53 | used here | Explains configuring tracker support for wayfinder:map and child issue hierarchies. |
| skills/engineering/wayfinder/SKILL.md | 21 | defined here | Defines wayfinder:map as the single canonical issue indexing child decision tickets. |

## Consumes
A complex, multi-session goal with an agreed destination and open architectural questions.

## Produces
A central coordinating issue linking decisions made, active frontier tickets, and undiscovered fog of war.

## When applied
Created during `/wayfinder` initialization when charting an effort too large for a single session.

## Sub-concepts
decision-ticket, frontier, fog-of-war

## Part of
wayfinder

## Implementation status
defects: other (Notes override in wayfinder permits agents to self-authorize execution inside the map)

## Design notes
The central tracking artifact for multi-session planning, implemented as a single issue labelled wayfinder:map that acts as a low-resolution index over child decision tickets and preserves context across sessions.
