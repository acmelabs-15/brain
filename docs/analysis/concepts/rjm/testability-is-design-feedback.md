---
package: rjm
name: Testability is design feedback
slug: testability-is-design-feedback
kind: pattern
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

# Testability is design feedback

## Definition — verbatim
> "Hard to test means poor encapsulation, tight coupling, Law of Demeter violation, weak cohesion, or procedural code." — .claude/commands/test.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/test.md | 122 | defined here | Core testing principle establishing that difficulty in writing tests signals architectural and structural design deficiencies. |

## Consumes
Test authoring friction, excessive mocking complexity, convoluted test fixtures, deep dependency trees.

## Produces
Architectural refactoring signals leading to improved encapsulation, decoupled interfaces, and focused module cohesion.

## When applied
Applied during implementation and test creation in `/build` and `/test`.

## Sub-concepts
none

## Part of
test

## Implementation status
defects: doc-drift

## Design notes
"Testability is design feedback" establishes that friction encountered during testing is an architectural indicator rather than a limitation of the test suite. When a unit is difficult to isolate or test without elaborate mocks, the underlying code suffers from architectural defects—such as tight coupling, Law of Demeter violations, or procedural design—requiring structural refactoring rather than testing workarounds.
