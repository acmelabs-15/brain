---
package: rjm
name: SLOs
slug: slos
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
  - {path: .claude/skills/slo-designer/templates/slo-config-template.yaml, sha256: e7371ba6f5c2a36e647af72ee6d8bbc7121c4e1c0ccebbce160477e54506a38d}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SLOs

## Definition — verbatim
> "   - SLOs (Service Level Objectives): numeric targets with rationale." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 57 | used here | SRE relationship bullet stating tolerance thresholds derive from SLO targets. |
| .claude/skills/slo-designer/templates/slo-config-template.yaml | 47 | defined here | YAML configuration root mapping specific SLIs to target percentages and time windows. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 226 | used here | Operational requirements checklist defining numeric targets with rationale. |

## Consumes
Service Level Indicators (SLIs), historical latency and error baselines, and business requirements.

## Produces
Quantitative reliability targets that govern deployment gates, error budget calculations, and alerting rules.

## When applied
Defined during specification generation and operational readiness reviews; enforced across all runtime operations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path, orphan

## Design notes
Service Level Objectives formalize the quantitative reliability commitments of services within RJM. They provide the empirical basis for calculating error budgets, establishing tolerance thresholds for chaos experiments, and gating continuous deployment pipelines.
