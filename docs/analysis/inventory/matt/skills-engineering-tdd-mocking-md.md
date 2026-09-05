---
package: matt
path: skills/engineering/tdd/mocking.md
type: skill
bytes: 1481
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/tdd/mocking.md, sha256: 3ceb807fdf4a47d6a93d4d9a891e5ba6d362a6247bd08adc451feebfc17361ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/tdd/mocking.md

## Purpose — required, verbatim
> "Mock at **system boundaries** only:" — skills/engineering/tdd/mocking.md:3

## Design intent — required
Provides clear, prescriptive architectural rules and coding heuristics for test isolation and mocking in automated testing. Establishes the boundary rule: mock strictly at external system boundaries (external APIs, time/randomness, and occasionally databases or filesystems) while strictly forbidding mocks of internal collaborators, owned classes, or anything within developer control. Details design-for-testability patterns including dependency injection and SDK-style narrow interfaces instead of generic multiplexed fetchers, preventing fragile tests coupled to internal implementation details.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill tdd — skills/engineering/tdd/SKILL.md:16

## Concepts named — required, verbatim
- `system boundaries` — skills/engineering/tdd/mocking.md:3 — defined here
- `External APIs` — skills/engineering/tdd/mocking.md:5 — used here
- `Databases` — skills/engineering/tdd/mocking.md:6 — used here
- `Time/randomness` — skills/engineering/tdd/mocking.md:7 — used here
- `File system` — skills/engineering/tdd/mocking.md:8 — used here
- `Internal collaborators` — skills/engineering/tdd/mocking.md:13 — used here
- `dependency injection` — skills/engineering/tdd/mocking.md:20 — defined here
- `SDK-style interfaces` — skills/engineering/tdd/mocking.md:37 — defined here
- `generic fetchers` — skills/engineering/tdd/mocking.md:37 — defined here

## Structure
- `# When to Mock` — skills/engineering/tdd/mocking.md:1
- `## Designing for Mockability` — skills/engineering/tdd/mocking.md:16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Succinct architectural guide using contrasting TypeScript code snippets (Easy vs Hard to mock; GOOD vs BAD fetcher interfaces) to illustrate how interface design dictates mock complexity.
- Directly supports the TDD anti-pattern prohibition against implementation-coupled tests.

## Context cost
1481 bytes (~370 tokens). Standalone reference loaded on demand by `tdd`.
