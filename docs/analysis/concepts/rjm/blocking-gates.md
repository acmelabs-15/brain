---
package: rjm
name: Blocking Gates
slug: blocking-gates
kind: gate
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

# Blocking Gates

## Definition — verbatim
> "## Blocking Gates" — .claude/skills/dx-review/SKILL.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 227 | defined here | Mandatory verification gate requiring Evidence Gate and Review Gate completion prior to publishing recommendations. |

## Consumes
Completed scorecard, concrete evidence locations, dual independent sources for high-impact conclusions, and adversarial review feedback.

## Produces
`GATE_STATUS: Evidence Gate = PASS` (or FAIL) and `GATE_STATUS: Review Gate = PASS` (or PASS_WITH_CONCERNS, FAIL) verdicts.

## When applied
Executed immediately after scorecard generation and before releasing final remediation recommendations.

## Sub-concepts
none

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
Blocking Gates enforce quality and verification rigor in `dx-review`. By requiring both multi-source evidentiary grounding and read-only adversarial review before delivering findings, the system guarantees recommendations are verified, unbiased, and safe from prompt-injection risks.
