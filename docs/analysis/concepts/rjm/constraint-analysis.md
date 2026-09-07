---
package: rjm
name: constraint_analysis
slug: constraint-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# constraint_analysis

## Definition — verbatim
> "### Lens 7: Constraint Analysis" — .claude/skills/skillforge/references/multi-lens-framework.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 23 | used here | Applied as a critical evaluation lens during CVA specification development. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 184 | defined here | Defined as Lens 7 of the multi-lens framework examining real versus self-imposed constraints. |

## Consumes
System requirements, technical boundaries, regulatory mandates, project constraints.

## Produces
Categorized inventory of genuine physical/business constraints versus arbitrary self-imposed restrictions.

## When applied
Applied when framing problems or evaluating architectures to question artificial limitations.

## Sub-concepts
none

## Part of
multi-lens-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
constraint_analysis is a core inquiry lens (Lens 7) in rjm's multi-lens framework designed to distinguish hard, irreducible external constraints from arbitrary, self-imposed developer assumptions. By challenging perceived limitations early in the specification and CVA processes, it prevents unnecessary architectural compromise and opens simpler implementation pathways. Without it, systems are frequently over-engineered to accommodate constraints that do not actually exist.
