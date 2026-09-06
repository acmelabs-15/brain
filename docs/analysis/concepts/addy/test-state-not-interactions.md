---
package: addy
name: Test State, Not Interactions
slug: test-state-not-interactions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Test State, Not Interactions

## Definition — verbatim
> "Assert on the *outcome* of an operation, not on which methods were called internally. Tests that verify method call sequences break when you refactor, even if the behavior is unchanged." — skills/test-driven-development/SKILL.md:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/test-driven-development/SKILL.md | 190 | defined here | Principle mandating assertions on operation outcomes rather than internal method call sequences to keep tests refactoring-safe. |

## Consumes
Operation inputs, system state before execution.

## Produces
State-based assertions verifying observable outputs and data mutations rather than internal spy/mock calls.

## When applied
Applied when writing unit and integration tests across all features and bug fixes.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
A foundational test design pattern requiring tests to verify observable outputs and state transitions rather than implementation details such as call sequences or mock invocations, ensuring tests survive refactoring without false positives.
