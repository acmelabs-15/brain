---
package: matt
name: shared map
slug: shared-map
kind: artifact
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

# shared map

## Definition — verbatim
> "This skill charts the way as a **shared map** on the repo's issue tracker, then works its **decision tickets** (questions whose resolution is a decision, not slices of a build to execute) one at a time until the route is clear." — skills/engineering/wayfinder/SKILL.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 7 | defined here | Introduces the shared map on the issue tracker as the central planning artifact for multi-session exploration. |

## Consumes
A broad initiative or complex idea too large for a single agent session, with an established destination.

## Produces
A canonical issue tracker ticket labeled `wayfinder:map` tracking destination, notes, decisions made, and unresolved fog.

## When applied
Applied when initiating planning on a multi-session effort whose execution route is initially obscured by fog.

## Sub-concepts
decision tickets, destination, frontier

## Part of
wayfinder

## Implementation status
defects: other

## Design notes
The central planning artifact of the wayfinder skill. It lives directly on the issue tracker as a single parent issue, serving as a low-resolution index that coordinates multiple agent sessions by organizing child decision tickets, tracking resolved decisions, and holding unexplored fog.
