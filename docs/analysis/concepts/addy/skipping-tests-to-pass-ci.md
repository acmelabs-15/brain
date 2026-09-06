---
package: addy
name: Skipping tests to pass CI
slug: skipping-tests-to-pass-ci
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

# Skipping tests to pass CI

## Definition — verbatim
> "| Skipping tests to pass CI | Hides real bugs | Fix or delete the test |" — references/testing-patterns.md:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 232 | defined here | Defined in test anti-patterns table as an evasive practice hiding underlying product bugs |

## Consumes
Failing test suites, continuous integration pipeline runs, and build failures.

## Produces
False-green CI builds that conceal regressions by bypassing failing test assertions.

## When applied
When reviewing commits or pull requests that introduce skipped tests to force CI pipelines to pass.

## Sub-concepts
test-skip

## Part of
test-anti-patterns

## Implementation status
clean

## Design notes
Skipping tests to pass CI is an evasion anti-pattern where broken tests are silenced with skip directives to satisfy automated pipeline gates. Addy's testing patterns reject this practice because it degrades test suite coverage and masks genuine bugs, requiring teams to either genuinely fix the defect or deliberately remove the obsolete test.
