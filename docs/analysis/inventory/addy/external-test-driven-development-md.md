---
package: addy
path: external/test-driven-development.md
type: external-doc
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
verified: 2026-09-05 quote-check+coverage
---

# external/test-driven-development.md

## Purpose — required, verbatim
> "Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought." — external/test-driven-development.md:5

## Design intent — required
Web documentation and distribution catalog page for Addy Osmani's `test-driven-development` skill on `skills.addy.ie`. It serves developers and autonomous AI agents seeking to discover and install the skill, understand its core methodology (Red-Green-Refactor, test pyramid, test sizes, DAMP over DRY, the Beyoncé Rule), identify its placement in the Build phase alongside the `/test` and `/build` commands, obtain one-line CLI installation commands via the Vercel open skills CLI (for this individual skill or the complete pack), inspect a standardized 6-section skill anatomy, and navigate to related skills in the Build phase (`incremental-implementation`, `context-engineering`, `source-driven-development`). Without this page, users browsing the public catalog would lack an indexed web portal to evaluate the skill's scope, copy installation commands, and review its relationship to the broader agent-skills lifecycle before inspecting repository source code.

## Phase — required
addy:Build (verbatim: "Build phase" — external/test-driven-development.md:5)

## Inputs — required
- Triggering conditions: "Implementing logic, fixing bugs, or changing behavior." — external/test-driven-development.md:5
- Upstream skill definition: "https://github.com/addyosmani/agent-skills/blob/main/skills/test-driven-development/SKILL.md" — external/test-driven-development.md:10
- No runtime arguments, filesystem inputs, or environment variables are consumed by this static web documentation snapshot.

## Outputs — required
none

## Invokes — required
- command /test — external/test-driven-development.md:5
- doc SKILL.md — external/test-driven-development.md:11
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
- `the Beyoncé Rule` — external/test-driven-development.md:5 — used here
- `browser testing` — external/test-driven-development.md:5 — used here
- `skills CLI` — external/test-driven-development.md:6 — used here
- `Overview` — external/test-driven-development.md:10 — used here
- `When to Use` — external/test-driven-development.md:10 — used here
- `Process` — external/test-driven-development.md:10 — used here
- `Rationalizations` — external/test-driven-development.md:10 — used here
- `Red Flags` — external/test-driven-development.md:10 — used here
- `Verification` — external/test-driven-development.md:10 — used here
- `SKILL.md` — external/test-driven-development.md:11 — used here
- `/build` — external/test-driven-development.md:12 — used here
- `incremental-implementation` — external/test-driven-development.md:12 — used here
- `context-engineering` — external/test-driven-development.md:12 — used here
- `source-driven-development` — external/test-driven-development.md:12 — used here
- `AI coding agents` — external/test-driven-development.md:13 — used here
- `senior-engineer` — external/test-driven-development.md:13 — used here
- `lifecycle` — external/test-driven-development.md:14 — used here

## Structure
- # test-driven-development — external/test-driven-development.md:5
- ## Install just this skill — external/test-driven-development.md:5
- ## How this skill is structured — external/test-driven-development.md:8
  - 01 Overview — external/test-driven-development.md:10
  - 02 When to Use — external/test-driven-development.md:10
  - 03 Process — external/test-driven-development.md:10
  - 04 Rationalizations — external/test-driven-development.md:10
  - 05 Red Flags — external/test-driven-development.md:10
  - 06 Verification — external/test-driven-development.md:10
- ### Build phase — external/test-driven-development.md:12
- ## More in the Build phase — external/test-driven-development.md:12
  - ### incremental-implementation — external/test-driven-development.md:12
  - ### context-engineering — external/test-driven-development.md:12
  - ### source-driven-development — external/test-driven-development.md:12
- ### Product — external/test-driven-development.md:15
- ### Setup — external/test-driven-development.md:15
- ### Resources — external/test-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/test-driven-development.md:9 — The page claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/test-driven-development.md:9 presenting a standardized 6-section schema ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"), but repository file skills/test-driven-development/SKILL.md has no "Process" section (instead using "Discover the Stack First", "The TDD Cycle", "The Prove-It Pattern (Bug Fixes)", "The Testing Pyramid", "Testing Guidelines", and "Browser Testing with Chrome DevTools MCP"), titles rationalizations "Common Rationalizations (And Why They're Wrong)", and appends a "See Also" section not listed on the web anatomy.
- doc-drift — external/test-driven-development.md:5 — External page description adds testing concepts ("Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought." — external/test-driven-development.md:5) that are not present in skills/test-driven-development/SKILL.md:3 description.
- doc-drift — external/test-driven-development.md:5 — The page collapses triggering conditions to "Implementing logic, fixing bugs, or changing behavior." — external/test-driven-development.md:5, omitting the negative trigger "When NOT to use: Pure configuration changes, documentation updates, or static content changes that have no behavioral impact." from skills/test-driven-development/SKILL.md:20.
- doc-drift — external/test-driven-development.md:5 — Page header displays command badge "/test" — external/test-driven-development.md:5 while sidebar specifies Command "/build" — external/test-driven-development.md:12 for the Build phase.
- orphan — external/test-driven-development.md:1 — Static web documentation snapshot is an orphan not referenced or linked by any in-scope repository file in sources/addy/.

## Observations
- Provides single-skill and package-wide CLI installation commands: "npx skills add addyosmani/agent-skills --skill test-driven-development" — external/test-driven-development.md:8 and "npx skills add addyosmani/agent-skills" — external/test-driven-development.md:8.
- Canonical URL is "https://skills.addy.ie/skills/test-driven-development/" — external/test-driven-development.md:1.
- Links to related Build phase skills "incremental-implementation" — external/test-driven-development.md:12, "context-engineering" — external/test-driven-development.md:12, and "source-driven-development" — external/test-driven-development.md:12.
- Emphasizes testing rigor: "Tests are proof, not an afterthought." — external/test-driven-development.md:5.

## Context cost
26483 bytes, approximately 6620 tokens. Static HTML documentation snapshot not intended for execution context.
