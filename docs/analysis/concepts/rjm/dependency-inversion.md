---
package: rjm
name: Dependency Inversion
slug: dependency-inversion
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dependency Inversion

## Definition — verbatim
> "| Dependency Inversion (DIP) | Depend on abstractions, not concretions |" — .claude/skills/quality-grades/references/solid-principles.md:19

## Also called — verbatim
`DIP` — .claude/skills/quality-grades/references/solid-principles.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 183 | defined here | Refactoring pattern inverting dependencies to make volatile external dependencies injectable. |
| .claude/skills/quality-grades/references/solid-principles.md | 19 | defined here | Defined as the fifth SOLID principle mandating that high-level modules depend on abstractions rather than low-level concretions. |

## Consumes
Direct imports or calls from high-level policy modules into low-level infrastructure modules.

## Produces
Interface or protocol abstractions separating high-level business rules from low-level execution details.

## When applied
Applied during object-oriented design, architectural reviews, and quality grading to decouple modules from concretions.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
Dependency Inversion dictates that high-level modules should never depend directly on low-level concretions; both should depend on abstractions. In rjm, DIP provides a fundamental rubric for grading software quality and serves as the primary remediation strategy for decoupling business logic from external side effects.
