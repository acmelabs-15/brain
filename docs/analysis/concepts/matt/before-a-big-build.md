---
package: matt
name: Before a big build
slug: before-a-big-build
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

# Before a big build

## Definition — verbatim
> "&quot;how can we make this change easy?&quot; This is the most effective prompt for it." — external/improve-codebase-architecture.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/improve-codebase-architecture.md | 31 | used here | Named as an operating situation for surveying architecture before embarking on a major feature build. |

## Consumes
A feature specification or plan for upcoming major changes.

## Produces
Architectural refactoring proposals that simplify the target code areas before implementing new features.

## When applied
"Where a big build is coming up, point it at the spec and ask &quot;how can we make this change easy?&quot;" — external/improve-codebase-architecture.md:56

## Sub-concepts
spec

## Part of
improve-codebase-architecture

## Implementation status
defects: doc-drift (external/improve-codebase-architecture.md:64), doc-drift (external/improve-codebase-architecture.md:50), missing-path (external/improve-codebase-architecture.md:66), orphan (external/improve-codebase-architecture.md:1)

## Design notes
A preparatory architecture review practice conducted before large-scale feature implementation. Pointing an architectural survey at an upcoming spec identifies structural friction and deepens modules in advance, making subsequent feature development easier and cleaner.
