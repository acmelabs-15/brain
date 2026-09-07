---
package: rjm
name: Edge cases
slug: edge-cases
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/test.md, sha256: 74281fbfcba952ff4e88e177f7059484e828b78e5084a3de8463343dd82ef69d}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Edge cases

## Definition — verbatim
> "Null/empty/boundary values, invalid types, concurrent access where applicable." — .claude/commands/test.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 50 | defined here | Gate 1 evaluation dimension requiring tests for null/empty/boundary values, invalid types, and concurrent access. |
| .claude/skills/review/references/qa.md | 145 | defined here | QA review checklist section requiring tests for null, boundary, invalid type, and concurrent inputs on user-facing code. |

## Consumes
Function signatures, input domain parameters, boundary condition specifications, concurrency models.

## Produces
Automated test cases exercising null/empty inputs, extreme numeric limits, invalid types, and race conditions.

## When applied
Applied during Gate 1 (Functional Testing) of `/test` and during PR QA review under `/review` for CODE pull requests.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
Edge case testing targets degenerative, boundary, and unexpected system inputs—such as null or empty collections, integer extremes, malformed types, and asynchronous contention. By requiring explicit tests across multiple edge case categories prior to PR merge, rjm prevents production regressions triggered by unhandled boundary conditions.
