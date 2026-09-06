---
package: addy
name: adversarial review
slug: adversarial-review
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# adversarial review

## Definition — verbatim
> "Adversarial review. Find what is wrong with this artifact." — skills/doubt-driven-development/SKILL.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/doubt-driven-development.json | 30 | used here | Specified as the review technique applied to an irreversible migration plan in the evaluation case. |
| skills/doubt-driven-development/SKILL.md | 90 | defined here | Direct prompt instruction defining the fresh-context reviewer's role and objective. |

## Consumes
An isolated artifact and explicit contract stripped of journey reasoning or author conclusions.

## Produces
A list of concrete defects, unstated assumptions, unhandled edge cases, hidden couplings, or potential contract violations.

## When applied
> "The reviewer's prompt **must be adversarial**. Framing decides the answer." — skills/doubt-driven-development/SKILL.md:87

## Sub-concepts
none

## Part of
- doubt-driven-development

## Implementation status
clean

## Design notes
Adversarial review forces the evaluating agent into a critical posture biased strictly to disprove rather than validate an artifact. By directing the reviewer to find flaws and prohibiting summaries or validation, it overcomes LLM sycophancy and surfaces unexamined assumptions while changes are small and cheap to fix.
