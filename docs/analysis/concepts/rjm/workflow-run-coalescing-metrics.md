---
package: rjm
name: Workflow Run Coalescing Metrics
slug: workflow-run-coalescing-metrics
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Workflow Run Coalescing Metrics

## Definition — verbatim
> "This metrics report tracks the effectiveness of GitHub Actions workflow run coalescing for AI-powered workflows in the repository." — .agents/metrics/workflow-coalescing.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 1 | defined here | Document title and reporting framework for evaluating GitHub Actions concurrency control effectiveness. |

## Consumes
GitHub Actions run events, cancellation timestamps, and concurrency group metrics.

## Produces
A periodic metrics report on run coalescing, cancellation performance, and race conditions.

## When applied
Generated periodically to monitor CI resource waste and concurrency control performance.

## Sub-concepts
coalescing-effectiveness, race-condition-rate, average-cancellation-time

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Workflow Run Coalescing Metrics establishes an operational reporting document for assessing whether GitHub Actions concurrency cancellation prevents duplicate, wasteful CI runs across automated PR validation pipelines.
