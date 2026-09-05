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
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# agents/test-engineer.md

## Purpose — required, verbatim
> "QA engineer specialized in test strategy, test writing, and coverage analysis. Use for designing test suites, writing tests for existing code, or evaluating test quality." — agents/test-engineer.md:3

## Design intent — required
Defines the persona of an experienced QA Engineer focused on test strategy and quality assurance. Promotes testing at the lowest level that captures behavior (unit vs integration vs E2E), specifies the "Prove-It Pattern" requiring a failing reproduction test before fixing a bug, establishes a 5-scenario coverage checklist (happy path, empty input, boundaries, error paths, concurrency), and outputs structured test coverage analyses.

## Phase — required
addy:Build

## Inputs — required
Code implementation under test, interfaces/public APIs, existing test suites, and bug descriptions.

## Outputs — required
Automated test suites (unit, integration, or E2E), failing bug reproduction tests, and structured Test Coverage Analysis reports (agents/test-engineer.md:63-79) with prioritized test recommendations.

## Invokes — required
- doc docs/agents.md — agents/test-engineer.md:95

## Invoked by — required
- command test-engineer — commands/ship.toml:16

## Concepts named — required, verbatim
- `test-engineer` — agents/test-engineer.md:2 — defined here
- `Test at the Right Level` — agents/test-engineer.md:20 — defined here
- `Prove-It Pattern` — agents/test-engineer.md:30 — defined here
- `Test Coverage Analysis` — agents/test-engineer.md:64 — defined here

## Structure
- # Test Engineer — agents/test-engineer.md:6
- ## Approach — agents/test-engineer.md:10
- ### 1. Analyze Before Writing — agents/test-engineer.md:12
- ### 2. Test at the Right Level — agents/test-engineer.md:20
- ### 3. Follow the Prove-It Pattern for Bugs — agents/test-engineer.md:30
- ### 4. Write Descriptive Tests — agents/test-engineer.md:37
- ### 5. Cover These Scenarios — agents/test-engineer.md:47
- ## Output Format — agents/test-engineer.md:59
- ## Rules — agents/test-engineer.md:81
- ## Composition — agents/test-engineer.md:91

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes the "Prove-It Pattern" for bug verification (agents/test-engineer.md:30-36): write a test demonstrating the bug, verify it fails on existing code, and then report the test as ready for fix implementation. Discourages snapshot testing unless every change is human-reviewed (agents/test-engineer.md:86).

## Context cost
3275 bytes, ~800 tokens.
