---
package: matt
name: anti-patterns
slug: anti-patterns
kind: pattern
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# anti-patterns

## Definition — verbatim
> "The three anti-patterns it is written to prevent:" — external/tdd.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/tdd.md | 39 | defined here | Section heading introducing the three primary test degradation anti-patterns in the tdd skill. |

## Consumes
Test drafting decisions and mocking strategies.

## Produces
Rules identifying and rejecting brittle test implementations.

## When applied
During test creation and code review in the TDD loop.

## Sub-concepts
mocking-what-you-don-t-own, testing-implementation-details, tests-that-restate-the-code

## Part of
tdd

## Implementation status
defects: doc-drift, orphan

## Design notes
Anti-patterns in Matt's TDD methodology codify the primary failure modes that cause AI-generated test suites to become brittle and unmaintainable. By explicitly prohibiting mocking unowned third-party APIs, asserting against private implementation details, and writing tautological tests that mirror the code, the framework ensures tests remain resilient across internal refactorings.
