---
package: rjm
name: Multidimensional CVA
slug: multidimensional-cva
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/multidimensional-cva.md, sha256: c39379f31807b748e77ce3e4b0b869d5fe7cf13c886b5609740ac6770f8714a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Multidimensional CVA

## Definition — verbatim
> "# Multidimensional CVA" — .claude/skills/cva-analysis/references/multidimensional-cva.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 7 | defined here | Reference document detailing CVA methodology when a problem possesses multiple independent axes of variability. |

## Consumes
Complex domain requirements involving two or more orthogonal variation dimensions (e.g. geography and carrier).

## Produces
Multi-matrix decompositions, classification of axes as independent or correlated, and mapping to Bridge or multi-Strategy architectures.

## When applied
Applied when a single CVA matrix produces excessive empty cells (>30%) or attempts to force distinct variation dimensions together.

## Sub-concepts
independent-axes, correlated-axes, sparse-combinations, danger-signs

## Part of
cva-analysis

## Implementation status
defects: missing-path

## Design notes
An advanced extension of Commonality and Variability Analysis in rjm designed for multi-axial problem domains; instead of forcing multi-dimensional variabilities into a single sparse matrix, it decomposes them into separate matrices per dimension and maps their interactions to decoupled Bridge or Strategy hierarchies.
