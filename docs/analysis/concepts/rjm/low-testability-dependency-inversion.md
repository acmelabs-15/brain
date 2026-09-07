---
package: rjm
name: Low Testability → Dependency Inversion
slug: low-testability-dependency-inversion
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

# Low Testability → Dependency Inversion

## Definition — verbatim
> "## Low Testability → Dependency Inversion" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:183

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 183 | defined here | Remediation recipe inverting dependencies to make non-deterministic code testable, raising testability from 2/10 to 9/10. |

## Consumes
Non-deterministic classes directly invoking random number generators, system clocks (`datetime.now()`), or mutable global state.

## Produces
Deterministic classes consuming injected provider protocols (`RandomGenerator`, `TimeProvider`, `TaxRateProvider`).

## When applied
Applied when code quality assessment reveals poor testability (score ≤ 2/10) caused by hard-coded environmental dependencies.

## Sub-concepts
- dependency-inversion

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
Low Testability → Dependency Inversion resolves the common flaw where business logic directly accesses non-deterministic system state (such as system time or random generators). By defining clean protocols and injecting providers via constructors, calculations become 100% deterministic and mockable in tests, driving testability from 2/10 to 9/10.
