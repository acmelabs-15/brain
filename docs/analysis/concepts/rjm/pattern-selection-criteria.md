---
package: rjm
name: Pattern Selection Criteria
slug: pattern-selection-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pattern Selection Criteria

## Definition — verbatim
> "## Pattern Selection Criteria" — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 233 | defined here | Heading for decision matrix evaluating patterns against variability, independence, complexity, and extensibility criteria. |

## Consumes
CVA matrix metrics, operation independence assessments, and system extensibility requirements.

## Produces
Evaluated pattern selection matrix comparing Strategy, Abstract Factory, Template Method, and Combination patterns.

## When applied
Applied when selecting among candidate GoF patterns following CVA matrix construction.

## Sub-concepts
none

## Part of
cva-matrix-pattern-mapping-guide

## Implementation status
clean

## Design notes
A structured multi-criteria decision framework in rjm evaluating design pattern candidates against row/column variability, operation independence, architectural complexity, and row/column extensibility to guarantee objective, verifiable architecture choices.
