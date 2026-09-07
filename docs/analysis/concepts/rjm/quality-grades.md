---
package: rjm
name: quality-grades
slug: quality-grades
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
  - {path: .claude/skills/quality-grades/scripts/check_grade_changes.py, sha256: 8c2d151761ecfea270060dc7f4e9315bbb47eaf90270d208cbca64e87ac19280}
  - {path: .claude/skills/quality-grades/scripts/grade_domains.py, sha256: 14cd79a354e088527cb5cf77f2389be5577ed87949ba910b715ef69b7af91b5a}
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# quality-grades

## Definition — verbatim
> "name: quality-grades" — .claude/skills/quality-grades/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 3 | references | Reference directing users to the quality-grades skill for repo-wide domain audits. |
| .claude/skills/code-qualities-assessment/SKILL.md | 3 | references | Guidance distinguishing file-level code qualities from repo-wide quality-grades scoring. |
| .claude/skills/golden-principles/SKILL.md | 44 | references | Rule aligning architectural standards with quality-grades evaluation criteria. |
| .claude/skills/quality-grades/scripts/check_grade_changes.py | 97 | references | Script verifying that quality grade changes do not regress across commit revisions. |
| .claude/skills/quality-grades/scripts/grade_domains.py | 3 | defines | Domain grading script implementing automated A-F rubric calculations. |
| .claude/skills/quality-grades/SKILL.md | 2 | defines | Frontmatter name defining the quality-grades skill. |
| .claude/skills/quality-grades/SKILL.md | 8 | defines | Skill document title introducing domain grading and gap tracking methodologies. |
| templates/agents/quality-auditor.shared.md | 4 | references | Template guidance directing users to quality-grades for repository-wide domain audits. |

## Consumes
Domain source files, architectural layers, and scoring configuration files.

## Produces
Quantitative domain quality grades (A through F), gap lists, and grade delta tracking.

## When applied
Invoked when assessing repository domain health or monitoring grade changes between milestones.

## Sub-concepts
architectural-layers, a-f-domain-grading, gap-tracking, trend-analysis

## Part of
quality-auditor

## Implementation status
clean

## Design notes
A domain-level evaluation skill that assigns letter grades (A-F) across architectural layers and functional areas. By aggregating multidimensional metrics into clear domain grades, it enables teams to identify degraded subsystems and track quality improvements over time.
