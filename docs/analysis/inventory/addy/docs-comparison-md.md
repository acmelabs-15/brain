---
package: addy
path: docs/comparison.md
type: doc
bytes: 15362
unit: inv-addy-5
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/comparison.md

## Purpose — required, verbatim
> "This page is an honest map of how they are *shaped* differently, so you can pick the one that fits how you work, or borrow across all three." — docs/comparison.md:9

## Design intent — required
Provides an objective architectural and workflow comparison between agent-skills, obra/superpowers, and mattpocock/skills. It clarifies trade-offs between broad lifecycle coverage with human checkpoints (agent-skills), autonomous reasoning-heavy pipeline execution (Superpowers), and an interactive interrogation loop with a focused personal toolkit (Matt Pocock). Without this document, evaluators and engineering teams would lack guidance on which framework suits their workflow or how to avoid conflicts when combining skills across frameworks.

## Phase — required
none

## Inputs — required
Comparative analysis of three AI coding agent skill ecosystems (agent-skills, obra/superpowers, and mattpocock/skills), community adoption patterns, and findings from Om Mishra's head-to-head evaluation experiment.

## Outputs — required
none

## Invokes — required
- skill using-agent-skills — docs/comparison.md:54
- skill interview-me — docs/comparison.md:100
- command /spec — docs/comparison.md:23
- command /plan — docs/comparison.md:23
- command /build — docs/comparison.md:23
- command /test — docs/comparison.md:23
- command /review — docs/comparison.md:23
- command /code-simplify — docs/comparison.md:23
- command /ship — docs/comparison.md:23
- command /webperf — docs/comparison.md:23
- agent code-reviewer — docs/comparison.md:54
- agent security-auditor — docs/comparison.md:54
- agent test-engineer — docs/comparison.md:54
- agent web-performance-auditor — docs/comparison.md:54

## Invoked by — required
- doc README.md — README.md:402

## Concepts named — required, verbatim
- `Define` — docs/comparison.md:11 — used here
- `Plan` — docs/comparison.md:11 — used here
- `Build` — docs/comparison.md:11 — used here
- `Verify` — docs/comparison.md:11 — used here
- `Review` — docs/comparison.md:11 — used here
- `Ship` — docs/comparison.md:11 — used here
- `anti-rationalization guards` — docs/comparison.md:11 — used here
- `eval framework` — docs/comparison.md:11 — used here
- `SDLC` — docs/comparison.md:20 — used here
- `meta-skill router` — docs/comparison.md:20 — used here
- `Anti-rationalization tables` — docs/comparison.md:24 — used here
- `Red Flags` — docs/comparison.md:24 — used here
- `personas` — docs/comparison.md:24 — used here
- `three-tier eval framework` — docs/comparison.md:24 — used here
- `human checkpoint` — docs/comparison.md:28 — used here
- `Common Rationalizations` — docs/comparison.md:54 — used here
- `Definition of Done` — docs/comparison.md:54 — used here
- `human gate` — docs/comparison.md:94 — used here
- `cross-session memory` — docs/comparison.md:111 — used here

## Structure
- # How agent-skills compares
- ## At a glance
- ## The three projects, in their own terms
- ### Superpowers (obra)
- ### Matt Pocock's skills
- ### agent-skills (this project)
- ## A real head-to-head: Superpowers vs. agent-skills
- ## How to decide what to use
- ### Start with the shape of your work
- ### Then weight what you actually care about
- ### Concrete scenarios
- ### Solo vs. team
- ### The shared frontier (true of all three)
- ## Combining them
- ## Sources

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Header comments (docs/comparison.md:1-5) explicitly instruct that this document is intended for human developers evaluating the project and must remain out of an agent's context working set. Lines 117-119 explicitly advise against running two meta-skills as active routers simultaneously due to collision on command names and competing routing logic.

## Context cost
15362 bytes (~3840 tokens), 0 loaded dependencies. Static evaluation documentation not intended for agent working context.
