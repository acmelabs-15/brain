---
package: rjm
name: DX AUDIT SCORECARD
slug: dx-audit-scorecard
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

# DX AUDIT SCORECARD

## Definition — verbatim
> "DX AUDIT SCORECARD" — .claude/skills/dx-review/SKILL.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 180 | defined here | Tabular scorecard template consolidating dimension scores, evidence summaries, method tags, TTHW, and Overall DX. |

## Consumes
Scores (0-10), evidence summaries, and method classifications across eight audit dimensions, plus measured Time-to-Hello-World (TTHW).

## Produces
Structured ASCII table artifact presenting complete audit scores, evidence summaries, TTHW, and Overall DX mean score.

## When applied
Produced upon completing all audit steps within the `dx-review` workflow.

## Sub-concepts
overall-dx

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The DX Audit Scorecard serves as the primary deliverable artifact of the `dx-review` process. It aggregates empirical ratings across all eight evaluation dimensions into a standardized table, enforcing transparency by displaying evidence summaries and weakest-link method labels alongside numerical scores.
