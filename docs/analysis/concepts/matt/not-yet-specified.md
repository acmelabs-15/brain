---
package: matt
name: Not yet specified
slug: not-yet-specified
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wayfinder.md, sha256: 5e186ef2b90a77ccf7b48ff7c72bbc97fc5c2ba0abe316b91fefa206cb18430e}
  - {path: external/wayfinder.md, sha256: 5cd788dee84123257f303b4785f3999e01c2d4b3d115b5569de7a41c23115bff}
  - {path: skills/engineering/wayfinder/SKILL.md, sha256: fee6e1d0c50f0e736b4ef8a599060c959afae904c9a97d82c97f049fcc3aa0f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Not yet specified

## Definition — verbatim
> "- **Not yet specified**: the **fog of war**. Decisions you can tell are coming but cannot yet phrase sharply." — docs/engineering/wayfinder.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wayfinder.md | 37 | defined here | Defined as the fog of war section holding decisions anticipated but not yet phraseable sharply. |
| external/wayfinder.md | 41 | defined here | External guide description of the fog-of-war holding section of the wayfinder map. |
| skills/engineering/wayfinder/SKILL.md | 46 | defined here | Map template heading holding un-ticketable in-scope questions until the frontier advances. |

## Consumes
Anticipated downstream choices or dependencies that cannot yet be precisely formulated.

## Produces
A structured holding pen of unresolved questions that gradually graduate into actionable decision tickets.

## When applied
Applied during wayfinder map authoring and updated as the decision frontier uncovers new details.

## Sub-concepts
fog-of-war

## Part of
wayfinder, wayfinder-map

## Implementation status
clean

## Design notes
`Not yet specified` captures the 'fog of war' in wayfinder. It allows planners to acknowledge upcoming questions without prematurely drafting imprecise tickets. As preceding decision tickets are resolved, items in this section graduate into discrete, well-formed decision tickets on the issue tracker.
