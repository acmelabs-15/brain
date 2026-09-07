---
package: rjm
name: Average Cancellation Time
slug: average-cancellation-time
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

# Average Cancellation Time

## Definition — verbatim
> "Time from run creation to cancellation for successfully coalesced runs." — .agents/metrics/workflow-coalescing.md:97

## Also called — verbatim
"Cancellation Performance" — .agents/metrics/workflow-coalescing.md:27

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 19 | defined here | Executive summary metric establishing a <5 second target latency for cancelling obsolete workflow runs. |

## Consumes
Timestamps of new commit workflow initiation and preceding run cancellation.

## Produces
Mean duration in seconds required for GitHub Actions concurrency controls to terminate obsolete runs.

## When applied
Tracked during CI performance analysis to evaluate queue latency and cancellation responsiveness.

## Sub-concepts
none

## Part of
workflow-run-coalescing-metrics

## Implementation status
defects: missing-path

## Design notes
Average Cancellation Time measures the latency between triggering a new workflow and successfully aborting the prior superseded run, ensuring compute resources are freed promptly.
