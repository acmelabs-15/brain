---
package: matt
name: Repeated Switches
slug: repeated-switches
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

# Repeated Switches

## Definition — verbatim
> "**Repeated Switches**: the same `switch`/`if`-cascade on the same type recurs across the change. → replace with polymorphism, or one map both sites share." — skills/engineering/code-review/SKILL.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 46 | used here | Included in the twelve Fowler smells establishing the Standards review floor. |
| external/code-review.md | 44 | used here | Enumerated in external documentation describing the Standards axis smell baseline. |
| skills/engineering/code-review/SKILL.md | 50 | defined here | Defined with guidance to replace duplicate conditional cascades with polymorphism or shared maps. |

## Consumes
Conditional switch statements or if-else cascades matching the same discriminants.

## Produces
Recommendation to substitute polymorphism or a shared lookup map for scattered switches.

## When applied
Checked when the same type-discriminating conditions appear in multiple locations in a diff.

## Sub-concepts
none

## Part of
smell-baseline

## Implementation status
defects: doc-drift, other (recursive sub-agent loops and tool shadowing)

## Design notes
Heuristic targeting duplicated conditional logic on type discriminators. Replacing duplicate switches with polymorphism or shared lookup tables ensures that adding new variants requires editing only one central site.
