---
package: rjm
name: Establish Baseline
slug: establish-baseline
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

# Establish Baseline

## Definition — verbatim
> "### Phase 2: Establish Baseline" — .claude/skills/chaos-experiment/SKILL.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 95 | defined here | Phase 2 of the chaos experiment design process focused on quantifying normal system behavior. |

## Consumes
7 to 30 days of historical operational telemetry (throughput, error rates, latency percentiles, resource utilization).

## Produces
Quantified steady-state baseline document establishing normal operating metrics and green/yellow/red tolerance thresholds.

## When applied
Executed during Phase 2 of chaos experiment design prior to formulating hypotheses or scheduling failure injections.

## Sub-concepts
steady-state-focus

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Establish Baseline` is the prerequisite measurement phase in chaos experiment design that establishes normal operating bounds across business and technical metrics to enable objective deviation detection.
