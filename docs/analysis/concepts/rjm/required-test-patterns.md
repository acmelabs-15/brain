---
package: rjm
name: Required Test Patterns
slug: required-test-patterns
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

# Required Test Patterns

## Definition — verbatim
> "Tests must demonstrate these characteristics." — .claude/agents/qa.md:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 164 | defined here | Provides standard patterns and examples for function execution, mock isolation, output validation, and error testing. |
| templates/agents/qa.shared.md | 154 | defined here | Provides standard patterns and examples for function execution, mock isolation, output validation, and error testing. |

## Consumes
Code under test, interfaces, error definitions, edge case ranges.

## Produces
Compliant, runnable test cases demonstrating isolation, negative testing, and output validation.

## When applied
Consulted when authoring new unit or integration tests to ensure compliance.

## Sub-concepts
none

## Part of
test-quality-criteria

## Implementation status
defects: missing-path, doc-drift

## Design notes
Required Test Patterns provide reference implementations for compliant testing. By modeling function execution, dependency mocking, return value validation, exception assertion, and boundary condition coverage, they offer concrete blueprints for writing durable tests that genuinely probe behavior.
