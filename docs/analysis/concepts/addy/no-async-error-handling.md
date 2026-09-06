---
package: addy
name: No async error handling
slug: no-async-error-handling
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

# No async error handling

## Definition — verbatim
> "| No async error handling | Swallowed errors, false passes | Always `await` async tests |" — references/testing-patterns.md:235

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 235 | defined here | Defined in test anti-patterns table as causing swallowed errors and false test passes |

## Consumes
Asynchronous test functions, promises, and unhandled rejections.

## Produces
False-positive test runs where unhandled rejected promises finish after the test runner completes, masking critical runtime errors.

## When applied
When writing or reviewing asynchronous tests involving async/await or promise chains.

## Sub-concepts
none

## Part of
test-anti-patterns

## Implementation status
clean

## Design notes
No async error handling is an anti-pattern where asynchronous operations within test blocks are not awaited or caught, causing promise rejections to be swallowed or thrown outside the test runner's execution context. Addy's testing patterns require developers to always await asynchronous tests (`await expect(asyncFn()).resolves/rejects`) to prevent silent false passes.
