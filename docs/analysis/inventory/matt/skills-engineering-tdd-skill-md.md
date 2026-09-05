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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/tdd/SKILL.md

## Purpose — required, verbatim
> "TDD is the red → green loop. This skill is the reference that makes that loop produce tests worth keeping: what a good test is, where tests go, the anti-patterns, and the rules of the loop. Every section applies on every cycle: consult them before and during the loop, not after." — skills/engineering/tdd/SKILL.md:8

## Design intent — required
Codifies test-driven development as a disciplined, reference-guided methodology for coding agents. Mandates testing exclusively at pre-agreed public boundaries ("seams") to prevent agents from testing internal implementation details. Enforces a strict red-to-green loop executed in vertical tracer-bullet slices (one test, minimal passing code, repeat) and explicitly excludes refactoring from the inner loop, delegating refactoring to code review. Codifies three destructive agent testing anti-patterns (implementation-coupled tests, tautological tests that duplicate code logic, and horizontal slicing that writes bulk imagined tests up front).

## Phase — required
cross-phase

## Inputs — required
Target feature or bug to implement, domain language from `CONTEXT.md`, architectural ADRs, and pre-agreed public testing seams confirmed with the user or inherited from upstream specification (`to-spec`).

## Outputs — required
Failing automated tests turned passing via minimal implementations, structured vertical slices at confirmed seams.

## Invokes — required
- doc tests.md — skills/engineering/tdd/SKILL.md:16
- doc mocking.md — skills/engineering/tdd/SKILL.md:16
- skill codebase-design — skills/engineering/tdd/SKILL.md:26
- skill code-review — skills/engineering/tdd/SKILL.md:38

## Invoked by — required
- doc README.md — README.md:156
- doc README.md — README.md:209
- doc skills/engineering/README.md — skills/engineering/README.md:27
- skill implement — skills/engineering/implement/SKILL.md:9
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:26
- config .claude-plugin/plugin.json — .claude-plugin/plugin.json:28

## Concepts named — required, verbatim
- `tdd` — skills/engineering/tdd/SKILL.md:2 — defined here
- `Test-Driven Development` — skills/engineering/tdd/SKILL.md:6 — defined here
- `red → green loop` — skills/engineering/tdd/SKILL.md:8 — defined here
- `CONTEXT.md` — skills/engineering/tdd/SKILL.md:10 — used here
- `ADRs` — skills/engineering/tdd/SKILL.md:10 — used here
- `public interfaces` — skills/engineering/tdd/SKILL.md:14 — defined here
- `seam` — skills/engineering/tdd/SKILL.md:20 — defined here
- `pre-agreed seams` — skills/engineering/tdd/SKILL.md:22 — defined here
- `codebase-design` — skills/engineering/tdd/SKILL.md:26 — used here
- `Anti-patterns` — skills/engineering/tdd/SKILL.md:28 — defined here
- `Implementation-coupled` — skills/engineering/tdd/SKILL.md:30 — defined here
- `Tautological` — skills/engineering/tdd/SKILL.md:31 — defined here
- `Horizontal slicing` — skills/engineering/tdd/SKILL.md:32 — defined here
- `vertical slices` — skills/engineering/tdd/SKILL.md:32 — defined here
- `tracer bullet` — skills/engineering/tdd/SKILL.md:32 — defined here
- `Red before green` — skills/engineering/tdd/SKILL.md:36 — defined here
- `One slice at a time` — skills/engineering/tdd/SKILL.md:37 — defined here
- `Refactoring is not part of the loop` — skills/engineering/tdd/SKILL.md:38 — defined here

## Structure
- `# Test-Driven Development` — skills/engineering/tdd/SKILL.md:6
- `## What a good test is` — skills/engineering/tdd/SKILL.md:12
- `## Seams: where tests go` — skills/engineering/tdd/SKILL.md:18
- `## Anti-patterns` — skills/engineering/tdd/SKILL.md:28
- `## Rules of the loop` — skills/engineering/tdd/SKILL.md:34

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Excludes refactoring from the traditional red-green-refactor loop in the inner cycle, deliberately deferring refactoring to the separate `code-review` skill.
- Refers to `codebase-design` for modular design vocabulary when interface boundaries are uncertain.

## Context cost
3549 bytes (~887 tokens) for `SKILL.md`. When following `Invokes`, loads `tests.md` (2214 bytes) and `mocking.md` (1481 bytes), totaling ~7244 bytes (~1811 tokens).
