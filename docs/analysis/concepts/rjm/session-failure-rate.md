---
package: rjm
name: session_failure_rate
slug: session-failure-rate
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/compute_health_status.py, sha256: 6eaa6186909dcbe2e368395148b24f0b3968685da7f351143d3378094749a863}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session_failure_rate

## Definition — verbatim
(used, not defined)

> "\"session_failure_rate\": Threshold(warning=0.10, error=0.25)," — scripts/compute_health_status.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/compute_health_status.py | 50 | defined here | Metric threshold key tracking the rate of failed, errored, or aborted agent execution sessions. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, missing-path

## Design notes
session_failure_rate is a telemetry metric identifier tracking the percentage of failed or aborted agent execution sessions rather than an operational lifecycle concept.
