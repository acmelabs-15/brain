---
package: addy
name: one-question-at-a-time interview
slug: one-question-at-a-time-interview
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# one-question-at-a-time interview

## Definition — verbatim
(used, not defined)
> "A one-question-at-a-time interview that converges on validated requirements" — evals/cases/interview-me.json:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/interview-me.json | 34 | used here | Specified as the expected behavioral output for the interview-me dialogue evaluation. |

## Consumes
Vague or underspecified user requirement prompt.

## Produces
Sequential single-turn Q&A exchanges that converge on validated requirements.

## When applied
Applied during interactive requirements elicitation when probing user goals without overwhelming them with multiple questions.

## Sub-concepts
none

## Part of
interview-me

## Implementation status
clean

## Design notes
The `one-question-at-a-time interview` is the core conversational mechanism of the `interview-me` skill, designed to prevent cognitive overload and superficial answers. By restricting the agent to asking exactly one question per turn—paired with the agent's current hypothesis—it allows iterative calibration of understanding and stops the user from skipping hard constraint questions. Without it, agents dump long questionnaires that users answer incompletely, preserving ambiguity.
