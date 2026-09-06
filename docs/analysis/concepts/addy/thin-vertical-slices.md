---
package: addy
name: thin vertical slices
slug: thin-vertical-slices
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/api-and-interface-design.md, sha256: e0b1c21384476da81f8d4862e654ce82ada2a86d0a294a42d928e932dcdf7b8b}
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# thin vertical slices

## Definition — verbatim
(used, not defined)
> "Thin vertical slices - implement, test, verify, commit. Rollback-friendly changes." — external/api-and-interface-design.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/api-and-interface-design.md | 12 | used here | Summarizes the incremental implementation workflow in the Build phase. |
| external/context-engineering.md | 12 | used here | Summarizes the incremental implementation workflow in the Build phase. |

## Consumes
Decomposed tasks with acceptance criteria.

## Produces
Small, tested, committed end-to-end functionality increments.

## When applied
During the Build phase when implementing changes touching multiple files.

## Sub-concepts
none

## Part of
build-phase

## Implementation status
defects: doc-drift

## Design notes
The foundational implementation technique in addy: building end-to-end functionality in minimal, individually tested and committed vertical slices to enable fast verification and easy rollback.
