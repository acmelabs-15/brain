---
package: rjm
name: Workflow Coalescing Effectiveness
slug: workflow-coalescing-effectiveness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Workflow Coalescing Effectiveness

## Definition — verbatim
> "**Description**: Percentage of workflow runs successfully cancelled vs. running in parallel due to race conditions." — docs/agent-metrics.md:305

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-metrics.md | 303 | defined here | Defined as Metric 9 tracking CI/CD concurrency cancellation efficiency and race condition rates. |

## Consumes
GitHub Actions workflow run event telemetry and concurrency group cancellation data.

## Produces
Quantitative ratio of cancelled runs to total concurrent/cancelled runs, average cancellation latency, and race condition reports.

## When applied
Monitored continuously across workflow runs and aggregated for CI/CD automation optimization.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An operational CI/CD performance metric measuring the percentage of redundant workflow runs successfully cancelled by GitHub concurrency groups versus those executed in parallel due to race conditions. It ensures CI infrastructure efficiency and prevents duplicate workflow execution.
