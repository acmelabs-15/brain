---
package: rjm
name: Business Impact
slug: business-impact
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

# Business Impact

## Definition — verbatim
> "### 4. Business Impact" — .claude/skills/review/references/roadmap.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/roadmap.md | 87 | defined here | Focus area checklist evaluating adoption impact, growth enablement, competitive factors, and opportunity costs. |

## Consumes
Product roadmaps, business objectives, feature proposals, and change diffs.

## Produces
Business impact ratings, growth enablement evaluations, and opportunity cost analyses.

## When applied
Applied during roadmap reviews when evaluating the commercial and strategic justification of a pull request.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205)

## Design notes
`Business Impact` is a roadmap review checklist assessing whether an engineering investment moves key business metrics such as user growth, adoption, retention, and competitive positioning.
