---
package: matt
name: destination
slug: destination
kind: artifact
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

# destination

## Definition — verbatim
> "an idea whose **destination** you can name but whose route you cannot yet see" — docs/engineering/wayfinder.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wayfinder.md | 3 | defined here | Defined as the named desired end-state of an effort whose route is still wrapped in fog. |
| external/wayfinder.md | 25 | defined here | External guide definition of destination as the target goal of a wayfinder map. |
| skills/engineering/wayfinder/SKILL.md | 7 | defined here | Introductory definition of destination as the ultimate goal whose route is not yet visible. |
| skills/engineering/wayfinder/SKILL.md | 32 | defined here | Section heading in the wayfinder map template defining reaching the end of the effort. |

## Consumes
A high-level project vision, complex migration goal, or large architectural initiative.

## Produces
A clear 1-2 line statement anchoring the scope of all subsequent decision tickets in a wayfinder map.

## When applied
Applied as the first step of charting in wayfinder before creating any tickets.

## Sub-concepts
none

## Part of
wayfinder, wayfinder-map

## Implementation status
clean

## Design notes
The `destination` fixes the boundary and purpose of a wayfinder map. By explicitly recording what reaching the end looks like (such as an approved specification, a locked architecture, or a completed migration) before creating any decision tickets, wayfinder prevents scope creep and guides the resolution of ambiguity.
