---
package: matt
name: Reference Documents
slug: reference-documents
kind: artifact
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reference Documents

## Definition — verbatim
> "Lessons will rarely be revisited later - reference documents will be. They should be the compressed essence of the lesson, in a format designed for quick reference." — skills/productivity/teach/SKILL.md:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 122 | defined here | Section heading outlining compressed companion documents stored under ./reference/ for long-term retrieval. |

## Consumes
Raw knowledge, syntax, algorithms, or definitions distilled from completed lessons.

## Produces
Compressed markdown or HTML reference sheets in `./reference/*.html`.

## When applied
Created alongside lessons whenever topic material (syntax, flowcharts, glossaries) has long-term retrieval utility.

## Sub-concepts
glossaries

## Part of
teach

## Implementation status
defects: doc-drift, other

## Design notes
Separates ephemeral instructional scaffolding from durable reference knowledge. Recognizing that instructional lessons (quizzes, walkthroughs) are rarely re-read once mastered, the system captures reusable facts and patterns into dense, durable reference documents for rapid post-learning retrieval.
