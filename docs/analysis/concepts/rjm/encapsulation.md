---
package: rjm
name: Encapsulation
slug: encapsulation
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/code-qualities-assessment/templates/.qualityrc.json, sha256: 31e9d74ee0b0c490d54d9ae9176b111a6b6bd6002550e4881e727afa7e3727d0}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Encapsulation

## Definition — verbatim
> "**Encapsulation**: Encapsulate by policy, reveal by need. Hidden things cannot be coupled to. Easier to break encapsulation later than add it." — .claude/agents/implementer.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 170 | defined here | Level 1 diagnostic quality in the Software Hierarchy of Needs. |
| .claude/agents/type-design-analyzer.md | 77 | defined here | Review criteria verifying internal state encapsulation and data hiding. |
| .claude/skills/analyze/references/design-legacy-code.md | 25 | defined here | Legacy refactoring guide defining five forms of encapsulation. |
| .claude/skills/analyze/references/design-tell-dont-ask.md | 84 | defined here | Tell-Don't-Ask principle reference reinforcing behavioral encapsulation. |
| .claude/skills/code-qualities-assessment/README.md | 22 | defined here | Evaluated as foundational code quality in automated analysis tool. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 8 | used here | Code scanner script checking public field exposure and private visibility. |
| .claude/skills/code-qualities-assessment/SKILL.md | 3 | defined here | Assessment skill documentation listing encapsulation among 5 core qualities. |
| .claude/skills/code-qualities-assessment/templates/.qualityrc.json | 9 | used here | Configuration file defining thresholds for encapsulation metrics. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 18 | defined here | Documenting five types of encapsulation: data, implementation, type, design, and construction. |
| .claude/skills/golden-principles/references/design-dry-principle.md | 56 | used here | Examining relationship between information hiding and code sharing. |
| .claude/skills/quality-grades/references/code-qualities.md | 18 | defined here | Quality grades rubric evaluating data and behavioral hiding. |
| .claude/skills/quality-grades/references/solid-principles.md | 38 | used here | Connecting encapsulation and low coupling to Open-Closed Principle. |
| .claude/skills/review/references/code-quality.md | 69 | defined here | Review reference checklist item verifying information hiding. |
| templates/agents/implementer.shared.md | 178 | used here | Shared implementer template listing encapsulation in quality hierarchy. |
| templates/agents/type-design-analyzer.shared.md | 87 | defined here | Shared type review template rubric item scoring encapsulation rigor. |

## Consumes
Internal class state, implementation algorithms, data structures, and constructors.

## Produces
Protected internal representations with minimal, intention-revealing public interfaces.

## When applied
Applied to all type declarations, class member visibilities, and module boundaries.

## Sub-concepts
encapsulate-by-policy-reveal-by-need, state-always-private, encapsulate-constructors

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift, other

## Design notes
Encapsulation bundles data with the methods that operate on it, restricting direct external access to internal state. In rjm, encapsulation operates across five dimensions (data, implementation, type, design, and construction) to preserve system invariants and ensure internal representations can change freely.
