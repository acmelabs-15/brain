---
package: rjm
name: PLAN vs REALITY
slug: plan-vs-reality
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PLAN vs REALITY

## Definition — verbatim
> "PLAN vs REALITY" — .claude/skills/dx-review/SKILL.md:216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 216 | defined here | Table comparing prior and current scores with calculated deltas and regression alert flags. |

## Consumes
Dimension scores from a prior scorecard and corresponding scores from the current audit.

## Produces
Formatted delta table highlighting point differences and triggering OK or FLAG alerts.

## When applied
Rendered within the Boomerang Comparison section whenever historical audit data is available.

## Sub-concepts
none

## Part of
boomerang-comparison

## Implementation status
defects: orphan

## Design notes
PLAN vs REALITY is the tabular artifact produced during a Boomerang Comparison. It visualizes dimension-level score drift between audits, immediately surfacing regressions exceeding two points so maintainers can address negative shifts before shipping changes.
