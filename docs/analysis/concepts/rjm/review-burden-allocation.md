---
package: rjm
name: Review Burden Allocation
slug: review-burden-allocation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Review Burden Allocation

## Definition — verbatim
> "Apply it to review-burden allocation: flag any claim whose refutation effort exceeds its authorship effort." — .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 74 | defines | Section heading linking Brandolini's Law to practical review burden management. |
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 19 | defines | Methodological rule instructing reviewers to flag claims where refutation effort exceeds authorship effort. |
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 40 | defines | Section heading and tabular rubric categorizing claims by authorship cost and refutation cost. |

## Consumes
Claims and assertions in architectural decisions and technical plans.

## Produces
Asymmetry assessment determining whether author must provide additional evidence.

## When applied
During verification and challenge steps of decision and plan review.

## Sub-concepts
none

## Part of
brandolini-s-law

## Implementation status
defects: missing-path

## Design notes
A review technique that evaluates claims by the disparity between authorship effort and refutation effort, requiring authors to bear the burden of evidence for high-refutation-cost assertions.
