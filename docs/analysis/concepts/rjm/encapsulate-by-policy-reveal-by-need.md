---
package: rjm
name: Encapsulate by Policy/Reveal by Need
slug: encapsulate-by-policy-reveal-by-need
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Encapsulate by Policy/Reveal by Need

## Definition — verbatim
> "Principle: **Encapsulate by policy, reveal by need.** What you hide, you can change." — .claude/skills/quality-grades/references/code-qualities.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 171 | defined here | Level 2 design principle in the Software Hierarchy of Needs. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 46 | defined here | Golden principles guide formulating the core encapsulation doctrine. |
| .claude/skills/quality-grades/references/code-qualities.md | 49 | defined here | Code qualities rubric stating that hidden elements can be changed freely. |

## Consumes
Class members, visibility modifiers, internal helper methods, and data structures.

## Produces
Default-private access policies exposing public members only upon demonstrated caller necessity.

## When applied
Applied as the default visibility rule during the authoring of all new classes, methods, and variables.

## Sub-concepts
state-always-private

## Part of
encapsulation, software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
A foundational RJM design maxim stating that all implementation details should remain strictly private by default, revealing public surfaces only when an external caller demonstrates a concrete requirement. It reflects the truth that breaking encapsulation later is easy, whereas retracting public exposure is a breaking change.
