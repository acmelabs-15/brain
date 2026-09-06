---
package: matt
name: phase
slug: phase
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# phase

## Definition — verbatim
> "A **phase** is a chunk of work inside a session: the grilling, the implementation, the QA. The definition is fuzzy on purpose: a phase ends when you think *\"ok, we're done with that\"*." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 100 | defined here | Outlines phase definition and transition handling in ask-matt changelog |
| external/ask-matt.md | 42 | defined here | Web documentation explaining the concept of a phase within an agent session |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 3 | defined here | Foundational reference definition establishing phase boundaries and lifecycle stages |

## Consumes
A goal, ticket, or problem statement to be addressed within an engineering session

## Produces
A completed lifecycle milestone (an aligned concept, a spec, a test suite, an implementation, a review)

## When applied
During any focused period of agent-human collaboration working toward a specific milestone

## Sub-concepts
none

## Part of
ask-matt, phase-boundaries

## Implementation status
clean

## Design notes
In Matt's workflow, a phase is an intentionally flexible unit of work within a session representing a coherent stage of engineering (such as discovery, design, implementation, or QA) that maintains its own internal momentum until a natural stopping point is reached.
