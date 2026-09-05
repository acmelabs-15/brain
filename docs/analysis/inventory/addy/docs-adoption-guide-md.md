---
package: addy
path: docs/adoption-guide.md
type: doc
bytes: 11197
unit: inv-addy-4
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/adoption-guide.md

## Purpose — required, verbatim
> "How to roll out agent-skills depends heavily on where your codebase is in its life. A greenfield project can adopt the full lifecycle from commit one. A codebase with years of history needs an incremental path that respects what already exists, its conventions, its undocumented decisions, and its lack of test coverage in places you'd rather not touch blind." — docs/adoption-guide.md:3

## Design intent — required
Contrasts greenfield and brownfield adoption strategies for agent skills, recommending an immediate full-lifecycle rollout for greenfield projects and a disciplined four-phase, verification-first sequence for brownfield codebases (context-first, then characterization tests, full lifecycle on new features, and finally paying down technical debt). Without this guide, engineering teams adopting AI agent workflows in legacy codebases frequently attempt big-bang rollouts, triggering hallucinations and regressions on uncharacterized legacy code.

## Phase — required
cross-phase

## Inputs — required
- Codebase characteristics including age, test coverage, conventions, team habits, and risk profile — docs/adoption-guide.md:11-18

## Outputs — required
- Recommended rollout roadmap: Path A for greenfield or Path B for brownfield — docs/adoption-guide.md:18, 24, 73

## Invokes — required
- doc getting-started.md — docs/adoption-guide.md:5
- doc README.md — docs/adoption-guide.md:5
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
- doc README.md — README.md:216
- doc docs/getting-started.md — docs/getting-started.md:44

## Concepts named — required, verbatim
- `Greenfield` — docs/adoption-guide.md:11, 24 — defined here
- `Brownfield` — docs/adoption-guide.md:11, 73 — defined here
- `Beyonce Rule` — docs/adoption-guide.md:90 — used here
- `characterization tests` — docs/adoption-guide.md:90, 127 — defined here
- `Chesterton's Fence` — docs/adoption-guide.md:91, 113 — used here
- `Hyrum's Law` — docs/adoption-guide.md:99 — used here
- `RED metrics` — docs/adoption-guide.md:105 — used here

## Structure
- Adoption Guide: New Projects vs. Established Codebases — docs/adoption-guide.md:1
- Which path are you on? — docs/adoption-guide.md:9
- Path A | Greenfield: full lifecycle from day one — docs/adoption-guide.md:24
- Day 0 | Install and wire up — docs/adoption-guide.md:28
- Day 0 | Define before you build — docs/adoption-guide.md:34
- From the start, treat these as always-on — docs/adoption-guide.md:48
- Add as the project grows — docs/adoption-guide.md:55
- Greenfield anti-patterns — docs/adoption-guide.md:65
- Path B | Brownfield: incremental, verification-first — docs/adoption-guide.md:73
- Phase 1 | Context and read-only skills — docs/adoption-guide.md:77
- Phase 2 | Tests before change — docs/adoption-guide.md:86
- Phase 3 | New work runs the full lifecycle — docs/adoption-guide.md:94
- Phase 4 | Pay down, deprecate, observe — docs/adoption-guide.md:102
- Brownfield anti-patterns — docs/adoption-guide.md:108
- The two paths converge — docs/adoption-guide.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/adoption-guide.md:5 · Links to README anchor `#all-24-skills` while line 68 refers to "all 25 skills" (drift after adding using-agent-skills meta-skill).

## Observations
Synthesizes almost the entire skill catalog (23 skills) into a coherent lifecycle adoption roadmap. Codifies the "Beyonce Rule" ("if the agent liked a behavior enough to depend on it, it should have put a test on it" — line 90) and Chesterton's Fence as fundamental engineering constraints for agentic workflows.

## Context cost
11,197 bytes (approx. 2,750 tokens) for this documentation file. Cites 23 skills and 2 setup documents across all development phases.
