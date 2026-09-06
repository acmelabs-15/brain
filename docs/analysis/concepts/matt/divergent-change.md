---
package: matt
name: Divergent Change
slug: divergent-change
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

# Divergent Change

## Definition — verbatim
> "**Divergent Change**: one file or module is edited for several unrelated reasons. → split so each module changes for one reason." — skills/engineering/code-review/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 46 | used here | Listed as a primary Fowler smell heuristic in the Standards axis. |
| external/code-review.md | 44 | used here | Documented in external web docs as part of the Fowler smell baseline. |
| skills/engineering/code-review/SKILL.md | 52 | defined here | Defined with guidance to split modules that are subject to multiple reasons for change. |

## Consumes
A single file or module undergoing edits addressing multiple disparate concerns.

## Produces
Refactoring recommendation to split the module along responsibility seams.

## When applied
Evaluated when a single file is modified for multiple orthogonal requirements.

## Sub-concepts
none

## Part of
smell-baseline

## Implementation status
defects: doc-drift, other (sub-agent delegation recursion and CLI shadowing)

## Design notes
Complement to Shotgun Surgery focusing on single-responsibility violations. When one module is modified for multiple unrelated reasons, splitting it ensures each module changes for only one reason.
