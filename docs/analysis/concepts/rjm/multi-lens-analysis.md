---
package: rjm
name: Multi-Lens Analysis
slug: multi-lens-analysis
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

# Multi-Lens Analysis

## Definition — verbatim
> "Apply all 11 thinking models systematically:" — .claude/skills/skillforge/references/phase1-analysis-deep-dive.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase1-analysis-deep-dive.md | 46 | defined here | Section heading introducing systematic evaluation across 11 thinking models. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 38 | used here | Table row recording extraction of Multi-Lens Analysis into references/phase1-analysis-deep-dive.md. |

## Consumes
Expanded requirements and skill problem domain models.

## Produces
Documented findings across 11 thinking lenses, anti-patterns, downstream effects, and trade-offs.

## When applied
Applied in Step 1B of Phase 1 (Deep Analysis) to stress-test skill requirements.

## Sub-concepts
none

## Part of
multi-lens-analysis-framework

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Multi-Lens Analysis applies 11 formal thinking models (such as Pareto, Inversion, Root Cause, and Pre-Mortem) to skill design. In rjm, scanning all 11 lenses and deeply applying at least 5 guarantees robust architecture resilient against common cognitive biases and failure modes.
