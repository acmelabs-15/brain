---
package: rjm
name: DIP
slug: dip
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DIP

## Definition — verbatim
> "Depend on abstractions, not concretions" — .claude/skills/quality-grades/references/solid-principles.md:19

## Also called — verbatim
> "Dependency Inversion (DIP)" — .claude/skills/quality-grades/references/solid-principles.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 19 | defined here | Acronym entry defining Dependency Inversion as depending on abstractions rather than concretions. |

## Consumes
High-level module policies, low-level service implementations, interface contracts.

## Produces
Decoupled module architectures where high-level policies depend on abstractions rather than volatile concretions.

## When applied
During module architecture design, dependency injection configuration, and interface decoupling.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
Acronym for Dependency Inversion Principle in rjm enforcing that high-level modules depend on abstractions rather than low-level details, enabling swappable implementations and isolated testing.
