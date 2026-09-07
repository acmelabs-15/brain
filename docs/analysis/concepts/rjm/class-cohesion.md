---
package: rjm
name: Class cohesion
slug: class-cohesion
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Class cohesion

## Definition — verbatim
> "Class cohesion: single responsibility via Commonality Variability Analysis." — .claude/skills/quality-grades/references/code-qualities.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/code-qualities.md | 23 | defined here | Defined as establishing single responsibility across classes through Commonality Variability Analysis. |

## Consumes
Class definitions, domain entities, Commonality Variability Analysis matrices.

## Produces
High class cohesion with clearly bounded responsibilities and encapsulated variations.

## When applied
Applied during object-oriented domain modeling, class design, and domain quality grading.

## Sub-concepts
none

## Part of
code-qualities

## Implementation status
defects: missing-path

## Design notes
An architectural design technique and assessment criterion in rjm requiring every class to maintain high cohesion by mapping directly to a single responsibility derived through Commonality Variability Analysis.
