---
package: matt
name: secondary sources
slug: secondary-sources
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# secondary sources

## Definition — verbatim
(used, not defined)

> "## Primary and secondary sources" — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 42 | defined here | Section heading introducing the tradeoff between primary session context and secondary summaries. |

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
A section heading in `PHASE-BOUNDARIES.md` contrasting lossless primary session context against lossy secondary summaries; classified as name-only per D-023 because it represents a document heading rather than an independent lifecycle concept (with the concept covered under `secondary-source`).
