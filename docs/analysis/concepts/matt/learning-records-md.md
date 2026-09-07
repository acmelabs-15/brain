---
package: matt
name: ./learning-records/*.md
slug: learning-records-md
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

# ./learning-records/*.md

## Definition — verbatim
> "A directory of learning records, which capture what the user has learned. These are loosely equivalent to architectural decision records in software development - they capture non-obvious lessons and key insights that may need to be revised later, or drive future sessions." — skills/productivity/teach/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 17 | defines | Defines the directory path and file naming pattern for sequentially numbered learning records. |

## Consumes
Demonstrated learner insights, prior knowledge claims, or corrected misconceptions.

## Produces
Sequentially numbered markdown records in `./learning-records/0001-<dash-case-name>.md`.

## When applied
Written whenever the user demonstrates genuine understanding of non-trivial material or prior knowledge is established.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step)

## Design notes
The directory and file naming pattern for persistent, numbered learning records in a teaching workspace. Inspired by ADRs, this immutable directory structure preserves learner progression, enabling subsequent sessions to compute the learner's zone of proximal development.
