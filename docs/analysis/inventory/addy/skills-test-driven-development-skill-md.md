---
package: addy
path: skills/test-driven-development/SKILL.md
type: skill
bytes: 16483
unit: inv-addy-46
aliases: []
memo_inputs:
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/test-driven-development/SKILL.md

## Purpose — required, verbatim
> "Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality." — skills/test-driven-development/SKILL.md:3

## Design intent — required
Enforces rigorous test-first software engineering for AI agents, establishing tests as executable, falsifiable proof of correctness rather than post-hoc validation. It specifies the classical Red-Green-Refactor cycle (writing a failing test first, implementing minimal code to pass, then refactoring under test coverage), the Prove-It Pattern for bug fixes (mandating bug reproduction via failing test prior to fix attempts), the Test Pyramid (80% unit, 15% integration, 5% E2E), a tripartite resource constraint model (Small, Medium, Large), the "Beyonce Rule" ("If you liked it, you should have put a test on it"), DAMP over DRY in test construction, state-based over interaction-based assertions, preference for real implementations over mocks, and browser runtime verification via Chrome DevTools MCP. Without this skill, agents produce unchecked code with regressions, over-mocked tests that pass while production fails, and unverified assumptions.

## Phase — required
addy:Build ("Build" — README.md:363; CLAUDE.md:23) / addy:Verify ("Verify" — skills/using-agent-skills/SKILL.md:180)

## Inputs — required
- Logic specifications, bug reports, and behavior modification requests — skills/test-driven-development/SKILL.md:14-18, 98
- Build tool manifests and configs: `package.json`, `pom.xml`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`, `Makefile` — skills/test-driven-development/SKILL.md:28
- Checked-in execution wrappers: `./gradlew`, `./mvnw`, `make test` — skills/test-driven-development/SKILL.md:29
- Existing test suites, conventions, and CI workflow configurations — skills/test-driven-development/SKILL.md:30-32
- Browser runtime state via Chrome DevTools MCP (DOM, console, network, computed styles) — skills/test-driven-development/SKILL.md:314, 328-335

## Outputs — required
- Failing reproduction tests (RED) demonstrating expected behavior or bugs — skills/test-driven-development/SKILL.md:49-65, 124-131
- Minimal passing implementation code (GREEN) — skills/test-driven-development/SKILL.md:67-83, 133-140
- Refactored code with passing test suites (REFACTOR) — skills/test-driven-development/SKILL.md:85-94
- Full test suite execution reports matching repository commands — skills/test-driven-development/SKILL.md:392

## Invokes — required
- skill browser-testing-with-devtools — skills/test-driven-development/SKILL.md:341
- reference references/testing-patterns.md — skills/test-driven-development/SKILL.md:361

## Invoked by — required
- command /test — commands/test.toml:4
- command /test — .claude/commands/test.md:5
- command /test — .gemini/commands/test.toml:4
- command /build — commands/build.toml:4
- command /build — .claude/commands/build.md:5
- command /build — .gemini/commands/build.toml:4
- skill spec-driven-development — skills/spec-driven-development/SKILL.md:202
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:30
- skill incremental-implementation — skills/incremental-implementation/SKILL.md:201
- skill debugging-and-error-recovery — skills/debugging-and-error-recovery/SKILL.md:75
- skill constraint-driven-development — skills/constraint-driven-development/SKILL.md:10
- skill doubt-driven-development — skills/doubt-driven-development/SKILL.md:227
- reference references/testing-patterns.md — references/testing-patterns.md:3
- doc README.md — README.md:250
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:26

## Concepts named — required, verbatim
- `Test-Driven Development` — skills/test-driven-development/SKILL.md:6 — defined here
- `Discover the Stack First` — skills/test-driven-development/SKILL.md:24 — defined here
- `The TDD Cycle` — skills/test-driven-development/SKILL.md:38 — defined here
- `RED` — skills/test-driven-development/SKILL.md:41 — defined here
- `GREEN` — skills/test-driven-development/SKILL.md:41 — defined here
- `REFACTOR` — skills/test-driven-development/SKILL.md:41 — defined here
- `The Prove-It Pattern` — skills/test-driven-development/SKILL.md:96 — defined here
- `The Test Pyramid` — skills/test-driven-development/SKILL.md:144 — defined here
- `The Beyonce Rule` — skills/test-driven-development/SKILL.md:161 — defined here
- `Test Sizes` — skills/test-driven-development/SKILL.md:163 — defined here
- `Small` — skills/test-driven-development/SKILL.md:169 — defined here
- `Medium` — skills/test-driven-development/SKILL.md:170 — defined here
- `Large` — skills/test-driven-development/SKILL.md:171 — defined here
- `Decision Guide` — skills/test-driven-development/SKILL.md:175 — defined here
- `Unit test` — skills/test-driven-development/SKILL.md:179 — defined here
- `Integration test` — skills/test-driven-development/SKILL.md:182 — defined here
- `E2E test` — skills/test-driven-development/SKILL.md:185 — defined here
- `Writing Good Tests` — skills/test-driven-development/SKILL.md:188 — defined here
- `Test State, Not Interactions` — skills/test-driven-development/SKILL.md:190 — defined here
- `DAMP Over DRY in Tests` — skills/test-driven-development/SKILL.md:211 — defined here
- `Prefer Real Implementations Over Mocks` — skills/test-driven-development/SKILL.md:234 — defined here
- `Arrange-Act-Assert Pattern` — skills/test-driven-development/SKILL.md:248 — defined here
- `One Assertion Per Concept` — skills/test-driven-development/SKILL.md:266 — defined here
- `Name Tests Descriptively` — skills/test-driven-development/SKILL.md:282 — defined here
- `Test Anti-Patterns to Avoid` — skills/test-driven-development/SKILL.md:301 — defined here
- `Browser Testing with DevTools` — skills/test-driven-development/SKILL.md:312 — defined here
- `The DevTools Debugging Workflow` — skills/test-driven-development/SKILL.md:316 — defined here
- `browser-testing-with-devtools` — skills/test-driven-development/SKILL.md:341 — used here
- `When to Use Subagents for Testing` — skills/test-driven-development/SKILL.md:343 — defined here
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
- cross-file-contradiction — skills/test-driven-development/SKILL.md:1: Contradictory lifecycle phase assignment across files. Classified under `Build` in `README.md:363` and `CLAUDE.md:23` (and invoked as build workflow in `commands/build.toml:4`), but classified under `Verify` in `skills/using-agent-skills/SKILL.md:180` and `/test` in `commands/test.toml:4`.
- doc-drift — skills/test-driven-development/SKILL.md:3: Frontmatter description ("Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality." — skills/test-driven-development/SKILL.md:3) focuses on bug reproduction and behavior change triggers, whereas `README.md:250` summarizes it as "Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, Beyonce Rule, browser testing".

## Observations
- Defines the subagent delegation pattern for testing ("For complex bug fixes, spawn a subagent to write the reproduction test" — skills/test-driven-development/SKILL.md:345) to ensure reproduction tests are written without forward knowledge of the fix.
- Integrates runtime verification for browser applications via Chrome DevTools MCP (DOM, network, console, computed styles, screenshots), treating browser-rendered content strictly as untrusted data rather than agent instructions (lines 337-340).
- Formalizes a rationalization rebuttal against repetitive test invocation ("After a clean test run, repeating the same command adds nothing unless the code has changed since." — skills/test-driven-development/SKILL.md:373).

## Context cost
16,483 bytes (~4,120 tokens). When invoking `browser-testing-with-devtools` (12,982 bytes) and referencing `references/testing-patterns.md` (10,950 bytes), total context reaches ~40,415 bytes (~10,100 tokens).
