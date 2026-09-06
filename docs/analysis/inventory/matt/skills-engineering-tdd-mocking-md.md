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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/tdd/mocking.md

## Purpose — required, verbatim
> "Mock at **system boundaries** only:" — skills/engineering/tdd/mocking.md:3

## Design intent — required
Defines rules and interface design patterns for mocking in tests. Establishes the boundary principle: mock exclusively at system boundaries (external APIs, time/randomness, databases, file systems) and never mock internal collaborators, classes, modules, or code under developer control. Prescribes two key design techniques to ensure mockability without polluting tests with conditional logic: dependency injection and fine-grained SDK-style interfaces rather than monolithic generic fetchers.

## Phase — required
cross-phase

## Inputs — required
Code under test and external dependencies at system boundaries.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference mocking.md — skills/engineering/tdd/SKILL.md:16

## Concepts named — required, verbatim
- `system boundaries` — skills/engineering/tdd/mocking.md:3 — defined here
- `mock` — skills/engineering/tdd/mocking.md:3 — defined here
- `External APIs` — skills/engineering/tdd/mocking.md:5 — used here
- `Databases` — skills/engineering/tdd/mocking.md:6 — used here
- `Time/randomness` — skills/engineering/tdd/mocking.md:7 — defined here
- `File system` — skills/engineering/tdd/mocking.md:8 — defined here
- `Internal collaborators` — skills/engineering/tdd/mocking.md:13 — used here
- `Designing for Mockability` — skills/engineering/tdd/mocking.md:16 — defined here
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
Clear anti-mocking stance on internal architecture. Contrasts SDK-style APIs (single-purpose typed endpoints returning distinct shapes) with generic fetchers (which force conditional assertions and complex branches into test mock setups).

## Context cost
1481 bytes, 60 lines, approximately 350 tokens.
