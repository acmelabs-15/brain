---
package: matt
name: Prose vs. list
slug: prose-vs-list
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Prose vs. list

## Definition — verbatim
> "- **Prose vs. list.** Prose carries argument; lists carry parallel items. If items aren't truly parallel, prose is better. If they are, a list is faster to scan." — skills/in-progress/writing-shape/SKILL.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-shape/SKILL.md | 63 | defined here | Format tradeoff guideline specifying when to render content as prose (for arguments) versus lists (for parallel scannable items). |

## Consumes
A proposed text block and its underlying logical relationship (continuous argument vs. parallel points).

## Produces
A deliberate formatting choice rendering the block either as narrative paragraphs or bulleted list items.

## When applied
During paragraph-by-paragraph block drafting in writing-shape.

## Sub-concepts
none

## Part of
format-arguments-to-actually-have

## Implementation status
clean

## Design notes
Prose vs. list governs the structural presentation of ideas based on argumentative flow. Prose is selected when ideas build sequentially and carry an argument, whereas lists are reserved strictly for parallel items to enable rapid scanning without sacrificing nuance.
