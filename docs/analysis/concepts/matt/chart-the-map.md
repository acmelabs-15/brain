---
package: matt
name: Chart the map
slug: chart-the-map
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

# Chart the map

## Definition — verbatim
> "### Chart the map" — skills/engineering/wayfinder/SKILL.md:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wayfinder/SKILL.md | 107 | defined here | Documents the initial planning mode where a broad initiative is explored and mapped onto tracker tickets. |

## Consumes
A loose idea or multi-session initiative whose destination is known or needs naming, with an unexplored route.

## Produces
A `wayfinder:map` issue, an initial set of sharp child decision tickets wired with blocking edges, and parallel research subagents.

## When applied
When a user invokes `/wayfinder` with a loose concept requiring multi-session exploration and issue mapping.

## Sub-concepts
destination, frontier, research

## Part of
wayfinder

## Implementation status
defects: other

## Design notes
The initial exploration phase and technique of wayfinder. In a single dedicated session, the agent pins down the overall destination, grills breadth-first across the problem space to reveal the frontier, creates the index map issue, and creates initial sharp child tickets while sketching remaining uncertainty into Not yet specified.
