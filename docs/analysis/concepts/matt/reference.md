---
package: matt
name: reference
slug: reference
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: external/teach.md, sha256: 9ae46342a2459bccd5cfe0b07502a43b2fd3dd1d8a18b84f0d9b2dc553dad96b}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reference

## Definition — verbatim
> "A document is built from two content types: **steps** (the ordered actions the agent performs) and **reference** (definitions, rules, facts consulted on demand)." — skills/productivity/writing-for-agents/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 33 | defined here | Defines reference/*.html as compressed cheat-sheets, algorithms, and glossaries. |
| external/tdd.md | 26 | defined here | Describes /tdd as a reference holding rules rather than an active driver. |
| external/teach.md | 34 | defined here | Lists reference directory holding durable documents learners return to. |
| skills/productivity/writing-for-agents/SKILL.md | 31 | defined here | Classifies reference content as definitions, rules, and facts consulted on demand. |

## Consumes
Extracted rules, definitions, API contracts, cheat sheets, or testing conventions.

## Produces
On-demand reference documents consulted during execution rather than step-by-step scripts.

## When applied
Consulted when an executing agent or learner needs lookups without sequential flow.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
Reference material forms the static lookup layer in Matt's documentation architecture. Distinct from imperative step-by-step recipes, reference documents capture immutable rules, definitions, and cheat sheets designed to be consulted selectively on demand.
