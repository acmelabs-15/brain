---
package: rjm
name: slo-designer
slug: slo-designer
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# slo-designer

## Definition — verbatim
> "name: slo-designer" — .claude/skills/slo-designer/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 359 | used here | Related skill reference noting that SLO targets and error budgets directly inform chaos experiment tolerance thresholds. |
| .claude/skills/slo-designer/SKILL.md | 2 | defined here | Core skill definition for designing Service Level Objectives, Indicators, and error budget calculations. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 221 | used here | Cited as domain authority and reference model for reliability and SLA/SLO specifications. |

## Consumes
Critical user journeys, system architecture, telemetry indicators, and availability requirements.

## Produces
Production-ready Service Level Objectives, Service Level Indicators (SLIs), alerting thresholds, and error budget policies.

## When applied
Invoked when defining reliability targets, calculating error budgets, or establishing operational service level indicators.

## Sub-concepts
calculate_error_budget, generate_slo_document

## Part of
reliability

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`slo-designer` provides Google SRE-aligned methodologies to establish quantifiable reliability goals (SLOs/SLIs) and error budget governance that prevent both over-engineering and unmitigated service degradation.
