---
package: rjm
name: code-quality
slug: code-quality
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
  - {path: docs/design/external-signal-gating.md, sha256: e2205c9c37e1690af881f70be4867634ecb367f1cbda26948b66209b18e8fa25}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# code-quality

## Definition — verbatim
> "name: code-quality" — .claude/skills/review/references/code-quality.md:2

## Also called — verbatim
"Code Quality" — docs/skill-reference.md:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/code-quality.md | 2 | defined here | Review axis role and reference specification defining maintainability qualities and Boy Scout cleanup. |
| .claude/skills/review/references/qa.md | 117 | defined here | QA review section establishing code quality metrics and thresholds for CODE PRs. |
| .claude/skills/review/SKILL.md | 29 | used here | Named as one of the 11 Stage-2 canonical review axes in the review convergence contract. |
| .claude/skills/software-engineering-library/SKILL.md | 12 | used here | Specified as the everyday default reference loading on every turn for software engineering design. |
| docs/design/external-signal-gating.md | 33 | used here | External signal gate evaluating lint exit codes, static analysis findings, and complexity caps. |
| docs/skill-reference.md | 28 | defined here | Functional skill category grouping style enforcement, taste lints, and maintainability assessments. |

## Consumes
Pull request diff, lint results, complexity metrics, and static analysis findings.

## Produces
Maintainability assessment scores, findings on weak cohesion or duplication, and review verdicts.

## When applied
During Stage-2 pull request review, design consultations, and automated external-signal gating.

## Sub-concepts
scoped-cleanup, maintainability-assessment, overall-maintainability-score

## Part of
review

## Implementation status
defects: doc-drift, missing-path, other

## Design notes
A core review axis and functional skill domain in rjm focused on software maintainability, non-redundancy, testability, and Boy Scout cleanup, ensuring changed code remains modular and clean without expanding into runaway refactoring.
