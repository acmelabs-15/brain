---
package: matt
name: term
slug: term
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

# term

## Definition — verbatim
> "Where a concept has a name (a **term**), grounding it means landing the idea and the term together." — skills/in-progress/writing-beats/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 27 | defined here | Defined as the explicit name for a concept, requiring both the idea and the label to be grounded together. |

## Consumes
A conceptual idea in the narrative requiring an explicit verbal identifier.

## Produces
Shared vocabulary between author and reader where both the concept and its named label are understood.

## When applied
When grounding a named concept inside a narrative beat or block.

## Sub-concepts
none

## Part of
grounding

## Implementation status
clean

## Design notes
In Matt's authoring model, comprehension centers on concepts rather than surface vocabulary: an audience can fail to understand an ungrounded idea even when jargon is absent. A term is the explicit verbal label attached to a concept, and grounding a term requires introducing both the underlying intuition and the label simultaneously to prevent cognitive disconnect.
