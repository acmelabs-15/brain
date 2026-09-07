---
package: rjm
name: Boomerang Comparison
slug: boomerang-comparison
kind: technique
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

# Boomerang Comparison

## Definition — verbatim
> "## Boomerang Comparison" — .claude/skills/dx-review/SKILL.md:209

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 209 | defined here | Comparative evaluation section comparing current audit results against historical baseline scorecards. |

## Consumes
Current DX scorecard and a prior historical scorecard retrieved from session logs, memory, or user files.

## Produces
A PLAN vs REALITY comparison table with score deltas and alert flags for regressions greater than 2 points.

## When applied
Applied conditionally only when a prior `dx-review` scorecard exists for the same target repository or product.

## Sub-concepts
plan-vs-reality

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The Boomerang Comparison introduces historical regression detection into developer experience audits. By benchmarking current findings against prior evaluations and flagging drops exceeding two points, it prevents tooling updates from silently degrading established developer workflows.
