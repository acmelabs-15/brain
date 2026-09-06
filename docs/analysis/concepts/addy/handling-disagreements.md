---
package: addy
name: Handling Disagreements
slug: handling-disagreements
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Handling Disagreements

## Definition — verbatim
> "When resolving review disputes, apply this hierarchy:" — skills/code-review-and-quality/SKILL.md:258-260

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 258 | defined here | Defines a four-tier decision hierarchy for resolving technical disagreements during review. |

## Consumes
Disputed feedback, competing architectural options, or style disagreements between reviewer and author.

## Produces
Objective dispute resolution based on technical facts, canonical style guides, engineering principles, or codebase consistency.

## When applied
Whenever reviewer and author reach an impasse over feedback or implementation choices.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
A dispute resolution hierarchy that de-escalates review friction by prioritizing objective empirical data over personal taste, established project style guides over individual formatting habits, and principled software design over dogmatic preference.
