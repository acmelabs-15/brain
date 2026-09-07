---
package: rjm
name: Analysis paralysis
slug: analysis-paralysis
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/planner/references/strategy-ooda-loop.md, sha256: b626a9d4fb9134de8b14ebf310a74d36130c4fe55cba4d698faceff1d66e2861}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Analysis paralysis

## Definition — verbatim
> "| Analysis paralysis | Stuck in Orient | Time-box, accept imperfect info |" — .claude/skills/analyze/references/strategy-ooda-loop.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/strategy-ooda-loop.md | 57 | defined here | OODA loop anti-pattern characterized by becoming trapped in the Orient phase without advancing to decisions. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 454 | defined here | Major Commonality-Variability Analysis anti-pattern of over-analyzing simple scenarios instead of time-boxing. |
| .claude/skills/cva-analysis/SKILL.md | 331 | defined here | Common anti-pattern where engineers spend excessive hours constructing elaborate matrices for trivial cases. |
| .claude/skills/planner/references/strategy-ooda-loop.md | 53 | defined here | Planning anti-pattern where agents get stuck in Orient and fail to advance to action. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 778 | defined here | Research-backed agent failure mode where models spend excessive tokens elaborating unexecuted plans without environmental progress. |

## Consumes
Incomplete or ambiguous specifications, open-ended problem statements, unbounded exploration time.

## Produces
Execution stall, excessive token consumption, delayed delivery, unexecuted speculative plans.

## When applied
Recognized as a failure mode during planning, architectural analysis, CVA evaluation, and autonomous agent loops.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
Analysis Paralysis is an anti-pattern recognized across rjm's planning, analysis, and prompt-engineering architectures. It occurs when an agent or engineer becomes immobilized in the orientation/planning phase—endlessly gathering information, elaborating speculative variations, or refining plans without making environmental progress or committing to action. rjm mitigates this with strict time-boxing, tiered analysis depth, and forcing functions that require committing to decisions under imperfect information.
