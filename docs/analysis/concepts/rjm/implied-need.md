---
package: rjm
name: implied need
slug: implied-need
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/spin-selling.md, sha256: a92d32c272420a6c4bf96953b82293b68eb44b02b9aaca01eff33813081d9d10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# implied need

## Definition — verbatim
> "The goal is to get the buyer to name an \"implied need\" out loud: a problem they have but have not sized." — .claude/skills/business-strategy/references/spin-selling.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/spin-selling.md | 21 | defined here | Target conversational milestone representing an admitted buyer problem that has not yet been quantified. |

## Consumes
Buyer admissions of operational friction elicited through Problem questions.

## Produces
Unquantified statement of difficulty serving as raw material for consequence sizing in Implication questions.

## When applied
Surfaced during Problem questioning before moving into consequence exploration.

## Sub-concepts
none

## Part of
problem-questions, spin-selling

## Implementation status
clean

## Design notes
An implied need represents a customer's qualitative acknowledgment of friction that has not yet been translated into business impact. In rjm's sales guidance, recognizing an implied need signals the seller to probe deeper into consequences rather than prematurely pitching product features.
