---
package: rjm
name: Factory
slug: factory
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Factory

## Definition — verbatim
(used, not defined)

> "Factory" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 32 | used here | Listed in the CVA-to-Pattern Pipeline diagram as one of the emergent design patterns. |

## Consumes
CVA matrix column relationships where related families of objects must be created together.

## Produces
Factory interfaces and concrete factory classes enforcing valid object creation combinations.

## When applied
Applied when instantiating concrete implementations derived from matrix variability columns.

## Sub-concepts
factory-method

## Part of
cva-to-pattern-pipeline

## Implementation status
defects: missing-path

## Design notes
Factory in CVA design encapsulates object creation families corresponding to matrix variability columns, ensuring that creation knowledge is decoupled from usage and only coherent implementation variants are instantiated together.
