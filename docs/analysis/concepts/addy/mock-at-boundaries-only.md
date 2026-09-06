---
package: addy
name: Mock at Boundaries Only
slug: mock-at-boundaries-only
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

# Mock at Boundaries Only

## Definition — verbatim
> "### Mock at Boundaries Only" — references/testing-patterns.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 114 | defined here | Subsection heading defining architectural boundaries for mocking versus unmocked internal logic |

## Consumes
Architectural taxonomy of system components separating I/O boundaries from pure internal logic.

## Produces
Test isolation boundaries that mock database calls, HTTP requests, filesystem operations, and external APIs while preserving business logic execution.

## When applied
When deciding whether a collaborator or dependency should be mocked in a test.

## Sub-concepts
none

## Part of
mocking-patterns

## Implementation status
clean

## Design notes
Mock at Boundaries Only is a core architectural rule in Addy's testing methodology that restricts mocks strictly to external and I/O boundaries (database calls, HTTP requests, filesystem access, external APIs, and system clocks). It explicitly forbids mocking internal utility functions, business domain logic, data transformations, validation routines, or pure functions, ensuring tests remain robust against refactorings while accurately validating domain behavior.
