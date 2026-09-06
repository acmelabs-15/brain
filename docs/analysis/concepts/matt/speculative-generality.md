---
package: matt
name: Speculative Generality
slug: speculative-generality
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/code-review.md, sha256: 124f2e73633621d31e199b6e3ccf05df0fca692c79080f1ebf1222688e098dd0}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Speculative Generality

## Definition — verbatim
> "**Speculative Generality**: abstraction, parameters, or hooks added for needs the spec doesn't have. → delete it; inline back until a real need shows." — skills/engineering/code-review/SKILL.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 46 | used here | Included in the baseline smell catalog protecting against premature abstraction. |
| external/code-review.md | 44 | used here | Listed in web documentation as part of the Fowler smell baseline. |
| skills/engineering/code-review/SKILL.md | 53 | defined here | Defined with the explicit remedy to delete unneeded abstractions and inline code. |

## Consumes
Abstract interfaces, unused parameters, or extension hooks uncalled by originating requirements.

## Produces
Recommendation to remove speculative hooks and inline abstractions until real needs emerge.

## When applied
Evaluated on the Standards axis to prune premature abstractions not justified by the spec.

## Sub-concepts
none

## Part of
smell-baseline

## Implementation status
defects: doc-drift, other (runaway sub-agent spawn defect and tool collision)

## Design notes
Heuristic against premature abstraction and over-engineering. Enforces YAGNI by eliminating unused hooks, unused configuration parameters, and unneeded indirection layers.
