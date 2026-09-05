---
package: matt
path: skills/engineering/tdd/tests.md
type: skill
bytes: 2214
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/tdd/tests.md, sha256: 859f9e592c188fda4fc7277dd180e4ce9c7a2e13f6efe1f6f29eccc9d28c106a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/tdd/tests.md

## Purpose — required, verbatim
> "Test through real interfaces, not mocks of internal parts." — skills/engineering/tdd/tests.md:5

## Design intent — required
Reference document providing concrete positive and negative test patterns for the `tdd` skill. Establishes standards for integration-style testing via public APIs that describe observable behavior ("what") rather than internal mechanics ("how"). Dissects the structural flaws of implementation-detail tests (mocking internal collaborators, private method testing, call-count assertions, side-channel database verification) and tautological tests (recomputing expected values using the same logic as the implementation under test).

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
- `Good Tests` — skills/engineering/tdd/tests.md:3 — defined here
- `Integration-style` — skills/engineering/tdd/tests.md:5 — defined here
- `Bad Tests` — skills/engineering/tdd/tests.md:25 — defined here
- `Implementation-detail tests` — skills/engineering/tdd/tests.md:27 — defined here
- `Tautological tests` — skills/engineering/tdd/tests.md:63 — defined here

## Structure
- Good and Bad Tests
- Good Tests
- Bad Tests

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates anti-patterns with three paired TypeScript code snippets contrasting coupled/recomputed tests against decoupled behavioral assertions with known literals.

## Context cost
2214 bytes, 78 lines, ~550 tokens. Loads no external files.
