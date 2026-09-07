---
package: rjm
name: CVA-to-Pattern Pipeline
slug: cva-to-pattern-pipeline
kind: technique
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

# CVA-to-Pattern Pipeline

## Definition — verbatim
> "The CVA-to-Pattern Pipeline" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 25 | defined here | Section heading introducing the progression from domain requirements to GoF patterns. |

## Consumes
Domain requirements and problem definitions.

## Produces
A sequence of commonalities, variabilities, entity relationships, and emergent design patterns.

## When applied
Applied during software architecture and design when structuring domain abstractions into patterns.

## Sub-concepts
commonality-analysis, variability-analysis

## Part of
multi-paradigm-design

## Implementation status
defects: missing-path

## Design notes
The CVA-to-Pattern Pipeline operationalizes Multi-Paradigm Design into an explicit progression: domain requirements yield commonalities (abstract nouns), variabilities yield concrete implementations, relationships dictate structural composition, and patterns (Strategy, Bridge, Factory) emerge deterministically.
