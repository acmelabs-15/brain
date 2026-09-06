---
package: rjm
path: .claude/skills/cva-analysis/references/gof-pattern-selection.md
type: reference
bytes: 2927
unit: inv-rjm-110
in_scope_via: .claude/skills/cva-analysis/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/references/gof-pattern-selection.md

## Purpose — required, verbatim
> "After building a CVA matrix, use this guide to select the right GoF pattern for each relationship discovered." — .claude/skills/cva-analysis/references/gof-pattern-selection.md:9-10

## Design intent — required
Decision reference guide for translating Commonality Variability Analysis (CVA) matrix relationships into classical Gang of Four (GoF) design patterns. It provides an explicit decision table mapping specific matrix findings (e.g., varying rows, co-dependent columns, dual independent variation axes, existing interfaces, complex subsystems) to Strategy, Abstract Factory, Bridge, Adapter, Facade, Factory Method, or no pattern at all. It also establishes a strict pattern application ordering (Bridge first, then Strategy, Adapter/Facade, and Factory last), formalizes Fowler's three perspectives (Conceptual, Specification, Implementation), and enforces the rule that an entity creates another or uses another, but never both. Without this guide, engineers applying CVA might choose patterns prematurely or misapply object-oriented inheritance where delegation or factory boundaries are warranted.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:416

## Concepts named — required, verbatim
- `GoF Pattern Selection from CVA Results` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:7 — defined here
- `Strategy` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:16 — used here
- `Abstract Factory` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:17 — used here
- `Bridge` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:18 — used here
- `Adapter` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:19 — used here
- `Facade` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:20 — used here
- `Factory Method` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:21 — used here
- `Pattern Ordering` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:24 — defined here
- `Three Perspectives` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:34 — defined here
- `Conceptual` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:40 — used here
- `Specification` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:41 — used here
- `Implementation` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:42 — used here
- `Separate Use from Creation Rule` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:46 — defined here
- `Premature Strategy` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:60 — defined here
- `Missing Factory` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:61 — defined here
- `Inheritance instead of delegation` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:62 — defined here
- `N:M class relationships` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:63 — defined here

## Structure
- `# GoF Pattern Selection from CVA Results` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:7
- `## Decision Table` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:12
- `## Pattern Ordering (instantiation is a late decision)` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:24
- `## Three Perspectives (Fowler)` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:34
- `## The Separate Use from Creation Rule` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:46
- `## Common Mistakes` — .claude/skills/cva-analysis/references/gof-pattern-selection.md:56

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/cva-analysis/references/gof-pattern-selection.md:2 · Frontmatter source path `wiki/concepts/Design Principles/Wisdom from the Gang of Four.md, Pattern Oriented Design.md` does not exist in repository.

## Observations
- States the core separation principle: "A makes B, or A uses B. Never both." (line 48).
- Highlights Christopher Alexander's principle: "Before you can determine a good way to create something, you need to know the nature of what you want to create." (lines 31-32).
- Explicitly directs that a row with identical cells across all columns needs no pattern and should be converted into a base class constant (line 22).

## Context cost
2927 bytes (~732 tokens). Invokes nothing additional.
