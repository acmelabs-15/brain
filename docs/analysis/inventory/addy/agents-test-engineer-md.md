---
package: addy
path: agents/test-engineer.md
type: agent
bytes: 3275
unit: inv-addy-3
aliases: []
memo_inputs:
  - {path: agents/test-engineer.md, sha256: c4acde91d6307d88515387344a129a2d0679134e587596c3517d73faffcd5aa6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# agents/test-engineer.md

## Purpose — required, verbatim
> "QA engineer specialized in test strategy, test writing, and coverage analysis. Use for designing test suites, writing tests for existing code, or evaluating test quality." — agents/test-engineer.md:3

## Design intent — required
Persona definition for an experienced QA Engineer specialized in test strategy, writing descriptive behavioral tests, analyzing coverage gaps, and implementing the "Prove-It Pattern" for bug verification (writing a failing test first before fixing code).

## Phase — required
addy:Verify

## Inputs — required
Source code implementations, public APIs and interfaces, existing test suites, bug reports, and coverage data.

## Outputs — required
Test suites and test files (unit, integration, E2E), and Test Coverage Analysis reports with prioritized recommendations.

## Invokes — required
- doc docs/agents.md — agents/test-engineer.md:95

## Invoked by — required
- doc test-engineer — AGENTS.md:80
- command test-engineer — commands/ship.toml:25

## Concepts named — required, verbatim
- `Test Engineer` — agents/test-engineer.md:6 — defined here
- `Analyze Before Writing` — agents/test-engineer.md:12 — defined here
- `Test at the Right Level` — agents/test-engineer.md:20 — defined here
- `Prove-It Pattern` — agents/test-engineer.md:30 — defined here
- `Arrange → Act → Assert` — agents/test-engineer.md:42 — used here
- `Test Coverage Analysis` — agents/test-engineer.md:64 — defined here

## Structure
- frontmatter (name, description)
- # Test Engineer
- ## Approach
- ### 1. Analyze Before Writing
- ### 2. Test at the Right Level
- ### 3. Follow the Prove-It Pattern for Bugs
- ### 4. Write Descriptive Tests
- ### 5. Cover These Scenarios
- ## Output Format
- ## Rules
- ## Composition

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Emphasizes testing behavior over implementation details (line 83) and notes that "A test that never fails is as useless as a test that always fails" (line 89).

## Context cost
3275 bytes (~818 tokens).
