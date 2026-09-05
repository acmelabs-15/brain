---
package: matt
path: docs/engineering/tdd.md
type: doc
bytes: 10453
unit: inv-matt-6
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/tdd.md

## Purpose — required, verbatim
> "builds a feature or fixes a bug test-first: one failing test, then just enough code to pass it, then the next behaviour. It carries the standards that make that loop produce tests worth keeping" — docs/engineering/tdd.md:3

## Design intent — required
Documentation detailing the methodology and rules for the `tdd` reference skill. It establishes test-first development standards (strict red-green vertical slicing, tracer bullets, pre-agreed public test seams, and mocking only at external boundaries) while actively guarding against three suite-ruining anti-patterns: implementation coupling, tautological assertions, and horizontal slicing. Operates as a stateless reference consulted by human engineers or the `implement` skill rather than executing an autonomous driving loop.

## Phase — required
none

## Inputs — required
Concrete behaviour descriptions with defined inputs and observable outputs; pre-agreed test seams (from `to-spec` or conversational prompt); tickets and specs.

## Outputs — required
none

## Invokes — required
- skill to-spec — docs/engineering/tdd.md:16
- skill codebase-design — docs/engineering/tdd.md:17
- skill implement — docs/engineering/tdd.md:18
- skill code-review — docs/engineering/tdd.md:31
- skill ask-matt — docs/engineering/tdd.md:94

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `tdd` — docs/engineering/tdd.md:3 — defined here
- `session` — docs/engineering/tdd.md:5 — used here
- `agent` — docs/engineering/tdd.md:9 — used here
- `red-green-refactor` — docs/engineering/tdd.md:9 — used here
- `spec` — docs/engineering/tdd.md:18 — used here
- `tickets` — docs/engineering/tdd.md:18 — used here
- `stateless` — docs/engineering/tdd.md:25 — defined here
- `Red-green` — docs/engineering/tdd.md:31 — defined here
- `Vertical slice` — docs/engineering/tdd.md:33 — defined here
- `tracer bullet` — docs/engineering/tdd.md:33 — defined here
- `horizontal slicing` — docs/engineering/tdd.md:33 — defined here
- `Pre-agreed seam` — docs/engineering/tdd.md:35 — defined here
- `Implementation-coupled` — docs/engineering/tdd.md:41 — defined here
- `Tautological` — docs/engineering/tdd.md:42 — defined here
- `Horizontal slicing` — docs/engineering/tdd.md:43 — defined here
- `model` — docs/engineering/tdd.md:59 — used here

## Structure
- What it does
- When to reach for it
- Prerequisites
- The loop, and the seam it runs at
- Common questions
- It's working if
- Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · docs/engineering/tdd.md:21 · Lacks criteria to decide whether a change is worth the TDD loop, causing tautological tests on glue code or straight CRUD (issue #746).
- doc-drift · docs/engineering/tdd.md:51 · Skill trigger description says "red-green-refactor" even though the refactor step was removed from the loop in favor of code-review (issue #589).
- doc-drift · docs/engineering/tdd.md:55 · Prompts user for test seams by label name only without trade-offs or diagnostic context (issue #607).
- internal-contradiction · docs/engineering/tdd.md:75 · Lacks visibility into sibling tickets, proposing out-of-scope work belonging to other tickets in the issue graph (issue #129).

## Observations
Documents the deliberate removal of the "refactor" phase from TDD in June 2026 because coding agents rarely performed it effectively; refactoring was relocated into the distinct `code-review` session. Emphasizes that `tdd` is a reference specification rather than a driver, providing rules for `implement`.

## Context cost
10453 bytes, ~2500 tokens. Loads no external files.
