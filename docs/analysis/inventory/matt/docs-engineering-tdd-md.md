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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/tdd.md

## Purpose — required, verbatim
> "`tdd` builds a feature or fixes a bug test-first: one failing test, then just enough code to pass it, then the next behaviour. It carries the standards that make that loop produce tests worth keeping: what a good test is, where tests go, what mocks are for, and the three anti-patterns that quietly ruin a suite." — docs/engineering/tdd.md:3

## Design intent — required
Acts as a stateless methodological reference defining the rules of test-driven development for AI agents and implementers. Mandates strict vertical slicing (tracer bullets) and public boundary test seams confirmed with the user prior to writing any tests. Explicitly isolates testing to observable behaviors rather than internal implementation details, confines mocking strictly to external system boundaries, and warns against three suite-ruining anti-patterns: implementation coupling, tautological assertions, and horizontal slicing. Deliberately decouples refactoring from implementation, assigning refactoring to code-review.

## Phase — required
matt:engineering

## Inputs — required
Concrete behavior specifications with defined inputs and observable outputs, pre-agreed test seams (from `to-spec` or interactive agreement), and interface design vocabulary from `codebase-design`.

## Outputs — required
Stateless guidance resulting in minimal failing tests, implementation code passing those tests, and capability-focused test suites that survive internal refactorings.

## Invokes — required
- doc implement — docs/engineering/tdd.md:5
- doc to-spec — docs/engineering/tdd.md:16
- doc codebase-design — docs/engineering/tdd.md:17
- doc code-review — docs/engineering/tdd.md:31
- doc ask-matt — docs/engineering/tdd.md:94

## Invoked by — required
none

## Concepts named — required, verbatim
- `tdd` — docs/engineering/tdd.md:3 — defined here
- `session` — docs/engineering/tdd.md:5 — used here
- `agent` — docs/engineering/tdd.md:9 — used here
- `spec` — docs/engineering/tdd.md:18 — used here
- `tickets` — docs/engineering/tdd.md:18 — used here
- `stateless` — docs/engineering/tdd.md:25 — defined here
- `Red-green` — docs/engineering/tdd.md:31 — defined here
- `Vertical slice` — docs/engineering/tdd.md:33 — defined here
- `tracer bullet` — docs/engineering/tdd.md:33 — defined here
- `seam` — docs/engineering/tdd.md:35 — defined here
- `Implementation-coupled` — docs/engineering/tdd.md:41 — defined here
- `Tautological` — docs/engineering/tdd.md:42 — defined here
- `Horizontal slicing` — docs/engineering/tdd.md:43 — defined here
- `model` — docs/engineering/tdd.md:59 — used here

## Structure
- ## What it does — docs/engineering/tdd.md:1
- ## When to reach for it — docs/engineering/tdd.md:7
- ## Prerequisites — docs/engineering/tdd.md:23
- ## The loop, and the seam it runs at — docs/engineering/tdd.md:27
- ## Common questions — docs/engineering/tdd.md:47
- ## It's working if — docs/engineering/tdd.md:77
- ## Where it fits — docs/engineering/tdd.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/engineering/tdd.md:49-51 documents open issue #589 where the trigger phrase advertises "red-green-refactor", but the refactor step was removed in June 2026 and moved to `code-review`.
- `other` · docs/engineering/tdd.md:53-56 documents open issue #607 where prompts list candidate test seams by bare name without trade-off analysis.
- `other` · docs/engineering/tdd.md:73-75 documents open issue #129 where `tdd` lacks global awareness of sibling tickets in the issue graph.

## Observations
Documents the removal of the traditional "refactor" phase from the agentic TDD loop because models rarely performed it effectively during implementation; refactoring was explicitly delegated to a distinct subsequent `code-review` session. Distinguishes `tdd` (methodological reference) from `implement` (the execution driver loop).

## Context cost
10453 bytes (~2610 tokens).
