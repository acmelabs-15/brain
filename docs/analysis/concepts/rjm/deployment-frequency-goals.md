---
package: rjm
name: Deployment Frequency Goals
slug: deployment-frequency-goals
kind: gate
package_phase: rjm:ship
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

# Deployment Frequency Goals

## Definition — verbatim
> "### Deployment Frequency Goals" — .claude/agents/devops.md:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 257 | defined here | Heading defining release cadences and MTTR recovery targets across development, staging, and production environments. |

## Consumes
Deployment logs, release schedules, and incident recovery metrics.

## Produces
Target deployment rhythms (on push for dev, daily for staging, weekly+ for prod) and MTTR caps.

## When applied
During release planning and deployment workflow orchestration.

## Sub-concepts
none

## Part of
pipeline-metrics

## Implementation status
defects: missing-path

## Design notes
Operational cadence and recovery goals across environments in rjm. It pairs frequency targets (such as daily staging deployments) with mean time to recovery (MTTR) targets (<15m dev, <30m staging, <1hr prod), balancing release velocity with recovery readiness.
