---
package: addy
name: Unit tests
slug: unit-tests
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/launch-status.md, sha256: da89bcc77b0b92c56452db2138e9518ac46af79ee74f65ec4b4f4885cd49d6e6}
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Unit tests

## Definition — verbatim
> "│   UNIT TESTS     │  jest/vitest" — skills/ci-cd-and-automation/SKILL.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/shipping-and-launch/launch-status.md | 3 | references | Listed as passing ("green") in the pre-launch readiness status checklist |
| skills/ci-cd-and-automation/SKILL.md | 37 | defines | Third gate in the automated CI pipeline running tests with runners like Jest or Vitest |

## Consumes
Component source code, mock implementations, and co-located unit test suites

## Produces
Pass/fail verification verdict and coverage reports confirming individual unit behavior

## When applied
Run locally during test-driven development and automatically on every pull request and push in the CI pipeline

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Automated test suite verifying the behavior of isolated units of code; in Addy's engineering practices, unit tests serve as an upstream automated gate that must remain green through CI and pre-launch evaluations.
