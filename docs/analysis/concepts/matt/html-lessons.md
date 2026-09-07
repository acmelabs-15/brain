---
package: matt
name: HTML lessons
slug: html-lessons
kind: artifact
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/teach.md, sha256: 2ac7f1d694fdd744a5c5157477d5459e3d25876e0b65388d5441f934916b4970}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# HTML lessons

## Definition — verbatim
> "`teach` turns the directory you run it in into a standing teaching workspace and teaches you one topic across many [sessions](https://www.aihero.dev/ai-coding-dictionary/session), in short self-contained HTML lessons." — docs/productivity/teach.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/teach.md | 3 | defined here | Identifies self-contained HTML files as the delivery medium for incremental lessons. |

## Consumes
Curated knowledge from RESOURCES.md, formatted against the mission and learning history.

## Produces
Standalone HTML files in `./lessons/` featuring typography, interactive quizzes, and source citations.

## When applied
Authored by the teach skill as the primary incremental delivery vehicle for knowledge and skills.

## Sub-concepts
lessons

## Part of
standing-teaching-workspace

## Implementation status
defects: internal-contradiction (quiz answers consistently placed in slot A)

## Design notes
HTML lessons represent self-contained, aesthetically rich artifacts through which educational material is consumed. Authoring lessons as standalone HTML files rather than markdown allows rich styling, interactive testing gates, and direct local browser inspection, promoting durable retention.
