---
package: rjm
name: tiebreaker
slug: tiebreaker
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# tiebreaker

## Definition — verbatim
> "The likely reason is in the rule's own first line: it is a **tiebreaker**. It says which principle wins when two the model already knows collide." — .claude/skills/context-optimizer/references/model-context-doctrine.md:120-121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 120 | defined here | Defined as an arbitration rule establishing repository-specific priority when competing engineering principles conflict. |

## Consumes
Competing pre-trained engineering principles (e.g. DRY vs YAGNI).

## Produces
Explicit repository priority ordering resolving architectural trade-offs.

## When applied
Applied during rule design when conflicting design principles must be adjudicated in code implementation.

## Sub-concepts
none

## Part of
admission-test, model-context-doctrine

## Implementation status
clean

## Design notes
An arbitration rule pattern that provides local repository policy by resolving collisions between well-known engineering principles (e.g. DRY vs YAGNI). Because models know the individual principles but cannot know local preferences, tiebreakers qualify for prompt slots as local knowledge rather than generic restatement.
