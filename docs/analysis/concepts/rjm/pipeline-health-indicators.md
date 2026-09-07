---
package: rjm
name: Pipeline Health Indicators
slug: pipeline-health-indicators
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

# Pipeline Health Indicators

## Definition — verbatim
> "### Pipeline Health Indicators" — .claude/agents/devops.md:265

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 265 | defined here | Heading defining continuous health tracking metrics including build success, flaky tests, cache hits, and queue times. |

## Consumes
Continuous integration telemetry logs over time.

## Produces
Pipeline health reporting summaries (>=95% success rate, <2% flaky tests, >=80% cache hit rate, <2min queue time).

## When applied
In pipeline summary reports and operational health reviews.

## Sub-concepts
none

## Part of
pipeline-metrics

## Implementation status
defects: missing-path

## Design notes
A standardized set of operational telemetry metrics in rjm monitoring pipeline reliability and infrastructure health. Tracking build success rate, flaky test rate, dependency cache hit rate, and queue time ensures infrastructure issues are detected before they degrade developer productivity.
