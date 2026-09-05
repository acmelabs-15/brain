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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/tdd/mocking.md

## Purpose — required, verbatim
> "Mock at **system boundaries** only:" — skills/engineering/tdd/mocking.md:3

## Design intent — required
Reference guide defining the boundaries and design practices for mocking within test-driven development. Restricts mocking exclusively to external system boundaries (external APIs, databases, time/randomness, and file systems) while strictly forbidding mocking of internal collaborators, modules, or controlled classes. Outlines two structural techniques for designing mockable code: dependency injection (passing clients into functions) and SDK-style interfaces with discrete typed functions rather than generic fetch wrappers with conditional logic.

## Phase — required
none

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
- `Internal collaborators` — skills/engineering/tdd/mocking.md:13 — defined here
- `Mockability` — skills/engineering/tdd/mocking.md:16 — defined here
- `dependency injection` — skills/engineering/tdd/mocking.md:20 — defined here
- `SDK-style interfaces` — skills/engineering/tdd/mocking.md:37 — defined here
- `Type safety` — skills/engineering/tdd/mocking.md:59 — used here

## Structure
- When to Mock
- Designing for Mockability

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides paired TypeScript code samples illustrating dependency injection versus inline instantiation, and specific SDK method objects versus generic conditional fetchers.

## Context cost
1481 bytes, 60 lines, ~370 tokens. Loads no external files.
