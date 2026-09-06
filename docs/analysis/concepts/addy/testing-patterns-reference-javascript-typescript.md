---
package: addy
name: Testing Patterns Reference (JavaScript/TypeScript)
slug: testing-patterns-reference-javascript-typescript
kind: reference
package_phase: cross-phase
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

# Testing Patterns Reference (JavaScript/TypeScript)

## Definition — verbatim
> "# Testing Patterns Reference (JavaScript/TypeScript)" — references/testing-patterns.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 1 | defined here | Document title introducing reference guide of testing patterns across JavaScript and TypeScript stacks |

## Consumes
Universal testing principles from the test-driven-development skill.

## Produces
Idiomatic code examples for Arrange-Act-Assert, boundary mocking, component testing, API testing, and Playwright E2E flows.

## When applied
When implementing unit, component, API, or end-to-end tests in JavaScript or TypeScript codebases.

## Sub-concepts
arrange-act-assert, mock-discipline, test-anti-patterns

## Part of
test-driven-development

## Implementation status
clean

## Design notes
Testing Patterns Reference (JavaScript/TypeScript) provides concrete, framework-specific reference implementations (Jest, React Testing Library, Supertest, Playwright) of abstract test-driven development principles. It equips coding agents with idiomatic code snippets and pattern rubrics to write resilient tests without having to deduce framework syntax or default to anti-patterns.
