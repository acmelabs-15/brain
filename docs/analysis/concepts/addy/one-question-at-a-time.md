---
package: addy
name: one question at a time
slug: one-question-at-a-time
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

# one question at a time

## Definition — verbatim
> "Wait for the user to react before asking the next question." — skills/interview-me/SKILL.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/interview-me/SKILL.md | 53 | defined here | Step 2 protocol requiring sequential questions with attached hypotheses rather than batch questionnaires. |

## Consumes
Previous user responses, updated hypothesis, and specific unresolved intent dimensions.

## Produces
A single focused question paired with an explicit guess and reasoning.

## When applied
During requirements interrogation until the confidence threshold is achieved.

## Sub-concepts
none

## Part of
- interview-me

## Implementation status
clean

## Design notes
An interviewing technique that prevents cognitive fatigue and maintains collaborative agility by asking exactly one question with an attached guess per turn, rather than overwhelming users with question lists.
