---
package: matt
name: Mock
slug: mock
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
  - {path: skills/engineering/tdd/mocking.md, sha256: 3ceb807fdf4a47d6a93d4d9a891e5ba6d362a6247bd08adc451feebfc17361ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mock

## Definition — verbatim
> "Mock at **system boundaries** only:" — skills/engineering/tdd/mocking.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/DEEPENING.md | 23 | defined here | Category heading for true external dependencies that require a mock adapter during testing. |
| skills/engineering/tdd/mocking.md | 3 | defined here | Core testing rule specifying that mocks must only be used at system boundaries (external APIs, time, random). |

## Consumes
A test dependency at a system boundary (external API, payment gateway, time).

## Produces
A controlled test double substituting for external services.

## When applied
Strictly at external system boundaries when true third-party dependencies cannot be run locally or deterministically in tests.

## Sub-concepts
none

## Part of
tdd, codebase-design

## Implementation status
clean

## Design notes
A test double technique strictly confined to external system boundaries (third-party APIs, time, external services). Matt Pocock's design philosophy firmly rejects mocking internal modules, classes, or database abstractions, mandating real implementations or in-process stand-ins instead to avoid brittle, tautological tests.
