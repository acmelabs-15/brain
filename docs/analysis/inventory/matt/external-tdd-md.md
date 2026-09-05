---
package: matt
path: external/tdd.md
type: doc
bytes: 360633
unit: inv-matt-25
deprecated: false
aliases: []
memo_inputs:
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/tdd.md

## Purpose — required, verbatim
> "The rules of the red-green-refactor loop." — external/tdd.md:24

## Design intent — required
Defines the rules of test-driven development for AI coding agents as a strict, stateless red-green loop operating at pre-agreed public boundaries. Rejects horizontal test generation (writing tests in batches before code) in favor of vertical tracer-bullet slicing where one test fails for the right reason, receives the minimal implementation to pass, and only then advances. Mandates that the agent name and confirm observable testing seams with the human prior to creating test files, confines mocking strictly to external system boundaries, and guards against three common anti-patterns: implementation coupling, tautological assertions, and horizontal slicing. Deliberately decouples refactoring from implementation, assigning refactoring to a dedicated subsequent `code-review` session.

## Phase — required
matt:Reference Skills

## Inputs — required
Concrete behavior specifications with defined inputs and observable outputs, pre-agreed test seams (either agreed in conversation or inherited from `to-spec`), and interface design vocabulary from `codebase-design`.

## Outputs — required
Capability-focused regression tests at public seams, minimal implementation code satisfying those tests, and test suites that remain resilient against internal code refactoring. Does not produce independent files or issue tracker artifacts directly (stateless methodology).

## Invokes — required
- skill codebase-design — external/tdd.md:33
- skill to-spec — external/tdd.md:30
- skill implement — external/tdd.md:26
- skill code-review — external/tdd.md:36
- skill ask-matt — external/tdd.md:69

## Invoked by — required
none

## Concepts named — required, verbatim
- `tdd` — external/tdd.md:25 — defined here
- `session` — external/tdd.md:26 — used here
- `agent` — external/tdd.md:28 — used here
- `red-green-refactor` — external/tdd.md:28 — used here
- `spec` — external/tdd.md:30 — used here
- `ticket` — external/tdd.md:30 — used here
- `stateless` — external/tdd.md:33 — defined here
- `Red-green` — external/tdd.md:36 — defined here
- `Vertical slice` — external/tdd.md:37 — defined here
- `tracer bullet` — external/tdd.md:37 — defined here
- `horizontal slicing` — external/tdd.md:37 — defined here
- `Pre-agreed seam` — external/tdd.md:38 — defined here
- `seam` — external/tdd.md:38 — defined here
- `Anti-pattern` — external/tdd.md:40 — defined here
- `Implementation-coupled` — external/tdd.md:40 — defined here
- `Tautological` — external/tdd.md:40 — defined here
- `Horizontal slicing` — external/tdd.md:40 — defined here
- `model` — external/tdd.md:48 — used here
- `CLAUDE.md` — external/tdd.md:50 — used here

## Structure
- # The /tdd Skill — external/tdd.md:24
- ## What it does — external/tdd.md:24
- ## When to reach for it — external/tdd.md:27
- ## Prerequisites — external/tdd.md:32
- ## The loop, and the seam it runs at — external/tdd.md:34
- ## Common questions — external/tdd.md:42
- ## It's working if — external/tdd.md:57
- ## Where it fits — external/tdd.md:66
- ## Install the skills — external/tdd.md:69

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/tdd.md:44: The prompt trigger phrase "red-green-refactor" advertises refactoring, but the refactor step was removed from the skill body in June 2026 and delegated to `code-review` (open issue #589).
- `doc-drift` · external/tdd.md:46: Candidate test seams are listed by bare name without explaining trade-offs or what each catches/misses, forcing arbitrary selection (open issue #607).
- `doc-drift` · external/tdd.md:31: Skill guides where seams go but does not evaluate whether a change is worth the TDD loop at all, resulting in tautological tests when run on changes lacking an independent source of truth (open issue #746).
- `doc-drift` · external/tdd.md:56: Skill operates strictly per-ticket with no view of the issue graph, proposing duplicate or out-of-order work that belongs to sibling tickets (open issue #129).

## Observations
Represents the documentation page snapshot of Matt Pocock's `/tdd` skill from `aihero.dev/skills-tdd`. Emphasizes that `tdd` is a methodological reference rather than an active driver (which is `implement`), and notes that browser and end-to-end tests should be excluded from the fast red-green loop via `CLAUDE.md` configuration.

## Context cost
360633 bytes, ~72500 tokens (HTML snapshot including full inline hydration payload).
