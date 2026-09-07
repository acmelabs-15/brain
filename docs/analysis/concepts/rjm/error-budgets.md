---
package: rjm
name: Error Budgets
slug: error-budgets
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
  - {path: .claude/skills/observability/references/three-pillars-reference.md, sha256: 63be0738d54cfdc95c4c4190a3f4bf85375759061d8b4d32deed110f28d5526b}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Error Budgets

## Definition — verbatim
> "- Error budgets: derived from the SLOs." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:227

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 78 | defined here | Listed in Problem Domain Cross-Reference table as a Tier 3 (Senior) reliability concept paired with SLO/SLI/SLA. |
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 58 | used here | Cited in SRE practices relationship noting chaos experiments consume error budgets and must track consumption. |
| .claude/skills/observability/references/three-pillars-reference.md | 90 | used here | Listed in SRE relationship table indicating metrics track error budget consumption. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 227 | used here | Specified as a mandatory output derived from SLOs in PRD observability specifications. |

## Consumes
Service Level Objectives (SLOs), Service Level Indicators (SLIs), telemetry metrics.

## Produces
Allowable downtime and failure margin governing release pace and chaos experimentation allowance.

## When applied
Applied during PRD specification (Step 6 via slo-designer at Tier 3+) and when planning chaos experiments.

## Sub-concepts
none

## Part of
slo-designer

## Implementation status
defects: missing-path, doc-drift

## Design notes
Error Budgets quantifies acceptable unreliability derived directly from SLOs in rjm's specification and operations lifecycle, balancing innovation velocity against system stability by throttling deployments or chaos experiments when budgets are exhausted.
