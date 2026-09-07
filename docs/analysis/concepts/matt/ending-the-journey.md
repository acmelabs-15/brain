---
package: matt
name: Ending the journey
slug: ending-the-journey
kind: gate
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-beats/SKILL.md, sha256: a96abafa2372eede8267d770138b322d6125da8adaa7ccf0a5e08e4ee13ee71e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ending the journey

## Definition — verbatim
> "The article ends when the journey is complete, not when the pile is empty." — skills/in-progress/writing-beats/SKILL.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 56 | defined here | Section heading and completion gate establishing that an article finishes when its narrative journey concludes rather than when all raw fragments are consumed. |

## Consumes
The completed sequence of beats fulfilling the article's narrative arc.

## Produces
The final exit decision ending the iterative beat generation loop.

## When applied
Evaluated at the end of each beat loop iteration to determine whether the article has reached a natural conclusion.

## Sub-concepts
none

## Part of
writing-beats

## Implementation status
clean

## Design notes
Ending the journey serves as a completion gate decoupling article termination from raw material exhaustion. Because the initial exploratory quarry intentionally contains surplus fragments, the authoring process concludes when the reader's journey is satisfied rather than forcing every unused note into the text.
