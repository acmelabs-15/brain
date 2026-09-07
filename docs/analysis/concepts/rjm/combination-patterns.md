---
package: rjm
name: Combination Patterns
slug: combination-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Combination Patterns

## Definition — verbatim
> "## Combination Patterns" — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 157 | defined here | Section heading introducing multi-pattern architectures when both rows and columns vary. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 211 | used here | Matrix validation script suggests combination patterns (Strategy + Abstract Factory) when row and column variability are both high. |

## Consumes
CVA matrices exhibiting high variability across both dimensions simultaneously.

## Produces
Architectural designs integrating multiple design patterns (e.g. Strategy + Abstract Factory) to treat both axes as co-equal first-class abstractions.

## When applied
Applied when quantitative matrix evaluation demonstrates that both row variability and column variability exceed threshold levels.

## Sub-concepts
none

## Part of
cva-matrix-pattern-mapping-guide

## Implementation status
defects: doc-drift, script-bug

## Design notes
An architectural design pattern category in rjm covering compound pattern structures (most prominently Strategy + Abstract Factory) that emerge when a domain requires multidimensional variability, ensuring both dimensions are treated as first-class abstractions without compromising cohesion.
