---
package: rjm
name: "Phase 4: Learning Extraction"
slug: phase-4-learning-extraction
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 4: Learning Extraction

## Definition — verbatim
> "### Phase 4: Learning Extraction" — .claude/skills/retrospective/SKILL.md:134

## Also called — verbatim
Phase 4: Extracted Learnings — .claude/skills/retrospective/scripts/run_retrospective.py:264

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/SKILL.md | 134 | defined here | Fifth retrospective phase evaluating and scoring candidate learnings for atomicity before persistence. |

## Consumes
Classified actions and decisions from Phase 3.

## Produces
Atomicity-scored learnings, quality band ratings, and structured skill operation payloads.

## When applied
Applied following action decisions to prepare high-quality knowledge artifacts for memory storage.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction

## Design notes
Phase 4: Learning Extraction translates retrospective decisions into formal knowledge representations, enforcing atomicity scoring to ensure candidate learnings are precise, actionable, and non-compound before they are committed to memory.
