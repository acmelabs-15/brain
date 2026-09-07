---
package: matt
name: next beats
slug: next-beats
kind: artifact
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

# next beats

## Definition — verbatim
> "Then offer 2–3 candidate **next beats**: different directions the journey could pivot to from where the article now stands." — skills/in-progress/writing-beats/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 18 | defined here | Offered as 2–3 candidate directions to pivot the journey from the current grounded article state. |

## Consumes
The current article text on disk, the running set of grounded concepts, and the raw material pile.

## Produces
A selected next beat appended to the article file on disk.

## When applied
Step 4 of writing-beats, iteratively after re-reading the article file from disk until the piece reaches a natural end.

## Sub-concepts
none

## Part of
writing-beats

## Implementation status
clean

## Design notes
Next beats provide alternative branching choices in an interactive choose-your-own-adventure writing workflow. Each offered candidate must be strictly reachable from concepts grounded in prior beats or initial prerequisites, explicitly noting which new concepts it introduces so the author can evaluate which narrative paths are unlocked.
