---
package: matt
name: the map
slug: the-map
kind: artifact
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# the map

## Definition — verbatim
> "The reframe charts a route through a foggy problem instead, giving one coherent leading-word frame — **fog of war**, **frontier**, **the map** — rather than an invented term layered on top." — CHANGELOG.md:193

## Also called — verbatim
`wayfinder:map` — docs/engineering/wayfinder.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 193 | defined here | Sets the map as the central navigational artifact of the wayfinder skill |

## Consumes
A complex multi-session project goal and destination

## Produces
A centralized index issue (`wayfinder:map`) containing destination, decisions, fog of war, and out-of-scope sections

## When applied
When embarking on a multi-session engineering journey too large for a single agent context

## Sub-concepts
frontier, fog-of-war

## Part of
wayfinder

## Implementation status
clean

## Design notes
The map is a low-resolution index issue that tracks the overall trajectory of a multi-session project toward its destination, linking to detailed child tickets on demand so individual sessions do not pay the token cost of the entire project history.
