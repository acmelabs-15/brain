---
package: addy
name: anti-patterns
slug: anti-patterns
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

# anti-patterns

## Definition — verbatim
(used, not defined)
> "The principles (Arrange-Act-Assert, naming, mock discipline, anti-patterns) apply in any ecosystem; the syntax and tooling shown here are JS/TS-specific." — references/testing-patterns.md:3

## Also called — verbatim
> "## Test Anti-Patterns" — references/testing-patterns.md:224

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 3 | used here | Identified as a core concept whose universal principles apply across testing stacks |

## Consumes
Test suites, assertion logic, mock usage, and asynchronous test code.

## Produces
Identification and remediation of flawed testing practices that hide bugs or cause false positives.

## When applied
During test authoring and code review to evaluate test quality and avoid fragile or misleading tests.

## Sub-concepts
testing-implementation-details, snapshot-everything, shared-mutable-state, testing-third-party-code, skipping-tests-to-pass-ci, overly-broad-assertions, no-async-error-handling

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Anti-patterns in Addy's testing doctrine encompass common but detrimental testing habits—such as asserting implementation details, uncritical snapshot usage, shared mutable state, or permanent test skips—that introduce flakiness, mask regressions, and impede refactoring. Cataloging them ensures agents and developers recognize and correct defective testing approaches early.
