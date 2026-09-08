---
package: rjm
name: spec-graph tooling
slug: spec-graph-tooling
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

# spec-graph tooling

## Definition — verbatim
(used, not defined)

> "future spec-graph tooling that joins by ID. README files under each spec" — scripts/validation/check_spec_id_uniqueness.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_spec_id_uniqueness.py | 9 | used here | Automated tooling that joins specification requirements, designs, and tasks by ID. |

## Consumes
Unique `id:` frontmatter attributes across requirements, design, and task specification artifacts.

## Produces
Traceability matrices and connected requirement-to-task dependency graphs.

## When applied
Applied when traversing or querying links between user requirements, architecture designs, and implementation tasks.

## Sub-concepts
spec-category, id-re

## Part of
spec-traceability

## Implementation status
defects: doc-drift

## Design notes
Spec-graph tooling encompasses automated analyzers and linters that join specification artifacts across `requirements/`, `design/`, and `tasks/` using frontmatter `id:` keys. Duplicate IDs break graph construction and corrupt traceability analysis.
