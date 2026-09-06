---
package: addy
name: Alternatives Considered
slug: alternatives-considered
kind: artifact
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

# Alternatives Considered

## Definition — verbatim
> "## Alternatives Considered" — skills/documentation-and-adrs/SKILL.md:69

## Also called — verbatim
> "what alternatives were considered" — skills/documentation-and-adrs/SKILL.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 69 | defined here | Section heading in the ADR template for recording evaluated alternatives with pros, cons, and rejection reasons. |

## Consumes
Competing libraries, frameworks, architectural designs, or approaches evaluated during problem solving.

## Produces
A comparative analysis documenting pros, cons, and explicit rejection rationale for alternative technical choices.

## When applied
Filled during ADR drafting whenever non-selected alternatives were investigated.

## Sub-concepts
none

## Part of
adr-template

## Implementation status
clean

## Design notes
`Alternatives Considered` documents rejected options along with the specific reasons they were not selected, preventing future developers and autonomous agents from reopening debates on solutions already proven unsuitable.
