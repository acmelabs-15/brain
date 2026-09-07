---
package: rjm
name: Unit coverage
slug: unit-coverage
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Unit coverage

## Definition — verbatim
> "1. **Unit coverage** - Each method in isolation, dependencies injected. Every new function has at least 1 test." — .claude/commands/test.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 47 | defined here | Evaluation criterion under Gate 1 requiring each method to be tested in isolation with injected dependencies. |

## Consumes
Source code methods and corresponding unit test suites.

## Produces
Verification findings confirming that every new function has at least one isolated unit test.

## When applied
Evaluated by the QA subagent during Gate 1 of `/test`.

## Sub-concepts
none

## Part of
functional-testing, test

## Implementation status
defects: doc-drift

## Design notes
Unit coverage represents the foundational layer of functional verification in rjm. By mandating that each new function has at least one dedicated test exercising the method in complete isolation with mock or injected dependencies, it ensures localized defect detection and high test execution speed.
