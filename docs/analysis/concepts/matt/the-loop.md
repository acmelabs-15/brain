---
package: matt
name: The loop
slug: the-loop
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

# The loop

## Definition — verbatim
> "## The loop" — skills/in-progress/writing-shape/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-shape/SKILL.md | 19 | defined here | Section heading outlining the 6-step iterative process for shaping raw input into an article paragraph by paragraph. |

## Consumes
The input pile of raw material and collaborative author input.

## Produces
A completed article document assembled incrementally paragraph by paragraph.

## When applied
Governs the execution of writing-shape from reading the pile through final completion.

## Sub-concepts
none

## Part of
writing-shape

## Implementation status
clean

## Design notes
The loop defines the step-by-step authoring pattern of writing-shape: reading the input pile, establishing audience prerequisites, drafting candidate openings, growing the text block-by-block with intentional formatting choices, appending immediately to disk, and looping until the author concludes the work.
