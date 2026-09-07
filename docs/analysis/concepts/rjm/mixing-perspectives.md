---
package: rjm
name: Mixing perspectives
slug: mixing-perspectives
kind: pattern
package_phase: cross-phase
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

# Mixing perspectives

## Definition — verbatim
> "- **Mixing perspectives**: Conceptual, specification, and implementation concerns" — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 63 | defined here | Identified in Common Mistakes as conflating conceptual, specification, and implementation concerns within the same analysis. |

## Consumes
Problem domain statements, CVA matrix drafts, software architecture proposals.

## Produces
Analysis feedback directing practitioners to separate domain abstractions, interface specifications, and concrete implementation mechanics.

## When applied
Identified during CVA matrix reviews when analysis elements confuse what a system does with how code interfaces or classes are structured.

## Sub-concepts
conceptual, specification, implementation, three-perspectives

## Part of
cva-analysis

## Implementation status
defects: missing-path

## Design notes
An architectural modeling anti-pattern identified in Coplien's Multi-Paradigm Design framework where analysts conflate Fowler's three perspectives (conceptual domain intent, specification interface contracts, and implementation code details) in a single CVA matrix, producing muddled abstractions that leak implementation mechanics into business domain models.
