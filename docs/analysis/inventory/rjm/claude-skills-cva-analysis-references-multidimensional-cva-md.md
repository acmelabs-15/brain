---
package: rjm
path: .claude/skills/cva-analysis/references/multidimensional-cva.md
type: reference
bytes: 2762
unit: inv-rjm-110
in_scope_via: .claude/skills/cva-analysis/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/multidimensional-cva.md, sha256: c39379f31807b748e77ce3e4b0b869d5fe7cf13c886b5609740ac6770f8714a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/cva-analysis/references/multidimensional-cva.md

## Purpose — required, verbatim
> "When a problem has multiple independent axes of variability, a single CVA matrix is insufficient. Each axis gets its own matrix or dimension." — .claude/skills/cva-analysis/references/multidimensional-cva.md:9-10

## Design intent — required
Advanced architectural guide addressing problem domains characterized by multiple independent or correlated axes of variability where a single 2D CVA matrix becomes inadequate or excessively sparse. It formalizes the multi-matrix decomposition process: constructing independent matrices per variation dimension (e.g., geography vs. product/carrier), identifying cross-cutting concerns, and mapping relationships to appropriate design patterns (two separate Strategy hierarchies for independent axes, Bridge pattern for correlated axes, and Abstract Factory for constraining sparse/invalid combinations). It also provides diagnostic danger signs (matrices with >30% empty cells, homonymous rows across dimensions, or invariant rows). Without this guide, architects facing multidimensional variation would attempt to flatten distinct variation axes into a single monolithic matrix, resulting in artificial coupling or combinatorial explosion.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill cva-analysis — .claude/skills/cva-analysis/SKILL.md:414
- reference matrix-building-examples.md — .claude/skills/cva-analysis/references/matrix-building-examples.md:395

## Concepts named — required, verbatim
- `Multidimensional CVA` — .claude/skills/cva-analysis/references/multidimensional-cva.md:7 — defined here
- `Independent axes` — .claude/skills/cva-analysis/references/multidimensional-cva.md:31 — defined here
- `Strategy` — .claude/skills/cva-analysis/references/multidimensional-cva.md:31 — used here
- `Correlated axes` — .claude/skills/cva-analysis/references/multidimensional-cva.md:32 — defined here
- `Bridge` — .claude/skills/cva-analysis/references/multidimensional-cva.md:32 — used here
- `Sparse combinations` — .claude/skills/cva-analysis/references/multidimensional-cva.md:33 — defined here
- `Abstract Factory` — .claude/skills/cva-analysis/references/multidimensional-cva.md:33 — used here
- `Danger Signs` — .claude/skills/cva-analysis/references/multidimensional-cva.md:61 — defined here

## Structure
- `# Multidimensional CVA` — .claude/skills/cva-analysis/references/multidimensional-cva.md:7
- `## When to Use` — .claude/skills/cva-analysis/references/multidimensional-cva.md:12
- `## Process` — .claude/skills/cva-analysis/references/multidimensional-cva.md:18
- `## Pattern Implications` — .claude/skills/cva-analysis/references/multidimensional-cva.md:27
- `## Example: Shipping Calculator` — .claude/skills/cva-analysis/references/multidimensional-cva.md:35
- `## Danger Signs` — .claude/skills/cva-analysis/references/multidimensional-cva.md:61

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/cva-analysis/references/multidimensional-cva.md:2 · Frontmatter source path `wiki/concepts/Design Principles/Commonality Variability Analysis.md` does not exist in repository.

## Observations
- Includes a clear concrete example (Shipping Calculator) demonstrating dual matrices: Axis 1 (Geography: US, Canada, EU) and Axis 2 (Carrier: USPS, FedEx, DHL), demonstrating when to decompose into separate Strategy hierarchies vs. a Bridge (lines 35-59).
- Warns that more than 30% empty cells is a threshold indicator of forcing unrelated concerns into a single dimension (line 63).

## Context cost
2762 bytes (~690 tokens). Invokes nothing additional.
