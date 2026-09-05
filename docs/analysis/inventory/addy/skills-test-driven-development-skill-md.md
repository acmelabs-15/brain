---
package: addy
path: skills/test-driven-development/SKILL.md
type: skill
bytes: 16483
unit: inv-addy-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/test-driven-development/SKILL.md

## Purpose — required, verbatim
> "Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality." — skills/test-driven-development/SKILL.md:3

## Design intent — required
Enforces a rigorous test-first methodology (Red-Green-Refactor) and the Prove-It pattern for bug fixes to guarantee that all behavioral changes and additions are provably correct before implementation code is finalized. It provides structured guidance on test sizing (Small/Medium/Large resource model), test pyramid distribution (80/15/5), authoring principles (DAMP over DRY, state over interaction testing, minimal mocking), subagent delegation for bug reproduction, and runtime verification via DevTools.

## Phase — required
addy:Build

## Inputs — required
- Existing codebase, test suites, and build files (`package.json`, `pom.xml`, `build.gradle`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`, `Makefile` — skills/test-driven-development/SKILL.md:28)
- Repository test commands discovered from README, CONTRIBUTING, or CI workflows (skills/test-driven-development/SKILL.md:32)
- Bug reports or functional requirements (skills/test-driven-development/SKILL.md:98, 101)
- Runtime browser inspection signals via Chrome DevTools MCP (skills/test-driven-development/SKILL.md:314)

## Outputs — required
- Failing reproduction tests (RED) confirming bug existence or requirement baseline (skills/test-driven-development/SKILL.md:49, 107)
- Minimal implementation code passing all tests (GREEN) (skills/test-driven-development/SKILL.md:67, 113)
- Refactored production and test code (REFACTOR) (skills/test-driven-development/SKILL.md:85)
- Runtime browser verification evidence (console clean, network responses, screenshots) (skills/test-driven-development/SKILL.md:323, 330)

## Invokes — required
- skill browser-testing-with-devtools — skills/test-driven-development/SKILL.md:341
- reference ../../references/testing-patterns.md — skills/test-driven-development/SKILL.md:361

## Invoked by — required
- .claude/commands/test.md:5
- .claude/commands/build.md:5
- commands/test.toml:4
- commands/build.toml:4
- skills/spec-driven-development/SKILL.md:202
- skills/incremental-implementation/SKILL.md:201
- skills/using-agent-skills/SKILL.md:30
- skills/doubt-driven-development/SKILL.md:227
- skills/constraint-driven-development/SKILL.md:10
- skills/debugging-and-error-recovery/SKILL.md:75
- CLAUDE.md:23
- README.md:248

## Concepts named — required, verbatim
- `test-driven-development` — skills/test-driven-development/SKILL.md:2 — defined here
- `Prove-It Pattern` — skills/test-driven-development/SKILL.md:15 — defined here
- `Browser Testing` — skills/test-driven-development/SKILL.md:22 — used here
- `Chrome DevTools MCP` — skills/test-driven-development/SKILL.md:22 — used here
- `Discover the Stack First` — skills/test-driven-development/SKILL.md:24 — defined here
- `package.json` — skills/test-driven-development/SKILL.md:28 — used here
- `pom.xml` — skills/test-driven-development/SKILL.md:28 — used here
- `build.gradle` — skills/test-driven-development/SKILL.md:28 — used here
- `pyproject.toml` — skills/test-driven-development/SKILL.md:28 — used here
- `go.mod` — skills/test-driven-development/SKILL.md:28 — used here
- `Cargo.toml` — skills/test-driven-development/SKILL.md:28 — used here
- `Gemfile` — skills/test-driven-development/SKILL.md:28 — used here
- `Makefile` — skills/test-driven-development/SKILL.md:28 — used here
- `The TDD Cycle` — skills/test-driven-development/SKILL.md:38 — defined here
- `RED` — skills/test-driven-development/SKILL.md:41 — defined here
- `GREEN` — skills/test-driven-development/SKILL.md:41 — defined here
- `REFACTOR` — skills/test-driven-development/SKILL.md:41 — defined here
- `The Test Pyramid` — skills/test-driven-development/SKILL.md:144 — defined here
- `E2E Tests` — skills/test-driven-development/SKILL.md:150 — defined here
- `Integration Tests` — skills/test-driven-development/SKILL.md:153 — defined here
- `Unit Tests` — skills/test-driven-development/SKILL.md:156 — defined here
- `The Beyonce Rule` — skills/test-driven-development/SKILL.md:161 — defined here
- `Test Sizes` — skills/test-driven-development/SKILL.md:163 — defined here
- `Small` — skills/test-driven-development/SKILL.md:169 — defined here
- `Medium` — skills/test-driven-development/SKILL.md:170 — defined here
- `Large` — skills/test-driven-development/SKILL.md:171 — defined here
- `Decision Guide` — skills/test-driven-development/SKILL.md:175 — defined here
- `Writing Good Tests` — skills/test-driven-development/SKILL.md:188 — defined here
- `Test State, Not Interactions` — skills/test-driven-development/SKILL.md:190 — defined here
- `DAMP Over DRY in Tests` — skills/test-driven-development/SKILL.md:211 — defined here
- `DAMP` — skills/test-driven-development/SKILL.md:213 — defined here
- `Prefer Real Implementations Over Mocks` — skills/test-driven-development/SKILL.md:234 — defined here
- `Fake` — skills/test-driven-development/SKILL.md:241 — defined here
- `Stub` — skills/test-driven-development/SKILL.md:242 — defined here
- `Mock` — skills/test-driven-development/SKILL.md:243 — defined here
- `Arrange-Act-Assert Pattern` — skills/test-driven-development/SKILL.md:248 — defined here
- `One Assertion Per Concept` — skills/test-driven-development/SKILL.md:266 — defined here
- `Name Tests Descriptively` — skills/test-driven-development/SKILL.md:282 — defined here
- `Test Anti-Patterns to Avoid` — skills/test-driven-development/SKILL.md:301 — defined here
- `Browser Testing with DevTools` — skills/test-driven-development/SKILL.md:312 — defined here
- `The DevTools Debugging Workflow` — skills/test-driven-development/SKILL.md:316 — defined here
- `Security Boundaries` — skills/test-driven-development/SKILL.md:337 — defined here
- `browser-testing-with-devtools` — skills/test-driven-development/SKILL.md:341 — used here
- `Subagents for Testing` — skills/test-driven-development/SKILL.md:343 — defined here
- `testing-patterns.md` — skills/test-driven-development/SKILL.md:361 — used here
- `Common Rationalizations` — skills/test-driven-development/SKILL.md:363 — defined here
- `Red Flags` — skills/test-driven-development/SKILL.md:375 — defined here
- `Verification` — skills/test-driven-development/SKILL.md:387 — defined here

## Structure
- # Test-Driven Development — skills/test-driven-development/SKILL.md:6
- ## Overview — skills/test-driven-development/SKILL.md:8
- ## When to Use — skills/test-driven-development/SKILL.md:12
- ## Discover the Stack First — skills/test-driven-development/SKILL.md:24
- ## The TDD Cycle — skills/test-driven-development/SKILL.md:38
- ### Step 1: RED — Write a Failing Test — skills/test-driven-development/SKILL.md:49
- ### Step 2: GREEN — Make It Pass — skills/test-driven-development/SKILL.md:67
- ### Step 3: REFACTOR — Clean Up — skills/test-driven-development/SKILL.md:85
- ## The Prove-It Pattern (Bug Fixes) — skills/test-driven-development/SKILL.md:96
- ## The Test Pyramid — skills/test-driven-development/SKILL.md:144
- ### Test Sizes (Resource Model) — skills/test-driven-development/SKILL.md:163
- ### Decision Guide — skills/test-driven-development/SKILL.md:175
- ## Writing Good Tests — skills/test-driven-development/SKILL.md:188
- ### Test State, Not Interactions — skills/test-driven-development/SKILL.md:190
- ### DAMP Over DRY in Tests — skills/test-driven-development/SKILL.md:211
- ### Prefer Real Implementations Over Mocks — skills/test-driven-development/SKILL.md:234
- ### Use the Arrange-Act-Assert Pattern — skills/test-driven-development/SKILL.md:248
- ### One Assertion Per Concept — skills/test-driven-development/SKILL.md:266
- ### Name Tests Descriptively — skills/test-driven-development/SKILL.md:282
- ## Test Anti-Patterns to Avoid — skills/test-driven-development/SKILL.md:301
- ## Browser Testing with DevTools — skills/test-driven-development/SKILL.md:312
- ### The DevTools Debugging Workflow — skills/test-driven-development/SKILL.md:316
- ### What to Check — skills/test-driven-development/SKILL.md:326
- ### Security Boundaries — skills/test-driven-development/SKILL.md:337
- ## When to Use Subagents for Testing — skills/test-driven-development/SKILL.md:343
- ## See Also — skills/test-driven-development/SKILL.md:359
- ## Common Rationalizations — skills/test-driven-development/SKILL.md:363
- ## Red Flags — skills/test-driven-development/SKILL.md:375
- ## Verification — skills/test-driven-development/SKILL.md:387

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Emphasizes discovering the project's native build and test commands rather than assuming default `npm test` tooling.
- Combines classical test pyramid ratios (80% Unit, 15% Integration, 5% E2E) with a resource-constraint size taxonomy (Small: single-process/no I/O; Medium: localhost/DB; Large: external/multi-machine).
- Advocates subagent delegation for bug reproduction tests (line 343), decoupling test creation from implementation knowledge to prevent biased tests.
- Rebuts redundant testing ("Let me run the tests again just to be extra sure" at line 373) as an anti-rationalization that consumes time and tokens without adding confidence unless code changed.

## Context cost
16483 bytes (~4121 tokens). Invocations load `browser-testing-with-devtools` (14539 bytes) and `references/testing-patterns.md` (7460 bytes), totaling ~38482 bytes (~9621 tokens).
