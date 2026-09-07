---
package: rjm
name: Agent Evaluation
slug: agent-evaluation
kind: template
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Evaluation

## Definition — verbatim
> "## Agent Evaluation" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 36 | defined here | Specification and template for structured agent review reports on the synthesis panel. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 41 | used here | Cites agent evaluation reporting format extracted into references/phase4-synthesis-deep-dive.md. |

## Consumes
Candidate skill artifacts and evaluator lens criteria.

## Produces
Markdown review report containing Verdict (APPROVED / CHANGES_REQUIRED), Scores (1-10), Strengths, Issues table, and Recommendations.

## When applied
Executed by each agent on the synthesis panel during Phase 4 review.

## Sub-concepts
none

## Part of
panel

## Implementation status
clean

## Design notes
The standard review report schema produced by each agent on the SkillForge synthesis panel, structuring verdicts, numerical scores, concrete strengths, and prioritized issue remediation tables.
