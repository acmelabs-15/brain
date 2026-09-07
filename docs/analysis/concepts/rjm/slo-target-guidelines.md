---
package: rjm
name: SLO Target Guidelines
slug: slo-target-guidelines
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SLO Target Guidelines

## Definition — verbatim
(used, not defined)

> "## SLO Target Guidelines" — .claude/skills/slo-designer/SKILL.md:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/SKILL.md | 200 | defined here | Reference table establishing baseline availability, latency, and error rate targets across service archetypes. |

## Consumes
Service classification (e.g. Consumer Web, Internal API, B2B Critical, Batch Jobs, Real-time).

## Produces
Standard baseline availability percentages, latency thresholds, and error rates.

## When applied
Consulted during Step 3 (SLO Targets) when establishing initial reliability targets.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction, exit-code-mismatch

## Design notes
A reference benchmark table in `slo-designer` providing baseline reliability targets and error tolerances across standard service archetypes (e.g. Consumer Web at 99.9%, Internal API at 99.5%, Real-time at 99.99%). It gives designers realistic starting points and prevents arbitrary target selection.
