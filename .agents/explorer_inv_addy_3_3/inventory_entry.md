---
package: addy
path: references/testing-patterns.md
type: doc
bytes: 7460
unit: inv-addy-3
---

# references/testing-patterns.md

## Purpose — required, verbatim
> "Quick reference of JavaScript/TypeScript testing patterns — Jest, React Testing Library, Supertest, and Playwright — illustrating the universal principles from the `test-driven-development` skill. The principles (Arrange-Act-Assert, naming, mock discipline, anti-patterns) apply in any ecosystem; the syntax and tooling shown here are JS/TS-specific. In another stack, follow the same principles with the repository's own test framework and commands." — references/testing-patterns.md:3

## Design intent — required
Provides a concrete, idiomatic reference guide for implementing automated test suites in JavaScript/TypeScript ecosystems across the testing pyramid (unit, component, API integration, and end-to-end testing). It grounds the universal conceptual tenets of test-driven development (Arrange-Act-Assert structure, expressive naming conventions, assertion selection, strict boundary-only mocking discipline, accessible component querying, HTTP integration validation, and resilient E2E browser flows) into practical code templates while enumerating critical test anti-patterns and their remediations. Without it, engineers and coding agents would lack standardized, high-quality reference implementations for Jest, React Testing Library, Supertest, and Playwright tests, risking fragile tests coupled to implementation details, over-mocking, untrusted test suites, or unhandled async failures.

## Phase — required
`cross-phase`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill `test-driven-development` — references/testing-patterns.md:3

## Invoked by — required
- doc `README.md` — README.md:308
- doc `docs/getting-started.md` — docs/getting-started.md:133
- skill `skills/test-driven-development/SKILL.md` — skills/test-driven-development/SKILL.md:361
- script `scripts/validate-artifact-paths-test.js` — scripts/validate-artifact-paths-test.js:98

## Concepts named — required, verbatim
- `Testing Patterns Reference (JavaScript/TypeScript)` — references/testing-patterns.md:1 — defined here
- `Jest` — references/testing-patterns.md:3 — used here
- `React Testing Library` — references/testing-patterns.md:3,128 — used here
- `Supertest` — references/testing-patterns.md:3,160 — used here
- `Playwright` — references/testing-patterns.md:3,197,200 — used here
- `test-driven-development` — references/testing-patterns.md:3 — used here
- `Arrange-Act-Assert` — references/testing-patterns.md:3,7,16 — defined here
- `mock discipline` — references/testing-patterns.md:3 — used here
- `anti-patterns` — references/testing-patterns.md:3 — used here
- `Test Structure (Arrange-Act-Assert)` — references/testing-patterns.md:7,16 — defined here
- `Arrange` — references/testing-patterns.md:20 — defined here
- `Act` — references/testing-patterns.md:23 — defined here
- `Assert` — references/testing-patterns.md:26 — defined here
- `Test Naming Conventions` — references/testing-patterns.md:8,33 — defined here
- `[unit] [expected behavior] [condition]` — references/testing-patterns.md:36 — defined here
- `Common Assertions` — references/testing-patterns.md:9,45 — defined here
- `Equality` — references/testing-patterns.md:48 — defined here
- `toBe` — references/testing-patterns.md:49 — used here
- `toEqual` — references/testing-patterns.md:50 — used here
- `toStrictEqual` — references/testing-patterns.md:51 — used here
- `Truthiness` — references/testing-patterns.md:53 — defined here
- `toBeTruthy` — references/testing-patterns.md:54 — used here
- `toBeFalsy` — references/testing-patterns.md:55 — used here
- `toBeNull` — references/testing-patterns.md:56 — used here
- `toBeDefined` — references/testing-patterns.md:57 — used here
- `toBeUndefined` — references/testing-patterns.md:58 — used here
- `Numbers` — references/testing-patterns.md:60 — defined here
- `toBeGreaterThan` — references/testing-patterns.md:61 — used here
- `toBeLessThanOrEqual` — references/testing-patterns.md:62 — used here
- `toBeCloseTo` — references/testing-patterns.md:63 — used here
- `Strings` — references/testing-patterns.md:65 — defined here
- `toMatch` — references/testing-patterns.md:66 — used here
- `toContain` — references/testing-patterns.md:67 — used here
- `Arrays / Objects` — references/testing-patterns.md:69 — defined here
- `toHaveLength` — references/testing-patterns.md:71 — used here
- `toHaveProperty` — references/testing-patterns.md:72 — used here
- `Errors` — references/testing-patterns.md:74 — defined here
- `toThrow` — references/testing-patterns.md:75 — used here
- `Async` — references/testing-patterns.md:79 — defined here
- `resolves` — references/testing-patterns.md:80 — used here
- `rejects` — references/testing-patterns.md:81 — used here
- `Mocking Patterns` — references/testing-patterns.md:10,84 — defined here
- `Mock Functions` — references/testing-patterns.md:86 — defined here
- `Mock Modules` — references/testing-patterns.md:99 — defined here
- `Mock at Boundaries Only` — references/testing-patterns.md:114 — defined here
- `Database calls` — references/testing-patterns.md:118 — defined here
- `HTTP requests` — references/testing-patterns.md:119 — defined here
- `File system operations` — references/testing-patterns.md:120 — defined here
- `External API calls` — references/testing-patterns.md:121 — defined here
- `Time/Date (when needed)` — references/testing-patterns.md:122 — defined here
- `Internal utility functions` — references/testing-patterns.md:118 — defined here
- `Business logic` — references/testing-patterns.md:119 — defined here
- `Data transformations` — references/testing-patterns.md:120 — defined here
- `Validation functions` — references/testing-patterns.md:121 — defined here
- `Pure functions` — references/testing-patterns.md:122 — defined here
- `React/Component Testing` — references/testing-patterns.md:11,125 — defined here
- `API / Integration Testing` — references/testing-patterns.md:12,156 — defined here
- `E2E Testing (Playwright)` — references/testing-patterns.md:13,197 — defined here
- `Test Anti-Patterns` — references/testing-patterns.md:14,224 — defined here
- `Testing implementation details` — references/testing-patterns.md:228 — defined here
- `Snapshot everything` — references/testing-patterns.md:229 — defined here
- `Shared mutable state` — references/testing-patterns.md:230 — defined here
- `Testing third-party code` — references/testing-patterns.md:231 — defined here
- `Skipping tests to pass CI` — references/testing-patterns.md:232 — defined here
- `Using \`test.skip\` permanently` — references/testing-patterns.md:233 — defined here
- `Overly broad assertions` — references/testing-patterns.md:234 — defined here
- `No async error handling` — references/testing-patterns.md:235 — defined here

## Structure
- `# Testing Patterns Reference (JavaScript/TypeScript)` — line 1
- `## Table of Contents` — line 5
- `## Test Structure (Arrange-Act-Assert)` — line 16
- `## Test Naming Conventions` — line 33
- `## Common Assertions` — line 45
- `## Mocking Patterns` — line 84
- `### Mock Functions` — line 86
- `### Mock Modules` — line 99
- `### Mock at Boundaries Only` — line 114
- `## React/Component Testing` — line 125
- `## API / Integration Testing` — line 156
- `## E2E Testing (Playwright)` — line 197
- `## Test Anti-Patterns` — line 224

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- High-quality, pragmatic multi-tier testing reference bridging conceptual TDD (`test-driven-development` skill) with concrete TypeScript implementations across unit, component, API integration, and E2E browser tests.
- Tooling coverage spans the four core JavaScript/TypeScript testing standards: Jest (unit/mocking), React Testing Library (DOM component rendering), Supertest (HTTP API requests/responses), and Playwright (full browser E2E workflows).
- Codifies strict "Mock at Boundaries Only" discipline with an explicit boundary tree: mock I/O boundaries (Database calls, HTTP requests, File system operations, External API calls, Time/Date) while forbidding mocks on internal code (Utility functions, Business logic, Data transformations, Validation functions, Pure functions).
- Outlines an 8-row anti-pattern reference matrix with explicit failure risks and direct actionable remediations.
- Enforces accessibility-first querying (`getByRole`, `findByRole`, `getByLabel`) rather than brittle test IDs or DOM CSS selectors for UI components.

## Context cost
7,460 bytes (~1,865 tokens).
