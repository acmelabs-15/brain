---
package: matt
name: Table vs. repeated structure
slug: table-vs-repeated-structure
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

# Table vs. repeated structure

## Definition — verbatim
> "- **Table vs. repeated structure.** If the same shape repeats 3+ times with the same fields, a table. Otherwise prose with bold leads." — skills/in-progress/writing-shape/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-shape/SKILL.md | 65 | defined here | Format tradeoff guideline establishing a 3+ repetition rule for using tables versus prose with bold lead-ins. |

## Consumes
Structured data or concepts with recurring fields appearing in the narrative.

## Produces
A deliberate formatting choice rendering structured comparisons as a markdown table or as narrative prose with bold headings.

## When applied
When presenting multi-field items or comparisons in writing-shape.

## Sub-concepts
none

## Part of
format-arguments-to-actually-have

## Implementation status
clean

## Design notes
Table vs. repeated structure establishes a quantitative threshold for tabular presentation: if structured data repeats across identical fields three or more times, a table is employed for clear matrix comparison; otherwise, narrative prose with bold leads is preferred.
