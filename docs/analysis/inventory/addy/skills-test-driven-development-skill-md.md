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
verified: 2026-09-05 quote-check+coverage
---

# skills/test-driven-development/SKILL.md

## Purpose — required, verbatim
> "Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality." — skills/test-driven-development/SKILL.md:3

## Design intent — required
Enforces test-first development through the classic Red-Green-Refactor cycle and provides the Prove-It Pattern for bug fixes, requiring a reproduction test that fails before any fix is attempted. It establishes ecosystem discovery ('Discover the Stack First') to respect repo-specific tooling, defines the Test Pyramid distribution (80% unit, 15% integration, 5% E2E) alongside resource-based test sizing (Small, Medium, Large), promotes DAMP over DRY in test code, mandates state-based rather than interaction-based assertions, prefers real implementations over mocks, and integrates runtime verification via Chrome DevTools MCP for browser testing. Without it, agents write tests after implementation (testing implementation details instead of behavior), guess CLI test commands, and declare tasks complete without objective proof.

## Phase — required
addy:Verify

## Inputs — required
- Bug reports, feature requirements, or behavioral change requests — skills/test-driven-development/SKILL.md:14, 15, 16
- Project build and test tooling configuration (`package.json`, `pom.xml`, `build.gradle`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`, `Makefile`) — skills/test-driven-development/SKILL.md:28
- Checked-in wrappers and repo scripts (`./gradlew`, `./mvnw`, `make test`) — skills/test-driven-development/SKILL.md:29
- Existing test suites and neighboring test conventions — skills/test-driven-development/SKILL.md:31
- Chrome DevTools MCP runtime data for browser testing (console logs, network responses, DOM structure, computed styles, performance traces, screenshots) — skills/test-driven-development/SKILL.md:314, 328, 335

## Outputs — required
- Failing automated reproduction tests (RED phase) — skills/test-driven-development/SKILL.md:49, 104, 124
- Minimal passing implementation code (GREEN phase) — skills/test-driven-development/SKILL.md:67, 110, 134
- Cleaned and refactored code (REFACTOR phase) with passing test suite — skills/test-driven-development/SKILL.md:85, 115
- Test suites adhering to Arrange-Act-Assert and descriptive specification-like naming — skills/test-driven-development/SKILL.md:248, 282
- Visual before/after screenshots and runtime verification logs for browser UI — skills/test-driven-development/SKILL.md:319, 323, 335

## Invokes — required
- skill browser-testing-with-devtools — skills/test-driven-development/SKILL.md:341
- reference references/testing-patterns.md — skills/test-driven-development/SKILL.md:361

## Invoked by — required
- command .claude/commands/test.md — .claude/commands/test.md:5
- command commands/test.toml — commands/test.toml:4
- skill spec-driven-development — skills/spec-driven-development/SKILL.md:202
- skill incremental-implementation — skills/incremental-implementation/SKILL.md:201
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:30
- skill debugging-and-error-recovery — skills/debugging-and-error-recovery/SKILL.md:75
- skill doubt-driven-development — skills/doubt-driven-development/SKILL.md:227
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:10

## Concepts named — required, verbatim
- `test-driven-development` — skills/test-driven-development/SKILL.md:2 — defined here
- `Test-Driven Development` — skills/test-driven-development/SKILL.md:6 — defined here
- `Overview` — skills/test-driven-development/SKILL.md:8 — defined here
- `When to Use` — skills/test-driven-development/SKILL.md:12 — defined here
- `Prove-It Pattern` — skills/test-driven-development/SKILL.md:15 — defined here
- `Chrome DevTools MCP` — skills/test-driven-development/SKILL.md:22 — used here
- `Browser Testing` — skills/test-driven-development/SKILL.md:22 — defined here
- `Discover the Stack First` — skills/test-driven-development/SKILL.md:24 — defined here
- `The TDD Cycle` — skills/test-driven-development/SKILL.md:38 — defined here
- `RED` — skills/test-driven-development/SKILL.md:41 — defined here
- `GREEN` — skills/test-driven-development/SKILL.md:41 — defined here
- `REFACTOR` — skills/test-driven-development/SKILL.md:41 — defined here
- `The Prove-It Pattern` — skills/test-driven-development/SKILL.md:96 — defined here
- `The Test Pyramid` — skills/test-driven-development/SKILL.md:144 — defined here
- `E2E Tests` — skills/test-driven-development/SKILL.md:150 — defined here
- `Integration Tests` — skills/test-driven-development/SKILL.md:153 — defined here
- `Unit Tests` — skills/test-driven-development/SKILL.md:156 — defined here
- `The Beyonce Rule` — skills/test-driven-development/SKILL.md:161 — defined here
- `Beyonce Rule` — skills/test-driven-development/SKILL.md:161 — defined here
- `Test Sizes` — skills/test-driven-development/SKILL.md:163 — defined here
- `Small` — skills/test-driven-development/SKILL.md:169 — defined here
- `Medium` — skills/test-driven-development/SKILL.md:170 — defined here
- `Large` — skills/test-driven-development/SKILL.md:171 — defined here
- `Decision Guide` — skills/test-driven-development/SKILL.md:175 — defined here
- `Writing Good Tests` — skills/test-driven-development/SKILL.md:188 — defined here
- `Test State, Not Interactions` — skills/test-driven-development/SKILL.md:190 — defined here
- `DAMP Over DRY in Tests` — skills/test-driven-development/SKILL.md:211 — defined here
- `DAMP` — skills/test-driven-development/SKILL.md:211 — defined here
- `DRY` — skills/test-driven-development/SKILL.md:211 — used here
- `Prefer Real Implementations Over Mocks` — skills/test-driven-development/SKILL.md:234 — defined here
- `Arrange-Act-Assert Pattern` — skills/test-driven-development/SKILL.md:248 — defined here
- `Arrange-Act-Assert` — skills/test-driven-development/SKILL.md:248 — defined here
- `One Assertion Per Concept` — skills/test-driven-development/SKILL.md:266 — defined here
- `Name Tests Descriptively` — skills/test-driven-development/SKILL.md:282 — defined here
- `Test Anti-Patterns to Avoid` — skills/test-driven-development/SKILL.md:301 — defined here
- `Browser Testing with DevTools` — skills/test-driven-development/SKILL.md:312 — defined here
- `The DevTools Debugging Workflow` — skills/test-driven-development/SKILL.md:316 — defined here
- `Security Boundaries` — skills/test-driven-development/SKILL.md:337 — defined here
- `When to Use Subagents for Testing` — skills/test-driven-development/SKILL.md:343 — defined here
- `See Also` — skills/test-driven-development/SKILL.md:359 — defined here
- `Common Rationalizations` — skills/test-driven-development/SKILL.md:363 — defined here
- `Red Flags` — skills/test-driven-development/SKILL.md:375 — defined here
- `Verification` — skills/test-driven-development/SKILL.md:387 — defined here

## Structure
- `# Test-Driven Development` — skills/test-driven-development/SKILL.md:6
- `## Overview` — skills/test-driven-development/SKILL.md:8
- `## When to Use` — skills/test-driven-development/SKILL.md:12
- `## Discover the Stack First` — skills/test-driven-development/SKILL.md:24
- `## The TDD Cycle` — skills/test-driven-development/SKILL.md:38
- `### Step 1: RED — Write a Failing Test` — skills/test-driven-development/SKILL.md:49
- `### Step 2: GREEN — Make It Pass` — skills/test-driven-development/SKILL.md:67
- `### Step 3: REFACTOR — Clean Up` — skills/test-driven-development/SKILL.md:85
- `## The Prove-It Pattern (Bug Fixes)` — skills/test-driven-development/SKILL.md:96
- `## The Test Pyramid` — skills/test-driven-development/SKILL.md:144
- `### Test Sizes (Resource Model)` — skills/test-driven-development/SKILL.md:163
- `### Decision Guide` — skills/test-driven-development/SKILL.md:175
- `## Writing Good Tests` — skills/test-driven-development/SKILL.md:188
- `### Test State, Not Interactions` — skills/test-driven-development/SKILL.md:190
- `### DAMP Over DRY in Tests` — skills/test-driven-development/SKILL.md:211
- `### Prefer Real Implementations Over Mocks` — skills/test-driven-development/SKILL.md:234
- `### Use the Arrange-Act-Assert Pattern` — skills/test-driven-development/SKILL.md:248
- `### One Assertion Per Concept` — skills/test-driven-development/SKILL.md:266
- `### Name Tests Descriptively` — skills/test-driven-development/SKILL.md:282
- `## Test Anti-Patterns to Avoid` — skills/test-driven-development/SKILL.md:301
- `## Browser Testing with DevTools` — skills/test-driven-development/SKILL.md:312
- `### The DevTools Debugging Workflow` — skills/test-driven-development/SKILL.md:316
- `### What to Check` — skills/test-driven-development/SKILL.md:326
- `### Security Boundaries` — skills/test-driven-development/SKILL.md:337
- `## When to Use Subagents for Testing` — skills/test-driven-development/SKILL.md:343
- `## See Also` — skills/test-driven-development/SKILL.md:359
- `## Common Rationalizations` — skills/test-driven-development/SKILL.md:363
- `## Red Flags` — skills/test-driven-development/SKILL.md:375
- `## Verification` — skills/test-driven-development/SKILL.md:387

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction — "test-driven-development" — README.md:363 — README.md:363 and CLAUDE.md:23 classify test-driven-development under Build, whereas skills/using-agent-skills/SKILL.md:180 categorizes it under Verify.

## Observations
Introduces the 'Beyonce Rule' ("If you liked it, you should have put a test on it"), the 'Prove-It Pattern' for bug reproduction, test resource sizing (Small/Medium/Large), subagent isolation for writing tests independently of fixes, and browser testing using Chrome DevTools MCP with explicit security boundaries treating runtime content as untrusted data.

## Context cost
16,483 bytes (~4,200 tokens). Invokes `browser-testing-with-devtools` (10,812 bytes) and loads `references/testing-patterns.md` (7,460 bytes).
