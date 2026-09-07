---
package: rjm
name: boomerang
slug: boomerang
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

# boomerang

## Definition — verbatim
> "Compares against a prior dx-review result when one exists (boomerang)." — .claude/skills/dx-review/SKILL.md:10-11

## Also called — verbatim
`Boomerang Comparison` — .claude/skills/dx-review/SKILL.md:209

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 11 | defines | Defined as a comparative mechanism that evaluates current audit scores against previous baseline results. |

## Consumes
Historical dx-review scorecards retrieved from session logs, memory, or user-supplied files, alongside the current audit scorecard.

## Produces
A comparative delta table (`PLAN vs REALITY`) highlighting point differentials across dimensions and flagging regressions greater than 2 points.

## When applied
Executed after scorecard generation whenever a prior dx-review audit result is available for the same target product.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
A regression-tracking technique in rjm's dx-review skill that matches current developer experience scores against earlier audit baselines. By calculating score deltas and alerting on drops exceeding two points, it prevents stealth degradation of developer ergonomics across releases.
