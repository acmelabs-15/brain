---
package: rjm
name: quality-auditor
slug: quality-auditor
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: .claude/skills/quality-grades/scripts/grade_domains.py, sha256: 14cd79a354e088527cb5cf77f2389be5577ed87949ba910b715ef69b7af91b5a}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# quality-auditor

## Definition — verbatim
> "name: quality-auditor" — .claude/agents/quality-auditor.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 2 | defines | Support agent specification for repo-wide domain quality grading, gap tracking, and trend analysis. |
| .claude/skills/quality-grades/scripts/grade_domains.py | 432 | references | Invocation script referencing quality-auditor agent execution context for automated domain scoring. |
| docs/agent-catalog.md | 39 | references | Catalog entry describing the quality-auditor agent's role, responsibilities, and triggers. |
| templates/agents/quality-auditor.shared.md | 17 | defines | Shared template specification defining the quality-auditor role and workflow phases. |

## Consumes
Repository domain definitions, source files across architectural layers, and historical audit reports.

## Produces
A-F quality grades, gap tracking summaries, trend analyses, and prioritized remediation recommendations.

## When applied
Invoked periodically or on-demand for repo-wide quality audits and architectural health assessments.

## Sub-concepts
discovery, grading, reporting, recommendations, quality-grades

## Part of
none

## Implementation status
clean

## Design notes
An analytical support agent dedicated to systematic repository quality governance. Unlike targeted pre-merge reviews, the quality auditor evaluates health across entire domains and architectural layers, tracking long-term trends and identifying architectural gaps to guide debt remediation.
