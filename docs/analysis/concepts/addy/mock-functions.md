---
package: addy
name: Mock Functions
slug: mock-functions
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

# Mock Functions

## Definition — verbatim
> "### Mock Functions" — references/testing-patterns.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 86 | defined here | Subsection heading introducing function spy creation, return value stubbing, and invocation assertions |

## Consumes
Function callbacks, dependency injection parameters, or event handler interfaces.

## Produces
Inspectable mock function instances (`jest.fn()`) recording call arguments, return values, and execution counts.

## When applied
When verifying that a unit under test correctly invokes a callback or external dependency with expected parameters.

## Sub-concepts
none

## Part of
mocking-patterns

## Implementation status
clean

## Design notes
Mock Functions provides test spies and stubs via `jest.fn()` to observe function invocations and configure deterministic responses (`mockReturnValue`, `mockResolvedValue`, `mockImplementation`). This technique enables developers to assert interaction contracts (`toHaveBeenCalledWith`, `toHaveBeenCalledTimes`) without invoking real side-effecting implementations.
