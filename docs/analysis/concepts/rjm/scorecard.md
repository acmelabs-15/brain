---
package: rjm
name: scorecard
slug: scorecard
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

# scorecard

## Definition — verbatim
> "Produces a scorecard where every score cites evidence labeled TESTED, PARTIAL, or INFERRED." — .claude/skills/dx-review/SKILL.md:8-9

## Also called — verbatim
`DX Scorecard` — .claude/skills/dx-review/SKILL.md:175

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 8 | defines | Defined as the primary evaluation artifact scoring developer experience across eight dimensions with evidence labels. |

## Consumes
Dimension scores, empirical observations, execution logs, and evidence labels from Steps 1 through 8.

## Produces
A structured tabular evaluation summary containing dimension scores out of 10, evidence summaries, inspection methods, and overall DX mean.

## When applied
Generated upon completing all audit steps during a dx-review execution before passing through the blocking gates.

## Sub-concepts
tested, partial, inferred, time-to-hello-world

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The definitive output artifact of rjm's dx-review audit process. It compiles quantitative scores across eight developer experience dimensions, requires explicit evidence citations for each score, and computes an overall score tied to the weakest evidence label utilized.
