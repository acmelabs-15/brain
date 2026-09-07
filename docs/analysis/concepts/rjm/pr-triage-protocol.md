---
package: rjm
name: PR Triage Protocol
slug: pr-triage-protocol
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR Triage Protocol

## Definition — verbatim
> "2. **Triage PRs**: Classify each PR into a tier (see PR Triage Protocol below)" — docs/autonomous-pr-monitor.md:33
> "## PR Triage Protocol" — docs/autonomous-pr-monitor.md:67
> "Before running `/pr-review`, classify each open PR into a tier. This determines batch order and handling." — docs/autonomous-pr-monitor.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 33 | defined here | Prescribes classifying open pull requests into tiers T1 through T5 to structure batch review order and remediation handling. |

## Consumes
Merge readiness data collected via `test_pr_merge_ready.py`, required check statuses, and review thread counts.

## Produces
Tier assignments (T1 land-ready, T2 CI-only, T3 threads-only, T4 both, T5 bot failures) guiding review batching and execution order.

## When applied
Applied before executing `/pr-review` to prioritize and partition open pull requests into appropriate batches.

## Sub-concepts
per-pr-live-state-re-triage, thread-severity-classification-and-lifecycle

## Part of
pr-review-workflow

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The PR Triage Protocol provides a deterministic classification framework that partitions open pull requests into operational tiers based on CI status and review conversations, establishing optimal batching order for automated remediation.
