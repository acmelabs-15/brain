---
package: rjm
name: Steady State Focus
slug: steady-state-focus
kind: pattern
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

# Steady State Focus

## Definition — verbatim
> "1. **Steady State Focus**: Measure observable outputs (throughput, error rates, latency percentiles), not internal metrics" — .claude/skills/chaos-experiment/SKILL.md:256

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 256 | defined here | Core chaos principle prioritizing observable customer-facing system outputs over internal component metrics. |

## Consumes
Observable service telemetry (latency percentiles, request success rates, business transactions).

## Produces
Objective evaluation criteria reflecting actual user experience rather than internal implementation state.

## When applied
Applied during baseline establishment and metric definition across all chaos experiments.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Steady State Focus` establishes that system health is defined by customer-perceptible outputs rather than internal CPU/memory utilization, ensuring resilience experiments test actual business continuity.
