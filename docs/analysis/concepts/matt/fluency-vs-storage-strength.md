---
package: matt
name: Fluency vs Storage Strength
slug: fluency-vs-storage-strength
kind: pattern
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

# Fluency vs Storage Strength

## Definition — verbatim
> "Fluency can give the user an illusory sense of mastery, but storage strength is the real goal. Try to design lessons which build long-term retention by desirable difficulty:" — skills/productivity/teach/SKILL.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 34 | defines | Section heading and framework distinguishing transient retrieval ease from durable retention. |

## Consumes
Pedagogical lesson design and interactive exercise structures.

## Produces
Instructional strategies integrating retrieval practice, spacing, and interleaving to optimize long-term retention.

## When applied
Applied when designing lessons and exercises to ensure long-term retention rather than superficial familiarity.

## Sub-concepts
fluency-strength, storage-strength, desirable-difficulty, retrieval-practice, spacing, interleaving

## Part of
teach

## Implementation status
defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step)

## Design notes
A cognitive psychology framework (originating from Robert and Elizabeth Bjork) adapted into Matt's teaching methodology to distinguish immediate recall from durable retention. It warns that fluent, effortless performance during a lesson creates an illusion of mastery, instructing the agent to deliberately inject desirable difficulties so knowledge persists in long-term memory.
