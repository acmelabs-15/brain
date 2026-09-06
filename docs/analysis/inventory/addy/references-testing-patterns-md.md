---
package: addy
path: references/testing-patterns.md
type: doc
bytes: 7460
unit: inv-addy-36
aliases: []
memo_inputs:
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# references/testing-patterns.md

## Purpose — required, verbatim
> "Quick reference of JavaScript/TypeScript testing patterns — Jest, React Testing Library, Supertest, and Playwright — illustrating the universal principles from the `test-driven-development` skill. The principles (Arrange-Act-Assert, naming, mock discipline, anti-patterns) apply in any ecosystem; the syntax and tooling shown here are JS/TS-specific. In another stack, follow the same principles with the repository's own test framework and commands." — references/testing-patterns.md:3

## Design intent — required
Concrete reference guide providing idiomatic JavaScript and TypeScript code examples for testing patterns across unit, component, API, and end-to-end tiers. Solves the problem of abstract testing guidelines by providing ready-to-use boilerplate and assertion syntax (Arrange-Act-Assert structure, semantic naming conventions, boundary mocking, accessible component testing, Supertest integration, and Playwright browser flows) along with a concrete test anti-patterns rubric. Without it, agents implementing tests in JS/TS environments would have to guess framework syntax or fall back into common anti-patterns like testing implementation details or leaving permanent skips.

## Phase — required
cross-phase

## Inputs — required
Universal principles from `skills/test-driven-development/SKILL.md`.

## Outputs — required
none

## Invokes — required
- skill test-driven-development — references/testing-patterns.md:3

## Invoked by — required
- doc README.md — README.md:308
- doc docs/getting-started.md — docs/getting-started.md:133
- skill skills/test-driven-development/SKILL.md — skills/test-driven-development/SKILL.md:361

## Concepts named — required, verbatim
- `Testing Patterns Reference (JavaScript/TypeScript)` — references/testing-patterns.md:1 — defined here
- `test-driven-development` — references/testing-patterns.md:3 — used here
- `Arrange-Act-Assert` — references/testing-patterns.md:3 — used here
- `mock discipline` — references/testing-patterns.md:3 — used here
- `anti-patterns` — references/testing-patterns.md:3 — used here
- `Test Structure (Arrange-Act-Assert)` — references/testing-patterns.md:16 — defined here
- `Test Naming Conventions` — references/testing-patterns.md:33 — defined here
- `Common Assertions` — references/testing-patterns.md:45 — defined here
- `Mocking Patterns` — references/testing-patterns.md:84 — defined here
- `Mock Functions` — references/testing-patterns.md:86 — defined here
- `Mock Modules` — references/testing-patterns.md:99 — defined here
- `Mock at Boundaries Only` — references/testing-patterns.md:114 — defined here
- `React/Component Testing` — references/testing-patterns.md:125 — defined here
- `API / Integration Testing` — references/testing-patterns.md:157 — defined here
- `E2E Testing (Playwright)` — references/testing-patterns.md:197 — defined here
- `Test Anti-Patterns` — references/testing-patterns.md:224 — defined here
- `Testing implementation details` — references/testing-patterns.md:228 — defined here
- `Snapshot everything` — references/testing-patterns.md:229 — defined here
- `Shared mutable state` — references/testing-patterns.md:230 — defined here
- `Testing third-party code` — references/testing-patterns.md:231 — defined here
- `Skipping tests to pass CI` — references/testing-patterns.md:232 — defined here
- "Using `test.skip` permanently" — references/testing-patterns.md:233 — defined here
- `test.skip` — references/testing-patterns.md:233 — used here
- `Overly broad assertions` — references/testing-patterns.md:234 — defined here
- `No async error handling` — references/testing-patterns.md:235 — defined here

## Structure
- # Testing Patterns Reference (JavaScript/TypeScript)
- ## Table of Contents
- ## Test Structure (Arrange-Act-Assert)
- ## Test Naming Conventions
- ## Common Assertions
- ## Mocking Patterns
- ### Mock Functions
- ### Mock Modules
- ### Mock at Boundaries Only
- ## React/Component Testing
- ## API / Integration Testing
- ## E2E Testing (Playwright)
- ## Test Anti-Patterns

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Emphasizes testing at boundaries only (HTTP, database, filesystem, external APIs) while advising against mocking internal utility functions, business logic, or pure functions.
- Provides accessible component testing patterns via React Testing Library (`findByRole('textbox', { name: /title/i })`) instead of fragile test IDs.
- Addresses Phase 1V verification finding by explicitly recording "Using `test.skip` permanently" (line 233) under Concepts named.

## Context cost
7460 bytes plus skills/test-driven-development/SKILL.md (12852 bytes) = 20312 bytes, ~5078 tokens.
