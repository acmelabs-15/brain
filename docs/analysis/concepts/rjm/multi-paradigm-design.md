---
package: rjm
name: Multi-Paradigm Design
slug: multi-paradigm-design
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Multi-Paradigm Design

## Definition — verbatim
> "Coplien's Multi-Paradigm Design" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 7 | defined here | Heading of the foundational reference document summarizing Coplien's design methodology. |
| .claude/skills/cva-analysis/SKILL.md | 14 | used here | Frontmatter author attribution crediting Multi-Paradigm Design (Coplien 1999) as the skill's methodological origin. |

## Consumes
Multiple domain requirements and use cases exhibiting both similarities and differences.

## Produces
A structured 2D Commonality-Variability matrix mapping domain concepts directly to software abstractions and GoF design patterns.

## When applied
Applied during specification and architectural design when structuring domain abstractions into patterns.

## Sub-concepts
commonality-analysis, variability-analysis, cva-to-pattern-pipeline

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Multi-Paradigm Design establishes the theoretical foundation for CVA in rjm, providing a disciplined alternative to intuition-driven pattern selection by discovering natural domain abstractions through systematic commonality and variability analysis.
