---
package: addy
name: TDD workflow
slug: tdd-workflow
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: commands/test.toml, sha256: c54f004d67f9fd4f8a5c9ab753ef99d3dd3d12cdc304473ea61db8c8680fe84d}
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# TDD workflow

## Definition — verbatim
> "Run TDD workflow — write failing tests, implement, verify. For bugs, use the Prove-It pattern." — commands/test.toml:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/test.toml | 1 | applies | Invokes the red-green-refactor cycle for new features and Prove-It pattern for bugs. |
| docs/gemini-cli-setup.md | 117 | references | Describes the /test command as running the TDD workflow (red, green, refactor). |

## Consumes
Feature requirements or bug reports, existing codebase, and test runner.

## Produces
Failing automated tests, followed by implementation passing the tests and refactored code.

## When applied
When implementing new feature logic, fixing bugs, or modifying existing system behavior.

## Sub-concepts
prove-it-pattern, red-green-refactor

## Part of
test-driven-development

## Implementation status
clean

## Design notes
The TDD workflow establishes strict test-first discipline across all code modifications. By mandating observable test failure before writing or altering implementation code, it proves that tests are valid and sensitive to the target behavior, preventing the false sense of security produced by testing only after implementation.
