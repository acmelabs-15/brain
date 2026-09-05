---
package: addy
path: agents/test-engineer.md
type: agent
bytes: 3275
unit: inv-addy-3
deprecated: false
aliases: []
memo_inputs:
  - {path: agents/test-engineer.md, sha256: c4acde91d6307d88515387344a129a2d0679134e587596c3517d73faffcd5aa6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# agents/test-engineer.md

## Purpose — required, verbatim
> "QA engineer specialized in test strategy, test writing, and coverage analysis. Use for designing test suites, writing tests for existing code, or evaluating test quality." — agents/test-engineer.md:3

## Design intent — required
A persona agent acting as a QA Engineer specialized in test strategy, authoring high-signal test suites, and identifying coverage gaps. Guides testing to the lowest appropriate level (unit, integration, E2E), enforces the Prove-It Pattern for bug repros, mandates testing a five-scenario matrix (happy path, empty input, boundary values, error paths, concurrency), and outputs a structured Test Coverage Analysis report with prioritized recommendations.

## Phase — required
addy:Review

## Inputs — required
Code implementation under test, existing test suites and fixtures, bug reports, and testing requirements.

## Outputs — required
Executable test cases and test suites, or a structured coverage report:
> "## Test Coverage Analysis" — agents/test-engineer.md:64

## Invokes — required
- doc docs/agents.md — agents/test-engineer.md:95

## Invoked by — required
- agent test-engineer — AGENTS.md:80
- agent test-engineer — commands/ship.toml:16
- agent test-engineer — docs/agents.md:9

## Concepts named — required, verbatim
- `Test Engineer` — agents/test-engineer.md:6 — defined here
- `Analyze Before Writing` — agents/test-engineer.md:12 — defined here
- `Test at the Right Level` — agents/test-engineer.md:20 — defined here
- `Prove-It Pattern` — agents/test-engineer.md:30 — defined here
- `Test Coverage Analysis` — agents/test-engineer.md:64 — defined here
- `Unit test` — agents/test-engineer.md:23 — used here
- `Integration test` — agents/test-engineer.md:24 — used here
- `E2E test` — agents/test-engineer.md:25 — used here
- `Arrange → Act → Assert` — agents/test-engineer.md:42 — used here

## Structure
- Frontmatter metadata (name, description) — agents/test-engineer.md:1-4
- Title and Role Statement — agents/test-engineer.md:6-8
- Approach (Analyze Before Writing, Test at the Right Level, Follow the Prove-It Pattern for Bugs, Write Descriptive Tests, Cover These Scenarios) — agents/test-engineer.md:10-58
- Output Format (Test Coverage Analysis template) — agents/test-engineer.md:59-79
- Rules — agents/test-engineer.md:81-90
- Composition — agents/test-engineer.md:91-96

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Bug reproduction rule: "Write a test that demonstrates the bug (must FAIL with current code)" — agents/test-engineer.md:33.
- Key testing rule: "Test behavior, not implementation details" — agents/test-engineer.md:83.
- Quality maxim: "A test that never fails is as useless as a test that always fails" — agents/test-engineer.md:89.

## Context cost
3275 bytes, ~750 tokens. Standalone agent prompt; references docs/agents.md for orchestration constraints.
