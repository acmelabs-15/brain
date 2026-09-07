---
package: matt
name: SDK-style interfaces
slug: sdk-style-interfaces
kind: pattern
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

# SDK-style interfaces

## Definition — verbatim
> "Create specific functions for each external operation instead of one generic function with conditional logic:" — skills/engineering/tdd/mocking.md:39

## Also called — verbatim
> "**2. Prefer SDK-style interfaces over generic fetchers**" — skills/engineering/tdd/mocking.md:37

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/mocking.md | 37 | defined here | Recommended pattern for external service abstractions to ensure clean, isolated mocks without branch logic. |

## Consumes
External API boundaries.

## Produces
Fine-grained, independently mockable endpoint functions with single return shapes.

## When applied
When designing adapter boundaries for third-party services and APIs.

## Sub-concepts
none

## Part of
mocking, tdd

## Implementation status
clean

## Design notes
SDK-style interfaces decompose external API interactions into discrete, named functions (e.g., `getUser`, `createOrder`) instead of a single catch-all fetcher. In Matt's testing model, this pattern eliminates conditional branching inside test mocks, provides precise type safety per operation, and makes it immediately clear which endpoints a test exercises.
