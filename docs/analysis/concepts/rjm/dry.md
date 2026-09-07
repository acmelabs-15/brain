---
package: rjm
name: DRY
slug: dry
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DRY

## Definition — verbatim
> "| Non-Redundancy | DRY: single authoritative representation | Does this knowledge exist in exactly one place? |" — .claude/skills/quality-grades/references/code-qualities.md:17

## Also called — verbatim
> "| Non-Redundancy | DRY: single authoritative representation | Does this knowledge exist in exactly one place? |" — .claude/skills/quality-grades/references/code-qualities.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 145 | used here | Cited in implementer code quality metrics alongside SOLID and YAGNI. |
| .claude/skills/code-qualities-assessment/README.md | 94 | used here | Included in code qualities assessment tooling as non-redundancy metric. |
| .claude/skills/code-qualities-assessment/SKILL.md | 311 | used here | Documented as non-redundancy evaluation criterion in quality scanner. |
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 122 | used here | Applied to context management to avoid repeating instructions across prompts. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 40 | used here | Defined in terms of eliminating redundancy across state, functions, and configuration. |
| .claude/skills/quality-grades/references/code-qualities.md | 17 | used here | Quality grades rubric defining DRY as single authoritative representation of knowledge. |
| .claude/skills/review/references/architect.md | 59 | used here | Architect review checklist item ensuring single source of truth across components. |
| .claude/skills/review/references/code-quality.md | 80 | used here | Code quality review reference detailing redundancy detection and refactoring. |
| templates/agents/implementer.shared.md | 153 | used here | Shared implementer template citing DRY in quality standards. |

## Consumes
Source code, configuration files, business logic, and schema definitions.

## Produces
Deduplicated architectures where every piece of knowledge has a single, unambiguous, authoritative representation.

## When applied
Enforced continuously across implementation and refactoring to eliminate redundant logic and split authority.

## Sub-concepts
none

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Don't Repeat Yourself (DRY) in rjm extends beyond code copy-paste to encompass state, configuration, relationships, and object construction. Ensuring every domain truth has a single authoritative representation prevents divergent bugs when system behaviors change.
