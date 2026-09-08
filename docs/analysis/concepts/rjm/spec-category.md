---
package: rjm
name: spec category
slug: spec-category
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_spec_id_uniqueness.py, sha256: 3423d17958f2be14d7d061d2172e3818165520ca8603b9374b446c32c95b36fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# spec category

## Definition — verbatim
> "Verify spec `id:` frontmatter values are unique within each spec category." — scripts/validation/check_spec_id_uniqueness.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_spec_id_uniqueness.py | 2 | defined here | Classification partition dividing specs into requirements, design, and tasks. |

## Consumes
Specification markdown documents placed in `.agents/specs/`.

## Produces
Categorized specification directory partitions (`requirements`, `design`, `tasks`) with scoped ID namespaces.

## When applied
During the spec phase when generating or validating requirements, architecture designs, or execution tasks.

## Sub-concepts
categories, id-re, read-id

## Part of
spec-graph-tooling

## Implementation status
defects: doc-drift

## Design notes
Spec categories (`requirements`, `design`, `tasks`) partition rjm's specification artifacts under `.agents/specs/`. Each category maintains its own distinct schema, ID prefix convention, and traceability graph node type, ensuring that user requirements, technical architecture designs, and implementation task breakdowns remain clearly demarcated while linking to each other.
