---
package: rjm
name: Fowler's three perspectives
slug: fowler-s-three-perspectives
kind: technique
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

# Fowler's three perspectives

## Definition — verbatim
(used, not defined)

> "in the same analysis. Keep them separate (Fowler's three perspectives)." — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 64 | used here | Cited in Common Mistakes as the required perspective separation model to prevent mixing conceptual, specification, and implementation concerns. |

## Consumes
Domain requirements, class models, interface specifications, software architecture designs.

## Produces
Clear mental and structural partitioning between conceptual models (domain meaning), specification models (type contracts), and implementation models (executable code).

## When applied
Applied throughout domain modeling and CVA matrix construction to evaluate and place abstractions at their appropriate architectural level.

## Sub-concepts
conceptual, specification, implementation

## Part of
cva-analysis

## Implementation status
defects: missing-path

## Design notes
Martin Fowler's tripartite perspective framework adopted within rjm's CVA methodology to maintain rigorous discipline during object-oriented analysis, requiring practitioners to isolate what the domain requires (conceptual) from interface types (specification) and concrete classes (implementation) to prevent premature coupling.
