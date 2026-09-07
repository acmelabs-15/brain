---
package: rjm
name: Technical Investment
slug: technical-investment
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

# Technical Investment

## Definition — verbatim
> "### 5. Technical Investment" — .claude/skills/review/references/roadmap.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/roadmap.md | 94 | defined here | Focus area checklist checking effort justification, infrastructure reusability, and foundational leverage. |

## Consumes
Architectural changes, technical designs, implementation effort estimates, and PR diffs.

## Produces
Assessments of architectural leverage, reusable component value, and ROI on technical effort.

## When applied
Applied during roadmap reviews to verify that engineering effort yields reusable, high-leverage infrastructure.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205)

## Design notes
`Technical Investment` is a roadmap review checklist evaluating whether the complexity and effort of a technical change are justified by the reusable leverage and future capabilities it creates.
