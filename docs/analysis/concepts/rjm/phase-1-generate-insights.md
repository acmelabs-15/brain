---
package: rjm
name: Phase 1: Generate Insights
slug: phase-1-generate-insights
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

# Phase 1: Generate Insights

## Definition — verbatim
> "### Phase 1: Generate Insights" — .claude/skills/retrospective/SKILL.md:94

## Also called — verbatim
Phase 1: Insights Generated — .claude/skills/retrospective/scripts/run_retrospective.py:230

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/SKILL.md | 94 | defined here | Second phase of the retrospective workflow dedicated to analyzing root causes through structured frameworks. |

## Consumes
Factual session evidence and execution traces gathered in Phase 0.

## Produces
Causal insights from Five Whys, fishbone diagrams, force field analysis, and learning matrices.

## When applied
Applied immediately after Phase 0 data gathering to diagnose failures and identify patterns.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction

## Design notes
Phase 1: Generate Insights is the analytical stage of the retrospective lifecycle where agents apply diagnostic frameworks to raw session evidence to uncover systemic root causes rather than stopping at immediate symptoms.
