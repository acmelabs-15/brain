---
package: rjm
name: Programming by Intention
slug: programming-by-intention
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
  - {path: .claude/skills/golden-principles/references/design-solid-principles.md, sha256: 5aa244c1fbe421aafa6b7abc0e8161e548ed359cc09d88985371d294cbfb9144}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Programming by Intention

## Definition — verbatim
> "Express intent over implementation. Write code that reads like a description of what it does, not how it does it." — .claude/skills/golden-principles/references/design-programming-by-intention.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 172 | defined here | Level 3 practice in the Software Hierarchy of Needs. |
| .claude/commands/build.md | 57 | used here | Code review check verifying that methods read like sentences. |
| .claude/commands/plan.md | 37 | used here | Planning principle requiring each task to read like an intent rather than an implementation detail. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 25 | used here | Golden principles guide stating method cohesion is achieved via Programming by Intention. |
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 7 | defined here | Dedicated reference detailing the Sergeant pattern and intent-revealing method composition. |
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 26 | used here | Explaining how Programming by Intention separates workflow coordination from implementation. |
| .claude/skills/golden-principles/references/design-solid-principles.md | 23 | used here | Recommending Programming by Intention to satisfy Single Responsibility Principle. |
| .claude/skills/golden-principles/SKILL.md | 132 | used here | Catalog link to the Sergeant pattern reference. |
| .claude/skills/quality-grades/references/code-qualities.md | 24 | used here | Rubric standard assessing method-level single responsibility. |
| templates/agents/implementer.shared.md | 180 | used here | Shared implementer template listing Programming by Intention under Level 3 Practices. |

## Consumes
Multi-step procedures, business algorithms, and complex orchestration logic.

## Produces
High-level 'sergeant' methods that read like descriptive sentences delegating to focused private helpers.

## When applied
Applied whenever authoring or refactoring multi-step methods and functions.

## Sub-concepts
none

## Part of
cohesion, software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Programming by Intention structures methods so that the top-level method expresses what happens in plain, sentence-like calls, while dedicated private methods encapsulate how each sub-task is executed. This practice yields self-documenting code with outstanding method-level cohesion.
