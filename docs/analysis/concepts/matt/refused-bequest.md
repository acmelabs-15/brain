---
package: matt
name: Refused Bequest
slug: refused-bequest
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

# Refused Bequest

## Definition — verbatim
> "**Refused Bequest**: a subclass or implementer that ignores or overrides most of what it inherits. → drop the inheritance, use composition." — skills/engineering/code-review/SKILL.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 46 | used here | Listed in the Fowler smell baseline table in the code review docs. |
| external/code-review.md | 44 | used here | Enumerated in external web documentation smell baseline. |
| skills/engineering/code-review/SKILL.md | 56 | defined here | Defined with instructions to replace ill-fitting inheritance with composition. |

## Consumes
Inheritance hierarchies where subclasses override, stub out, or ignore inherited members.

## Produces
Recommendation to replace inheritance with composition and targeted interfaces.

## When applied
Evaluated by Standards sub-agents detecting misuse of class inheritance in diffs.

## Sub-concepts
none

## Part of
smell-baseline

## Implementation status
defects: doc-drift, other (runaway sub-agent spawn defect and tool shadowing)

## Design notes
Identifies improper inheritance where a subclass rejects inherited behavior or data. Replacing the inheritance relationship with composition ensures clean, flexible object collaboration.
