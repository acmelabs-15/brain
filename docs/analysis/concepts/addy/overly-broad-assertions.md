---
package: addy
name: Overly broad assertions
slug: overly-broad-assertions
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

# Overly broad assertions

## Definition — verbatim
> "| Overly broad assertions | Doesn't catch regressions | Be specific |" — references/testing-patterns.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 234 | defined here | Defined in test anti-patterns table as failing to catch regressions due to unspecific assertions |

## Consumes
Weak assertions such as checking truthiness (`toBeTruthy()`) or loose type existence without validating concrete return values.

## Produces
Permissive test suites that pass even when function results contain subtle behavioral regressions.

## When applied
When reviewing assertion specificity in unit and integration test assertions.

## Sub-concepts
none

## Part of
test-anti-patterns

## Implementation status
clean

## Design notes
Overly broad assertions is an anti-pattern where tests assert vague conditions (such as checking that an object is defined or that a response status is truthy) instead of asserting exact expected values. Addy's testing doctrine requires specific assertions (`toBe`, `toEqual`, `toMatchObject`) to guarantee that regressions in business logic immediately trigger test failures.
