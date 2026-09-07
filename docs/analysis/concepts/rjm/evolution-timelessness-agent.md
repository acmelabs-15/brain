---
package: rjm
name: Evolution/Timelessness Agent
slug: evolution-timelessness-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evolution/Timelessness Agent

## Definition — verbatim
> "The Evolution/Timelessness Agent in the synthesis panel uses this framework to evaluate generated skills. The agent:" — .claude/skills/skillforge/references/evolution-scoring.md:355

## Also called — verbatim
> "### Agent 3: Evolution/Timelessness Agent" — .claude/skills/skillforge/references/synthesis-protocol.md:117

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 355 | defined here | Defined as the synthesis panel evaluator responsible for applying the evolution framework and scoring rubric. |
| .claude/skills/skillforge/references/synthesis-protocol.md | 117 | defined here | Defined as Agent 3 of the synthesis panel evaluating future-proofing, timelessness, and ecosystem integration. |

## Consumes
Generated skill artifacts including SKILL.md, references, and scripts.

## Produces
Timelessness scores, structured critique, required remediations, and approval votes.

## When applied
Invoked during Phase 4 synthesis review to evaluate future-proofing before final skill approval.

## Sub-concepts
none

## Part of
synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
A specialized synthesis panel persona focused exclusively on future-proofing, dependency abstraction, and ecosystem composability, holding veto power over skills scoring below 7/10.
