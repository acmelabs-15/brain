---
package: matt
name: Continue
slug: continue
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Continue

## Definition — verbatim
> "Stay in the session. No context switch at all." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ask-matt.md | 43 | defined here | First option in the phase boundary decision tree, taken when the next phase needs the current context verbatim or smart zone remains. |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 11 | defined here | First option at a phase boundary: staying in the existing session without context switching. |

## Consumes
Remaining context window capacity within the smart zone (~150k tokens) and relevance of the current session history to the next lifecycle phase.

## Produces
Unbroken session continuity retaining full design rationale, explorations, and intermediate decisions as a primary source.

## When applied
> "Continue costs nothing and loses nothing, so rule it out before anything else." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:21

## Sub-concepts
smart-zone, primary-source

## Part of
phase-boundary

## Implementation status
clean

## Design notes
The first and highest-fidelity context transition option evaluated at phase boundaries. Keeping the unbroken session context preserves design rationale and decisions as a primary source, which lossy summarization or compaction would flatten. Compaction mid-phase causes agents to lose the thread, whereas continuing costs nothing and loses nothing.
