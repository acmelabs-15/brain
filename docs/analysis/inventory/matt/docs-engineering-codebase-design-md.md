---
package: matt
path: docs/engineering/codebase-design.md
type: doc
bytes: 12370
unit: inv-matt-4
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/engineering/codebase-design.md

## Purpose — required, verbatim
> "`codebase-design` fixes the words you use to design a module: **module**, **interface**, **depth**, **seam**, **adapter**, **leverage**, **locality**. It defines each one precisely, bans the loose substitutes (\"component\", \"service\", \"API\", \"boundary\"), and states the handful of principles that follow from them." — docs/engineering/codebase-design.md:3

## Design intent — required
Architectural reference providing a rigorous, scale-agnostic modular design vocabulary and set of foundational principles grounded in John Ousterhout's *A Philosophy of Software Design* and Michael Feathers' seam concepts. Replaces loose industry jargon with seven precise terms (module, interface, depth, seam, adapter, leverage, locality) and articulates four non-negotiable rules: depth is a property of the interface (defined by leverage rather than line counts), the deletion test distinguishes pass-throughs from deep modules, interfaces constitute the exclusive test surface, and two adapters are required to justify cutting a real seam. Operates purely as a stateless reference vocabulary for driver skills rather than an autonomous runnable workflow.

## Phase — required
cross-phase

## Inputs — required
Existing module architectures, interface designs, candidate modules surfaced for refactoring/deepening, and architectural design questions.

## Outputs — required
none

## Invokes — required
- skill domain-modeling — docs/engineering/codebase-design.md:18
- skill improve-codebase-architecture — docs/engineering/codebase-design.md:19
- skill grilling — docs/engineering/codebase-design.md:20
- skill tdd — docs/engineering/codebase-design.md:21
- doc DEEPENING.md — docs/engineering/codebase-design.md:46
- doc DESIGN-IT-TWICE.md — docs/engineering/codebase-design.md:46
- skill ask-matt — docs/engineering/codebase-design.md:88

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `codebase-design` — docs/engineering/codebase-design.md:3 — defined here
- `session` — docs/engineering/codebase-design.md:5 — used here
- `domain-modeling` — docs/engineering/codebase-design.md:18 — used here
- `improve-codebase-architecture` — docs/engineering/codebase-design.md:19 — used here
- `grilling` — docs/engineering/codebase-design.md:20 — used here
- `tdd` — docs/engineering/codebase-design.md:21 — used here
- `Module` — docs/engineering/codebase-design.md:29 — defined here
- `Interface` — docs/engineering/codebase-design.md:30 — defined here
- `Depth` — docs/engineering/codebase-design.md:31 — defined here
- `Deep` — docs/engineering/codebase-design.md:31 — defined here
- `Shallow` — docs/engineering/codebase-design.md:31 — defined here
- `Seam` — docs/engineering/codebase-design.md:32 — defined here
- `Adapter` — docs/engineering/codebase-design.md:33 — defined here
- `Leverage` — docs/engineering/codebase-design.md:34 — defined here
- `Locality` — docs/engineering/codebase-design.md:35 — defined here
- `deletion test` — docs/engineering/codebase-design.md:42 — defined here
- `sub-agents` — docs/engineering/codebase-design.md:46 — used here
- `tokens` — docs/engineering/codebase-design.md:54 — used here
- `design-an-interface` — docs/engineering/codebase-design.md:60 — used here
- `design it twice` — docs/engineering/codebase-design.md:60 — defined here
- `tool` — docs/engineering/codebase-design.md:72 — used here
- `harnesses` — docs/engineering/codebase-design.md:72 — used here
- `progressive disclosure` — docs/engineering/codebase-design.md:76 — used here
- `standalone` — docs/engineering/codebase-design.md:88 — defined here
- `ask-matt` — docs/engineering/codebase-design.md:88 — used here

## Structure
- What it does — docs/engineering/codebase-design.md:1
- When to reach for it — docs/engineering/codebase-design.md:7
- The vocabulary — docs/engineering/codebase-design.md:23
- The four principles — docs/engineering/codebase-design.md:39
- Common questions — docs/engineering/codebase-design.md:48
- It's working if — docs/engineering/codebase-design.md:78
- Where it fits — docs/engineering/codebase-design.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — docs/engineering/codebase-design.md:56 — Lacks process guardrails or stopping checkpoints; when pointed at by an agent as a driver rather than a reference, agents improvise loops and trigger parallel sub-agent redesigns from `DESIGN-IT-TWICE.md`, consuming over 100k tokens without human intervention.
- doc-drift — docs/engineering/codebase-design.md:72 — Supporting pattern file `DESIGN-IT-TWICE.md` hardcodes instructions to spawn sub-agents using Claude Code's `Agent` tool, degrading portability across alternative harnesses like Codex.

## Observations
Defines depth through caller leverage (behavior per unit of interface learned) and maintainer locality (single-point change, bug fixes, and verification) rather than Ousterhout's line-count ratio. Stresses that modules are scale-agnostic conceptual units rather than filesystem directories, barrel files, or framework components. Supporting documentation `DEEPENING.md` classifies dependencies into four testing categories (in-process, local-substitutable, remote-but-owned, true-external).

## Context cost
12370 bytes, ~2900 tokens. Deepening reference `DEEPENING.md` adds 2553 bytes, `DESIGN-IT-TWICE.md` adds 2664 bytes.
