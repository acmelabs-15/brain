---
package: rjm
name: Review Axes
slug: review-axes
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Review Axes

## Definition — verbatim
> "Every plan gets evaluated on these six axes. Score each 1-5 and aggregate." — .claude/agents/critic.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 110 | defines | Section heading defining the 6-axis scoring rubric for implementation plans. |
| templates/agents/critic.shared.md | 114 | defines | Shared template section heading establishing the six evaluation axes for plan critiques. |

## Consumes
Implementation plans, task lists, and specifications.

## Produces
Six 1-5 axis scores (Completeness, Alignment, Feasibility, Risk coverage, Testability, Traceability) and aggregate rating.

## When applied
Evaluated during plan critique prior to code implementation.

## Sub-concepts
completeness, alignment, feasibility, risk-coverage, testability, traceability

## Part of
critic

## Implementation status
defects: missing-path

## Design notes
A structured scoring framework defining six standardized axes across which implementation plans are judged to determine readiness for execution.
