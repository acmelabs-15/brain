---
package: addy
name: Test Anti-Patterns
slug: test-anti-patterns
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

# Test Anti-Patterns

## Definition — verbatim
> "## Test Anti-Patterns" — references/testing-patterns.md:224

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 224 | defined here | Section heading introducing the tabular catalog of common testing anti-patterns and remediation guidelines |

## Consumes
Test authoring practices, code review findings, and test execution reports.

## Produces
Clear diagnostic rules and remediation approaches replacing defective test patterns with robust, behavioral tests.

## When applied
When reviewing existing tests or authoring new test suites to avoid common failure modes.

## Sub-concepts
testing-implementation-details, snapshot-everything, shared-mutable-state, testing-third-party-code, skipping-tests-to-pass-ci, overly-broad-assertions, no-async-error-handling

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Test Anti-Patterns establishes a structured rubric contrasting flawed testing behaviors against their operational consequences and prescribed solutions. By addressing issues like testing internal implementation details, excessive snapshotting, state leakage, and silent async failures, it provides explicit criteria for code reviewers and agents to maintain high-signal test suites.
