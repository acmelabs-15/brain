---
package: rjm
name: Regression Questioning
slug: regression-questioning
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase1-analysis-deep-dive.md, sha256: 242427fcc7271d76c15e9d96a0388cdb21f1dc97ee092f69c1bc77685887235f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Regression Questioning

## Definition — verbatim
> "Iterative self-questioning until no new insights emerge:" — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase1-analysis-deep-dive.md | 68 | defined here | Section heading introducing iterative recursive self-questioning. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 38 | used here | Table row recording extraction of Regression Questioning into references/phase1-analysis-deep-dive.md. |

## Consumes
Interim analysis findings, expert personas, and 2-year temporal projections.

## Produces
Iterative insight refinements and an explicit termination record when three rounds yield no new insights.

## When applied
Applied in Step 1C of Phase 1 (Deep Analysis) to challenge assumptions before specification.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Regression Questioning is a recursive self-critique loop where the agent repeatedly asks challenging questions ('What am I missing?', 'What would an expert add?', 'What will this look like in 2 years?'). In rjm, requiring three consecutive empty rounds before termination ensures exhaustive depth.
