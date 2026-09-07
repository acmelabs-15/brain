---
package: matt
name: Work through the map
slug: work-through-the-map
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Work through the map

## Definition — verbatim
> "### Work through the map" — skills/engineering/wayfinder/SKILL.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 118 | defined here | Documents the iterative execution mode where agents claim and resolve one frontier ticket per session. |

## Consumes
An existing `wayfinder:map` issue on the tracker with open, unblocked frontier decision tickets.

## Produces
A closed decision ticket with a resolution comment, an updated map recording decisions made, and newly graduated tickets.

## When applied
When invoked with an existing map URL or issue number to advance exploration by resolving one decision.

## Sub-concepts
claims, resolution-comment

## Part of
wayfinder

## Implementation status
defects: other

## Design notes
The iterative execution loop of wayfinder. Each session loads the low-resolution map, claims a single frontier decision ticket, investigates or grills to reach a definitive decision, records the resolution, and graduates clarified fog into new tickets until the destination is reached.
