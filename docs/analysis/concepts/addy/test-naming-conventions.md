---
package: addy
name: Test Naming Conventions
slug: test-naming-conventions
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

# Test Naming Conventions

## Definition — verbatim
> "## Test Naming Conventions" — references/testing-patterns.md:33

## Also called — verbatim
> "// Pattern: [unit] [expected behavior] [condition]" — references/testing-patterns.md:36

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 33 | defined here | Section heading defining semantic test block naming using the unit/expected behavior/condition pattern |

## Consumes
Specification of unit under test, expected behavior outcome, and trigger condition or input context.

## Produces
Clear, descriptive test names in test runners that communicate exact specifications and failure reasons.

## When applied
When authoring describe and it/test blocks in test suites.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Test Naming Conventions enforce semantic clarity across test suites using the `[unit] [expected behavior] [condition]` pattern (e.g. `TaskService.createTask creates a task with default pending status`). Descriptive naming ensures test reports function as living specifications and allow developers to identify the root cause of a regression immediately upon test failure.
