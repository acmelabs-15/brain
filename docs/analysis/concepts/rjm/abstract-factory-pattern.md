---
package: rjm
name: Abstract Factory pattern
slug: abstract-factory-pattern
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Abstract Factory pattern

## Definition — verbatim
(used, not defined)

> "**Core Insight**: Rows (commonalities) map to Strategy pattern. Columns (variabilities) map to Abstract Factory pattern. The matrix reveals whether abstraction is needed at all." — .claude/skills/cva-analysis/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 175 | used here | Stated in validation heuristics where high column variability maps to Abstract Factory pattern. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 205 | used here | Emitted as the primary pattern suggestion when column variability is high and row variability is moderate. |
| .claude/skills/cva-analysis/SKILL.md | 21 | used here | Formulated in core insight where matrix columns (variabilities) map to Abstract Factory pattern. |

## Consumes
High column variability in CVA matrix representing cohesive product or domain families.

## Produces
Abstract factory interface producing families of related or dependent objects without specifying concrete classes.

## When applied
When CVA matrix analysis reveals that operations cluster into coherent column-wise product families.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, script-bug

## Design notes
Abstract Factory pattern is a classic Gang of Four creational pattern integral to rjm's CVA methodology. In CVA's geometric mapping, high column variability—where each use case defines a cohesive family of interdependent implementations across all operations—signals that Abstract Factory is the appropriate abstraction. Without this pattern heuristic, developers would decompose families into separate independent strategies, destroying domain cohesion.
