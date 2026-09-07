---
package: rjm
name: SLO (Service Level Objective)
slug: slo-service-level-objective
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SLO (Service Level Objective)

## Definition — verbatim
> "| SLO (Service Level Objective) | Target value for an SLI | p99 latency < 200ms, 99.9% availability |" — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 16 | defined here | SRE term table row defining SLO as a target value for an SLI. |

## Consumes
Defined Service Level Indicators and user expectations of service reliability.

## Produces
Precise numeric reliability target bounding acceptable performance and enabling error budget derivation.

## When applied
Configured during service creation and enforced throughout production operation and testing.

## Sub-concepts
none

## Part of
slo-sli-sla-reference

## Implementation status
defects: missing-path

## Design notes
The Service Level Objective defines the internal reliability threshold that engineering teams commit to maintain. It balances delivery velocity against system stability, providing the governing baseline for error budget calculations.
