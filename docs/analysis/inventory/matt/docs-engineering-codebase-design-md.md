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
verified: 2026-09-04 quote-check+coverage
---

# docs/engineering/codebase-design.md

## Purpose — required, verbatim
> "`codebase-design` fixes the words you use to design a module: **module**, **interface**, **depth**, **seam**, **adapter**, **leverage**, **locality**. It defines each one precisely, bans the loose substitutes (\"component\", \"service\", \"API\", \"boundary\"), and states the handful of principles that follow from them." — docs/engineering/codebase-design.md:3

## Design intent — required
Establishes an authoritative, scale-agnostic design vocabulary (module, interface, depth, seam, adapter, leverage, locality) drawing on Ousterhout and Feathers while prohibiting ambiguous alternatives. By defining module depth as capability leverage at the interface rather than lines-of-code ratio and articulating four core principles (including the deletion test, the interface as test surface, and the two-adapter requirement for seams), it provides a rigorous conceptual baseline across all engineering and refactoring workflows.

## Phase — required
cross-phase

## Inputs — required
Architectural deliberations, module refactoring candidates, seam placements, and interface boundary decisions requiring precise structural terminology.

## Outputs — required
none

## Invokes — required
- skill domain-modeling — docs/engineering/codebase-design.md:18
- skill improve-codebase-architecture — docs/engineering/codebase-design.md:19
- skill grilling — docs/engineering/codebase-design.md:20
- skill tdd — docs/engineering/codebase-design.md:21
- doc DEEPENING.md — docs/engineering/codebase-design.md:46
- doc DESIGN-IT-TWICE.md — docs/engineering/codebase-design.md:46
- skill grill-with-docs — docs/engineering/codebase-design.md:56
- skill ask-matt — docs/engineering/codebase-design.md:88

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `module` — docs/engineering/codebase-design.md:3 — defined here
- `interface` — docs/engineering/codebase-design.md:3 — defined here
- `depth` — docs/engineering/codebase-design.md:3 — defined here
- `seam` — docs/engineering/codebase-design.md:3 — defined here
- `adapter` — docs/engineering/codebase-design.md:3 — defined here
- `leverage` — docs/engineering/codebase-design.md:3 — defined here
- `locality` — docs/engineering/codebase-design.md:3 — defined here
- `session` — docs/engineering/codebase-design.md:5 — used here
- `deletion test` — docs/engineering/codebase-design.md:42 — defined here
- `test surface` — docs/engineering/codebase-design.md:43 — defined here
- `sub-agents` — docs/engineering/codebase-design.md:46 — used here
- `tokens` — docs/engineering/codebase-design.md:54 — used here
- `design it twice` — docs/engineering/codebase-design.md:60 — defined here
- `tool` — docs/engineering/codebase-design.md:72 — used here
- `harnesses` — docs/engineering/codebase-design.md:72 — used here
- `progressive disclosure` — docs/engineering/codebase-design.md:74 — used here
- `standalone` — docs/engineering/codebase-design.md:88 — defined here

## Structure
- ## What it does
- ## When to reach for it
- ## The vocabulary
- ## The four principles
- ## Common questions
- ## It's working if
- ## Where it fits

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/engineering/codebase-design.md:56 Reference skill lacks an execution loop or stopping rule; autonomous agents prompted to run it burn tokens redesigning code without direction.
- `doc-drift` · docs/engineering/codebase-design.md:72 Supporting doc `DESIGN-IT-TWICE.md` hardcodes Claude Code's `Agent` tool name, breaking parallel subagent execution in other harnesses.

## Observations
Rejects line-count ratio definitions of module depth, framing depth entirely as capability leverage at the interface. Separates module boundary design from physical file system or directory structure conventions.

## Context cost
12,370 bytes (~3,092 tokens). Documentation page for `codebase-design` reference skill.
