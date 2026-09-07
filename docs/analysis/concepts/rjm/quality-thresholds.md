---
package: rjm
name: Quality Thresholds
slug: quality-thresholds
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Quality Thresholds

## Definition — verbatim
> "### Quality Thresholds" — .claude/skills/retrospective/references/diagnosis-and-actions.md:211

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 211 | defined here | Table defining atomicity score bands (95-100% Excellent, 70-94% Good, 40-69% Needs Work, <40% Rejected) for memory persistence. |
| .claude/skills/retrospective/scripts/score_atomicity.py | 20 | used here | Quoted in script docstring as the canonical score bands and actions implemented by the atomicity scoring tool. |
| .claude/skills/skillforge/references/synthesis-protocol.md | 305 | defined here | Section defining minimum score thresholds (7.0 average, 0 critical issues) for multi-agent synthesis panel approval. |

## Consumes
Atomicity scores from retrospective analysis or panel agent scores from skill synthesis evaluations.

## Produces
Definitive quality verdicts (Excellent/Good/Needs Work/Rejected for memories; APPROVED/CHANGES_REQUIRED for skills).

## When applied
Applied when deciding whether to persist retrospective learnings to memory or approve synthesized skills.

## Sub-concepts
none

## Part of
atomicity-scoring, synthesis-protocol

## Implementation status
clean

## Design notes
Quality Thresholds establishes explicit quantitative cutoff gates across rjm workflows—governing both the minimum atomicity score required to persist retrospective learnings to memory and the score criteria required to approve generated skills.
