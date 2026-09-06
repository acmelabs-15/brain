---
package: addy
name: adr-tools
slug: adr-tools
kind: name-only
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# adr-tools

## Definition — verbatim
(used, not defined)
> "e.g. `docs/adr/*.md`, `Documentation/Decisions/*.rst`, a MADR layout, or an `adr-tools` setup." — skills/documentation-and-adrs/SKILL.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 40 | used here | Cited as an example of an established repository ADR tooling setup to inspect and match before using defaults. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`adr-tools` is an external third-party command-line tool suite for creating and managing Architecture Decision Records, cited as an example convention to conform to rather than an internal lifecycle concept.
