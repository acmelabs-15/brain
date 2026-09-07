---
package: rjm
name: Seam
slug: seam
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Seam

## Definition — verbatim
> "**Seam**: a place where you can alter behavior in your program without editing in that place. Common seams in this codebase are constructor parameters, function parameters, and module-level injection points." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 25 | defined here | Defined in core vocabulary as a place where program behavior can be altered without editing at that place. |

## Consumes
Tightly coupled components, constructor dependencies, and function parameters.

## Produces
Testable injection points, enabling points, and dependency-breaking opportunities.

## When applied
Identified or introduced prior to modifying legacy code to enable isolation and test collaborator substitution.

## Sub-concepts
- enabling-point

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
Originating from Michael Feathers' legacy code refactoring methodology, a seam provides an architectural junction point where behavior can be varied without modifying source code directly. In rjm, constructor parameters, function arguments, and module injection points serve as primary seams for testing legacy components.
