---
package: rjm
name: Execute Experiment
slug: execute-experiment
kind: phase
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Execute Experiment

## Definition — verbatim
> "### Phase 5: Execute Experiment" — .claude/skills/chaos-experiment/SKILL.md:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 184 | defined here | Phase 5 governing the live execution, telemetry monitoring, observation logging, and rollback vigilance. |

## Consumes
Approved injection plan, tested rollback procedures, stakeholder notification, and active monitoring dashboards.

## Produces
Timestamped execution observation log recording metric movements, system alerts, and recovery events.

## When applied
Executed during scheduled game days or maintenance windows after all pre-execution checklist items pass.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Execute Experiment` represents the active operational execution phase where controlled disruption is introduced while monitoring thresholds in real time to trigger automatic abort if needed.
