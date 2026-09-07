---
package: matt
name: Seam discipline
slug: seam-discipline
kind: pattern
package_phase: matt:design
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Seam discipline

## Definition — verbatim
> "## Seam discipline" — skills/engineering/codebase-design/DEEPENING.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/DEEPENING.md | 27 | defined here | Section heading and design rules prohibiting single-adapter speculative seams and distinguishing internal from external seams. |

## Consumes
Proposed module interfaces and adapter implementations.

## Produces
Disciplined architectural boundaries without speculative single-adapter indirections.

## When applied
When introducing new interfaces or ports during module deepening or refactoring.

## Sub-concepts
external-seams

## Part of
codebase-design

## Implementation status
clean

## Design notes
A foundational architectural rule in codebase design stating: "One adapter means a hypothetical seam. Two adapters means a real one." It prevents premature abstraction and indirection by forbidding ports unless at least two distinct adapters (such as production and in-memory test) are concretely justified.
