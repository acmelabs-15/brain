---
package: rjm
name: Rollback Procedure
slug: rollback-procedure
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
  - {path: .claude/skills/chaos-experiment/templates/experiment-template.md, sha256: 78330ff18cbd4a561b86cf638bfd91ee3fc83ffa3328d20379fb14fcb3341377}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rollback Procedure

## Definition — verbatim
(used, not defined)

> "## Rollback Procedure" — .agents/governance/agent-consolidation-process.md:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 257 | defined here | Six-step recovery procedure (Assess, Revert, Communicate, Analyze, Re-plan, Retry) if agent consolidation introduces regressions. |
| .claude/skills/chaos-experiment/templates/experiment-template.md | 146 | defined here | Section template detailing automatic triggers and manual commands to abort chaos experiments and restore steady-state. |

## Consumes
Incident alerts, consolidation failures, or chaos experiment abort triggers.

## Produces
Restored previous system state, user notifications, and root-cause analysis.

## When applied
Triggered when a change, migration, or experiment causes unexpected system failure or breaches tolerance thresholds.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A standard operational recovery protocol defined across governance and chaos engineering workflows in rjm. It guarantees that any architectural consolidation or disruptive resilience test has an explicit, tested path back to a safe steady-state if regressions occur.
