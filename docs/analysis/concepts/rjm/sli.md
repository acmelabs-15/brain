---
package: rjm
name: SLI
slug: sli
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

# SLI

## Definition — verbatim
> "Service Level Indicator. Metric measuring service quality." — .claude/skills/slo-designer/SKILL.md:46

## Also called — verbatim
> "Service Level Indicator" — .claude/skills/slo-designer/SKILL.md:46

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/scripts/generate_slo_document.py | 47 | defined here | Dataclass representing a service level indicator with metric measurement queries and event filters. |
| .claude/skills/slo-designer/SKILL.md | 46 | defined here | Core concept table defining SLI as a metric measuring service quality. |

## Consumes
Service metrics, request logs, Prometheus event streams, and user journey definitions.

## Produces
Quantitative measurement queries (e.g. PromQL availability ratios or latency percentiles).

## When applied
Defined during the SLI Definition stage of the SLO design lifecycle.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: internal-contradiction, exit-code-mismatch, missing-path, doc-drift, cross-file-contradiction

## Design notes
Service Level Indicators provide quantitative, objective telemetry measurements of service performance and reliability from a user perspective. In rjm's `slo-designer`, SLIs form the empirical foundation upon which Service Level Objectives and error budgets are established.
