---
package: rjm
name: High Coupling → Dependency Injection
slug: high-coupling-dependency-injection
kind: pattern
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

# High Coupling → Dependency Injection

## Definition — verbatim
> "## High Coupling → Dependency Injection" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 75 | defined here | Remediation recipe replacing hard-coded concrete dependencies with injected protocol abstractions. |

## Consumes
Classes directly instantiating external concrete services (e.g. third-party SDKs, email dispatchers, database clients).

## Produces
Decoupled components accepting protocol abstractions via constructor parameters, raising coupling to 9/10 and testability to 10/10.

## When applied
Applied when code assessment identifies severe coupling (score ≤ 3/10) caused by hard-coded dependencies.

## Sub-concepts
- dependency-injection

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
High Coupling → Dependency Injection connects tight architectural coupling directly to inversion of control. By converting internal instantiation of third-party or infrastructure classes into constructor-injected interface protocols, coupling score jumps from 3/10 to 9/10 while testability reaches 10/10 via lightweight test doubles.
