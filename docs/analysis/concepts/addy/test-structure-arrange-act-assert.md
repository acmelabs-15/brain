---
package: addy
name: Test Structure (Arrange-Act-Assert)
slug: test-structure-arrange-act-assert
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

# Test Structure (Arrange-Act-Assert)

## Definition — verbatim
> "## Test Structure (Arrange-Act-Assert)" — references/testing-patterns.md:16

## Also called — verbatim
> "Arrange-Act-Assert" — references/testing-patterns.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 16 | defined here | Section heading defining the standard three-phase structure for unit test implementation |

## Consumes
Preconditions, test inputs, and target functions or components.

## Produces
Clear, readable test cases divided cleanly into setup, execution, and verification phases.

## When applied
When structuring any automated unit or component test block.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Arrange-Act-Assert (AAA) provides a standardized three-phase architecture for test execution: preparing inputs and preconditions (Arrange), invoking the target behavior (Act), and verifying the resulting state and outputs (Assert). This structure separates test concerns, prevents interleaved side-effects, and makes failure diagnosis straightforward.
