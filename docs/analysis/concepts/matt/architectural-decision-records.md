---
package: matt
name: architectural decision records
slug: architectural-decision-records
kind: reference
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

# architectural decision records

## Definition — verbatim
(used, not defined)

> "These are loosely equivalent to architectural decision records in software development - they capture non-obvious lessons and key insights that may need to be revised later, or drive future sessions." — skills/productivity/teach/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 17 | used here | Software engineering practice cited as the design analogy for teaching workspace learning records. |

## Consumes
none

## Produces
none

## When applied
Referenced when introducing the structure, purpose, and immutability rules of learning records.

## Sub-concepts
none

## Part of
teach

## Implementation status
defects: doc-drift, other (teach/SKILL.md omits link to GLOSSARY-FORMAT.md; lacks initial knowledge assessment step)

## Design notes
An established software engineering documentation convention cited in teach/SKILL.md as the primary conceptual foundation for learning records. By comparing pedagogical records to ADRs, the package justifies capturing decisions and insights in an immutable, numbered format that preserves the evolution of understanding over time.
