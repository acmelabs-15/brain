---
package: rjm
name: code-qualities-assessment
slug: code-qualities-assessment
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# code-qualities-assessment

## Definition — verbatim
> "name: code-qualities-assessment" — .claude/skills/code-qualities-assessment/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 3 | references | Reference directing users to code-qualities-assessment for single-file maintainability analysis. |
| .claude/skills/analyze/SKILL.md | 4 | references | Recommended skill for deep file-level code quality scoring during architectural analysis. |
| .claude/skills/code-qualities-assessment/SKILL.md | 2 | defines | Frontmatter declaration defining the code-qualities-assessment skill. |
| .claude/skills/quality-grades/SKILL.md | 102 | references | Guidance noting code-qualities-assessment evaluates file-level maintainability rather than repo domains. |
| .claude/skills/review/SKILL.md | 4 | references | Cross-skill reference recommending code-qualities-assessment for granular maintainability scoring. |
| .claude/skills/software-engineering-library/SKILL.md | 65 | references | Citation integrating code quality rubrics into core software engineering practices. |
| .claude/skills/validation-authority/SKILL.md | 138 | references | Quality validation standard referenced during formal build gate verification. |
| scripts/validation/check_build_gates.py | 6 | references | Script checking that code-qualities-assessment standards are respected during build gating. |
| templates/agents/quality-auditor.shared.md | 4 | references | Template guidance recommending code-qualities-assessment for single-file maintainability evaluation. |

## Consumes
Target source code files, maintainability rubrics, and cyclomatic complexity metrics.

## Produces
Detailed file-level code quality scorecard across eight core dimensions (readability, cohesion, coupling, etc.).

## When applied
Invoked when analyzing individual files or pull request diffs for maintainability, technical debt, and code health.

## Sub-concepts
none

## Part of
review

## Implementation status
clean

## Design notes
A fine-grained assessment technique focused on single-file code quality, maintainability, and readability across eight dimensions. It complements high-level domain grading by providing deep, actionable feedback on code smells, structural complexity, and coupling in specific source files.
