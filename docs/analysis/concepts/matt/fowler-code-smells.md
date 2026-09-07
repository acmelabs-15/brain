---
package: matt
name: Fowler code smells
slug: fowler-code-smells
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: skills/engineering/code-review/SKILL.md, sha256: 47f4e52c21694def9c7c11cbfbf891ca35eac7a93e395797515be3c8a409ae50}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Fowler code smells

## Definition — verbatim
(used, not defined)
> "a fixed set of Fowler code smells (_Refactoring_, ch.3) that applies even when a repo documents nothing." — skills/engineering/code-review/SKILL.md:38

## Also called — verbatim
`smell baseline` — skills/engineering/code-review/SKILL.md:38

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review.md | 44 | used here | Describes the twelve Fowler code smells providing a floor heuristic for the Standards review axis. |
| skills/engineering/code-review/SKILL.md | 38 | used here | Establishes the fixed smell baseline from Refactoring ch. 3 applied when evaluating code diffs. |

## Consumes
Code diffs produced during implementation, repository coding standards, and commit hunks.

## Produces
Labelled heuristic findings with suggested remediation moves ("what it is -> how to fix").

## When applied
> "On top of whatever the repo documents, the Standards axis always carries the **smell baseline** below: a fixed set of Fowler code smells (_Refactoring_, ch.3) that applies even when a repo documents nothing." — skills/engineering/code-review/SKILL.md:38

## Sub-concepts
mysterious-name, duplicated-code, feature-envy, data-clumps, primitive-obsession, repeated-switches, shotgun-surgery, divergent-change, speculative-generality, message-chains, middle-man, refused-bequest

## Part of
code-review, standards

## Implementation status
defects: doc-drift, other, cross-file-contradiction

## Design notes
A standardized reference catalog of twelve classic code smells drawn from chapter 3 of Martin Fowler's Refactoring, serving as the foundational floor for code-review's Standards axis. Even when a target repository provides no custom CODING_STANDARDS.md, these twelve smells give agents and developers an objective baseline for identifying design flaws in diffs. Each smell is framed as a heuristic judgement call paired directly with an actionable refactoring move rather than treated as a rigid lint violation.
