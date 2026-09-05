---
package: matt
path: external/tdd.md
type: external-doc
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
verified: 2026-09-05 quote-check+coverage
---

# external/tdd.md

## Purpose — required, verbatim
> "The rules of the red-green-refactor loop." — external/tdd.md:24

The page lede expands on what the skill does:
> "builds a feature or fixes a bug test-first: one failing test, then just enough code to pass it, then the next behaviour. It carries the standards that make that loop produce tests worth keeping: what a good test is, where tests go, what mocks are for, and the three anti-patterns that quietly ruin a suite." — external/tdd.md:25

## Design intent — required
Serves as the public web documentation and conceptual guide for Matt Pocock's `tdd` skill on `aihero.dev/skills-tdd`. It articulates the standards, boundaries, and trade-offs of test-driven development tailored for coding agents, establishing that `tdd` is a reference rather than an executable driver workflow. It anchors the discipline around three core tenets: red-green cycles (dropping the traditional refactor phase in favor of dedicated post-build review), vertical slicing via tracer bullets to avoid imaginary bulk tests, and pre-agreed public seams confirmed before writing test code to prevent over-testing internals. It explicitly warns against three suite-ruining anti-patterns (implementation-coupled, tautological, and horizontal slicing) and restricts mocking to external system boundaries. Furthermore, it clarifies its position in the wider skill chain (driven by `implement`, seeded with seams from `to-spec`, verified and refactored by `code-review`, and speaking the vocabulary of `codebase-design`) while documenting field issues such as agent compliance defaults and the open gap regarding when a change is worth the TDD loop at all. Without this page, developers and AI agents would lack the rationale for why refactoring was extracted, how seams must be agreed prior to testing, and where `tdd` sits within the full implementation pipeline.

## Phase — required
cross-phase

Categorized under Reference Skills on aihero.dev, functioning as a shared reference methodology across phases rather than a standalone scheduled phase ("is the engine inside the build step of the main chain, rather than a step of its own:" — external/tdd.md:67).

## Inputs — required
- Task invocation: "building a feature or fixing a bug test-first, or when you say" — external/tdd.md:28
- Concrete behaviour definition: "there is a concrete behaviour to build, with an input and an observable output" — external/tdd.md:29
- Pre-agreed test seams: "Before any test exists, it names the public boundaries it intends to test at and stops for your confirmation" — external/tdd.md:26
- Candidate seam trade-offs: "ask the agent for the trade-offs before answering" — external/tdd.md:46
- Prerequisites: `codebase-design` — external/tdd.md:33 ("needs to be installed." — external/tdd.md:33)
- Repository test policy configuration: "Configure this in your" — external/tdd.md:50 `CLAUDE.md` — external/tdd.md:50

## Outputs — required
none

Direct file outputs: none ("writes no files of its own." — external/tdd.md:33).
When consulted during test-driven execution, the rules produce candidate seams ("It stops and names the seams it intends to test at, and waits, before any test file exists." — external/tdd.md:59) and incremental test-code cycles ("One test appears, goes red, gets just enough code to pass, and only then does the next test appear, not a batch of tests followed by a batch of code." — external/tdd.md:60).

## Invokes — required
- skill implement — external/tdd.md:26
- skill to-spec — external/tdd.md:30
- skill codebase-design — external/tdd.md:30
- skill code-review — external/tdd.md:36
- skill grill-with-docs — external/tdd.md:68
- skill to-tickets — external/tdd.md:68
- skill ask-matt — external/tdd.md:69

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `tdd` — external/tdd.md:25 — defined here
- `red-green-refactor` — external/tdd.md:24 — used here
- `red-green` — external/tdd.md:36 — defined here
- `vertical slice` — external/tdd.md:37 — defined here
- `tracer bullet` — external/tdd.md:37 — defined here
- `horizontal slicing` — external/tdd.md:37 — defined here
- `seam` — external/tdd.md:38 — defined here
- `pre-agreed seam` — external/tdd.md:38 — defined here
- `anti-patterns` — external/tdd.md:39 — defined here
- `implementation-coupled` — external/tdd.md:40 — defined here
- `tautological` — external/tdd.md:40 — defined here
- `reference` — external/tdd.md:26 — defined here
- `driver` — external/tdd.md:26 — used here
- `session` — external/tdd.md:26 — used here
- `spec` — external/tdd.md:30 — used here
- `ticket` — external/tdd.md:30 — used here
- `tickets` — external/tdd.md:30 — used here
- `model` — external/tdd.md:48 — used here
- `system boundaries` — external/tdd.md:41 — defined here
- `stateless` — external/tdd.md:33 — defined here
- `refactor` — external/tdd.md:44 — used here
- `refactoring` — external/tdd.md:36 — used here
- `Fowler smell baseline` — external/tdd.md:54 — used here
- `issue graph` — external/tdd.md:56 — used here
- `CLAUDE.md` — external/tdd.md:31 — used here
- `build step` — external/tdd.md:67 — used here
- `to-spec` — external/tdd.md:30 — used here
- `codebase-design` — external/tdd.md:30 — used here
- `implement` — external/tdd.md:30 — used here
- `code-review` — external/tdd.md:36 — used here
- `ask-matt` — external/tdd.md:69 — used here
- `grill-with-docs` — external/tdd.md:68 — used here
- `to-tickets` — external/tdd.md:68 — used here
- `Reference Skills` — external/tdd.md:5 — used here
- `The Main Flow` — external/tdd.md:5 — used here
- `Shaping` — external/tdd.md:5 — used here
- `Upkeep` — external/tdd.md:5 — used here
- `Productivity Skills` — external/tdd.md:5 — used here

## Structure
- The /tdd Skill
- What it does
- When to reach for it
- Prerequisites
- The loop, and the seam it runs at
- Common questions
- It's working if
- Where it fits
- Install the skills
- Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/tdd.md:44 — The skill description and trigger phrases advertise "red-green-refactor", but the refactor step was removed from the skill in June 2026: "Because the refactor step was removed and the description was not. The removal was deliberate: agents essentially never did it, and keeping implementation and review in separate sessions works better." — external/tdd.md:44 (tracked in open issue #589).
- doc-drift — external/tdd.md:31 — Open gap regarding TDD applicability (tracked in open issue #746): "Run it on a change with no independent source of truth to assert against and you get a test that restates the implementation" — external/tdd.md:31, noting that the skill decides where seams go but not whether a change warrants the loop.
- doc-drift — external/tdd.md:46 — Candidate seam selection friction (tracked in open issue #607): "This is the most-reported friction with the skill" — external/tdd.md:46 where seams are presented as bare names without trade-offs or failure-mode clarity.
- orphan — external/tdd.md:1 — Snapshot of external documentation webpage hosted at https://aihero.dev/skills-tdd; not directly loaded or invoked as an executable skill within the repository tree.

## Observations
- Reference vs Driver separation: `tdd` is designed as a passive reference documenting the rules and standards of the loop rather than an active driver: "It writes no test at a seam you have not agreed to first." — external/tdd.md:26.
- Separation of refactoring: Refactoring was removed from the red-green loop in June 2026: "Write the failing test, then only enough code to pass it. No anticipating the test after next. There is no refactor phase:" — external/tdd.md:36, moving Fowler smell cleanups to `code-review`.
- Extraction of architectural vocabulary: Interface design concepts were migrated in v1.0 to `codebase-design`: "in v1.0, generalised so several skills share one vocabulary." — external/tdd.md:54.
- Agent habituation and compliance: Models frequently struggle to follow red-before-green strictly: "It happens. One user pushed the" — external/tdd.md:48 model and observed "I knew the skill said" — external/tdd.md:48 'one test at a time, watch it fail for the right reason', but defaulted to implementation first.
- Playwright / slow-test guidance: End-to-end browser tests are discouraged for initial TDD iterations: "Browser tests are slow enough that the red-green feedback loop stops paying for itself" — external/tdd.md:50.
- Single-ticket scope boundary: The skill lacks awareness of adjacent issues in the project graph: "Run against one ticket, it will happily propose work that belongs to a sibling ticket, because it has no view of the rest of the issue graph" — external/tdd.md:56.
- Lifecycle chain positioning: In the full lifecycle pipeline ("grill-with-docs → to-spec → to-tickets → implement → code-review" — external/tdd.md:68), `tdd` acts as "is the engine inside the build step of the main chain, rather than a step of its own:" — external/tdd.md:67.

## Context cost
360633 bytes (~90150 tokens total for the complete HTML document; substantive article markdown content is ~10453 bytes / ~2613 tokens). 0 executable runtime dependencies loaded when read.
