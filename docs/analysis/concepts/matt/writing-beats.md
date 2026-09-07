---
package: matt
name: writing-beats
slug: writing-beats
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/writing-beats/SKILL.md, sha256: a96abafa2372eede8267d770138b322d6125da8adaa7ccf0a5e08e4ee13ee71e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# writing-beats

## Definition — verbatim
> "Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it." — skills/in-progress/writing-beats/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/README.md | 12 | used here | Catalog entry introducing writing-beats as an article shaping tool via choose-your-own-adventure beats. |
| skills/in-progress/writing-beats/SKILL.md | 2 | defined here | Frontmatter declaration naming the writing-beats skill. |

## Consumes
A markdown file of raw material or notes representing the exploit phase of authoring.

## Produces
An article document assembled progressively on disk, one beat at a time.

## When applied
Invoked to construct articles or narrative prose from raw notes through an interactive choose-your-own-adventure flow.

## Sub-concepts
beat, grounding, prerequisite, introduced, starting-beats, next-beats

## Part of
none

## Implementation status
clean

## Design notes
An exploit-phase writing skill that organizes prose construction into a sequence of discrete narrative beats. It guarantees reader comprehension by checking that every concept is grounded before any beat relies on it, offering branching choices at each step.
