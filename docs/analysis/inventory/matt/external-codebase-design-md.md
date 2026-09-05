---
package: matt
path: external/codebase-design.md
type: doc
bytes: 365134
unit: inv-matt-12
deprecated: false
aliases: []
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/codebase-design.md

## Purpose — required, verbatim
> "The vocabulary for designing deep modules." — external/codebase-design.md:24

## Design intent — required
Fixes and standardizes the conceptual vocabulary used when designing modules, interfaces, and architecture across codebases. Replaces loose terms like "component", "service", "API", or "boundary" with precise definitions for module, interface, depth, seam, adapter, leverage, and locality. Because it operates as a static reference rather than an executable process, it provides foundational architectural principles without driving an active development loop on its own.

## Phase — required
matt:Reference Skills

## Inputs — required
Existing module code, proposed architectural boundaries, or interface designs undergoing evaluation or refactoring.

## Outputs — required
Architectural principles, criteria for evaluating module depth ("The deletion test", seam placement rules), and conceptual definitions. Pure reference documentation; produces no direct files or code changes.

## Invokes — required
- reference DEEPENING.md — external/codebase-design.md:43
- reference DESIGN-IT-TWICE.md — external/codebase-design.md:43
- skill domain-modeling — external/codebase-design.md:31
- skill improve-codebase-architecture — external/codebase-design.md:31
- skill grilling — external/codebase-design.md:31
- skill tdd — external/codebase-design.md:31
- skill ask-matt — external/codebase-design.md:68

## Invoked by — required
- skill improve-codebase-architecture — external/codebase-design.md:68
- skill tdd — external/codebase-design.md:54

## Concepts named — required, verbatim
- `Module` — external/codebase-design.md:34 — defined here
- `Interface` — external/codebase-design.md:34 — defined here
- `Depth` — external/codebase-design.md:34 — defined here
- `Deep` — external/codebase-design.md:34 — defined here
- `Shallow` — external/codebase-design.md:34 — defined here
- `Seam` — external/codebase-design.md:34 — defined here
- `Adapter` — external/codebase-design.md:34 — defined here
- `Leverage` — external/codebase-design.md:34 — defined here
- `Locality` — external/codebase-design.md:34 — defined here
- `Depth is a property of the interface, not the implementation` — external/codebase-design.md:38 — defined here
- `The deletion test` — external/codebase-design.md:39 — defined here
- `The interface is the test surface` — external/codebase-design.md:40 — defined here
- `One adapter means a hypothetical seam. Two adapters means a real one.` — external/codebase-design.md:41 — defined here
- `DEEPENING.md` — external/codebase-design.md:43 — used here
- `DESIGN-IT-TWICE.md` — external/codebase-design.md:43 — used here
- `reach-for-it-anytime standalone` — external/codebase-design.md:68 — defined here

## Structure
- # The /codebase-design Skill — external/codebase-design.md:24
- ## What it does — external/codebase-design.md:24
- ## When to reach for it — external/codebase-design.md:27
- ## The vocabulary — external/codebase-design.md:32
- ## The four principles — external/codebase-design.md:36
- ## Common questions — external/codebase-design.md:44
- ## It's working if — external/codebase-design.md:59
- ## Where it fits — external/codebase-design.md:67
- ## Related reading — external/codebase-design.md:69
- ## Skill actions — external/codebase-design.md:69

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/codebase-design.md:46: Defines conceptual deep modules but omits concrete TypeScript import enforcement guardrails or linting configurations.
- `script-bug` · external/codebase-design.md:48: Model agents mistake reference for an active process and burn tokens running unprompted parallel refactorings because reference skills lack stopping rules.
- `doc-drift` · external/codebase-design.md:56: Parallel interface design in `DESIGN-IT-TWICE.md` hardcodes Claude Code's `Agent` tool name, failing on alternative harnesses like Codex.

## Observations
Rejects John Ousterhout's lines-of-code ratio metric for module depth in favor of depth-as-leverage (capability exercised per unit of interface learned). Clarifies that deep modules are completely scale-agnostic and orthogonal to file system folder layouts.

## Context cost
365134 bytes, ~74000 tokens (HTML snapshot including full inline hydration payload).
