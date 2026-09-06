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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/tdd/tests.md

## Purpose — required, verbatim
> "Test through real interfaces, not mocks of internal parts." — skills/engineering/tdd/tests.md:5

## Design intent — required
Reference document providing worked positive and negative examples of test designs. Illustrates integration-style tests that verify observable behavior through public APIs without internal mocks, and contrasts them with bad tests: implementation-detail tests (coupled to private methods, internal collaborators, or call counts) and tautological tests (where assertions recompute expected values using production logic). Serves as concrete guidance accompanying the `tdd` skill.

## Phase — required
cross-phase

## Inputs — required
Code under test and public interface contracts.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference tests.md — skills/engineering/tdd/SKILL.md:16

## Concepts named — required, verbatim
- `Good Tests` — skills/engineering/tdd/tests.md:3 — defined here
- `Integration-style` — skills/engineering/tdd/tests.md:5 — defined here
- `observable behavior` — skills/engineering/tdd/tests.md:8 — defined here
- `Bad Tests` — skills/engineering/tdd/tests.md:25 — defined here
- `Implementation-detail tests` — skills/engineering/tdd/tests.md:27 — defined here
- `internal collaborators` — skills/engineering/tdd/tests.md:40 — used here
- `private methods` — skills/engineering/tdd/tests.md:41 — used here
- `call counts/order` — skills/engineering/tdd/tests.md:42 — used here
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
Uses TypeScript Jest/Vitest style code snippets demonstrating side-by-side good and bad implementations for checkout flows, user persistence, and cart total calculation.

## Context cost
2214 bytes, 78 lines, approximately 500 tokens.
