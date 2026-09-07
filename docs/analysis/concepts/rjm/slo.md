---
package: rjm
name: SLO
slug: slo
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
  - {path: .claude/skills/slo-designer/scripts/generate_slo_document.py, sha256: 6cfedee270c2143f72cb05e1d5d1984bd31db0761caa9f91c1d71d621d547e80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SLO

## Definition — verbatim
> "Service Level Objective. Target value for an SLI." — .claude/skills/slo-designer/SKILL.md:47

## Also called — verbatim
> "Service Level Objective" — .claude/skills/slo-designer/SKILL.md:47

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/scripts/generate_slo_document.py | 59 | defined here | Dataclass defining an SLO with target percentage, measurement window, and rationale. |
| .claude/skills/slo-designer/SKILL.md | 47 | defined here | Core concept table defining SLO as the target reliability goal based on an SLI. |

## Consumes
Service Level Indicators (SLIs), service criticality ratings, and dependency chain constraints.

## Produces
Target reliability percentages, measurement windows (e.g. 30-day rolling), and error budgets.

## When applied
Established during the SLO Targets phase of the `slo-designer` workflow.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: internal-contradiction, exit-code-mismatch, missing-path, doc-drift, cross-file-contradiction

## Design notes
Service Level Objectives specify target performance thresholds over rolling measurement windows (e.g. 99.9% availability over 30 days) to balance feature development velocity with service reliability. In rjm, SLOs act as internal quality targets rather than binding external contracts (SLAs).
