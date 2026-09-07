---
package: matt
name: Routine upkeep
slug: routine-upkeep
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

# Routine upkeep

## Definition — verbatim
> "Run it every few days, or whenever a spare moment appears, to stop structure rotting between features." — external/improve-codebase-architecture.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/improve-codebase-architecture.md | 31 | used here | Named as an operating situation for running architectural surveys to prevent structural rot between feature builds. |

## Consumes
A codebase between active feature delivery cycles.

## Produces
Visual HTML architecture report surfacing high-leverage deepening candidates.

## When applied
"Run it every few days, or whenever a spare moment appears, to stop structure rotting between features." — external/improve-codebase-architecture.md:31

## Sub-concepts
none

## Part of
improve-codebase-architecture

## Implementation status
defects: doc-drift (external/improve-codebase-architecture.md:64), doc-drift (external/improve-codebase-architecture.md:50), missing-path (external/improve-codebase-architecture.md:66), orphan (external/improve-codebase-architecture.md:1)

## Design notes
Periodic maintenance rhythm executed between feature additions to survey architectural health and prevent complexity from accumulating unnoticed behind shallow interfaces.
