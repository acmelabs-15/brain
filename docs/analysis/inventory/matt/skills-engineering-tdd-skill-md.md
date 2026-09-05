---
package: matt
path: skills/engineering/tdd/SKILL.md
type: skill
bytes: 3549
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/tdd/SKILL.md

## Purpose — required, verbatim
> "TDD is the red → green loop. This skill is the reference that makes that loop produce tests worth keeping: what a good test is, where tests go, the anti-patterns, and the rules of the loop." — skills/engineering/tdd/SKILL.md:8

## Design intent — required
The canonical reference specification for test-driven development in matt's skill suite. Provides behavioral rules, interface boundary definitions, and suite protection guidelines for coding agents. Operates as a stateless reference consulted during execution rather than an autonomous driver session. Establishes the requirement of testing exclusively at pre-agreed public seams, running red-first vertical slices with tracer bullets, and explicitly exiling the refactoring step from the TDD loop into the downstream `code-review` skill.

## Phase — required
none

## Inputs — required
- Codebase context, `CONTEXT.md` (domain glossary), and relevant ADRs — skills/engineering/tdd/SKILL.md:10
- Pre-agreed public test seams confirmed with the user — skills/engineering/tdd/SKILL.md:22

## Outputs — required
- Failing test followed by minimal implementation code passing the test — skills/engineering/tdd/SKILL.md:36-37

## Invokes — required
- reference tests.md — skills/engineering/tdd/SKILL.md:16
- reference mocking.md — skills/engineering/tdd/SKILL.md:16
- skill codebase-design — skills/engineering/tdd/SKILL.md:26
- skill code-review — skills/engineering/tdd/SKILL.md:38

## Invoked by — required
- skill implement — skills/engineering/implement/SKILL.md:9
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:26

## Concepts named — required, verbatim
- `tdd` — skills/engineering/tdd/SKILL.md:2 — defined here
- `red-green-refactor` — skills/engineering/tdd/SKILL.md:3 — used here
- `integration tests` — skills/engineering/tdd/SKILL.md:3 — defined here
- `Test-Driven Development` — skills/engineering/tdd/SKILL.md:6 — defined here
- `red → green loop` — skills/engineering/tdd/SKILL.md:8 — defined here
- `seam` — skills/engineering/tdd/SKILL.md:20 — defined here
- `pre-agreed seams` — skills/engineering/tdd/SKILL.md:22 — defined here
- `module` — skills/engineering/tdd/SKILL.md:26 — used here
- `interface` — skills/engineering/tdd/SKILL.md:26 — used here
- `depth` — skills/engineering/tdd/SKILL.md:26 — used here
- `adapter` — skills/engineering/tdd/SKILL.md:26 — used here
- `leverage` — skills/engineering/tdd/SKILL.md:26 — used here
- `locality` — skills/engineering/tdd/SKILL.md:26 — used here
- `Implementation-coupled` — skills/engineering/tdd/SKILL.md:30 — defined here
- `Tautological` — skills/engineering/tdd/SKILL.md:31 — defined here
- `Horizontal slicing` — skills/engineering/tdd/SKILL.md:32 — defined here
- `vertical slices` — skills/engineering/tdd/SKILL.md:32 — defined here
- `tracer bullet` — skills/engineering/tdd/SKILL.md:32 — defined here
- `Red before green` — skills/engineering/tdd/SKILL.md:36 — defined here
- `One slice at a time` — skills/engineering/tdd/SKILL.md:37 — defined here

## Structure
- Test-Driven Development
- What a good test is
- Seams: where tests go
- Anti-patterns
- Rules of the loop

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · skills/engineering/tdd/SKILL.md:3 · Frontmatter description includes "red-green-refactor" as a trigger phrase even though line 38 explicitly removes refactoring from the loop.

## Observations
Treats seams as social contracts: no test may be written at an unconfirmed seam. Defers architectural module and interface vocabulary to `codebase-design`.

## Context cost
3549 bytes, 39 lines, ~890 tokens. Referencing `tests.md` (2214 bytes) and `mocking.md` (1481 bytes) brings total context to ~7244 bytes (~1810 tokens).
