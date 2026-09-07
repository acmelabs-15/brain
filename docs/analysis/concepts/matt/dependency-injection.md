---
package: matt
name: dependency injection
slug: dependency-injection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/mocking.md, sha256: 3ceb807fdf4a47d6a93d4d9a891e5ba6d362a6247bd08adc451feebfc17361ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dependency injection

## Definition — verbatim
> "Pass external dependencies in rather than creating them internally:" — skills/engineering/tdd/mocking.md:22

## Also called — verbatim
> "**1. Use dependency injection**" — skills/engineering/tdd/mocking.md:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/mocking.md | 20 | defined here | Prescribed as the primary design technique for making system boundaries easily mockable. |

## Consumes
External dependencies at system boundaries.

## Produces
Mockable component interfaces that receive clients as parameters rather than instantiating them internally.

## When applied
When designing modules or functions that interact with external services, databases, or I/O boundaries.

## Sub-concepts
none

## Part of
tdd, mocking

## Implementation status
clean

## Design notes
Dependency injection is prescribed as the foundational architectural technique to enable testability without test-specific hacks. By accepting external boundary dependencies (such as payment clients or HTTP clients) as parameters rather than instantiating them inside functions or classes, code can be verified in tests using lightweight fakes or mocks without modifying production source code.
