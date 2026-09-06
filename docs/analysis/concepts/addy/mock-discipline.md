---
package: addy
name: mock discipline
slug: mock-discipline
kind: technique
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

# mock discipline

## Definition — verbatim
(used, not defined)
> "The principles (Arrange-Act-Assert, naming, mock discipline, anti-patterns) apply in any ecosystem; the syntax and tooling shown here are JS/TS-specific." — references/testing-patterns.md:3

## Also called — verbatim
> "### Mock at Boundaries Only" — references/testing-patterns.md:114

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 3 | used here | Identified as a universal testing principle governing test isolation across ecosystems |

## Consumes
Units under test, external collaborators, and I/O boundaries.

## Produces
Mock configurations restricted strictly to system boundaries (network, disk, databases).

## When applied
When designing unit and integration tests requiring external dependency isolation.

## Sub-concepts
mock-at-boundaries-only, mock-functions, mock-modules

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Mock discipline in Addy's lifecycle is the rigorous principle of restricting test mocks strictly to architectural and external boundaries (HTTP calls, database operations, filesystem access, external APIs) while strictly forbidding mocking internal utility functions, business logic, validation routines, or pure transformations. This ensures tests exercise genuine application logic without fragility to refactoring.
