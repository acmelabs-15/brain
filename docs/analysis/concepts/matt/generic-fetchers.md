---
package: matt
name: generic fetchers
slug: generic-fetchers
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

# generic fetchers

## Definition — verbatim
(used, not defined)
> "**2. Prefer SDK-style interfaces over generic fetchers**" — skills/engineering/tdd/mocking.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/mocking.md | 37 | defined here | Contrasted as an anti-pattern against SDK-style interfaces due to conditional complexity in mocks. |

## Consumes
none

## Produces
Complex, branching test mocks that degrade maintainability.

## When applied
Identified during boundary interface design as an anti-pattern to avoid when abstracting HTTP or external service calls.

## Sub-concepts
none

## Part of
mocking, bad-tests

## Implementation status
clean

## Design notes
Generic fetchers are monolithic abstraction functions (e.g. `fetch(endpoint, options)`) that route multiple remote operations through a single interface. Matt flags generic fetchers as a testing anti-pattern because mocking them requires complex conditional logic inside test setups to differentiate between request URLs and HTTP verbs, obscuring test intent and forfeiting endpoint-specific typing.
