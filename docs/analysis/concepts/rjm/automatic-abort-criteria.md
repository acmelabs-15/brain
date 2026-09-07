---
package: rjm
name: "automatic abort criteria"
slug: automatic-abort-criteria
kind: gate
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# automatic abort criteria

## Definition — verbatim
(used, not defined)

> "3. Define automatic abort criteria" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 51 | used here | Mandatory safety rule defining threshold conditions that automatically halt experiment execution. |

## Consumes
Real-time telemetry streams, error budget burn metrics, and pre-set threshold alarms.

## Produces
Automated abort trigger instantly halting failure injection and initiating rollback procedures.

## When applied
Monitored continuously during active chaos experiment execution.

## Sub-concepts
none

## Part of
blast-radius-containment

## Implementation status
defects: missing-path

## Design notes
Automatic abort criteria serve as an automated circuit breaker during chaos experiments. If metric deviations exceed predefined safety thresholds or risk exhausting the service error budget, execution is terminated immediately without waiting for manual human intervention.
