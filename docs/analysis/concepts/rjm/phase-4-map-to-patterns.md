---
package: rjm
name: Phase 4: Map to Patterns
slug: phase-4-map-to-patterns
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 4: Map to Patterns

## Definition — verbatim
> "### Phase 4: Map to Patterns" — .claude/skills/cva-analysis/SKILL.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 176 | defined here | Fourth phase of Commonality Variability Analysis translating matrix structure into GoF design patterns. |

## Consumes
Populated CVA Markdown matrix from Phase 3.

## Produces
Design pattern recommendations (Strategy, Abstract Factory, Bridge) with matrix-backed rationale and an ADR stub.

## When applied
Executed in CVA analysis once the CVA matrix is fully populated and verified.

## Sub-concepts
multidimensional-variability

## Part of
cva-analysis

## Implementation status
defects: doc-drift

## Design notes
`Phase 4: Map to Patterns` translates the geometric structure of the CVA matrix into proven design patterns (matrix rows to Strategy algorithms, matrix columns to Abstract Factory product families, multidimensional variations to co-equal first-class abstractions), ensuring abstractions are empirically justified by requirement variation rather than upfront guesswork.
