---
package: rjm
name: workflow run coalescing
slug: workflow-run-coalescing
kind: technique
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

# workflow run coalescing

## Definition — verbatim
> "Coalescing occurs when rapid successive commits to the same PR trigger concurrent workflow runs, and the concurrency control mechanism cancels in-progress runs to start fresh with the latest commit." — .agents/metrics/workflow-coalescing.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 11 | defined here | Executive summary defining the runtime mechanism of cancelling obsolete runs in favor of latest PR commits. |

## Consumes
Rapidly sequenced PR commits and active GitHub Actions workflow executions.

## Produces
Cancellation of superseded CI jobs and prioritization of recent commit runs.

## When applied
Triggered automatically by GitHub Actions concurrency groups upon new commits to an open PR.

## Sub-concepts
concurrency-control

## Part of
workflow-run-coalescing-metrics

## Implementation status
defects: missing-path

## Design notes
Workflow run coalescing ensures that rapid successive commits do not spawn redundant parallel CI workflows, cancelling in-progress runs to conserve agent API tokens, CI compute minutes, and prevent stale merge state validations.
