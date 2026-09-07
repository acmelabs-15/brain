---
package: rjm
name: Feature Scope
slug: feature-scope
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

# Feature Scope

## Definition — verbatim
> "### 2. Feature Scope" — .claude/skills/review/references/roadmap.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/roadmap.md | 73 | defined here | Focus area checklist evaluating PR sizing, scope creep, and completeness against product goals. |

## Consumes
Pull request diffs, feature specifications, and PR descriptions.

## Produces
Scope assessments identifying over-scoping, under-scoping, and scope creep indicators.

## When applied
Applied during roadmap reviews to verify that pull requests are appropriately sized for their intended feature milestone.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205)

## Design notes
`Feature Scope` is a roadmap review checklist ensuring pull requests deliver right-sized functionality without introducing unbounded scope creep or shipping half-finished capabilities.
