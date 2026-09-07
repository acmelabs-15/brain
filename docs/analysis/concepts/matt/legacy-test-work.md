---
package: matt
name: Legacy test work
slug: legacy-test-work
kind: pattern
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Legacy test work

## Definition — verbatim
> "Use it to find the missing seams first, before writing tests against untestable code." — external/improve-codebase-architecture.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/improve-codebase-architecture.md | 31 | used here | Named as an operating situation for locating missing architectural seams before writing tests on legacy code. |

## Consumes
Untested or poorly modularized legacy code.

## Produces
Discovered architectural seams that can support robust, durable tests.

## When applied
"Use it to find the missing seams first, before writing tests against untestable code." — external/improve-codebase-architecture.md:31

## Sub-concepts
seams

## Part of
improve-codebase-architecture

## Implementation status
defects: doc-drift (external/improve-codebase-architecture.md:64), doc-drift (external/improve-codebase-architecture.md:50), missing-path (external/improve-codebase-architecture.md:66), orphan (external/improve-codebase-architecture.md:1)

## Design notes
A preparatory pattern for adding tests to legacy codebases. By identifying or establishing public architectural seams before writing tests, developers avoid coupling test assertions to internal implementation details that would break during subsequent refactoring.
