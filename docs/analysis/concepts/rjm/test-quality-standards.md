---
package: rjm
name: Test Quality Standards
slug: test-quality-standards
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Test Quality Standards

## Definition — verbatim
> "- **Isolation**: Tests don't depend on each other" — .claude/agents/qa.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 138 | defined here | Defines foundational quality pillars for tests: isolation, repeatability, speed, clarity, and coverage. |
| templates/agents/qa.shared.md | 128 | defined here | Defines foundational quality pillars for tests: isolation, repeatability, speed, clarity, and coverage. |

## Consumes
Test suite code, execution results, coverage metrics.

## Produces
High-integrity test suites adhering to speed, isolation, and clarity standards.

## When applied
Referenced when authoring, reviewing, or refactoring automated tests.

## Sub-concepts
test-quality-criteria

## Part of
qa

## Implementation status
defects: missing-path, doc-drift

## Design notes
Test Quality Standards define the non-negotiable operational attributes of a test suite. By demanding isolation between tests, deterministic repeatability, execution speed, descriptive naming, and minimum 80% coverage on new code, they safeguard test suites against rot, flakiness, and developer abandonment.
