---
package: rjm
name: Software Hierarchy of Needs
slug: software-hierarchy-of-needs
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Software Hierarchy of Needs

## Definition — verbatim
> "Bottom-up. Design emerges from qualities, not from pattern selection." — .claude/agents/implementer.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 166 | defined here | Section heading introducing the bottom-up architectural design priority hierarchy. |
| .claude/skills/analyze/references/design-legacy-code.md | 17 | defined here | Reference document detailing the 5 levels of the hierarchy for refactoring legacy code. |
| .claude/skills/analyze/SKILL.md | 65 | used here | Analyze skill reference directing engineers to apply the hierarchy of needs. |
| templates/agents/implementer.shared.md | 174 | defined here | Shared implementer template defining the 5 levels of the software hierarchy of needs. |

## Consumes
Software architectures, problem domains, legacy code refactoring plans, and class structures.

## Produces
A five-tier design progression: Qualities -> Principles -> Practices -> Patterns -> Wisdom.

## When applied
Applied whenever designing new subsystems or evaluating code quality during refactoring.

## Sub-concepts
cohesion, coupling, dry, encapsulation, open-closed, encapsulate-by-policy-reveal-by-need, separation-of-concerns, separate-use-from-creation, coding-standards, state-always-private, programming-by-intention, encapsulate-constructors, bridge

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
The Software Hierarchy of Needs is rjm's governing model of emergent software design. It enforces a bottom-up discipline where code maintainability is founded first on diagnostic qualities (testability, cohesion, low coupling), which then inform principles and practices, treating design patterns as late solutions rather than starting blueprints.
