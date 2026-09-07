---
package: rjm
name: Tests respect direction
slug: tests-respect-direction
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tests respect direction

## Definition — verbatim
> "- **Tests respect direction**: a test that needs to fake the database does so by substituting an adapter implementation, not by patching a use case to skip a step." — .claude/skills/software-engineering-library/references/clean-architecture.md:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 124 | defined here | Boundary protection rule requiring tests to substitute adapter implementations rather than monkeypatching use cases. |

## Consumes
Test suites and mock/fake adapter implementations.

## Produces
Robust, refactor-resilient automated tests that verify architectural boundaries.

## When applied
Applied when writing automated unit and integration tests for use cases and domain models.

## Sub-concepts
none

## Part of
boundary-protection

## Implementation status
clean

## Design notes
Tests respect direction mandates that test fakes must substitute adapter implementations at defined architectural ports rather than monkeypatching internal use case methods. In rjm, this ensures tests validate realistic boundary interactions and do not conceal architectural leaks.
