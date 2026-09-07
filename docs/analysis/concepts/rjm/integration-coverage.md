---
package: rjm
name: Integration coverage
slug: integration-coverage
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

# Integration coverage

## Definition — verbatim
> "2. **Integration coverage** - Contracts between components verified. Cross-module boundaries exercised." — .claude/commands/test.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 48 | defined here | Evaluation criterion under Gate 1 requiring component contracts and cross-module boundaries to be tested. |

## Consumes
Module interface definitions, inter-component contracts, and integration test suites.

## Produces
Verification findings confirming that boundary contracts and cross-module interactions function correctly.

## When applied
Evaluated by the QA subagent during Gate 1 of `/test`.

## Sub-concepts
none

## Part of
functional-testing, test

## Implementation status
defects: doc-drift

## Design notes
Integration coverage ensures that individually tested units operate cohesively across subsystem boundaries. By exercising component interfaces and verifying inter-module contracts, it prevents runtime integration failures and ensures distributed system components honor shared protocols.
