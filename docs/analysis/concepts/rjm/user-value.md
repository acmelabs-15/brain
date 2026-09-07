---
package: rjm
name: User Value
slug: user-value
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# User Value

## Definition — verbatim
> "### 3. User Value" — .claude/skills/review/references/roadmap.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/roadmap.md | 80 | defined here | Focus area checklist interrogating user problem solving, proportionality, and empirical demand evidence. |

## Consumes
PR descriptions, linked user issues, customer feedback, and product requirements.

## Produces
Evaluations of user problem fit, evidence of user demand, and proportionality assessments.

## When applied
Applied during roadmap reviews to assess whether a code change directly delivers tangible benefit to end users.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205)

## Design notes
`User Value` is a roadmap review checklist confirming that pull requests solve genuine user problems supported by evidence rather than implementing speculative or low-utility features.
