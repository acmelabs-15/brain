---
package: addy
path: docs/adoption-guide.md
type: doc
bytes: 11197
unit: inv-addy-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/adoption-guide.md

## Purpose — required, verbatim
> "How to roll out agent-skills depends heavily on where your codebase is in its life. A greenfield project can adopt the full lifecycle from commit one. A codebase with years of history needs an incremental path that respects what already exists, its conventions, its undocumented decisions, and its lack of test coverage in places you'd rather not touch blind." — docs/adoption-guide.md:3

## Design intent — required
Provides an architectural adoption guide differentiating rollout strategies between greenfield codebases (full lifecycle adoption from commit one) and brownfield codebases (verification-first adoption using characterization tests, context engineering, and safety gates before modification).

## Phase — required
`cross-phase`

## Inputs — required
- Codebase age, test coverage posture, established team conventions, and risk tolerance — docs/adoption-guide.md:11-18

## Outputs — required
none

## Invokes — required
- doc getting-started — docs/adoption-guide.md:5
- skill using-agent-skills — docs/adoption-guide.md:31
- skill context-engineering — docs/adoption-guide.md:32
- skill spec-driven-development — docs/adoption-guide.md:39
- skill planning-and-task-breakdown — docs/adoption-guide.md:40
- skill incremental-implementation — docs/adoption-guide.md:41
- skill test-driven-development — docs/adoption-guide.md:41
- skill code-review-and-quality — docs/adoption-guide.md:42
- skill shipping-and-launch — docs/adoption-guide.md:43
- skill git-workflow-and-versioning — docs/adoption-guide.md:51
- skill security-and-hardening — docs/adoption-guide.md:52
- skill documentation-and-adrs — docs/adoption-guide.md:53
- skill api-and-interface-design — docs/adoption-guide.md:59
- skill frontend-ui-engineering — docs/adoption-guide.md:60
- skill browser-testing-with-devtools — docs/adoption-guide.md:60
- skill ci-cd-and-automation — docs/adoption-guide.md:61
- skill observability-and-instrumentation — docs/adoption-guide.md:62
- skill performance-optimization — docs/adoption-guide.md:63
- skill debugging-and-error-recovery — docs/adoption-guide.md:83
- skill doubt-driven-development — docs/adoption-guide.md:84
- skill code-simplification — docs/adoption-guide.md:91
- skill deprecation-and-migration — docs/adoption-guide.md:104

## Invoked by — required
none

## Concepts named — required, verbatim
- `Greenfield` — docs/adoption-guide.md:11 — defined here
- `Brownfield` — docs/adoption-guide.md:11 — defined here
- `using-agent-skills` — docs/adoption-guide.md:31 — used here
- `context-engineering` — docs/adoption-guide.md:32, 81 — used here
- `spec-driven-development` — docs/adoption-guide.md:39 — used here
- `planning-and-task-breakdown` — docs/adoption-guide.md:40 — used here
- `incremental-implementation` — docs/adoption-guide.md:41 — used here
- `test-driven-development` — docs/adoption-guide.md:41, 50, 90 — used here
- `code-review-and-quality` — docs/adoption-guide.md:42, 82 — used here
- `shipping-and-launch` — docs/adoption-guide.md:43, 62 — used here
- `git-workflow-and-versioning` — docs/adoption-guide.md:51, 92 — used here
- `security-and-hardening` — docs/adoption-guide.md:52, 100 — used here
- `documentation-and-adrs` — docs/adoption-guide.md:53 — used here
- `api-and-interface-design` — docs/adoption-guide.md:59, 99 — used here
- `frontend-ui-engineering` — docs/adoption-guide.md:60 — used here
- `browser-testing-with-devtools` — docs/adoption-guide.md:60 — used here
- `ci-cd-and-automation` — docs/adoption-guide.md:61 — used here
- `observability-and-instrumentation` — docs/adoption-guide.md:62, 105 — used here
- `performance-optimization` — docs/adoption-guide.md:63, 106 — used here
- `debugging-and-error-recovery` — docs/adoption-guide.md:83 — used here
- `doubt-driven-development` — docs/adoption-guide.md:84 — used here
- `characterization tests` — docs/adoption-guide.md:90 — defined here
- `Beyonce Rule` — docs/adoption-guide.md:90 — used here
- `code-simplification` — docs/adoption-guide.md:91 — used here
- `Chesterton's Fence` — docs/adoption-guide.md:91, 113 — used here
- `Hyrum's Law` — docs/adoption-guide.md:99 — used here
- `deprecation-and-migration` — docs/adoption-guide.md:104 — used here
- `RED metrics` — docs/adoption-guide.md:105 — used here

## Structure
- # Adoption Guide: New Projects vs. Established Codebases
- ## Which path are you on?
- ## Path A | Greenfield: full lifecycle from day one
- ### Day 0 | Install and wire up
- ### Day 0 | Define before you build
- ### From the start, treat these as always-on
- ### Add as the project grows
- ### Greenfield anti-patterns
- ## Path B | Brownfield: incremental, verification-first
- ### Phase 1 | Context and read-only skills
- ### Phase 2 | Tests before change
- ### Phase 3 | New work runs the full lifecycle
- ### Phase 4 | Pay down, deprecate, observe
- ### Brownfield anti-patterns
- ## The two paths converge

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `docs/adoption-guide.md:5` · Links to README anchor `#all-24-skills`, but lines 68 and elsewhere in the repository reference 25 skills.

## Observations
Synthesizes engineering heuristics into actionable agent constraints: Chesterton's Fence for understanding legacy rationale before refactoring, characterization tests under the Beyonce Rule, and Hyrum's Law for contract boundaries.

## Context cost
11197 bytes (~2800 tokens). Comprehensive lifecycle adoption reference.
