---
package: rjm
name: Dependency Injection
slug: dependency-injection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dependency Injection

## Definition — verbatim
> "## High Coupling → Dependency Injection" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 75 | defined here | Structural design pattern supplying dependencies from external callers via constructor injection. |

## Consumes
External service abstractions, data sources, or configuration clients required by a class.

## Produces
Inversion-of-control architectures where classes receive dependencies explicitly through constructors or parameter lists.

## When applied
Applied when designing or refactoring classes to eliminate direct coupling to concrete infrastructure implementations.

## Sub-concepts
none

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
Dependency Injection is the core technique for decoupling software modules. By passing dependencies into classes rather than allowing classes to construct them internally, it isolates business logic from infrastructure details and enables seamless substitution of test mocks.
