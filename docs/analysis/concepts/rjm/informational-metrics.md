---
package: rjm
name: informational metrics
slug: informational-metrics
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# informational metrics

## Definition — verbatim
> "- Separate informational metrics from decision metrics. A dashboard with 30" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/decision-pre-committed-metrics.md | 47 | defined here | Defined in contrast to decision metrics as passive monitoring numbers that lack pre-committed thresholds. |

## Consumes
System telemetry, background telemetry feeds, and observational dashboards.

## Produces
Observational awareness and situational context without binding operational consequences.

## When applied
Monitored continuously for health trends, but excluded from acting as decision gate criteria.

## Sub-concepts
none

## Part of
pre-committed-metrics-force-honest-evaluation

## Implementation status
defects: doc-drift

## Design notes
Informational metrics represent observational indicators monitored for context but deliberately decoupled from decision forks. Separating them from decision metrics prevents dashboard clutter and ensures only decisive signals drive operational decisions.
