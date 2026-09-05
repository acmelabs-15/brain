---
package: addy
path: external/test-driven-development.md
type: doc
bytes: 26483
unit: inv-addy-32
deprecated: false
aliases: []
memo_inputs:
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/test-driven-development.md

## Purpose — required, verbatim
> "Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought." — external/test-driven-development.md:5

## Design intent — required
Provides the published web documentation page for the `test-driven-development` skill on `skills.addy.ie`. It delivers a human- and agent-facing catalog overview, CLI installation commands via `npx skills add`, the standardized six-part skill anatomy, direct link to the canonical `SKILL.md` source, and navigation within the Build phase alongside sibling skills (`incremental-implementation`, `context-engineering`, `source-driven-development`).

## Phase — required
addy:Build

## Inputs — required
- Trigger condition: "Implementing logic, fixing bugs, or changing behavior." — external/test-driven-development.md:5
- Target skill source link: `skills/test-driven-development/SKILL.md` — external/test-driven-development.md:10
- Installation command: "npx skills add addyosmani/agent-skills --skill test-driven-development" — external/test-driven-development.md:8

## Outputs — required
none

## Invokes — required
- skill test-driven-development — external/test-driven-development.md:5
- command /test — external/test-driven-development.md:5
- command /build — external/test-driven-development.md:12
- skill incremental-implementation — external/test-driven-development.md:12
- skill context-engineering — external/test-driven-development.md:12
- skill source-driven-development — external/test-driven-development.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `test-driven-development` — external/test-driven-development.md:5 — defined here
- `Build phase` — external/test-driven-development.md:5 — used here
- `/test` — external/test-driven-development.md:5 — used here
- `Red-Green-Refactor` — external/test-driven-development.md:5 — used here
- `test pyramid` — external/test-driven-development.md:5 — used here
- `test sizes` — external/test-driven-development.md:5 — used here
- `DAMP over DRY` — external/test-driven-development.md:5 — used here
- `Beyoncé Rule` — external/test-driven-development.md:5 — used here
- `browser testing` — external/test-driven-development.md:5 — used here
- `skills CLI` — external/test-driven-development.md:6 — used here
- `anatomy` — external/test-driven-development.md:9 — defined here
- `Overview` — external/test-driven-development.md:10 — used here
- `When to Use` — external/test-driven-development.md:10 — used here
- `Process` — external/test-driven-development.md:10 — used here
- `Rationalizations` — external/test-driven-development.md:10 — used here
- `Red Flags` — external/test-driven-development.md:10 — used here
- `Verification` — external/test-driven-development.md:10 — used here
- `/build` — external/test-driven-development.md:12 — used here
- `incremental-implementation` — external/test-driven-development.md:12 — used here
- `context-engineering` — external/test-driven-development.md:12 — used here
- `source-driven-development` — external/test-driven-development.md:12 — used here
- `The lifecycle` — external/test-driven-development.md:15 — used here
- `Loop engineering` — external/test-driven-development.md:15 — used here

## Structure
- "test-driven-development" — external/test-driven-development.md:5
- "Install just this skill" — external/test-driven-development.md:5
- "How this skill is structured" — external/test-driven-development.md:8
- "Build phase" — external/test-driven-development.md:12
- "More in the Build phase" — external/test-driven-development.md:12
- "Product" — external/test-driven-development.md:15
- "Setup" — external/test-driven-development.md:15
- "Resources" — external/test-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/test-driven-development.md:5: External summary ("Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought.") drifts from repo skill description in `skills/test-driven-development/SKILL.md:3` ("Drives development with tests. Use when implementing any logic, fixing any bug, or changing any behavior. Use when you need to prove that code works, when a bug report arrives, or when you're about to modify existing functionality.").
- doc-drift · external/test-driven-development.md:9: Page asserts "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." with six numbered sections (01 Overview to 06 Verification), but `skills/test-driven-development/SKILL.md` contains additional structural sections ("Discover the Stack First", "The TDD Cycle", "The Prove-It Pattern (Bug Fixes)", "The Test Pyramid", "Writing Good Tests", "Test Anti-Patterns to Avoid", "Browser Testing with DevTools", "When to Use Subagents for Testing", "See Also") not reflected in the six-part template anatomy.
- internal-contradiction · external/test-driven-development.md:5, 12: Page header displays command badge for `/test` (line 5) whereas the Build phase sidebar card lists `Command /build` (line 12) for this skill's detail view.

## Observations
- Astro-rendered public catalog snapshot from `https://skills.addy.ie/skills/test-driven-development/`.
- Documents standalone installation via `npx skills add addyosmani/agent-skills --skill test-driven-development` and full pack install via `npx skills add addyosmani/agent-skills` (line 8).
- Highlights core testing heuristics in metadata: "Red-Green-Refactor", "test pyramid (80/15/5)", "test sizes", "DAMP over DRY", "the Beyoncé Rule", and "browser testing" (line 5).
- References canonical repository source at `skills/test-driven-development/SKILL.md` (line 10).

## Context cost
26483 bytes (~6620 tokens). Web documentation snapshot; not directly included in agent execution contexts.
