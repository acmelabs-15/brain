---
package: rjm
name: Developer Experience
slug: developer-experience
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

# Developer Experience

## Definition — verbatim
> "You are a developer advocate reviewing from the consumer perspective. Would a new contributor understand this code? Would the API frustrate or delight?" — .claude/commands/test.md:98

## Also called — verbatim
> "DX" — .claude/commands/test.md:94

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 94 | defined here | Gate 5 in `/test` invoking orphan-ref-validator and dispatching the critic agent to audit API ergonomics, documentation, debuggability, onboarding, and tooling. |

## Consumes
Pull request diff, API signatures, error messaging, documentation comments, `orphan-ref-validator` scan results.

## Produces
Gate verdict (`PASS|WARN|CRITICAL_FAIL|ERROR`) and structured findings evaluating API ergonomics, documentation accuracy, and debugging clarity.

## When applied
Executed as Gate 5 of `/test` across all pull request types (CODE, WORKFLOW, CONFIG, DOCS, MIXED).

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Developer Experience (DX) testing ensures software systems remain maintainable, intuitive, and pleasant to use for external consumers and new contributors. Combining static orphan reference scanning with an audit by the critic agent, it assesses API ergonomics, documentation freshness, and failure debuggability so that technical debt does not accumulate unnoticed.
