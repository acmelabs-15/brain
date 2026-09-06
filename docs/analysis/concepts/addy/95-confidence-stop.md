---
package: addy
name: 95% Confidence Stop
slug: 95-confidence-stop
kind: gate
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

# 95% Confidence Stop

## Definition — verbatim
> "If yes, you have shared understanding. Stop interviewing and produce the restate. If no, you're not done; ask the next question." — skills/interview-me/SKILL.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/interview-me/SKILL.md | 124 | defined here | Section heading introducing the stopping condition gate for ending the interview. |

## Consumes
Ability to accurately predict the user's responses to hypothetical upcoming questions.

## Produces
A gate transition from active questioning to drafting the restatement of intent.

## When applied
Evaluated after each interview exchange to determine whether to continue questioning or conclude.

## Sub-concepts
none

## Part of
- interview-me

## Implementation status
clean

## Design notes
A termination gate for exploratory interviewing defined not by arbitrary time limits, but by whether the interviewer has achieved sufficient empathy and comprehension to predict user reactions to subsequent questions.
