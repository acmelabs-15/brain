---
package: rjm
name: concurrency control
slug: concurrency-control
kind: pattern
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

# concurrency control

## Definition — verbatim
(used, not defined)
> "How well the concurrency control prevents redundant work by cancelling superseded runs." — .agents/metrics/workflow-coalescing.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 11 | used here | Cited in the executive summary as the mechanism cancelling in-progress CI runs when new commits arrive. |

## Consumes
GitHub Actions concurrency group configurations and cancel-in-progress flags.

## Produces
Immediate cancellation signals to active workflows sharing the same concurrency key.

## When applied
Applied at workflow dispatch when multiple events target the same branch or PR reference.

## Sub-concepts
none

## Part of
workflow-run-coalescing

## Implementation status
defects: missing-path

## Design notes
Concurrency control uses GitHub Actions concurrency groups with cancel-in-progress flags to prevent conflicting or redundant automated agent validations from executing simultaneously on the same pull request branch.
