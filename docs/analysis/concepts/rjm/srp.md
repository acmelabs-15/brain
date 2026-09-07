---
package: rjm
name: SRP
slug: srp
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SRP

## Definition — verbatim
> "A class should have one reason to change" — .claude/skills/quality-grades/references/solid-principles.md:15

## Also called — verbatim
"Single Responsibility" — .claude/skills/quality-grades/references/solid-principles.md:15

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 83 | defined here | Listed as a related principle requiring an object to be responsible for its own behavior. |
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 41 | used here | Cited in refactoring examples where classes are split so each has a single responsibility. |
| .claude/skills/quality-grades/references/solid-principles.md | 15 | defined here | Defined in the SOLID table as the rule that a class should have one reason to change. |

## Consumes
Class definitions, module responsibilities, change drivers.

## Produces
Cohesive classes and modules with single well-defined axes of modification.

## When applied
Applied during architecture planning, code decomposition, and quality review.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
The Single Responsibility Principle (SRP) in rjm enforces that every module, class, or agent has a single cohesive axis of change. It serves as both a design guideline during feature authoring and an evaluation heuristic during code quality analysis.
