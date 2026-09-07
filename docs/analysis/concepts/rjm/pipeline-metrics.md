---
package: rjm
name: Pipeline Metrics
slug: pipeline-metrics
kind: checklist
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pipeline Metrics

## Definition — verbatim
> "## Pipeline Metrics" — .claude/agents/devops.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 234 | defined here | Section heading mandating quantified performance targets across build times, coverage, deployment frequency, and pipeline health. |

## Consumes
Continuous integration and deployment telemetry.

## Produces
Quantified pipeline performance baselines and SLA compliance tracking.

## When applied
When designing, configuring, or evaluating CI/CD pipelines.

## Sub-concepts
build-time-targets, coverage-thresholds, deployment-frequency-goals, pipeline-health-indicators

## Part of
devops

## Implementation status
defects: missing-path

## Design notes
The governing performance measurement framework for CI/CD in rjm. It mandates explicit, quantified performance targets across build stage durations, test coverage thresholds, deployment cadence goals, and pipeline health indicators, preventing gradual pipeline bloat.
