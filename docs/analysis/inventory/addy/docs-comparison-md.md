---
package: addy
path: docs/comparison.md
type: doc
bytes: 15362
unit: inv-addy-5
aliases: []
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/comparison.md

## Purpose — required, verbatim
> "This page is an honest map of how they are *shaped* differently, so you can pick the one that fits how you work, or borrow across all three." — docs/comparison.md:9

## Design intent — required
Provides an objective comparative analysis of three prominent coding-agent skill ecosystems: agent-skills, Superpowers (obra), and Matt Pocock's skills. It clarifies the core trade-offs between broad senior-engineering lifecycle validation, autonomous deep-reasoning inner loops, and sharp requirements-interrogation workflows, helping developers choose or combine frameworks according to task complexity and team structure.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:402

## Concepts named — required, verbatim
- `Define` — docs/comparison.md:11 — used here
- `Plan` — docs/comparison.md:11 — used here
- `Build` — docs/comparison.md:11 — used here
- `Verify` — docs/comparison.md:11 — used here
- `Review` — docs/comparison.md:11 — used here
- `Ship` — docs/comparison.md:11 — used here
- `review personas` — docs/comparison.md:11 — used here
- `anti-rationalization guards` — docs/comparison.md:11 — used here
- `subagents` — docs/comparison.md:11 — used here
- `worktree isolation` — docs/comparison.md:11 — used here
- `grill me` — docs/comparison.md:11 — used here
- `senior-engineering lifecycle` — docs/comparison.md:19 — used here
- `phases` — docs/comparison.md:20 — used here
- `meta-skill router` — docs/comparison.md:20 — used here
- `brainstorm, plan, execute, review` — docs/comparison.md:20 — used here
- `idea refinement` — docs/comparison.md:22 — used here
- `API and UI design` — docs/comparison.md:22 — used here
- `security` — docs/comparison.md:22 — used here
- `performance` — docs/comparison.md:22 — used here
- `CI/CD` — docs/comparison.md:22 — used here
- `observability` — docs/comparison.md:22 — used here
- `deprecation` — docs/comparison.md:22 — used here
- `ADRs` — docs/comparison.md:22 — used here
- `launch` — docs/comparison.md:22 — used here
- `TDD` — docs/comparison.md:22 — used here
- `debugging` — docs/comparison.md:22 — used here
- `planning` — docs/comparison.md:22 — used here
- `skill authoring` — docs/comparison.md:22 — used here
- `grilling` — docs/comparison.md:22 — used here
- `PRDs` — docs/comparison.md:22 — used here
- `issues` — docs/comparison.md:22 — used here
- `architecture` — docs/comparison.md:22 — used here
- `bug triage` — docs/comparison.md:22 — used here
- `knowledge management` — docs/comparison.md:22 — used here
- `/spec` — docs/comparison.md:23 — used here
- `/plan` — docs/comparison.md:23 — used here
- `/build` — docs/comparison.md:23 — used here
- `/test` — docs/comparison.md:23 — used here
- `/review` — docs/comparison.md:23 — used here
- `/code-simplify` — docs/comparison.md:23 — used here
- `/ship` — docs/comparison.md:23 — used here
- `/webperf` — docs/comparison.md:23 — used here
- `/build auto` — docs/comparison.md:23 — used here
- `brainstorming` — docs/comparison.md:23 — used here
- `writing-plans` — docs/comparison.md:23 — used here
- `subagent-driven-development` — docs/comparison.md:23 — used here
- `/grill-me` — docs/comparison.md:23 — used here
- `/tdd` — docs/comparison.md:23 — used here
- `/to-prd` — docs/comparison.md:23 — used here
- `/diagnosing-bugs` — docs/comparison.md:23 — used here
- `/grill-with-docs` — docs/comparison.md:23 — used here
- `Anti-rationalization tables` — docs/comparison.md:24 — used here
- `Red Flags` — docs/comparison.md:24 — used here
- `three-tier eval framework` — docs/comparison.md:24 — used here
- `task reviewer` — docs/comparison.md:24 — used here
- `fix loop` — docs/comparison.md:24 — used here
- `skills-that-write-skills` — docs/comparison.md:24 — used here
- `seam-based TDD` — docs/comparison.md:24 — used here
- `human checkpoint` — docs/comparison.md:28 — used here
- `Socratic brainstorming` — docs/comparison.md:38 — used here
- `writing-skills` — docs/comparison.md:38 — used here
- `wayfinder` — docs/comparison.md:48 — used here
- `using-agent-skills` — docs/comparison.md:54 — used here
- `Common Rationalizations` — docs/comparison.md:54 — used here
- `code-reviewer` — docs/comparison.md:54 — used here
- `security-auditor` — docs/comparison.md:54 — used here
- `test-engineer` — docs/comparison.md:54 — used here
- `web-performance-auditor` — docs/comparison.md:54 — used here
- `Definition of Done` — docs/comparison.md:54 — used here
- `Tier 1` — docs/comparison.md:56 — used here
- `Tier 2` — docs/comparison.md:56 — used here
- `Tier 3` — docs/comparison.md:56 — used here
- `interview-me` — docs/comparison.md:92 — used here
- `cross-session memory` — docs/comparison.md:111 — used here

## Structure
- `# How agent-skills compares` — docs/comparison.md:7
- `## At a glance` — docs/comparison.md:15
- `## The three projects, in their own terms` — docs/comparison.md:34
- `### Superpowers (obra)` — docs/comparison.md:36
- `### Matt Pocock's skills` — docs/comparison.md:44
- `### agent-skills (this project)` — docs/comparison.md:52
- `## A real head-to-head: Superpowers vs. agent-skills` — docs/comparison.md:60
- `## How to decide what to use` — docs/comparison.md:76
- `### Start with the shape of your work` — docs/comparison.md:80
- `### Then weight what you actually care about` — docs/comparison.md:86
- `### Concrete scenarios` — docs/comparison.md:96
- `### Solo vs. team` — docs/comparison.md:105
- `### The shared frontier (true of all three)` — docs/comparison.md:109
- `## Combining them` — docs/comparison.md:115
- `## Sources` — docs/comparison.md:123

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a foundational cross-package taxonomy comparing agent-skills with Superpowers and Matt Pocock's skills. Points out that stacked meta-skills conflict if two attempt to act as the active router simultaneously due to conflicting command namespaces (e.g. `/tdd`) and routing logic. Highlights the shared unresolved frontier across all three projects: durable cross-session memory. Cites Om Mishra's head-to-head empirical evaluation comparing agent-skills and Superpowers on Claude Code.

## Context cost
15362 bytes, ~3840 tokens.
