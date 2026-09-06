---
package: addy
name: Shared mutable state
slug: shared-mutable-state
kind: pattern
package_phase: addy:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Shared mutable state

## Definition — verbatim
> "| Shared mutable state | Tests pollute each other | Setup/teardown per test |" — references/testing-patterns.md:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 230 | defined here | Defined in test anti-patterns table as causing test pollution across test cases |

## Consumes
Global singletons, shared database connections, cached state, or module-level variables.

## Produces
Test pollution, non-deterministic execution order dependencies, and flakiness across test suites.

## When applied
When designing setup, execution, and teardown lifecycles across unit and integration tests.

## Sub-concepts
none

## Part of
test-anti-patterns

## Implementation status
clean

## Design notes
Shared mutable state is an anti-pattern where consecutive test cases read and write to the same shared environment, database, or module variables without isolation. This leads to inter-test pollution where a test's success depends on execution ordering; Addy's testing patterns require clean setup and teardown per test to ensure total test independence.
