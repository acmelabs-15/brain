---
package: rjm
name: "Phase 3: Decide What to Do"
slug: phase-3-decide-what-to-do
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

# Phase 3: Decide What to Do

## Definition — verbatim
> "### Phase 3: Decide What to Do" — .claude/skills/retrospective/SKILL.md:123

## Also called — verbatim
Phase 3: Decisions — .claude/skills/retrospective/scripts/run_retrospective.py:253

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/SKILL.md | 123 | defined here | Fourth phase of retrospective workflow converting diagnostic insights into concrete, prioritized action plans. |

## Consumes
Root cause findings, success patterns, and prioritized diagnoses from Phase 2.

## Produces
Action classifications (Keep, Drop, Add, Modify), SMART-validated targets, and ordered dependency sequences.

## When applied
Applied after diagnosis to transition analytical findings into actionable remediation decisions.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction

## Design notes
Phase 3: Decide What to Do ensures that retrospective insights translate into pragmatic, structured changes by classifying actions into keep/drop/add/modify categories and validating each action against SMART criteria.
