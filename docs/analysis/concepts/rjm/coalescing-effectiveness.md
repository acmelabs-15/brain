---
package: rjm
name: Coalescing Effectiveness
slug: coalescing-effectiveness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Coalescing Effectiveness

## Definition — verbatim
> "Percentage of overlapping runs successfully cancelled vs. running in parallel (race condition)" — .agents/metrics/workflow-coalescing.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 17 | defined here | Executive summary metric table entry establishing a 90% target for cancelling superseded workflow runs. |
| .github/AGENTS.md | 77 | defined here | Governance rule requiring workflow documentation so workflows are included in coalescing effectiveness tracking. |
| .github/scripts/measure_workflow_coalescing.py | 402 | defined here | Python implementation calculating effectiveness as percentage of successful cancellations over total overlapping runs. |

## Consumes
Run timing logs, cancellation status counts, and race condition tallies.

## Produces
Percentage ratio of successfully cancelled runs to total overlapping execution attempts.

## When applied
Evaluated during CI performance telemetry reporting and workflow health audits.

## Sub-concepts
none

## Part of
workflow-run-coalescing-metrics

## Implementation status
defects: missing-path, doc-drift, orphan

## Design notes
Coalescing Effectiveness measures the efficiency with which GitHub Actions cancels obsolete workflows, verifying that concurrency groups prevent wasteful duplicate executions when developers push commits in rapid succession.
