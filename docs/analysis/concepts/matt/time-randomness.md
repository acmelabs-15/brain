---
package: matt
name: Time/randomness
slug: time-randomness
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

# Time/randomness

## Definition — verbatim
(used, not defined)
> "- Time/randomness" — skills/engineering/tdd/mocking.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/mocking.md | 7 | defined here | Listed as an approved system boundary where mocking or deterministic injection is required. |

## Consumes
none

## Produces
none

## When applied
When writing unit or integration tests for logic that depends on the system clock, timers, or non-deterministic random number generators.

## Sub-concepts
none

## Part of
mocking, system-boundaries

## Implementation status
clean

## Design notes
Time and randomness represent non-deterministic external inputs that violate test reproducibility if unmanaged. In Matt's mocking rules, they are classified as permissible system boundaries for mocking or dependency injection so tests remain fully deterministic, fast, and free of race conditions.
