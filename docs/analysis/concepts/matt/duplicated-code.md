---
package: matt
name: Duplicated Code
slug: duplicated-code
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

# Duplicated Code

## Definition — verbatim
> "**Duplicated Code**: the same logic shape appears in more than one hunk or file in the change. → extract the shared shape, call it from both." — skills/engineering/code-review/SKILL.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/code-review.md | 46 | used here | Enumerated as one of the twelve Fowler code smells forming the Standards baseline floor. |
| external/code-review.md | 44 | used here | Mentioned in web docs as part of the baseline smell heuristics from Refactoring chapter 3. |
| skills/engineering/code-review/SKILL.md | 46 | defined here | Defined in the Standards smell baseline with extraction and reuse as the corrective move. |

## Consumes
Code diff containing multiple hunks or files.

## Produces
Code review recommendation to extract shared logic into a reusable abstraction.

## When applied
Evaluated during the Standards axis pass of code review across changes in a diff.

## Sub-concepts
none

## Part of
smell-baseline

## Implementation status
defects: doc-drift, other (recursive sub-agent fanning bug and shadowing of built-in /code-review)

## Design notes
Heuristic smell flagging identical or similar logic shapes across diff hunks. Provides reviewers with an immediate extraction move to prevent logic divergence and redundant maintenance overhead.
