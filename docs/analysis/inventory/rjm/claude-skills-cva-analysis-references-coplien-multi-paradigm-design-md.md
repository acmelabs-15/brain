---
package: rjm
path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md
type: reference
bytes: 3053
unit: inv-rjm-110
in_scope_via: .claude/skills/cva-analysis/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md

## Purpose — required, verbatim
> "James O. Coplien's framework for using CVA as the foundation of software design." — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:9

## Design intent — required
Summarizes the theoretical and methodological foundations of Multi-Paradigm Design and Commonality/Variability Analysis established by James O. Coplien (1999). It explains how commonality analysis discovers natural domain abstractions while variability analysis identifies how those abstractions differ, establishing a rigorous pipeline from domain requirements to GoF design patterns. It provides design rules, a GoF mapping table (rows to Strategies, columns to Abstract Factories, cross-cutting concerns to Bridges), and warns against premature abstraction, perspective mixing, and ignoring empty matrix cells. Without this reference, CVA practitioners would lack the theoretical grounding that justifies why matrix structures naturally yield specific design patterns.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:415
- reference matrix-building-examples.md — .claude/skills/cva-analysis/references/matrix-building-examples.md:396

## Concepts named — required, verbatim
- `Multi-Paradigm Design` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:7 — defined here
- `CVA` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:9 — used here
- `Commonality analysis` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:14 — defined here
- `Variability analysis` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:14-15 — defined here
- `CVA-to-Pattern Pipeline` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:25 — defined here
- `Strategy` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:30 — used here
- `Bridge` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:31 — used here
- `Factory` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:32 — used here
- `Abstract Factory` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:46 — used here
- `Factory Method` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:56 — used here
- `Adapter/Facade` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:57 — used here
- `Premature abstraction` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:61 — defined here
- `Mixing perspectives` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:63 — defined here
- `Fowler's three perspectives` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:64 — used here
- `Ignoring empty cells` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:65 — defined here

## Structure
- `# Coplien's Multi-Paradigm Design` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:7
- `## Core Thesis` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:12
- `## Key Quotes` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:18
- `## The CVA-to-Pattern Pipeline` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:25
- `## Rules` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:35
- `## Relationship to GoF` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:49
- `## Common Mistakes` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:59
- `## Further Reading` — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:68

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:2 · Frontmatter source path `wiki/concepts/Design Principles/Commonality Variability Analysis.md` does not exist in repository.

## Observations
- Directly connects Coplien's 1999 C++ Multi-Paradigm Design methodology to Christopher Alexander's architectural pattern philosophy (line 72).
- Key quote on design risk: "In design, our greatest vulnerability is often a wrong or missing abstraction." (line 23).
- Clarifies that empty matrix cells indicate questions/missing requirements rather than mere gaps (lines 65-66).

## Context cost
3053 bytes (~763 tokens). Invokes nothing additional.
