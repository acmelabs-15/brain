---
package: rjm
path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md
type: reference
bytes: 10409
unit: inv-rjm-110
in_scope_via: .claude/skills/cva-analysis/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/references/pattern-mapping-guide.md

## Purpose — required, verbatim
> "This guide explains how to read a CVA matrix and translate its structure to design patterns." — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:3

## Design intent — required
Core translation manual for reading Commonality Variability Analysis (CVA) matrices and mapping their structural characteristics directly into software design patterns. It establishes the core principle that patterns must emerge from the matrix rather than being imposed beforehand. It provides detailed matrix signatures and C# implementation patterns across multiple reading perspectives: Row Perspective (Strategy pattern for varying algorithms across an operation), Column Perspective (Abstract Factory pattern for coherent families of operations), Cell Perspective (Template Method pattern for invariant workflow skeletons with localized variations), and Combination Patterns (Strategy + Abstract Factory for multidimensional variation). It also provides a formal 5-step decision tree, a comparison matrix of selection criteria, catalogs specific anti-patterns (Pattern Forcing, Ignoring Coherence, Over-Abstraction), presents .NET examples, and outlines a pre-commitment validation checklist. Without this guide, analysts would lack concrete structural signatures to distinguish when row variability warrants Strategy versus when column coherence mandates Abstract Factory.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:412
- reference matrix-building-examples.md — .claude/skills/cva-analysis/references/matrix-building-examples.md:394

## Concepts named — required, verbatim
- `CVA Matrix Pattern Mapping Guide` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:1 — defined here
- `Strategy` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:33 — used here
- `Abstract Factory` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:75 — used here
- `Template Method` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:128 — used here
- `Combination Patterns` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:157 — defined here
- `Decision Tree` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:205 — defined here
- `Pattern Selection Criteria` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:233 — defined here
- `Pattern Forcing` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:248 — defined here
- `Ignoring Coherence` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:258 — defined here
- `Over-Abstraction` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:279 — defined here
- `Validation Checklist` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:339 — defined here

## Structure
- `# CVA Matrix Pattern Mapping Guide` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:1
- `## Core Principle` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:5
- `## Reading Strategies` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:18
- `### Row Perspective: Strategy Pattern` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:20
- `### Column Perspective: Abstract Factory Pattern` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:58
- `### Cell Perspective: Template Method Pattern` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:114
- `## Combination Patterns` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:157
- `### Strategy + Abstract Factory` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:159
- `## Decision Tree` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:205
- `## Pattern Selection Criteria` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:233
- `## Anti-Patterns` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:246
- `### Pattern Forcing` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:248
- `### Ignoring Coherence` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:258
- `### Over-Abstraction` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:279
- `## .NET-Specific Patterns` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:296
- `### ASP.NET Middleware Pipeline` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:298
- `### Dependency Injection Providers` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:314
- `## Further Reading` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:330
- `## Validation Checklist` — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:339

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Formulates the central CVA axiom: "Patterns should EMERGE from the matrix, not be imposed before analysis." (line 7).
- Directly contrasts the Trade-offs between Strategy and Abstract Factory: warns that applying Strategy when column families are coherent destroys domain cohesion (lines 258-276).
- Recommends consulting decision-critic or independent-thinker agents as part of the pre-commitment validation checklist (line 347).

## Context cost
10409 bytes (~2602 tokens). Invokes nothing additional.
