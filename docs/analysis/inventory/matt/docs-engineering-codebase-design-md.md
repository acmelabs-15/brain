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
verified: 2026-09-06 quote-check+coverage
---

# docs/engineering/codebase-design.md

## Purpose — required, verbatim
> "`codebase-design` fixes the words you use to design a module: **module**, **interface**, **depth**, **seam**, **adapter**, **leverage**, **locality**. It defines each one precisely, bans the loose substitutes ("component", "service", "API", "boundary"), and states the handful of principles that follow from them." — docs/engineering/codebase-design.md:3

## Design intent — required
Establishes a precise, scale-agnostic architectural vocabulary and foundational design principles for structuring software modules. Explicitly defines seven core concepts (**module**, **interface**, **depth**, **seam**, **adapter**, **leverage**, **locality**) and bans imprecise substitutes ("component", "service", "API", "boundary"). Provides four core heuristics: depth is a property of the interface, the deletion test, the interface is the test surface, and two adapters confirm a real seam. Clarifies that the skill is an informational reference rather than a driver process, warning against agents mistaking it for an active refactoring loop and burning context on unauthorized exploration. Documents supporting patterns in `DEEPENING.md` and `DESIGN-IT-TWICE.md`.

## Phase — required
cross-phase

## Inputs — required
- Codebase module under evaluation or redesign.
- Architectural dilemmas regarding interface boundaries, seam locations, or adapter abstractions.
- Supporting references loaded on demand: `skills/engineering/codebase-design/DEEPENING.md` and `skills/engineering/codebase-design/DESIGN-IT-TWICE.md`.

## Outputs — required
- Precise architectural definitions and vocabulary alignment for design discussions.
- Design-it-twice comparative evaluation of interface alternatives (when invoking `DESIGN-IT-TWICE.md`).
- none

## Invokes — required
- skill domain-modeling — docs/engineering/codebase-design.md:18
- skill improve-codebase-architecture — docs/engineering/codebase-design.md:19
- skill grilling — docs/engineering/codebase-design.md:20
- skill tdd — docs/engineering/codebase-design.md:21
- reference DEEPENING.md — docs/engineering/codebase-design.md:46
- reference DESIGN-IT-TWICE.md — docs/engineering/codebase-design.md:46
- skill setup-ts-deep-modules — docs/engineering/codebase-design.md:52
- skill grill-with-docs — docs/engineering/codebase-design.md:56
- skill ask-matt — docs/engineering/codebase-design.md:88

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `codebase-design` — docs/engineering/codebase-design.md:3 — defined here
- `Module` — docs/engineering/codebase-design.md:3, 29 — defined here
- `Interface` — docs/engineering/codebase-design.md:3, 30 — defined here
- `Depth` — docs/engineering/codebase-design.md:3, 31 — defined here
- `Seam` — docs/engineering/codebase-design.md:3, 32 — defined here
- `Adapter` — docs/engineering/codebase-design.md:3, 33 — defined here
- `Leverage` — docs/engineering/codebase-design.md:3, 34 — defined here
- `Locality` — docs/engineering/codebase-design.md:3, 35 — defined here
- `session` — docs/engineering/codebase-design.md:5 — used here
- `Deep` — docs/engineering/codebase-design.md:31 — defined here
- `Shallow` — docs/engineering/codebase-design.md:31 — defined here
- `deletion test` — docs/engineering/codebase-design.md:42 — defined here
- `DEEPENING.md` — docs/engineering/codebase-design.md:46 — defined here
- `DESIGN-IT-TWICE.md` — docs/engineering/codebase-design.md:46 — defined here
- `sub-agents` — docs/engineering/codebase-design.md:46 — used here
- `setup-ts-deep-modules` — docs/engineering/codebase-design.md:52 — used here
- `tokens` — docs/engineering/codebase-design.md:54 — used here
- `grill-with-docs` — docs/engineering/codebase-design.md:56 — used here
- `design-an-interface` — docs/engineering/codebase-design.md:60 — used here
- `design it twice` — docs/engineering/codebase-design.md:60 — defined here
- `interface-design` — docs/engineering/codebase-design.md:60 — used here
- `harnesses` — docs/engineering/codebase-design.md:72 — used here
- `connascence` — docs/engineering/codebase-design.md:76 — used here
- `module secrets` — docs/engineering/codebase-design.md:76 — used here
- `progressive disclosure` — docs/engineering/codebase-design.md:76 — used here
- `vocabulary layer` — docs/engineering/codebase-design.md:88 — defined here

## Structure
- ## What it does — docs/engineering/codebase-design.md:1
- ## When to reach for it — docs/engineering/codebase-design.md:7
- ## The vocabulary — docs/engineering/codebase-design.md:23
- ## The four principles — docs/engineering/codebase-design.md:39
- ## Common questions — docs/engineering/codebase-design.md:48
- ## It's working if — docs/engineering/codebase-design.md:78
- ## Where it fits — docs/engineering/codebase-design.md:86

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — docs/engineering/codebase-design.md:52 — TypeScript enforcement gap: defines deep modules conceptually but provides no mechanism, linter, or rules to enforce interface boundaries or prevent leaky imports in TypeScript (issue #458).
- script-bug — docs/engineering/codebase-design.md:56 — Runaway agent loop / token burn: because the skill is model-invoked with no driver stopping rules or checkpoints, agents instructed to "resume in /codebase-design" treat `DESIGN-IT-TWICE.md` as an unprompted refactoring task, burning 100k+ tokens redesigning unrequested code (issue #449).
- doc-drift — docs/engineering/codebase-design.md:68 — Historical cross-reference omission: inline deep-module guidance was removed from `tdd` in v1.0, but cross-reference pointers to `codebase-design` were initially omitted, causing `tdd` to define seams independently.
- other — docs/engineering/codebase-design.md:72 — Harness lock-in: `DESIGN-IT-TWICE.md` specifically calls Claude Code's `Agent` tool to spawn parallel sub-agents, failing or degrading on other harnesses (such as Codex) that lack that tool (issue #564).

## Observations
Explicitly rejects defining depth as the ratio of implementation lines to interface lines (Ousterhout's definition), as that metric incentivizes artificial implementation bloat; substitutes "depth-as-leverage" instead. Emphasizes that modules are scale-agnostic (functions, classes, packages, cross-tier slices) and decoupled from file-system directory hierarchies (rejecting fractal folder structures as module proxies). Insists on the deletion test and two-adapter heuristic to avoid premature indirection.

## Context cost
12370 bytes, approximately 3000 tokens.
