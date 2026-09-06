---
package: addy
name: Testing third-party code
slug: testing-third-party-code
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

# Testing third-party code

## Definition — verbatim
> "| Testing third-party code | Wastes time, not your bug | Mock the boundary |" — references/testing-patterns.md:231

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 231 | defined here | Defined in test anti-patterns table as an inefficient practice of verifying external package internals |

## Consumes
Third-party libraries, external SDKs, and npm dependencies.

## Produces
Wasted testing effort and slow test suites testing vendor implementation details rather than application integration boundaries.

## When applied
When reviewing test suites to ensure tests verify internal application contracts rather than third-party library behavior.

## Sub-concepts
none

## Part of
test-anti-patterns

## Implementation status
clean

## Design notes
Testing third-party code is an anti-pattern where developers write tests that verify the internal correctness of external dependencies rather than their own application logic. Addy's testing doctrine directs developers to trust vendor packages and mock external boundaries, reserving test effort exclusively for application behavior and integration contracts.
