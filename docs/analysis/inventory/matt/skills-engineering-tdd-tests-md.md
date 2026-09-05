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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/tdd/tests.md

## Purpose — required, verbatim
> "Test through real interfaces, not mocks of internal parts." — skills/engineering/tdd/tests.md:5

## Design intent — required
Supplies concrete code examples contrasting good tests with bad tests in automated testing suites. Emphasizes integration-style tests that test observable behavior via public APIs and survive refactoring. Contrasts them with implementation-detail tests that mock internal collaborators or assert on call counts/order, and tautological tests whose expected assertions recompute the implementation logic.

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
- `Integration-style` — skills/engineering/tdd/tests.md:5 — defined here
- `public API` — skills/engineering/tdd/tests.md:20 — used here
- `Implementation-detail tests` — skills/engineering/tdd/tests.md:27 — defined here
- `Mocking internal collaborators` — skills/engineering/tdd/tests.md:40 — used here
- `Testing private methods` — skills/engineering/tdd/tests.md:41 — used here
- `Tautological tests` — skills/engineering/tdd/tests.md:63 — defined here

## Structure
- `# Good and Bad Tests` — skills/engineering/tdd/tests.md:1
- `## Good Tests` — skills/engineering/tdd/tests.md:3
- `## Bad Tests` — skills/engineering/tdd/tests.md:25

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Features three clear paired TypeScript code comparisons: testing behavior vs mocking call counts, querying database directly vs reading via public getter, and recomputing expected sums vs asserting on literal numbers.
- Context cost:
2214 bytes (~554 tokens). Reference doc loaded on demand by `tdd`.
