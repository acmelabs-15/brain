---
package: rjm
name: Test Quality Criteria
slug: test-quality-criteria
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

# Test Quality Criteria

## Definition — verbatim
> "Tests must verify actual behavior, not code structure." — .claude/agents/qa.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 146 | defined here | Establishes the requirement that tests execute code and assert behavioral outputs rather than syntax. |
| templates/agents/qa.shared.md | 136 | defined here | Establishes the requirement that tests execute code and assert behavioral outputs rather than syntax. |

## Consumes
Test code implementations, test execution profiles.

## Produces
Behavioral test validations that reject syntactic pattern-matching tests.

## When applied
Applied during test review to differentiate meaningful behavior verification from superficial checks.

## Sub-concepts
insufficient-test-patterns, required-test-patterns

## Part of
test-quality-standards

## Implementation status
defects: missing-path, doc-drift

## Design notes
Test Quality Criteria establish that the value of a test lies entirely in behavioral verification. By ruling out tests that merely confirm regex patterns or file presence without executing logic, this criteria ensures tests serve as effective regression shields rather than cosmetic coverage padding.
