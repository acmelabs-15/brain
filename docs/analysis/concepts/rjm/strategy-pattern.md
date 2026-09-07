---
package: rjm
name: Strategy pattern
slug: strategy-pattern
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Strategy pattern

## Definition — verbatim
(used, not defined)

> "**Core Insight**: Rows (commonalities) map to Strategy pattern. Columns (variabilities) map to Abstract Factory pattern. The matrix reveals whether abstraction is needed at all." — .claude/skills/cva-analysis/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 174 | used here | Documented as a heuristic mapping where high row variability maps to Strategy pattern. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 194 | used here | Output recommendation emitted by the validator when row variability is high and column variability is low. |
| .claude/skills/cva-analysis/SKILL.md | 21 | used here | Articulated as the core CVA insight where matrix rows (commonalities) map to Strategy pattern. |
| scripts/eval/eval-agents.py | 476 | used here | Used in test prompt evaluating whether an agent can extract recognition heuristics for Strategy pattern. |

## Consumes
High row variability across use cases where operations or algorithmic steps vary independently.

## Produces
Strategy interface encapsulating varying algorithms, interchangeable at runtime.

## When applied
When a CVA matrix demonstrates high variability along rows while columns remain relatively independent.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Strategy pattern is a foundational Gang of Four behavioral pattern centrally utilized in rjm's CVA framework. The core heuristic of CVA establishes that high row variability—where the specific implementation of a common operational step differs between use cases—naturally maps to the Strategy pattern. Without this mapping heuristic, developers would lack a deterministic rule for when to introduce behavioral encapsulation versus family-based factory abstractions.
