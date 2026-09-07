---
package: rjm
name: Overall DX
slug: overall-dx
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

# Overall DX

## Definition — verbatim
> "| Overall DX           | __/10  | Mean: [sum]/[count]    | [actual]     |" — .claude/skills/dx-review/SKILL.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 194 | defined here | Composite metric row in the DX audit scorecard calculated as the arithmetic mean of available dimension scores. |

## Consumes
Numerical scores (0-10) and method classifications across all non-N/A audit dimensions in the scorecard.

## Produces
A composite score rounded to one decimal place, formatted with arithmetic mean evidence and weakest-link method attribution.

## When applied
Calculated upon completion of all audit dimensions to populate the summary row of the scorecard.

## Sub-concepts
none

## Part of
dx-audit-scorecard

## Implementation status
defects: orphan

## Design notes
Overall DX provides a single composite benchmark representing the overall developer experience across an evaluated product. It prevents subjective weighting by computing an unweighted arithmetic mean while enforcing pessimistic evidence integrity by assigning the weakest evidence label among the included dimensions.
