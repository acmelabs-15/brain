---
package: matt
name: Prerequisite
slug: prerequisite
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-beats/SKILL.md, sha256: a96abafa2372eede8267d770138b322d6125da8adaa7ccf0a5e08e4ee13ee71e}
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prerequisite

## Definition — verbatim
> "- **Prerequisite**: grounded before the first beat. The audience brings it. Fixed at the start." — skills/in-progress/writing-beats/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 31 | defined here | Defined as audience knowledge grounded prior to the first beat and fixed at the start. |
| skills/in-progress/writing-shape/SKILL.md | 34 | defined here | Defined as knowledge the reader brings walking in, grounded prior to drafting the article opening. |

## Consumes
Author agreement on audience baseline knowledge prior to generating beats or paragraphs.

## Produces
The initial grounded concept set used to validate candidate starting beats or article openings.

## When applied
At the outset of writing-beats (Step 1) and writing-shape (Step 2), before drafting candidate openings.

## Sub-concepts
none

## Part of
grounding

## Implementation status
clean

## Design notes
Prerequisites delimit what the audience is expected to know before reading an article. Settling prerequisites up front strikes a careful balance: assuming too much knowledge excludes readers who lack context, while grounding too much internally bogs down the narrative opening in definitions.
