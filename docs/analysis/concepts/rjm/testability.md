---
package: rjm
name: Testability
slug: testability
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/code-qualities-assessment/templates/.qualityrc.json, sha256: 31e9d74ee0b0c490d54d9ae9176b111a6b6bd6002550e4881e727afa7e3727d0}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Testability

## Definition — verbatim
> "| Testability | Ability to verify behavior in isolation | Reveals design problems early |" — .claude/skills/golden-principles/references/design-code-qualities.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 120 | defines | Review axis verifying pass/fail acceptance criteria and comprehensive edge-case test strategies. |
| .claude/agents/implementer.md | 170 | defines | Core code quality listed under the bottom-up design hierarchy alongside cohesion and coupling. |
| .claude/skills/analyze/references/design-legacy-code.md | 21 | defines | Quality level 1 in legacy code assessment revealing design flaws through testability barriers. |
| .claude/skills/code-qualities-assessment/README.md | 23 | defines | Maintainability dimension evaluating how easily behavior can be verified in isolation. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 9 | used here | Code maintainability assessment quality evaluated across language modules. |
| .claude/skills/code-qualities-assessment/SKILL.md | 3 | defines | Foundational maintainability quality scored in code quality assessment rubrics. |
| .claude/skills/code-qualities-assessment/templates/.qualityrc.json | 12 | used here | Configuration threshold specifying minimum acceptable score for testability. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 19 | defines | Foundational code quality defined as the ability to verify behavior in isolation. |
| .claude/skills/quality-grades/references/code-qualities.md | 19 | defines | Code quality dimension prompting evaluation of isolated verification mechanisms. |
| .claude/skills/quality-grades/references/solid-principles.md | 39 | used here | Code quality linked to Liskov Substitution Principle compliance. |
| .claude/skills/review/references/code-quality.md | 74 | defines | Code review quality checking dependency injection and isolated execution without heavy I/O. |
| templates/agents/critic.shared.md | 124 | defines | Shared template review axis checking pass/fail acceptance criteria and edge cases. |
| templates/agents/implementer.shared.md | 178 | used here | Shared template quality in bottom-up design hierarchy for implementers. |

## Consumes
Source code, dependency structures, and acceptance criteria.

## Produces
Testability scores, identified seam deficiencies, and isolated verification tests.

## When applied
Applied during code design, maintainability scoring, plan critique, and code review.

## Sub-concepts
none

## Part of
review-axes

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A foundational software quality and review axis measuring the ease with which code behavior can be verified in isolation without standing up complex external environments or unmockable dependencies.
