---
package: matt
name: Implementation-detail tests
slug: implementation-detail-tests
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/tests.md, sha256: 859f9e592c188fda4fc7277dd180e4ce9c7a2e13f6efe1f6f29eccc9d28c106a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Implementation-detail tests

## Definition — verbatim
> "**Implementation-detail tests**: Coupled to internal structure." — skills/engineering/tdd/tests.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/tests.md | 27 | defined here | Defines the anti-pattern of tests coupled to internal implementation details rather than behavior. |

## Consumes
Internal methods, private classes, or call spy assertions.

## Produces
Brittle tests that fail upon refactoring despite unchanged external behavior.

## When applied
Evaluated as a negative check during test authoring and code review gates.

## Sub-concepts
private-methods, call-counts-order

## Part of
bad-tests

## Implementation status
clean

## Design notes
A major testing anti-pattern in Matt's lifecycle where tests assert on internal structure (e.g. verifying that a private method was invoked or that an internal service method was called). Such tests fail as soon as the code is refactored, creating high maintenance friction while providing zero assurance of actual feature behavior.
