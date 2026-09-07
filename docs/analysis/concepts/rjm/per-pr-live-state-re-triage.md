---
package: rjm
name: Per-PR Live-State Re-Triage
slug: per-pr-live-state-re-triage
kind: gate
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

# Per-PR Live-State Re-Triage

## Definition — verbatim
> "### Per-PR Live-State Re-Triage (BLOCKING, issue #2455)" — docs/autonomous-pr-monitor.md:81
> "Before any per-tier action on each PR (arming auto-merge, pushing a CI fix, posting a thread reply), call the live-state gate and branch on the JSON envelope `Data.action` field:" — docs/autonomous-pr-monitor.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 81 | defined here | Mandatory gate requiring verification of live PR status and non-redundancy immediately before executing any per-tier action. |

## Consumes
Target PR number and current remote base/head refs via `check_pr_live_state.py`.

## Produces
Binding action verdict (`ACT` or `SKIP`) with associated rationale.

## When applied
Applied immediately before taking action (pushing CI fixes, arming auto-merge, posting thread replies) on each PR in the triage queue.

## Sub-concepts
superseded-by-base

## Part of
pr-triage-protocol

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Per-PR Live-State Re-Triage guards against acting on stale snapshot data in fast-moving repositories by verifying immediately prior to mutation that a PR remains open and has not already landed or been closed.
