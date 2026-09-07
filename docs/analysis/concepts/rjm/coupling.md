---
package: rjm
name: Coupling
slug: coupling
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
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Coupling

## Definition — verbatim
> "**Coupling**: Four types exist:" — .claude/agents/implementer.md:216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 170 | defined here | Level 1 diagnostic quality in the Software Hierarchy of Needs. |
| .claude/skills/analyze/references/design-legacy-code.md | 23 | defined here | Refactoring reference defining coupling types and decoupling techniques. |
| .claude/skills/code-qualities-assessment/README.md | 21 | defined here | Evaluated as a core quality in automated code assessment. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 7 | used here | Automated analysis script measuring afferent and efferent coupling. |
| .claude/skills/code-qualities-assessment/SKILL.md | 3 | defined here | Included in skill overview for code maintainability assessment. |
| .claude/skills/code-qualities-assessment/templates/.qualityrc.json | 6 | used here | Configuration schema establishing coupling threshold tolerances. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 16 | defined here | Reference detailing intentional vs accidental coupling mechanisms. |
| .claude/skills/golden-principles/references/design-dry-principle.md | 57 | used here | Analyzing interaction between deduplication and coupling. |
| .claude/skills/quality-grades/references/code-qualities.md | 16 | defined here | Quality grades rubric evaluating coupling across interface boundaries. |
| .claude/skills/quality-grades/SKILL.md | 104 | used here | Quality review step verifying low coupling between modules. |
| .claude/skills/review/references/code-quality.md | 63 | defined here | Checklist section for inspecting inter-class dependencies and coupling risks. |
| templates/agents/implementer.shared.md | 178 | used here | Shared implementer template listing coupling as foundational diagnostic quality. |

## Consumes
Inter-module dependencies, type references, inheritance hierarchies, and method signatures.

## Produces
Decoupled component interfaces with intentional, documented, and minimized dependencies.

## When applied
Monitored whenever establishing connections, imports, or references between distinct software entities.

## Sub-concepts
none

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Coupling measures the degree of interdependence between components. RJM differentiates intentional coupling (deliberate dependency on stable abstractions) from accidental coupling (unplanned reliance on concrete implementations), targeting low coupling to enable isolated changes and reliable testing.
