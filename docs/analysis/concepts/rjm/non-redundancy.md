---
package: rjm
name: Non-Redundancy
slug: non-redundancy
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Non-Redundancy

## Definition — verbatim
> "5. **Non-Redundancy**: How unique is each piece of knowledge?" — .claude/skills/code-qualities-assessment/README.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/README.md | 24 | defined here | Enumerated as the fifth foundational code quality measuring uniqueness of system knowledge. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 10 | used here | Included in the assessment script module docstring as one of the 5 scored maintainability dimensions. |
| .claude/skills/code-qualities-assessment/SKILL.md | 3 | defined here | Stated in skill frontmatter description as a foundational quality evaluated by maintainability rubrics. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 17 | defined here | Tabulated as single authoritative representation (DRY) enabling centralized bug fixes. |
| .claude/skills/quality-grades/references/code-qualities.md | 17 | defined here | Evaluated during quality grading with the diagnostic question: Does this knowledge exist in exactly one place? |
| .claude/skills/review/references/code-quality.md | 80 | defined here | Section heading and review checklist item assessing DRY at the knowledge and business logic level. |

## Consumes
Source code, pull requests, architectural designs, and domain logic representations.

## Produces
Quantitative maintainability scores, duplicate logic detection findings, and refactoring recommendations.

## When applied
Applied during code quality assessment (`code-qualities-assessment`), architectural reviews (`review`), and domain quality grading (`quality-grades`).

## Sub-concepts
dry

## Part of
code-qualities-assessment

## Implementation status
clean

## Design notes
Non-Redundancy is one of the five foundational software qualities in rjm's maintainability framework (alongside cohesion, coupling, encapsulation, and testability). Defined as "DRY at the knowledge level," it demands a single authoritative representation for every business rule, schema mapping, and validation calculation, distinguishing accidental syntactic similarities from harmful duplication of system knowledge.
