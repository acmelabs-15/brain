---
package: matt
name: Introduced
slug: introduced
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

# Introduced

## Definition — verbatim
> "- **Introduced**: a beat establishes it, and from then on it's grounded for every later beat." — skills/in-progress/writing-beats/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 32 | defined here | Defined as a concept established by a beat that becomes grounded for all subsequent beats. |
| skills/in-progress/writing-shape/SKILL.md | 35 | defined here | Defined as a concept established by a text block that remains grounded for the rest of the article. |

## Consumes
An ungrounded concept required by an intended downstream narrative move.

## Produces
An addition to the running list of grounded concepts that unlocks future beats or blocks.

## When applied
When an article beat or block defines or explains a new concept or term in the text.

## Sub-concepts
none

## Part of
grounding

## Implementation status
clean

## Design notes
Introduced concepts are explicitly explained and landed within the article itself rather than assumed as audience prerequisites. Once an introduced concept is established by a beat or paragraph, it joins the running grounded set, allowing subsequent sections of the piece to build directly upon it without alienating the reader.
