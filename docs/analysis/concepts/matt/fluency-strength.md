---
package: matt
name: Fluency strength
slug: fluency-strength
kind: technique
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

# Fluency strength

## Definition — verbatim
> "in-the-moment retrieval of knowledge" — skills/productivity/teach/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 38 | defines | Defines fluency strength as immediate, in-the-moment knowledge retrieval that can create illusory mastery. |

## Consumes
Immediate instructional context and short-term working memory.

## Produces
Rapid short-term recall during active exercises.

## When applied
Observed during initial instruction, but cautioned against as a false signal of permanent learning.

## Sub-concepts
none

## Part of
fluency-vs-storage-strength

## Implementation status
defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step)

## Design notes
A psychological concept defining how easily a learner can access information in the immediate moment. In Matt's teaching design, high fluency strength is explicitly identified as an unreliable indicator of true competence that often masks rapid forgetting once the prompt or session ends.
