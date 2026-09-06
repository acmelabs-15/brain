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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/tdd/SKILL.md

## Purpose — required, verbatim
> "TDD is the red → green loop. This skill is the reference that makes that loop produce tests worth keeping: what a good test is, where tests go, the anti-patterns, and the rules of the loop." — skills/engineering/tdd/SKILL.md:8

## Design intent — required
Defines the engineering discipline and standards for test-driven development. Rather than driving an interactive workflow on its own, it functions as a normative reference consulted before and during implementation loops by developers or parent driver skills (such as `/implement`). Mandates that tests verify behavior at pre-agreed public seams rather than targeting internals, requires explicit user agreement on seams before writing tests, identifies three common testing anti-patterns (implementation-coupled, tautological, and horizontal slicing), and strictly excludes refactoring from the red-green loop, delegating refactoring to the review stage.

## Phase — required
cross-phase

## Inputs — required
Codebase context, `CONTEXT.md` domain language glossary, relevant ADRs, public interface definitions, and user-confirmed testing seams.

## Outputs — required
Failing test followed by minimal implementation code written to pass it at confirmed seams; integration-style test suites verified through public interfaces.

## Invokes — required
- reference tests.md — skills/engineering/tdd/SKILL.md:16
- reference mocking.md — skills/engineering/tdd/SKILL.md:16
- skill codebase-design — skills/engineering/tdd/SKILL.md:26
- skill code-review — skills/engineering/tdd/SKILL.md:38
- doc CONTEXT.md — skills/engineering/tdd/SKILL.md:10

## Invoked by — required
- doc README.md — README.md:156
- doc README.md — README.md:201
- doc README.md — README.md:209
- skill implement — skills/engineering/implement/SKILL.md:9
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:26
- doc docs/engineering/tdd.md — docs/engineering/tdd.md:3
- doc docs/engineering/code-review.md — docs/engineering/code-review.md:15

## Concepts named — required, verbatim
- `red-green-refactor` — skills/engineering/tdd/SKILL.md:3 — used here
- `integration tests` — skills/engineering/tdd/SKILL.md:3 — used here
- `red → green loop` — skills/engineering/tdd/SKILL.md:8 — defined here
- `CONTEXT.md` — skills/engineering/tdd/SKILL.md:10 — used here
- `ADRs` — skills/engineering/tdd/SKILL.md:10 — used here
- `public interfaces` — skills/engineering/tdd/SKILL.md:14 — defined here
- `seam` — skills/engineering/tdd/SKILL.md:20 — defined here
- `pre-agreed seams` — skills/engineering/tdd/SKILL.md:22 — defined here
- `codebase-design` — skills/engineering/tdd/SKILL.md:26 — used here
- `Implementation-coupled` — skills/engineering/tdd/SKILL.md:30 — defined here
- `Tautological` — skills/engineering/tdd/SKILL.md:31 — defined here
- `Horizontal slicing` — skills/engineering/tdd/SKILL.md:32 — defined here
- `vertical slices` — skills/engineering/tdd/SKILL.md:32 — defined here
- `tracer bullet` — skills/engineering/tdd/SKILL.md:32 — defined here
- `Red before green` — skills/engineering/tdd/SKILL.md:36 — defined here
- `One slice at a time` — skills/engineering/tdd/SKILL.md:37 — defined here
- `code-review` — skills/engineering/tdd/SKILL.md:38 — used here

## Structure
- `# Test-Driven Development` — skills/engineering/tdd/SKILL.md:6
- `## What a good test is` — skills/engineering/tdd/SKILL.md:12
- `## Seams: where tests go` — skills/engineering/tdd/SKILL.md:18
- `## Anti-patterns` — skills/engineering/tdd/SKILL.md:28
- `## Rules of the loop` — skills/engineering/tdd/SKILL.md:34

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction — skills/engineering/tdd/SKILL.md:38: Description triggers on "red-green-refactor" (line 3) while line 38 explicitly commands "Refactoring is not part of the loop. It belongs to the review stage (see the `code-review` skill), not the red → green implementation cycle."

## Observations
Treats TDD as a specification technique: tests should survive internal refactoring without changes because they exercise external behavior rather than internal classes. Enforces vertical slicing (one tracer-bullet cycle at a time) over horizontal slicing.

## Context cost
3549 bytes, 39 lines, approximately 850 tokens. Loads companion files `tests.md` (2214 bytes) and `mocking.md` (1481 bytes), bringing total immediate context to ~7244 bytes (~1750 tokens).
