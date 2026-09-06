---
package: matt
name: Tautological tests
slug: tautological-tests
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: skills/engineering/tdd/tests.md, sha256: 859f9e592c188fda4fc7277dd180e4ce9c7a2e13f6efe1f6f29eccc9d28c106a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Tautological tests

## Definition — verbatim
> "**Tautological tests**: Expected value restates the implementation, so the test passes by construction." — skills/engineering/tdd/tests.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 211 | defined here | Records introduction of tautological test anti-pattern in TDD philosophy, checklist, and examples. |
| skills/engineering/tdd/tests.md | 63 | defined here | Defines tautological tests as tests whose expected value restates the implementation. |

## Consumes
Test assertions and expected values under test-driven development.

## Produces
Degraded test suites when committed; independent literal expected values when avoided.

## When applied
Evaluated during test assertion construction in TDD red-green cycles and code review gates.

## Sub-concepts
none

## Part of
tdd

## Implementation status
clean

## Design notes
A testing anti-pattern where an assertion recomputes its expected value using the same logic or functions as the code under test, guaranteeing that the test passes by construction while failing to provide any genuine verification confidence.
