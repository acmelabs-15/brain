---
package: rjm
name: The Five Qualities
slug: the-five-qualities
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# The Five Qualities

## Definition — verbatim
> "## The Five Qualities" — .claude/skills/golden-principles/references/design-code-qualities.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-code-qualities.md | 11 | defined here | Section heading introducing the foundational code qualities matrix: Cohesion, Coupling, Non-Redundancy, Encapsulation, and Testability. |

## Consumes
Software designs, class structures, routine implementations, and module boundaries.

## Produces
Architectural evaluation metrics, maintainable code structures, and targeted diagnostic questions for code reviews.

## When applied
Applied during design reviews, refactoring, and code quality audits to ensure code maintainability, debuggability, and adaptability.

## Sub-concepts
identity, representation, inheritance, subclass, intentional-coupling, accidental-coupling, testability-as-diagnostic, scope-of-redundancy

## Part of
cross-phase

## Implementation status
defects: missing-path

## Design notes
An architectural reference framework defining five foundational qualities (Cohesion, Coupling, Non-Redundancy, Encapsulation, Testability) that make code maintainable, debuggable, and adaptable. It establishes concrete trade-offs between qualities and links design friction directly to defect discoverability.
