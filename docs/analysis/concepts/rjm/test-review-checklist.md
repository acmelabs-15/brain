---
package: rjm
name: Test Review Checklist
slug: test-review-checklist
kind: checklist
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

# Test Review Checklist

## Definition — verbatim
> "When reviewing tests, verify:" — .claude/agents/qa.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 186 | defined here | Seven-item checklist verifying code execution, dependency mocking, outputs, error conditions, and edge cases. |
| templates/agents/qa.shared.md | 176 | defined here | Seven-item checklist verifying code execution, dependency mocking, outputs, error conditions, and edge cases. |

## Consumes
Authored test files, mock configurations, assertion logic.

## Produces
Audited test verdicts and review sign-offs.

## When applied
Run during code review before approving test additions or changes.

## Sub-concepts
none

## Part of
qa

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Test Review Checklist standardizes the peer review of test suites. Its checks ensure reviewers verify that tests invoke live functions, isolate external systems, assert on specific return values, cover error paths, and use descriptive names, preventing testing regressions.
