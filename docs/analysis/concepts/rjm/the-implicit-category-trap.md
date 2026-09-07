---
package: rjm
name: The Implicit Category Trap
slug: the-implicit-category-trap
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Implicit Category Trap

## Definition — verbatim
> "Assuming the model will infer categories from examples alone." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1579

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1577 | defined here | Defined as an anti-pattern assuming models will infer generalization categories from specific examples alone. |
| .claude/skills/prompt-engineer/references/workflow.md | 308 | used here | Audited in Phase 4 prompt optimization checks to ensure examples are paired with explicit principles. |

## Consumes
Lists of examples without categorization or boundary rules.

## Produces
Overfitting to exact enumerated instances and failure to generalize to new cases.

## When applied
> "The principle statement ("if the command could change...") gives the model a _test_ to apply to novel cases, not just examples to memorize." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1612

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Implicit Category Trap arises when prompt authors provide a list of examples (such as forbidden commands: `rm, mv, chmod`) assuming the LLM will infer the overarching category ("commands modifying filesystem state"). Without an explicit category label and an operational principle test, the model memorizes the specific tokens rather than applying generalized boundaries.
