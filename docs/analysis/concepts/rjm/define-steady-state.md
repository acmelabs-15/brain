---
package: rjm
name: Define steady state
slug: define-steady-state
kind: technique
package_phase: cross-phase
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

# Define steady state

## Definition — verbatim
> "1. **Define steady state**: Normal operating metrics (throughput, error rates, latency percentiles)" — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 13 | defined here | First step in the chaos engineering lifecycle defining normal system telemetry baselines. |

## Consumes
Operational metrics, service level indicators, latency distributions, and throughput baselines.

## Produces
Documented numerical baseline defining healthy system operation before experiment execution.

## When applied
Executed as the initial step of every chaos experiment before introducing failure variables.

## Sub-concepts
none

## Part of
chaos-engineering-principles, chaos-experiment

## Implementation status
defects: missing-path

## Design notes
Define steady state establishes the empirical baseline of normal system operation required for chaos experiments. By quantifying standard throughput, latency, and error rate thresholds prior to fault injection, it provides the objective benchmark needed to evaluate whether the system maintains resilience under stress.
