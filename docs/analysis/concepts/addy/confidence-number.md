---
package: addy
name: confidence number
slug: confidence-number
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# confidence number

## Definition — verbatim
> "The number forces honesty. If you wrote down a high number but can't actually predict the user's reactions to the next three questions you'd ask, the number is wrong. Start at the confidence level you can defend." — skills/interview-me/SKILL.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/interview-me/SKILL.md | 40 | defined here | Quantified 0-100% self-assessment of the agent's understanding of user intent. |

## Consumes
Ability to predict user reactions to upcoming questions and self-assessed intent clarity.

## Produces
A 0–100% numerical confidence score attached to interview hypotheses.

## When applied
At each step of the interview process before questioning and when evaluating stopping criteria.

## Sub-concepts
none

## Part of
- hypothesize
- interview-me

## Implementation status
clean

## Design notes
A quantified self-honesty mechanism forcing an agent to evaluate its actual level of understanding, preventing false confidence and ungrounded assumptions from masquerading as alignment.
