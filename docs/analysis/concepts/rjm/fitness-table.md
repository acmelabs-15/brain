---
package: rjm
name: fitness table
slug: fitness-table
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fitness table

## Definition — verbatim
> "How to read the fitness table" — docs/when-to-use.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 17 | defined here | Decision matrix defining phase inclusion (yes/no/maybe) across task shapes. |

## Consumes
Identified task shape and the six lifecycle command definitions.

## Produces
Concrete execution matrix indicating which commands (/spec, /plan, /build, /test, /review, /ship) should run.

## When applied
Consulted when planning work execution to verify phase requirements.

## Sub-concepts
none

## Part of
fitness-guide

## Implementation status
clean

## Design notes
A matrix reference mapping eight distinct task shapes to the six lifecycle commands, encoding empirical lessons from past failures into explicit yes/no/maybe phase recommendations.
