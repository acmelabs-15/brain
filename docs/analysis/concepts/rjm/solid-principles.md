---
package: rjm
name: SOLID principles
slug: solid-principles
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/golden-principles/references/design-solid-principles.md, sha256: 5aa244c1fbe421aafa6b7abc0e8161e548ed359cc09d88985371d294cbfb9144}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SOLID principles

## Definition — verbatim
> "Five principles for object-oriented design that promote maintainability and flexibility." — .claude/skills/golden-principles/references/design-solid-principles.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 200 | used here | Listed under implementer agent core specializations. |
| .claude/skills/golden-principles/references/design-solid-principles.md | 7 | defined here | Document heading defining the five principles and their code quality mappings. |
| .claude/skills/golden-principles/SKILL.md | 131 | used here | Skill rule incorporating SOLID principles into code generation guidance. |
| .claude/skills/quality-grades/references/solid-principles.md | 7 | defined here | Reference guide defining SOLID principles for code quality evaluation. |
| docs/autonomous-issue-development.md | 369 | used here | Autonomous development process citing SOLID principles for implementation rigor. |

## Consumes
Object-oriented classes, module boundaries, architectural interfaces.

## Produces
Maintainable, loosely coupled, highly cohesive code designs adhering to SRP, OCP, LSP, ISP, and DIP.

## When applied
Applied by implementer and code review agents during software design, refactoring, and code quality evaluations.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path

## Design notes
Foundational object-oriented design principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) codified in rjm's golden principles reference library. They guide implementer agents in structuring code so that classes have single reasons to change, abstractions insulate systems from volatile concretions, and code quality remains resilient across iterations.
