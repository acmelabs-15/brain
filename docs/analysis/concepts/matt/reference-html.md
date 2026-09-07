---
package: matt
name: ./reference/*.html
slug: reference-html
kind: artifact
package_phase: matt:productivity
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

# ./reference/*.html

## Definition — verbatim
> "A directory of reference materials. These are the compressed learnings from the lessons - cheat sheets, reference algorithms, syntax, yoga poses, glossaries. They are the raw units of learning." — skills/productivity/teach/SKILL.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 15 | defines | Defines the reference artifact directory storing compressed standalone HTML reference sheets. |

## Consumes
Compressed learnings, syntax, algorithms, or glossaries extracted from lessons.

## Produces
Self-contained HTML documents in `./reference/` formatted for high readability and quick consultation.

## When applied
Created during or after lessons to capture reusable, high-density reference material.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step)

## Design notes
A directory of durable, beautifully styled HTML reference documents designed for long-term consultation. Unlike transient lesson modules which are completed and rarely revisited, reference documents serve as the permanent, compressed knowledge repository of the teaching workspace.
