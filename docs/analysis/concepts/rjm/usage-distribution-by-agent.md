---
package: rjm
name: Usage Distribution by Agent
slug: usage-distribution-by-agent
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Usage Distribution by Agent

## Definition — verbatim
> "Which agents are most/least utilized." — docs/agent-metrics.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/baseline-report.md | 90 | defined here | Baseline report section estimating agent tier utilization and identifying neglected specialist roles. |
| docs/agent-metrics.md | 136 | defined here | Canonical metric definition establishing utilization targets and balance objectives across agents. |

## Consumes
Session invocation logs, agent dispatch tallies, and routing telemetry.

## Produces
Ranked utilization distribution and underutilized agent flags.

## When applied
Assessed during architecture reviews to identify underutilized or over-burdened agents.

## Sub-concepts
none

## Part of
measurement-plan

## Implementation status
defects: missing-path

## Design notes
Usage Distribution by Agent monitors the spread of workload across the agent catalog, ensuring specialized agents (security, test, documentation) are effectively utilized rather than having the general coordinator handle tasks alone.
