---
package: addy
name: Mocking Patterns
slug: mocking-patterns
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

# Mocking Patterns

## Definition — verbatim
> "## Mocking Patterns" — references/testing-patterns.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 84 | defined here | Section heading introducing mock function, mock module, and boundary isolation patterns |

## Consumes
External services, asynchronous boundaries, module dependencies, and function spies.

## Produces
Test doubles configured to simulate dependencies without coupling to internal implementation logic.

## When applied
When isolating units under test from external side-effects or slow I/O dependencies.

## Sub-concepts
mock-functions, mock-modules, mock-at-boundaries-only

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Mocking Patterns establishes standard conventions for creating test doubles in JavaScript/TypeScript test suites. It organizes mocking into function spies (`jest.fn`), module interception (`jest.mock`), and strict boundary scoping, ensuring that test doubles provide predictable execution without obscuring genuine domain errors or testing trivial mocks.
