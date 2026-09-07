---
package: rjm
name: Category-Based Generalization
slug: category-based-generalization
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Category-Based Generalization

## Definition — verbatim
> "Rather than listing every possible example, group examples by type to enable analogical reasoning." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:664

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 56 | used here | Cites category-based generalization as a prompt pattern used to define file categories (CODE, DOCS, WORKFLOW). |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 662 | defined here | Defined as an example design pattern grouping examples by type to foster analogical reasoning and principle extraction. |

## Consumes
Example collections, command lists, and domain concepts.

## Produces
Grouped taxonomic categories and underlying governing principles that models can generalize to unlisted instances.

## When applied
Used when designing few-shot examples or classifying system operations (e.g. sandbox permissions, file types).

## Sub-concepts
none

## Part of
prompt-engineering-patterns, example-design

## Implementation status
defects: missing-path, internal-contradiction, doc-drift (.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:104); clean in .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md

## Design notes
`Category-Based Generalization` structures examples into logical categories so models infer underlying behavioral rules rather than merely memorizing literal examples, enabling correct handling of novel inputs.
