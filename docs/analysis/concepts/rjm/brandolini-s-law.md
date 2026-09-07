---
package: rjm
name: Brandolini's Law
slug: brandolini-s-law
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Brandolini's Law

## Definition — verbatim
> "The energy needed to refute a claim is an order of magnitude larger than the energy needed to produce it (Alberto Brandolini, the bullshit asymmetry principle)." — .claude/agents/critic.md:76

## Also called — verbatim
bullshit asymmetry principle — .claude/agents/critic.md:76

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 74 | defines | Section heading introducing the principle to justify shifting the burden of proof onto authors. |
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 7 | defines | Reference document detailing the principle, verification questions, and burden allocation tables. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 81 | used here | Cited in related mental models noting falsifiable claims are cheaper to refute than vague ones. |
| .claude/skills/decision-critic/SKILL.md | 103 | used here | Listed in reference catalog for allocating review burden according to claim asymmetry. |
| .claude/skills/review/references/decision-rigor.md | 81 | used here | Applied in decision rigor review to require authors to provide proof for assertions. |
| templates/agents/critic.shared.md | 78 | defines | Shared template section heading framing review burden allocation around claim asymmetry. |

## Consumes
Unverified claims, technical assertions, and architectural proposals.

## Produces
Review policy placing the burden of proof on the claim producer rather than the reviewer.

## When applied
During plan critique, decision evaluation, and architectural review.

## Sub-concepts
review-burden-allocation

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A mental model stating that disproving unverified claims requires far more effort than producing them, justifying strict standards that require authors to substantiate their own assertions.
