---
package: rjm
name: Sparse combinations
slug: sparse-combinations
kind: pattern
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

# Sparse combinations

## Definition — verbatim
> "| Sparse combinations | Abstract Factory constrains valid pairs |" — .claude/skills/cva-analysis/references/multidimensional-cva.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/multidimensional-cva.md | 33 | defined here | Pattern mapping table entry directing that sparse valid pairings across dimensions be constrained by Abstract Factory. |

## Consumes
Multidimensional CVA analysis where only a subset of cross-dimensional combinations are semantically valid.

## Produces
Abstract Factory pattern constraining client instantiation to only valid, coherent pairs of components.

## When applied
When two variation dimensions should not be freely combined by callers due to domain or technical constraints.

## Sub-concepts
none

## Part of
multidimensional-cva

## Implementation status
defects: missing-path

## Design notes
A structural pattern recommendation in multidimensional CVA where only specific pairings across two dimensions are valid; to prevent clients from assembling incompatible combinations, an Abstract Factory encapsulates valid component pairings and enforces structural compatibility.
