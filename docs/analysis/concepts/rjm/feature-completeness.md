---
package: rjm
name: Feature Completeness
slug: feature-completeness
kind: name-only
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

# Feature Completeness

## Definition — verbatim
(used, not defined)

> "### Feature Completeness" — .claude/skills/review/references/roadmap.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/roadmap.md | 121 | defined here | Section heading structuring scope assessment, ship readiness, and MVP completeness evaluations. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205)

## Design notes
`Feature Completeness` is a section heading in the roadmap review output specification evaluating whether a feature is ready to ship, classified as `kind: name-only` per D-023.
