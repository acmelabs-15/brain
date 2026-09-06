---
package: matt
name: Feature Envy
slug: feature-envy
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

# Feature Envy

## Definition — verbatim
> "**Feature Envy**: a method that reaches into another object's data more than its own. → move the method onto the data it envies." — skills/engineering/code-review/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 46 | used here | Cited as an exemplar labelled heuristic in the Fowler smell baseline. |
| external/code-review.md | 44 | used here | Cited in external documentation as an example of a labelled heuristic smell. |
| skills/engineering/code-review/SKILL.md | 47 | defined here | Defined with guidance to relocate methods closer to the data they operate upon. |

## Consumes
Method signatures, invocations, and object property access patterns in a diff.

## Produces
Refactoring suggestion to relocate methods onto the envious target's class or module.

## When applied
Evaluated by the Standards sub-agent when reviewing methods accessing foreign object data.

## Sub-concepts
none

## Part of
smell-baseline

## Implementation status
defects: doc-drift, other (unrestricted delegation in sub-agent prompts and collision with Claude Code built-in)

## Design notes
Classic Fowler code smell identifying methods that operate primarily on external data. Enforces encapsulation and high cohesion by relocating logic to the data owner.
