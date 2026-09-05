---
package: addy
path: references/testing-patterns.md
type: reference
bytes: 7460
unit: inv-addy-36
deprecated: false
aliases: []
memo_inputs:
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# references/testing-patterns.md

## Purpose — required, verbatim
> "Quick reference of JavaScript/TypeScript testing patterns — Jest, React Testing Library, Supertest, and Playwright — illustrating the universal principles from the `test-driven-development` skill." — references/testing-patterns.md:3

## Design intent — required
Provides concrete, language-specific testing exemplars and implementation patterns (covering Jest, React Testing Library, Supertest, and Playwright) that ground the abstract testing principles of the `test-driven-development` skill. Without this reference, agents attempting TDD in JavaScript/TypeScript ecosystems would lack concrete syntactical guidelines for Arrange-Act-Assert structure, accessible element querying, boundary-only mocking, and common assertion idioms, increasing the risk of test anti-patterns like testing implementation details or unhandled async errors.

## Phase — required
addy:Test

## Inputs — required
Universal testing principles from the `test-driven-development` skill — references/testing-patterns.md:3

## Outputs — required
none

## Invokes — required
- skill test-driven-development — references/testing-patterns.md:3

## Invoked by — required
- skill test-driven-development — skills/test-driven-development/SKILL.md:361
- doc README.md — README.md:308
- doc getting-started.md — docs/getting-started.md:133

## Concepts named — required, verbatim
- `test-driven-development` — references/testing-patterns.md:3 — used here
- `Jest` — references/testing-patterns.md:3 — used here
- `React Testing Library` — references/testing-patterns.md:3 — used here
- `Supertest` — references/testing-patterns.md:3 — used here
- `Playwright` — references/testing-patterns.md:3 — used here
- `Arrange-Act-Assert` — references/testing-patterns.md:3 — used here
- `Test Structure (Arrange-Act-Assert)` — references/testing-patterns.md:7 — defined here
- `Test Naming Conventions` — references/testing-patterns.md:8 — defined here
- `Common Assertions` — references/testing-patterns.md:9 — defined here
- `Mocking Patterns` — references/testing-patterns.md:10 — defined here
- `React/Component Testing` — references/testing-patterns.md:11 — defined here
- `API / Integration Testing` — references/testing-patterns.md:12 — defined here
- `E2E Testing (Playwright)` — references/testing-patterns.md:13 — defined here
- `Test Anti-Patterns` — references/testing-patterns.md:14 — defined here
- `Mock Functions` — references/testing-patterns.md:86 — defined here
- `Mock Modules` — references/testing-patterns.md:99 — defined here
- `Mock at Boundaries Only` — references/testing-patterns.md:114 — defined here
- `Testing implementation details` — references/testing-patterns.md:228 — defined here
- `Snapshot everything` — references/testing-patterns.md:229 — defined here
- `Shared mutable state` — references/testing-patterns.md:230 — defined here
- `Testing third-party code` — references/testing-patterns.md:231 — defined here
- `Skipping tests to pass CI` — references/testing-patterns.md:232 — defined here
- `Overly broad assertions` — references/testing-patterns.md:234 — defined here
- `No async error handling` — references/testing-patterns.md:235 — defined here

## Structure
- # Testing Patterns Reference (JavaScript/TypeScript) — references/testing-patterns.md:1
- ## Table of Contents — references/testing-patterns.md:5
- ## Test Structure (Arrange-Act-Assert) — references/testing-patterns.md:16
- ## Test Naming Conventions — references/testing-patterns.md:33
- ## Common Assertions — references/testing-patterns.md:45
- ## Mocking Patterns — references/testing-patterns.md:84
- ### Mock Functions — references/testing-patterns.md:86
- ### Mock Modules — references/testing-patterns.md:99
- ### Mock at Boundaries Only — references/testing-patterns.md:114
- ## React/Component Testing — references/testing-patterns.md:125
- ## API / Integration Testing — references/testing-patterns.md:157
- ## E2E Testing (Playwright) — references/testing-patterns.md:197
- ## Test Anti-Patterns — references/testing-patterns.md:224

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Clear, practical testing reference illustrating the AAA pattern, strict vs deep equality assertions, boundary-only mocking rules, accessibility-based component testing with Testing Library, API testing with Supertest, and E2E browser testing with Playwright. Explicitly documents common test anti-patterns and their remediation.

## Context cost
7460 bytes, ~1865 tokens.
