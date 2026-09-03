---
package: addy
path: skills/test-driven-development/SKILL.md
type: skill
bytes: 16483
unit: inv-addy-13
---

# skills/test-driven-development/SKILL.md

## Purpose — required, verbatim
> "Write a failing test before writing the code that makes it pass. For bug fixes, reproduce the bug with a test before attempting a fix. Tests are proof — "seems right" is not done. A codebase with good tests is an AI agent's superpower; a codebase without tests is a liability." — skills/test-driven-development/SKILL.md:10

## Design intent — required
Establishes an empirical, test-first engineering discipline (RED-GREEN-REFACTOR) and the Prove-It pattern for bug reproduction to prevent AI agents from hallucinating correctness, claiming unverified completion, or introducing regressions. It structures test suites via the Test Pyramid (80% unit, 15% integration, 5% E2E) and resource sizing (Small/Medium/Large), enforces DAMP over DRY and state assertions over interaction testing, restrains over-mocking, integrates runtime browser verification via Chrome DevTools MCP, and prescribes subagent isolation for writing unbiased reproduction tests.

## Phase — required
addy:Build

## Inputs — required
- Codebase and test suite structure (build files, checked-in wrappers, test frameworks, naming conventions) — skills/test-driven-development/SKILL.md:26-32
- Bug reports or new feature specifications / behavioral requirements — skills/test-driven-development/SKILL.md:14-18, 98, 101
- Discovered repository commands (focused-test command for iteration, full-suite command for gating) — skills/test-driven-development/SKILL.md:34, 392
- Optional runtime browser state (DOM structure, console errors, network payloads, computed styles, performance traces) via Chrome DevTools MCP — skills/test-driven-development/SKILL.md:314-336

## Outputs — required
- Failing reproduction tests (RED / Prove-It step) — skills/test-driven-development/SKILL.md:49-65, 104-107, 125-131
- Minimal passing implementation code (GREEN step) — skills/test-driven-development/SKILL.md:67-83, 110-113, 134-139
- Refactored implementation code preserving passing test status (REFACTOR step) — skills/test-driven-development/SKILL.md:85-94
- Full test suite verification run confirming absence of regressions — skills/test-driven-development/SKILL.md:116, 392

## Invokes — required
- skill browser-testing-with-devtools — skills/test-driven-development/SKILL.md:22, 341
- reference references/testing-patterns.md — skills/test-driven-development/SKILL.md:361
- tool Chrome DevTools MCP — skills/test-driven-development/SKILL.md:22, 314-336

## Invoked by — required
- command .claude/commands/test.md — .claude/commands/test.md:5
- command commands/test.toml — commands/test.toml:4
- command commands/build.toml — commands/build.toml:4
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:202
- skill skills/incremental-implementation/SKILL.md — skills/incremental-implementation/SKILL.md:201
- skill skills/debugging-and-error-recovery/SKILL.md — skills/debugging-and-error-recovery/SKILL.md:75
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:30, 137, 155, 164, 180
- skill skills/doubt-driven-development/SKILL.md — skills/doubt-driven-development/SKILL.md:227
- skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:10, 309
- reference references/testing-patterns.md — references/testing-patterns.md:3
- doc docs/getting-started.md — docs/getting-started.md:51, 62, 113, 114, 115, 133, 162
- doc docs/adoption-guide.md — docs/adoption-guide.md:41, 50, 90
- doc docs/gemini-cli-setup.md — docs/gemini-cli-setup.md:54, 75, 103
- doc docs/opencode-setup.md — docs/opencode-setup.md:116, 159, 170
- doc docs/copilot-setup.md — docs/copilot-setup.md:10, 13
- doc docs/cursor-setup.md — docs/cursor-setup.md:23, 44, 83, 138, 158
- doc docs/windsurf-setup.md — docs/windsurf-setup.md:11, 33
- doc docs/skill-anatomy.md — docs/skill-anatomy.md:164
- doc CLAUDE.md — CLAUDE.md:23
- doc AGENTS.md — AGENTS.md:26, 42
- doc README.md — README.md:58, 250, 363

## Concepts named — required, verbatim
- `test-driven-development` — skills/test-driven-development/SKILL.md:2 — defined here
- `Test-Driven Development` — skills/test-driven-development/SKILL.md:6 — defined here
- `Prove-It Pattern` — skills/test-driven-development/SKILL.md:15, 96 — defined here
- `Chrome DevTools MCP` — skills/test-driven-development/SKILL.md:22, 314, 320 — used here
- `Browser Testing` — skills/test-driven-development/SKILL.md:22, 312 — defined here
- `Discover the Stack First` — skills/test-driven-development/SKILL.md:24 — defined here
- `TDD Cycle` — skills/test-driven-development/SKILL.md:38 — defined here
- `RED` — skills/test-driven-development/SKILL.md:41, 46, 49, 54 — defined here
- `GREEN` — skills/test-driven-development/SKILL.md:41, 46, 67, 72 — defined here
- `REFACTOR` — skills/test-driven-development/SKILL.md:41, 85 — defined here
- `Test Pyramid` — skills/test-driven-development/SKILL.md:144, 146 — defined here
- `E2E Tests` — skills/test-driven-development/SKILL.md:150, 171, 185 — defined here
- `Integration Tests` — skills/test-driven-development/SKILL.md:153, 182 — defined here
- `Unit Tests` — skills/test-driven-development/SKILL.md:156, 179 — defined here
- `Beyonce Rule` — skills/test-driven-development/SKILL.md:161 — defined here
- `Test Sizes` — skills/test-driven-development/SKILL.md:163 — defined here
- `Resource Model` — skills/test-driven-development/SKILL.md:163 — defined here
- `Small` — skills/test-driven-development/SKILL.md:169, 173, 179 — defined here
- `Medium` — skills/test-driven-development/SKILL.md:170, 182 — defined here
- `Large` — skills/test-driven-development/SKILL.md:171, 185 — defined here
- `Test State, Not Interactions` — skills/test-driven-development/SKILL.md:190 — defined here
- `state-based` — skills/test-driven-development/SKILL.md:195 — defined here
- `interaction-based` — skills/test-driven-development/SKILL.md:202 — defined here
- `DAMP Over DRY in Tests` — skills/test-driven-development/SKILL.md:211 — defined here
- `DRY` — skills/test-driven-development/SKILL.md:212 — used here
- `DAMP` — skills/test-driven-development/SKILL.md:212, 216 — defined here
- `Prefer Real Implementations Over Mocks` — skills/test-driven-development/SKILL.md:234 — defined here
- `test double` — skills/test-driven-development/SKILL.md:235 — defined here
- `Real implementation` — skills/test-driven-development/SKILL.md:240 — defined here
- `Fake` — skills/test-driven-development/SKILL.md:241 — defined here
- `Stub` — skills/test-driven-development/SKILL.md:242 — defined here
- `Mock (interaction)` — skills/test-driven-development/SKILL.md:243 — defined here
- `Arrange-Act-Assert Pattern` — skills/test-driven-development/SKILL.md:248 — defined here
- `One Assertion Per Concept` — skills/test-driven-development/SKILL.md:266 — defined here
- `Name Tests Descriptively` — skills/test-driven-development/SKILL.md:282 — defined here
- `Test Anti-Patterns to Avoid` — skills/test-driven-development/SKILL.md:301 — defined here
- `Testing implementation details` — skills/test-driven-development/SKILL.md:305 — defined here
- `Flaky tests` — skills/test-driven-development/SKILL.md:306 — defined here
- `Testing framework code` — skills/test-driven-development/SKILL.md:307 — defined here
- `Snapshot abuse` — skills/test-driven-development/SKILL.md:308 — defined here
- `No test isolation` — skills/test-driven-development/SKILL.md:309 — defined here
- `Mocking everything` — skills/test-driven-development/SKILL.md:310 — defined here
- `DevTools Debugging Workflow` — skills/test-driven-development/SKILL.md:316 — defined here
- `browser-testing-with-devtools` — skills/test-driven-development/SKILL.md:341 — used here
- `Subagents for Testing` — skills/test-driven-development/SKILL.md:343 — defined here
- `testing-patterns.md` — skills/test-driven-development/SKILL.md:361 — used here
- `Common Rationalizations` — skills/test-driven-development/SKILL.md:363 — defined here
- `test debt` — skills/test-driven-development/SKILL.md:372 — defined here
- `Red Flags` — skills/test-driven-development/SKILL.md:375 — defined here
- `Verification` — skills/test-driven-development/SKILL.md:387 — defined here

## Structure
- `# Test-Driven Development` (line 6)
- `## Overview` (line 8)
- `## When to Use` (line 12)
- `## Discover the Stack First` (line 24)
- `## The TDD Cycle` (line 38)
  - `### Step 1: RED — Write a Failing Test` (line 49)
  - `### Step 2: GREEN — Make It Pass` (line 67)
  - `### Step 3: REFACTOR — Clean Up` (line 85)
- `## The Prove-It Pattern (Bug Fixes)` (line 96)
- `## The Test Pyramid` (line 144)
  - `### Test Sizes (Resource Model)` (line 163)
  - `### Decision Guide` (line 175)
- `## Writing Good Tests` (line 188)
  - `### Test State, Not Interactions` (line 190)
  - `### DAMP Over DRY in Tests` (line 211)
  - `### Prefer Real Implementations Over Mocks` (line 234)
  - `### Use the Arrange-Act-Assert Pattern` (line 248)
  - `### One Assertion Per Concept` (line 266)
  - `### Name Tests Descriptively` (line 282)
- `## Test Anti-Patterns to Avoid` (line 301)
- `## Browser Testing with DevTools` (line 312)
  - `### The DevTools Debugging Workflow` (line 316)
  - `### What to Check` (line 327)
  - `### Security Boundaries` (line 337)
- `## When to Use Subagents for Testing` (line 343)
- `## See Also` (line 359)
- `## Common Rationalizations` (line 363)
- `## Red Flags` (line 375)
- `## Verification` (line 387)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` / `cross-file-contradiction` · `README.md:363, CLAUDE.md:23, AGENTS.md:42` vs `skills/using-agent-skills/SKILL.md:180` · README.md, CLAUDE.md, and AGENTS.md categorize `test-driven-development` under `# Build`, whereas `using-agent-skills/SKILL.md:180` classifies it under `Verify`.
- `doc-drift` · `skills/test-driven-development/SKILL.md:361` vs `docs/skill-anatomy.md:111-119` · `test-driven-development/SKILL.md:361` references `../../references/testing-patterns.md`. As acknowledged in `docs/skill-anatomy.md:117`, single-skill installation tools (`npx addy-skills add test-driven-development`) copy only `skills/test-driven-development/`, leaving shared root `references/` behind and causing broken markdown links at runtime.

## Observations
- Subagent Separation for Test Writing (Line 343): Introduces an architectural separation of concerns where a fresh subagent writes reproduction tests without knowledge of the fix, preventing confirmation bias and ensuring tests fail on genuine defects.
- Resource Model Test Sizing (Lines 163-174): Uses execution environment and boundary constraints (process, I/O, network, multi-machine) to classify Small, Medium, and Large tests rather than arbitrary line counts.
- Browser Security Boundary (Line 337): Treats all runtime browser DOM, console, and network content as untrusted input to defend against prompt-injection attacks.
- Prohibition Against Superfluous Re-runs (Lines 373, 385, 398): Directly tackles the agent anti-pattern of running clean test suites multiple times in a row without code changes.

## Context cost
File size: 16,483 bytes (~4,120 tokens). Transitive cost when loaded with referenced reference `references/testing-patterns.md` (7,460 bytes): 23,943 bytes (~5,985 tokens). Transitive cost if additionally loading `browser-testing-with-devtools` (12,710 bytes): 36,653 bytes (~9,163 tokens).
