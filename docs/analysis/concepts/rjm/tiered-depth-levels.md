---
package: rjm
name: Tiered Depth Levels
slug: tiered-depth-levels
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Tiered Depth Levels

## Definition — verbatim
> "## Tiered Depth Levels" — .claude/skills/cva-analysis/SKILL.md:390

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 390 | defined here | Calibration guide establishing Quick (15 min), Standard (30 min), and Deep (60 min) depth tiers for CVA based on decision impact. |

## Consumes
Decision scope, uncertainty level, and architectural risk.

## Produces
Chosen timebox (15, 30, or 60 minutes) and target use-case count (2-3, 3-5, or 6+).

## When applied
Selected prior to beginning CVA analysis to align analytical effort with decision risk.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift

## Design notes
`Tiered Depth Levels` enforces time-boxing and scope calibration across CVA analysis (Quick for simple low-risk choices, Standard for moderate complexity, Deep for critical architecture), preventing analysis paralysis and keeping design analysis proportional to risk.
