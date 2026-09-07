---
package: matt
name: grilling discipline
slug: grilling-discipline
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# grilling discipline

## Definition — verbatim
> "Use the grilling discipline (relentless, a round of questions at a time, a recommended answer attached to each) aimed at the vocabulary and goal below." — skills/in-progress/loop-me/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 8 | defined here | Prescribes the questioning protocol: relentless rounds with attached recommended answers. |

## Consumes
Ambiguous or unelaborated process details provided by the user.

## Produces
Targeted rounds of clarifying questions paired with recommended default answers.

## When applied
Applied iteratively throughout loop-me sessions until all specification questions are resolved.

## Sub-concepts
none

## Part of
loop-me

## Implementation status
clean

## Design notes
The questioning technique governing loop-me interactions: persistent interrogation structured as discrete rounds of questions where every question includes a proposed default answer. This structure accelerates user feedback, eliminates decision paralysis, and rapidly drives specifications toward completion.
