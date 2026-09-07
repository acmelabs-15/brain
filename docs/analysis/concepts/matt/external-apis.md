---
package: matt
name: External APIs
slug: external-apis
kind: pattern
package_phase: matt:tdd
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

# External APIs

## Definition — verbatim
(used, not defined)

> "External APIs (payment, email, etc.)" — skills/engineering/tdd/mocking.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/mocking.md | 5 | used here | Listed as an external system boundary where mocking is recommended during unit testing. |

## Consumes
Third-party network protocols, authentication credentials, and remote services.

## Produces
Mocked test doubles isolating unit tests from third-party network flakiness and cost.

## When applied
Applied when writing automated unit tests that interact with external services outside the application's control.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
External third-party web services and APIs outside the system boundary (such as payment processors or email dispatchers). In Matt's TDD philosophy, external APIs represent one of the few legitimate boundaries where mocking is explicitly recommended.
