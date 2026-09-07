---
package: rjm
name: Cohesion
slug: cohesion
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/code-qualities-assessment/templates/.qualityrc.json, sha256: 31e9d74ee0b0c490d54d9ae9176b111a6b6bd6002550e4881e727afa7e3727d0}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cohesion

## Definition — verbatim
> "**Cohesion**: Class has single responsibility. Method has single function. Use Programming by Intention:" — .claude/agents/implementer.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 170 | defined here | Ranked as Level 1 diagnostic quality in the Software Hierarchy of Needs. |
| .claude/skills/analyze/references/design-legacy-code.md | 22 | defined here | Legacy code guide defining cohesion as single responsibility and unified purpose. |
| .claude/skills/code-qualities-assessment/README.md | 20 | defined here | Documented as one of 5 foundational qualities evaluated by automated assessment. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 6 | used here | Quality scanner script assessing module and class cohesion metrics. |
| .claude/skills/code-qualities-assessment/SKILL.md | 3 | defined here | Description defining cohesion assessment across codebases. |
| .claude/skills/code-qualities-assessment/templates/.qualityrc.json | 3 | used here | Configuration file defining thresholds and weights for cohesion rules. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 15 | defined here | Golden principles reference defining class and method cohesion. |
| .claude/skills/golden-principles/references/design-dry-principle.md | 58 | used here | Explaining trade-offs and synergies between DRY and cohesive component boundaries. |
| .claude/skills/quality-grades/references/code-qualities.md | 15 | defined here | Quality rubric defining cohesion criteria for class and function scoping. |
| .claude/skills/quality-grades/references/solid-principles.md | 37 | used here | Mapping Single Responsibility Principle directly to high cohesion. |
| .claude/skills/quality-grades/SKILL.md | 104 | used here | Skill workflow verifying that classes maintain strong conceptual cohesion. |
| .claude/skills/review/references/code-quality.md | 57 | defined here | Review checklist section establishing inspection criteria for class cohesion. |
| .claude/skills/taste-lints/SKILL.md | 42 | used here | Linter rule detecting low cohesion and runaway class responsibilities. |
| templates/agents/implementer.shared.md | 178 | used here | Shared implementer template listing cohesion as foundational diagnostic quality. |

## Consumes
Module boundaries, class responsibilities, and function scopes.

## Produces
Highly focused classes and methods where all elements collaborate toward a single responsibility.

## When applied
Evaluated during class design, functional decomposition, and code reviews.

## Sub-concepts
programming-by-intention

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Cohesion evaluates how strongly related and focused the responsibilities of a single software module are. In rjm, cohesion is a foundational Level 1 diagnostic quality; low cohesion signals blurred responsibilities that require decomposition via Commonality Variability Analysis or Programming by Intention.
